# Notes — Suncorp Group, Associate Data Scientist

Captured 18 Sep 2026. Ad text in `jd.md`.
Source: https://www.linkedin.com/jobs/view/4458049850/

## 1. Fit check

### Hard blockers

None. No citizenship/PR requirement, no security clearance, closing date not stated as past.

### Soft flags

| Signal | Assessment |
| --- | --- |
| **"At least two years of commercial experience"** in complex data science or multivariate data analysis | Soft flag per `au-standards.md` § 6 (hard at 3+; soft at 2+). Evidence is a ~4-month AI/ML internship (Mar–Jun 2026) plus university projects — not two years of commercial DS. Likely filtered by ATS or screener before a human reads the GenAI/ML match. Apply only if willing to stretch; do not inflate dates. |
| **Salary $90–100k + Super** | Associate/mid band for insurance DS in 2026; consistent with 2+ years, not a fresh graduate. Soft seniority signal. |
| **Preferred stack:** Jenkins, DBeaver, Posit/VS Code, Bitbucket/Git, Databricks, UiPath Maestro | Strongly preferred, not mandatory. Only Git and VS Code are evidenced. Rest are **GAP — not added**. |
| LinkedIn "Entry level" + 100+ applicants | High volume; referral would matter more than resume polish alone. |
| Hybrid Melbourne (also Brisbane/Sydney) | Location fine — Melbourne preferred. |

### Positives

- No PR/citizenship gate stated (unusual and favourable for a large insurer).
- GenAI (prompt engineering, RAG, agents), tree-based ML and model-delivery language map tightly to Prodegee + Gemma/Bro.
- Melbourne hybrid permanent role with study support — good 485 fit if they overlook the years bar.

## 2. Criteria → evidence map

### Must-haves ("What You'll Bring")

| Ad criterion | Evidence | Where |
| --- | --- | --- |
| Advanced technical bachelor in stats / actuarial / engineering / maths / related | **YES.** B.Tech (IT) + Master of Artificial Intelligence (RMIT). Related field. | Education |
| At least two years commercial DS / multivariate analysis | **GAP — not added.** Internship ~4 months; Amart is retail, not DS. | — |
| Delivering complex data science models and systems | **YES.** National-scale geolocation pipeline (7.2M polygons, 18k schools, three countries); XGBoost multi-output regressor; IoU + sensitivity harnesses into production-style pipeline. | Experience |
| Jenkins, DBeaver, Posit/VS Code, Bitbucket/Git, Databricks, UiPath Maestro | **PARTIAL.** Git / GitHub and VS Code only. Jenkins, DBeaver, Posit, Bitbucket, Databricks, UiPath Maestro: **GAP — not added.** | Skills (Git, VS Code) |
| Generative AI: prompt engineering, retrieval augmented generation, agents | **YES.** Prompt engineering + retrieval-grounded generation in skills; Bro portfolio chatbot (server-side retrieval, anti-hallucination); Gemma MCP agent/delegation loop; Claude model router; agent skills. | Skills, Projects |
| ML, predictive analytics, NLP or tree-based approaches | **YES.** XGBoost (tree-based), scikit-learn, predictive tier regressor; publication (classifiers on image features). NLP not claimed beyond LLM/RAG work. | Experience, Publication, Skills |
| Commitment to developing technical skills | Soft — Speakers Club / continuous tooling (Claude Code skills) if needed; not forced into profile. | — |

### Duties / soft language ("What You'll Do")

| Ad language | Evidence |
| --- | --- |
| Engage with business customers / understand needs | **PARTIAL.** Cross-team handoff contracts and peer reviews at Prodegee; Amart customer fulfilment. No insurance/business-stakeholder DS work. |
| Translate requirements into iterative solution designs | Prodegee iterative recalibration (75 → 200 m); versioned pipeline across countries. |
| Evaluate data sources and analytical techniques | Sensitivity harness, ground-truth correction, negative result on proximity penalty. |
| Quality, reasonableness, risk management | Documented that XGBoost 0.816 measured heuristic agreement not accuracy; corrected inflated baseline; IoU harness. |
| Collaborate with technical specialists / agile | Team DS4, 7 peer reviews, primary author of deliverables, handoff memo. |

### Coverage summary

**5 of 7 must-haves evidenced (1 partial on preferred tools); clear gap on 2 years commercial experience.** Preferred enterprise toolchain largely absent. Soft skills partially covered via internship collaboration and quality controls.

## 3. Changes vs base

- Profile rewritten for Associate Data Scientist / Suncorp: GenAI (prompt engineering, RAG, agents) + delivered DS models; seeking that title in Melbourne.
- Technical Skills pruned to 5 lines: Languages; Machine learning (XGBoost/tree-based first); Generative AI (ad wording); Engineering (Git, VS Code); short Also: geospatial. Dropped Android, IBM Z, heavy web stack.
- Experience: 8 Prodegee bullets ordered for predictive models → complex systems → quality controls → collaboration → GenAI; Tools pruned toward Python/ML/Git/VS Code.
- Amart kept (one bullet).
- Education after Experience (commercial experience is the ad's second criterion).
- Key Projects: Gemma (agents) + Agent skills inline on page 1; Bro (retrieval) + Fire Detection headed on page 2.
- Publication kept (ML / classifiers). Certifications kept including Speakers Club and volunteer.

## 4. Log

- **2026-09-18** — Resume approved despite soft flag on 2-year commercial experience ("make anyways"). Rendered `Faraaz_Mohammed_Resume_Suncorp_Associate-Data-Scientist.pdf` / `.docx`. Status **Ready**.
- **2026-09-18** — JD captured from LinkedIn paste + URL. Soft flag on 2-year commercial experience; draft `resume.md` proofed clean (2 pages) for review (not yet approved).
