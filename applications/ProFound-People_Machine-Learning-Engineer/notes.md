# Notes — ProFound People (client undisclosed), Machine Learning Engineer (Applied LLMs)

Captured 6 Nov 2026. Full ad text in `jd.md` (pasted from LinkedIn).

## 1. Fit check

### Seniority blockers (user proceeding regardless)

| Signal | Assessment |
| --- | --- |
| **"3+ years of applied ML in production"** (What you bring) | Mandatory, and `au-standards.md` § 6 treats 3+ mandatory as a hard blocker. Sourced production ML: Prodegee, Mar–Jun 2026 (~4 months, capstone internship). Vayaa (Sep 2026–) is full-stack, not ML. |
| **"Senior - Staff Level"** in the ad title | Seniority is stated outright, not implied. |
| **Poster's screening questions: 1+ yr Agentic AI Development, 2+ yrs Applied ML** | LinkedIn asks these as yes/no on the apply form and filters on them. Honest answers are No / No. |

### Soft flags

- Sydney, hybrid, inner-Sydney office; Faraaz is in Melbourne. Relocation not mentioned in the ad.
- Recruiter post (ProFound People), 79 applicants in 2 days.

### Strong match on content (if proceeding)

Eval design (IoU harness, sensitivity harness, ground-truth set, negative results), cost-proportional model router, QLoRA fine-tune loop built from accept/reject usage data (Gemma), retrieval-grounded chatbot (Bro), public code. Gaps: retrieval over large semi-structured data at scale, time-series/sensor data, inference cost at scale.

### Proceed?

Yes — user chose to apply anyway (6 Nov 2026). Years of experience are not inflated anywhere; profile says "open to relocating to Sydney".

## Log

- **2026-11-06** — JD captured; fit check found hard blockers (3+ yrs mandatory, Senior–Staff, poster's 2+ yrs applied ML / 1+ yr agentic). Asked whether to proceed.
- **2026-11-06** — User: proceed; only flag citizen/PR-only roles from now on. Drafted, proofed (2 pages, no defects, page 2 ~55%), rendered `Faraaz_Mohammed_Resume_ProFound-People_Machine-Learning-Engineer.pdf`. Status **Ready**.

## Changes vs base
- Profile rewritten around evaluation, LLM systems (router, QLoRA feedback loop, retrieval) and the ad's title; relocation to Sydney stated.
- Skills cut to 4 lines; LLM systems line leads with evaluation/retrieval/fine-tuning (the ad's order). Geospatial, Android, AI-assisted-engineering lines dropped.
- Vayaa cut to 2 bullets (production Python/FastAPI, AWS). Prodegee: 8 bullets kept, reordered eval-first; handoff-memo clause dropped.
- Key Projects: Gemma (tokens/fine-tune-from-usage framing), Bro, Agent skills, Fire Detection. Time Flow, MGM, NeuroVisualZ, IBM Z dropped. Education moved below projects.
- Certifications trimmed to 2 lines.
