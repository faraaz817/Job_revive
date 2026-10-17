# Notes — Mainframe role (general, no ad)

Drafted 17 Oct 2026. No job ad supplied — see `jd.md`.

## 1. Fit check

**Cannot be run — no ad.** Nothing to check for citizenship/PR, clearance, years of experience or
closing date. Mainframe hiring in Australia sits mostly with banks, insurers, government and the
large IBM partners — the employer groups `au-standards.md` § 8 flags as most likely to require PR or
citizenship. Check each ad before investing in it.

## 2. Role-type criteria → evidence (not from an ad)

| Typical entry-level mainframe criterion | Evidence | Where |
| --- | --- | --- |
| z/OS familiarity | Live z/OS environment via Zowe + z/OSMF | Profile, Skills, Key Projects |
| JCL | Submitted and verified a JCL job (CC 0000) | Profile, Skills, Key Projects |
| IBM Z training / credentials | IBM Z Xplore – Concepts (May 2026); IBM Z & LinuxONE Community Contributor L1 (Aug 2026) — dates from the user's LinkedIn screenshot, 17 Oct 2026 | Profile, Certifications |
| Modern mainframe tooling (Zowe, VS Code, REST) | Zowe CLI/Explorer, z/OSMF REST APIs | Skills |
| Batch / large-volume data processing | 7.2M polygons, 18,121 schools, Kestra flows | Prodegee bullet 1, Skills |
| Root-cause analysis | Traced generator failures to an over-scoped upstream cluster | Prodegee bullet 2 |
| Change control, documentation | Inputs pinned by commit SHA; handoff memo; handoff contracts; requirements before code (MGM) | Prodegee bullets 3, 5; MGM |
| Testing / validation | Sensitivity harness, IoU harness, unit tests | Prodegee bullets 2, 4; MGM |
| Data reconciliation | Inventory reconciliation across 5 stores | Amart |
| COBOL | **GAP — not added** | — |
| CICS, DB2, IMS, VSAM | **GAP — not added** | — |
| REXX, TSO/ISPF, USS | **GAP — not added** (ask: the Xplore badge lists "+5 skills" not visible in the screenshot) | — |

## 3. Changes vs `base_resume.md`

- Profile rewritten around the IBM Z badges and the z/OS/JCL work; internship framed as large-volume, validated, reproducible data work.
- Skills: new **Mainframe** line first; JCL moved to the front of Languages; Geospatial line dropped; Data & automation line added from existing items; AI/ML compressed to one line.
- Prodegee: 6 of 8 bullets, reordered (scale → root cause → reproducibility/docs → testing → contracts → ground truth). Dropped the XGBoost/Mauritania and Claude model-router bullets.
- Key Projects: IBM Z toolchain promoted from an inline bullet to the first headed project; MGM and Gemma kept; Time Flow, Bro and agent skills dropped; Fire Detection and NeuroVisualZ inline.
- Publication: ISSN and code link dropped.
- Certifications: IBM Z badges split into two lines with issue dates.
- Referees: **named** (Adam Ring, IBM; Ashlee Jackson) instead of "Available on request", at the user's request.

### AI additions (user request, 17 Oct 2026: "also add other AI relevant things")

Kept below the mainframe evidence so the six-second scan still lands on z/OS/JCL first.
- Profile: one clause on LLM tooling (MCP servers, QLoRA fine-tuning, Claude API model router).
- Skills: full AI / ML line from the base restored; AI-assisted engineering line restored.
- Prodegee: restored the XGBoost/Mauritania and Claude model-router bullets (now all 8); XGBoost and Claude Code back on the Tools line.
- Key Projects: Bro chatbot and agent-skills lines restored.
- Page 2 now ~70% full.

## 4. Open items

- Adam Ring: phone / email not supplied.
- ~~Ashlee Jackson: title and organisation not supplied~~ — z/OS System Programmer, ISI (user, 17 Oct 2026).
- **Public repo:** this repository is public. Committing the referee block publishes third-party
  contact details. Decide before approval what the committed version carries.

## Log

- **2026-10-17** — Drafted against the role type (no ad). 2 pages, proof clean. Status **Draft**.
- **2026-10-17** — AI content restored from base at user's request. 2 pages, proof clean.
