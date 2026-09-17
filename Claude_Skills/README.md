# Agent Skills for Claude Code and Cursor

Five reusable skills — Markdown instruction packages that an AI coding assistant loads on demand
— written for Claude Code and Cursor. Each is a `SKILL.md` with YAML frontmatter (name,
trigger description, invocation policy) and a procedure the assistant follows; one ships a Python
script. They encode working practices that were being re-typed into every session: how to
structure a requirements conversation, how to teach instead of answer, how to evaluate "is there
a better way", and a fix for a recurring document-upload problem.

August 2026. Source at [github.com/faraaz817/My_Skills](https://github.com/faraaz817/My_Skills).

## The skills

| Skill | Trigger | What it does |
| --- | --- | --- |
| **costar** | `/costar`, "CO-STAR", "help me write functional requirements" | Diagnoses a prompt or feature request against the six CO-STAR fields (Context, Objective, Style, Tone, Audience, Response — GovTech Singapore's framework, popularised by Sheila Teo), asks for whatever is missing, and produces a structured breakdown. Its `reference.md` uses the [MGM Prayer Alerts](../MGM_Prayer_Alerts/README.md) requirements document as the worked example — separating the audience (you vs. coding agent vs. mosque committee) and forcing a `FUNCTIONAL_REQUIREMENTS.md` response shape — and links the framework's primary sources. |
| **better-way-reviewer** | "better way", "alternative", "improve", "refactor" | Restates the actual goal, extracts constraints from the chat, decides whether a *targeted* repo scan is warranted (and avoids repo-wide search when not), optionally consults official docs, then returns a fixed-shape answer: `Verdict:` one line, then *Better approach / Why / Trade-offs / Effort*. One clarifying question maximum. |
| **socratic-tutor** | "teach me", "explain", "help me understand", `/feynman` | Feynman-technique tutoring loop: probe what the user knows → one small chunk → ask them to restate it → correct one misconception → next chunk. Hard rules: one question per reply, never the full answer first, direct answer only if the user asks for it or fails the same check twice. |
| **sync-skills** | "sync skills", "copy my skills into this repo" | Judges which of the user's personal skills (`~/.claude/skills`, `~/.cursor/skills`) are relevant to the current repo and copies the missing ones into `.cursor/skills/` — additive only, never overwrites or deletes, writes a visible reference if a copy is impossible. |
| **unlock-pdf-encryption** | "encrypted not allowed", signed-PDF upload failures | Government and university PDFs (transcripts, police checks, completion letters) often open without a password but carry an `/Encrypt` dictionary with an empty user password or a DocMDP signature lock, and upload portals reject them. The skill inspects with `pikepdf`, writes an unencrypted copy to `<parent>/unlocked/<name>.pdf` — never touching the original — and verifies `/Encrypt` is gone. Rasterising is a documented last resort requiring explicit consent. |

## Anatomy of a skill

```markdown
---
name: better-way-reviewer
description: Evaluate user requests and propose a better approach … Use when the user
  asks for "better way", "alternative", "improve", "refactor", …
disable-model-invocation: true
---

# Better Way Reviewer
## Instructions
1. Restate the request …
2. Extract constraints and assumptions …
…
## Output format
Verdict: <one sentence>
- Better approach:
- Why:
```

The `description` is what the assistant matches against to decide whether to load the skill, so
it lists the literal phrases a user is likely to say. `disable-model-invocation: true` makes four
of the five opt-in only — the assistant cannot decide to become a Socratic tutor uninvited. The
PDF skill is the exception, because the error strings it matches are unambiguous.

## The script

`unlock-pdf-encryption/scripts/unlock_pdf.py` — argparse CLI, one or more PDFs in, unlocked copies
out, exit non-zero if `pikepdf` still reports the copy as encrypted:

```python
with pikepdf.open(src, password="") as pdf:
    if "/AcroForm" in pdf.Root:
        del pdf.Root.AcroForm          # strips the signature form
    pdf.save(dst, encryption=False)

with pikepdf.open(dst) as check:
    if check.is_encrypted:
        sys.exit(f"Still encrypted after save: {dst}")
```

## Why this is on the list

It is small, but it shows three things concisely: familiarity with the agent-skill / MCP tooling
ecosystem as an *author* rather than only a user; the habit of turning a repeated manual process
into a reusable, documented procedure; and the prompt-engineering literacy (CO-STAR, Feynman
loop, fixed output shapes, one-question rule) that makes AI-assisted development reliable rather
than ad hoc.
