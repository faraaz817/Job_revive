# Working with Claude — Mohammed Faraaz Abdul Khadeer

**Team DS4 — Building Footprint Inference** · RMIT WIL Capstone 2026-S1 · Industry partner: Prodegee
Companion to [`README-faraaz-contributions.md`](README-faraaz-contributions.md), which covers *what* I built. This covers *how*.

---

## What this document claims, and what it doesn't

This is not a claim that I used an AI assistant. Everyone in this repository did — **1,576 of 2,224 commits (70.9%)** across 22 contributors carry a `Co-Authored-By: Claude` trailer. Volume is not a differentiator, and my own rate (41 of 68 commits, 60.3%) is below the cohort average. Quoting it as an achievement would be dishonest.

What is worth claiming is the **operating discipline**: how you work with a model on a problem where being confidently wrong is expensive — geospatial inference feeding an investment decision, where a plausible-looking number that is 35× too large gets shipped unless someone checks it.

Everything below is verifiable from git. Commands are at the bottom.

---

## The environment I worked in — and who built it

I want to be precise about this, because the line matters.

**Built by Prodegee (Marc Torra, `Urus <marc@prodegee.com>`) — I consumed it, I did not author it.** I have zero commits touching `.claude/`.

| Component | What it does |
|---|---|
| `CLAUDE.md` | Repo-level agent instructions — structure, conventions, forbidden operations |
| `.claude/rules/` (7 files) | Path-scoped rules that load only when the agent touches matching files |
| `.claude/skills/` (3) | `assignment-implementation`, `broad-research`, `flow-development` — procedural workflows the model must follow for a class of task |
| `.claude/agents/` (4) | `code-reviewer`, `security-reviewer`, `the-domain-tzar`, `the-template-tzar` — subagents holding APPROVE/REJECT authority over student artefacts |
| `.claude/hooks/` (4) | Deterministic enforcement — see below |
| `.mcp.json` + `scripts/mcp-gateway-proxy.py` | MCP gateway to GitHub, Kestra, Gitea, Zotero and step-runner scripts; plus Ref (docs search) and Playwright (browser) |
| `.claude/persona-memory/`, `.claude/gotcha-addenda/` | Append-only knowledge files **shared across all 6 teams via git** — one team's discovery reaches another team's agent session |

**Built by me:**

- `scripts/model_router.py` — cost-proportional model routing (detailed below).
- The working method in the rest of this document.
- One entry in the shared cross-team knowledge base: the `overturemaps` library hang, credited in `.claude/gotcha-addenda/GEO.GO-addendum.md` as `[DS4] (Faraaz blocker + Chaitanya workaround)`, 2026-04-04.

Learning to be productive inside a governed agent environment someone else designed is closer to real engineering work than building a greenfield one. That is the skill this document evidences.

---

## The guardrails, and why they change how you work

Four hooks run outside the model's control. They are the reason I treat agent output as *proposed* rather than *done*:

| Hook | Trigger | Effect |
|---|---|---|
| `security-check.sh` (88 lines) | `PreToolUse`, all tools | Blocks the call before it runs |
| `protect-student-sections.py` (96 lines) | `PreToolUse`, `Edit` | Prevents the agent overwriting human-authored sections |
| `check-commit-format.sh` | `PostToolUse`, `Bash` | Enforces `{team-code}: {imperative}` |
| `check-pattern-persona.py` (249 lines) | `Stop` | Rejects any deliverable response not opening with `[PX-Name/Expression] \| [CODE] Persona` |

Plus an 11 KB `.githooks/pre-commit`, and a `settings.json` deny-list that hard-blocks force pushes, hard resets, recursive force deletes, and writes to `.claude/`, `.github/`, `CLAUDE.md`, and three read-only `docs/` trees.

The practical consequence: **the agent cannot quietly widen its own blast radius.** I stopped reviewing for "did it touch something it shouldn't" and spent that attention on "is the number right" — which is where the actual risk was.

These guardrails are blunt by design. Drafting *this* file was blocked by `security-check.sh` because the prose quoted two of the forbidden git commands verbatim, and the hook pattern-matches command text without parsing context. A false positive on a documentation write is the correct trade: the hook is cheap, deterministic, and cannot be talked out of its decision by the model it governs.

