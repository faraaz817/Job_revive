# Gemma Delegation System

A local/cloud hybrid for AI coding assistants: Google's Gemma 4 E2B runs on the developer's own
machine via Ollama, and Claude (or Cursor) delegates lightweight tasks to it through an MCP server
instead of spending frontier-model tokens on them. Every delegated interaction is logged; user
feedback promotes good ones into a fine-tuning dataset and demotes task types Gemma handles badly.
A Colab notebook turns the dataset into a QLoRA fine-tune and exports it back to Ollama as GGUF,
closing the loop.

Solo project, May 2026. Source at
[github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system).

## Why

Frontier-model API usage is metered and rate-limited; a lot of what a coding assistant does all
day — summarise this, reformat that, add comments, check syntax — does not need a frontier model.
A 2B-parameter model on a laptop CPU handles those for free and privately. The problem is knowing
*which* tasks it handles well enough, and that changes as the model is fine-tuned. So the system
doesn't hard-code the split; it learns it from whether the user accepted or rejected each answer.

## Architecture

```
 Developer
    │
    ▼
 Claude Code / Cursor / VS Code (Continue)
    │  reads ~/.gemma/capability_profile.md before deciding to delegate
    │  calls MCP tool  ask_gemma(prompt, task_type)
    ▼
 mcp-server/server.js  (Node, @modelcontextprotocol/sdk, stdio transport)
    │  POST localhost:11434/api/chat  { model: "gemma4:e2b", stream: false }
    ▼
 Ollama ── Gemma 4 E2B
    │  response  →  labelled "[Gemma 4 E2B]" when shown to the user
    │  appended to ~/.gemma/training_data.jsonl  as  status: "pending_review"
    ▼
 user accepts  ──► update_gemma_capability(task_type, "good")  → entry → "confirmed"
 user rejects  ──► update_gemma_capability(task_type, "bad")   → entry dropped,
                                                                 task_type added to ESCALATE list
    │
    ▼  (periodically)
 gemma_finetune.ipynb on Colab T4
    Unsloth + QLoRA (4-bit, LoRA r=16)  on confirmed entries only
    → merge → save_pretrained_gguf(q4_k_m)  →  gemma4-e2b-finetuned.gguf  →  ollama create
```

## Components

### MCP server (`mcp-server/server.js`)

Two tools exposed over stdio to any MCP client:

| Tool | Input | Effect |
| --- | --- | --- |
| `ask_gemma` | `prompt`, `task_type`, `save_if_good?` | Forwards to Ollama's chat API; on success appends `{messages, task_type, timestamp, status: "pending_review"}` to `training_data.jsonl`; on any failure returns *"Gemma unavailable — handle this task directly"* so the caller degrades gracefully rather than erroring. |
| `update_gemma_capability` | `task_type`, `result: good\|bad`, `prompt?`, `response?` | Rewrites the JSONL: matching pending entries become `confirmed` (good) or are deleted (bad). Appends a dated row to the feedback log in `capability_profile.md` and, on `bad`, adds the task type to the **ESCALATE TO CLAUDE** section. |

The tool descriptions themselves carry the delegation policy ("Use for lightweight tasks:
summarization, reformatting … Always label the response") so the client model gets the rules from
the schema, not just from a config file.

### Capability profile (`templates/capability_profile.md`)

A Markdown file the assistant is instructed to read before every delegation decision. Three
lists — DELEGATE (confirmed good), ESCALATE TO CLAUDE (confirmed weak), NEVER DELEGATE (hard
rules: multi-step reasoning, architecture, hard debugging, >50K-token context) — plus a feedback
log table the server appends to. It starts with every task type unchecked ("not yet tested") and
fills in from real use.

### Client configuration

- **Claude Code:** `.claude/CLAUDE.md` snippet with the delegation rules, and a
  `settings.json.example` registering the MCP server plus a `PostToolUse` hook on `ask_gemma`.
- **Cursor:** `cursor/gemma-delegation.mdc` rules file with the same policy.
- **VS Code:** Continue extension pointed at Ollama for inline completions and chat directly
  against Gemma, independent of Claude.

Both assistants read the same `~/.gemma/` directory, so feedback given in one improves
delegation in the other.

### Fine-tuning notebook (`gemma_finetune.ipynb`)

Five cells, designed to be "Run all" on a free Colab T4:

1. `pip install unsloth transformers datasets trl peft bitsandbytes`
2. `FastLanguageModel.from_pretrained("google/gemma-4-e2b-it", load_in_4bit=True)` and
   `get_peft_model(r=16, target_modules=[q,k,v,o,gate,up,down]_proj)`
3. Load `training_data.jsonl`, keep only `status == "confirmed"`, apply the chat template
4. `SFTTrainer` — batch 2 × grad-accum 4, 3 epochs, lr 2e-4 linear, `adamw_8bit`,
   `max_seq_length=2048`, bf16 where supported; warns if fewer than 10 confirmed examples
5. `model.save_pretrained_gguf(..., quantization_method="q4_k_m")` — same quant as the
   Ollama base so the fine-tuned model is a drop-in replacement

The user downloads the `.gguf` and tells the assistant the path; loading it into Ollama
(`ollama create` with a Modelfile pointing at the GGUF) is left to the assistant rather than
scripted in the repo.

## Design decisions

- **Feedback is implicit by default.** Saying nothing / continuing counts as acceptance; only an
  explicit complaint marks a task type as weak. This keeps the loop zero-effort, at the cost of
  some false positives in the training set — which is why the profile also lets the user audit and
  edit the lists by hand.
- **Fail open, never fail closed.** If Ollama is down, the MCP tool returns a plain-text
  instruction to the assistant to do the task itself. Delegation is an optimisation, so its
  failure must never block the user.
- **Files, not a database.** JSONL and Markdown in `~/.gemma/` are readable by a human, by both
  assistants, and by the notebook, with no server to run.
- **Why Gemma 4 E2B.** Edge-targeted (runs CPU-only in ~8 GB), 128K context, Apache 2.0 so
  fine-tuning and redistribution are unrestricted.

## Setup

```bash
ollama pull gemma4:e2b
mkdir ~/.gemma && cp templates/capability_profile.md ~/.gemma/ && touch ~/.gemma/training_data.jsonl
cd mcp-server && npm install
```

```json
// ~/.claude/settings.json
"mcpServers": {
  "gemma-local": { "command": "node", "args": ["/abs/path/mcp-server/server.js"] }
}
```

Then paste `templates/claude_md_snippet.md` into `~/.claude/CLAUDE.md`.

## Limitations

- **Feedback matching is coarse.** `update_gemma_capability` marks *every* pending entry with
  the same `task_type` — not the specific prompt — so two back-to-back summarisations get the same
  verdict. Passing the prompt through and matching on it is the obvious next step.
- **Capability profile edits are string replacements** on known headings. Reformatting the file
  by hand can break the append logic.
- **No benchmark cell.** The profile has a "Benchmark Results — not yet run" section; an automated
  eval over a fixed prompt set per task type would make the DELEGATE list evidence-based from day
  one rather than waiting on organic feedback.
- **Not measured.** The repo does not report token savings or a before/after quality comparison.
- The `architecture.html` in the repo is a rendered diagram of the flow above.
