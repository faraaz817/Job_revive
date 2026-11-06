# Notes — Maincode, Graduate Software Engineer

Captured 6 Nov 2026. Full ad text in `jd.md` (pasted from LinkedIn).

## 1. Fit check

**Citizen/PR-only:** not stated. Proceeding (user rule, 6 Nov 2026).

Notes:
- **Third Maincode application.** AI Software Engineer (Back End) and Talent Engineer were both **Applied** on 18 Sep 2026, with no response logged. Same hiring team likely sees all three; keep the story consistent (inference/evaluation layer, as in the Back End essay).
- The ad's only ask is "Do your research and tell us how you can help" — the form answer / cover note carries more weight than usual here.
- Ad culture language ("tireless", "passionate", "heart") — not mirrored as self-adjectives on the resume (au-standards § 3); evidence of sustained building (two Android apps, Gemma, Bro, while interning) does that job.
- 100+ apply clicks; LinkedIn, responses off-site.
- Melbourne on-site, graduate level, internships count. Fits.

## 2. Criteria → evidence map

| Criterion (ad's words) | Evidence | Where |
| --- | --- | --- |
| Graduate software engineer | Master of AI (RMIT, 2026); B.Tech IT | Education (moved above Experience) |
| Any layer of Maincode | Back end (FastAPI, Rust/Axum, Postgres, AWS); ML/eval (Prodegee); model serving + fine-tuning (Gemma); front end/mobile (React, Android) | Skills; Vayaa; Prodegee; Projects |
| Inference and model training on own infrastructure | Gemma: local inference via Ollama, QLoRA fine-tune → GGUF back into Ollama; model router | Gemma; Prodegee |
| Matilda is a production system | Vayaa: service live on AWS, cutover gated on 50 parity tests; MGM in community use with CI | Vayaa; MGM |
| Previous industry experience incl. internships | Vayaa (current), Prodegee | Experience |
| Spirit / devotion | Sustained side projects shipped while studying and interning | Projects |

## 3. Changes vs base
- Profile rewritten: two internships, work around models, names the inference/evaluation layer behind Matilda.
- Education moved above Experience (graduate role).
- Skills regrouped by layer (back end & infrastructure, AI/ML, front end & mobile); Geospatial dropped.
- Vayaa 3 bullets; Prodegee 7 of 8 (Mauritania XGBoost dropped). Amart 1.
- Projects: Gemma, MGM headed; Bro, Time Flow inline. Fire Detection, NeuroVisualZ, agent skills, IBM Z dropped. Publication shortened.

## Log
- **2026-11-06** — JD captured; drafted; proofed (2 pages, no defects, page 2 58%); rendered `Faraaz_Mohammed_Resume_Maincode_Graduate-Software-Engineer.pdf`. Status **Ready**.

## 4. Form answer — "Tell us how you can help" (paste-ready)

Research used (6 Nov 2026): maincode.com — Matilda trained on Maincode-owned GPUs in Australian data centres; inference and training run on own infrastructure (also stated in the ad). Unverified aggregator claims (beta date, open weights, budget figures) deliberately not used.

> Matilda is trained and served on your own GPUs, so the layer between the model and the people using it is yours to get right. That layer is where I can help first: the inference services, the evaluation that tells you whether a new checkpoint is actually better, and the tooling around both.
>
> That is the work I have done so far. At Prodegee (AI/ML internship) I built the evaluation harnesses that found what was really wrong: an IoU harness traced three failing generators to an over-scoped upstream cluster, and a sensitivity harness found the parameter behind a 90% under-count. I also built a Claude API router that sends each request to the cheapest model that can handle it. On my own time I built an MCP server that serves a locally fine-tuned Gemma model through Ollama, falls back to a frontier model when the local one is down, and turns user accept/reject feedback into the next QLoRA training set.
>
> At Vayaa I am currently taking a Python (FastAPI) and PostgreSQL service live on AWS, with the switch-over gated on 50 parity tests passing against both the old and new back ends.
>
> I would rather build Australian AI than integrate someone else's API. I am in Melbourne, can start immediately and have full working rights. I have also applied for the AI Software Engineer (Back End) role; this graduate role is the one that fits where I am now.