One rule shaped my work more than any other. `CLAUDE.md` forbids **fabricating visual observations**: when a step needs satellite or Street View inspection, the model must leave the field blank and ask. My DS4-02 ground-truth set — 40 school locations — exists because of that rule. Playwright drove Google Maps to the coordinates (session logs: `.playwright-mcp/`, 2026-04-05); **I** described what was on screen. The model could read building counts and areas directly from the data and would have written a fluent description from them. That description would have been fiction, and the entire accuracy baseline sits on top of those 40 cases.

---

## How I actually worked with it

### 1. The model proposes, the data decides

The recurring pattern across DS4-02 → DS4-08: use the agent to get to a testable artefact fast, then spend the real effort on adversarial measurement. Three cases where that caught a wrong answer that would otherwise have shipped:

**DS4-03 — an inflated baseline I had published myself.** DS4-02 reported "6–13% correction accuracy." Re-derived against the confirmed off-school test set, the real figure was **37%**. The original was a measurement artefact — the denominator included schools that were never off-school. Fast generation produced a number; only re-deriving it against a correctly scoped ground truth caught it.

**DS4-04 — a negative result, published.** Tested the proximity penalty at 10 m / 25 m / 50 m. All three made accuracy *worse* by suppressing true off-school detections. Recommended `PROXIMITY_PENALTY_M=0` and documented why the parameter is unfixable without compound-level polygon data. Killing a parameter is a less satisfying deliverable than tuning one, and it saved the team weeks.

**DS4-08 — I flagged my own flattering metric.** The XGBoost tier regressor reported 0.816 mean confidence against the heuristic's 0.426. Read as a headline, that is a large win. It is not: the metric is `1 − MAD(XGB, heuristic-v2)`, so it measures **model-to-heuristic agreement, not ground-truth accuracy** — and the model was trained on 2,000 villages sampled *from that heuristic*, so close agreement is guaranteed by construction. I committed a dedicated correction (`ds4: DS4-08 — clarify XGBoost confidence metric is model-to-heuristic agreement, not accuracy`, 2026-05-18) rather than let the number stand.

That last one is the habit I would most want assessed. An LLM will produce a confident, well-written paragraph around any number you hand it. The number being self-referential is not something it flags for you.

### 2. Rank parameters before tuning them

Rather than iterating on parameters conversationally — where the model will happily suggest a next value forever — I built a two-layer sensitivity harness (`run-sensitivity.py`, ±20% perturbation) and ranked them first:

| Parameter | Perturbation | Mean Δ count | Villages > 10% change |
|---|---|---|---|
| `min_footprint_area_m2` | +20% (15 → 18 m²) | −7.1% | 40 / 191 |
| `scope_cluster_radius_m` | +20% (75 → 90 m) | **+44.0%** | **191 / 191** |
| `scope_cluster_radius_m` | −20% (75 → 60 m) | **−36.0%** | **191 / 191** |

One parameter dominated by an order of magnitude — count scales with r². That ranking identified the single lever worth tuning, and the **75 m → 200 m recalibration** that followed moved the cohort buildings-per-household ratio from **0.069 (a 90%+ under-count) to 0.415**, inside the 0.4–1.0 target band. The analysis and the ranking are mine; the recalibration was applied in DS4-09, which was largely Chaitanya Rathod's work. One measured decision replaced an open-ended tuning loop.

### 3. Diagnose the cause, don't patch the symptom

DS4-05's IoU evaluation showed all three polygon methods failing the ≥ 0.5 gate by an order of magnitude (best: building-union at 0.0445). The obvious next prompt is "improve the polygon method." But the polygons were **correctly located** — centroids within ~100 m — and roughly **35× too large**. It was never a polygon-fitting problem; the upstream cluster definition was over-scoped. Asking the model to fix the stated problem would have produced a better-fitting wrong polygon. That diagnosis set the entire DS4-06 agenda.

### 4. Structured tools over free-form chat

- **`/broad-research`** for DS4-01 — ~30 papers across three research categories, run through the skill's type-specific method rather than ad-hoc prompting, then cross-checked. The skill enforces source-type-appropriate tooling and citation; free-form research prompting does not.
- **MCP gateway** for GitHub / Kestra / Zotero — tool calls against live systems rather than pasted context. Zotero full text reached the model directly; no manual PDF handling.
- **Playwright** for the ground-truth pass (with the human-observation rule above).
- **`/flow-development`** for `team-flows/ds4/ds4-02-buildings-prep.yml` — the skill front-loads known Kestra failure modes (the `secret()` function auto-prepending `SECRET_`; `{{`/`}}` colliding with Python f-strings under Pebble templating) that cost a debugging cycle each if you meet them live.

### 5. Reproducibility against a moving upstream

DS4 consumed DS2's R0 cohort GeoPackage, which changed under us. I pinned it by commit SHA (`r0-cohort-pin.md`, `pinned-inputs/README.md`) so an agent-driven re-run six weeks later produced the same numbers. This was not the repository default. Agent-generated analysis is cheap to re-run — which is worthless if the inputs have silently moved.

---

## `scripts/model_router.py` — what I built

Committed 2026-06-05. An automatic complexity router for the Claude API:

- A cheap **Haiku 4.5** call classifies the prompt `low` / `medium` / `high`, returning strict JSON.
- Routes to `claude-haiku-4-5` / `claude-sonnet-4-6` / `claude-opus-4-6`.
- The classifier system prompt is a **stable cached prefix** (`cache_control: ephemeral`) — the routing overhead is paid once, not per call.
- `high` additionally enables `thinking: {type: adaptive}` and `output_config: {effort: high}`.
- Supports streaming, system prompts, and manual override.

The point is cost proportionality: a frontier model on "what is the capital of Australia" is waste, and a small model on a multi-constraint architecture question is a false economy. The router makes that decision per call instead of per session.

My own session usage mirrors the same logic — **38 Sonnet 4.6** commits for routine implementation and writing, **3 Opus 4.7 (1M context)** commits reserved for the long-context consolidation work in DS4-08, where the whole semester's outputs had to be reasoned over at once.

---

## Where this fell short

A section on AI usage that lists only good practice is not evidence of judgement.

- **My final reflection (DS4-10) does not mention AI usage at all.** Zero occurrences of "Claude", "AI" or "LLM" in `final-reflection-faraaz.md`, in a semester where 60% of my commits were co-authored. That is a transparency gap in the formal record, and this document exists partly because I noticed it late.
- **I did not evaluate the agent's output systematically.** I caught the three errors above by domain reasoning, not by any repeatable check. I have no measure of what I missed. The `broad-research` skill ships an `evals.json` harness; I never ran an equivalent over my own workflow.
- **Volume of co-authored commits tells you nothing** about whether the agent helped. I have no counterfactual. Claims in this document are about method, not productivity, because productivity is the claim I cannot support with evidence.
- **The one shared-knowledge entry credited to me is a blocker, not a solution.** Chaitanya's DuckDB approach processed 12.2M CIV buildings in minutes; my `overturemaps` library approach hung for 10+ minutes and never completed. The gotcha file records both halves.

---

## Verify any of this

```bash
# Cohort-wide co-authorship
git log --all --pretty="%b" | grep -c "Co-Authored-By: Claude"
git log --oneline | wc -l

# Model split across the repo
git log --all --pretty="%b" | grep -i "Co-Authored-By: Claude" \
  | sed 's/^[[:space:]]*//' | sort | uniq -c | sort -rn

# My commits, and my co-authored share
git log --author="faraaz817" --oneline | wc -l
git log --author="faraaz817" --grep="Co-Authored-By: Claude" --oneline | wc -l

# Who authored the agent infrastructure (not me)
git log --pretty="%an" -- CLAUDE.md .claude/ | sort | uniq -c | sort -rn
git log --author="faraaz817" --oneline -- .claude/    # returns nothing

# The self-correction commit
git log --author="faraaz817" --grep="XGBoost confidence metric" --stat
```

---

## Note on secrets

`.claude/settings.local.json` holds a live Prodegee gateway token and a Zotero API key. It is gitignored (`.gitignore:33`) and has never been committed — verified. It should not appear in any screenshot or export of this repository.
