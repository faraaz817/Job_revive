# Notes — Coles 360 (Coles Group), Data Scientist / Data Analyst

Captured 17 Nov 2026. **Provisional**: no position description yet. Criteria are reconstructed
from earlier Coles 360 ads and the user's referral guide (see `jd.md`). Re-run this map when
Michael sends the PDs.

## 1. Fit check

### Hard blockers

None confirmed, but two are **unknown** until the PDs exist:

| Signal | Assessment |
| --- | --- |
| **Work rights** | Earlier non-graduate Coles 360 ads found state no citizenship/PR rule. Coles asks about work rights at application, and most Coles *graduate* streams require citizenship/PR. **Ask Michael to confirm a 485 is accepted** before investing more. |
| **Years of experience** | One Coles Hawthorn East DA ad (possibly not Coles 360) asked for "3+ years ... planning to post campaign analysis". If the new DA PD says 3+ years as mandatory, that is a hard blocker per `au-standards.md` § 6. |

### Soft flags

| Signal | Assessment |
| --- | --- |
| DS ad wanted "an experienced Data Scientist ... track record ... in a commercial environment" | ~7 months of internships (Prodegee Mar–Jun 2026, Vayaa Sep 2026–). Seniority gap; the referral is what offsets it. |
| Glassdoor ~$120k avg for Coles DS | Mid-level band, not graduate. |
| Core domain is measurement: incrementality, A/B holdouts, attribution, campaign pre/post, MMM | **No evidence.** Closest analogue is Prodegee's evaluation work (baseline correction, ground truth, sensitivity, non-diagnostic metric). |
| Stack: Snowflake, dbt, Power BI / Tableau | **No evidence.** |
| Location | Hawthorn East vs Chadstone vs Cremorne unclear — all Melbourne, so fine. |

### Positives

- Referral from a team member who has met Faraaz and reached out first.
- Python + predictive modelling at scale is solid.
- Unusually strong *measurement honesty* record — matches a team whose product is proving ad causality.
- Data-platform side of the DS ad (build a Snowflake tenancy, migrate Unpacked) has an engineering
  flavour that Vayaa (PostgreSQL, Docker, AWS, CloudFormation) and Kestra pipelines partly speak to.

## 2. Criteria → evidence map

| Criterion (from earlier ads / guide) | Evidence | Where |
| --- | --- | --- |
| Python for analysis, transformation, modelling | **YES.** Prodegee pipeline, pandas/GeoPandas, XGBoost. | Skills, Prodegee |
| SQL with large, complex datasets | **PARTIAL.** SQL listed in base; PostgreSQL via SQLAlchemy at Vayaa. No analytical SQL work evidenced. | Skills, Vayaa |
| Snowflake / cloud data platform | **PARTIAL → GAP.** AWS RDS PostgreSQL only. Snowflake **GAP — not added.** | Skills (AWS) |
| dbt / analytical data models | **GAP — not added.** | — |
| Statistics, ML | **YES (ML) / PARTIAL (stats).** XGBoost, scikit-learn, evaluation design, sensitivity analysis; Master's ML coursework. No formal inference/testing. | Skills, Prodegee, Education |
| Experimentation, attribution, incrementality, campaign pre/post | **GAP — not added.** Analogue: baseline correction, ground truth, negative result. | Prodegee bullets 1–3 |
| Propensity / segmentation models | **PARTIAL.** Composite scoring, weighted confidence, XGBoost tier regressor — scoring/modelling, not customer propensity. | Prodegee |
| Large, complex datasets | **YES.** 7.2M polygons, 18,121 schools, 3 countries. | Profile, Prodegee |
| Own complex data initiatives end-to-end | **YES.** Vayaa requirements → AWS live; Prodegee led 3 of 10 assignments, handoff memo. | Experience |
| Data warehouse / migration / platform build | **PARTIAL.** Rust → Python migration gated on 50 parity tests; CloudFormation; Kestra. | Vayaa, Skills |
| Power BI / Tableau dashboards | **GAP — not added.** | — |
| Translate insights for supplier partners / media planners | **PARTIAL.** Mentor brief → requirements; cross-team handoff contracts; Speakers Club. | Vayaa, Prodegee, Certifications |
| Retail / ecommerce background; loyalty & transaction data | **PARTIAL.** Amart: stock reconciliation and fulfilment across 5 stores — operational, not analytics. | Amart |

**Coverage:** about 4 of 13 evidenced, 6 partial, 3 gaps (Snowflake/dbt, experimentation/attribution, BI tools).
The gaps are the team's core work. The resume can't fix them; a project can.

## 3. Changes vs base

- Profile rewritten for Coles 360: Python pipelines + predictive models at scale, then measurement rigour, then end-to-end delivery and retail exposure. Last line names both roles.
- Technical Skills regrouped for a data role: Languages; Data & analytics (pandas, PostgreSQL, Parquet, Kestra); ML & statistics; Engineering (AWS/Docker); Generative AI last. Android, Rust/Kotlin, IBM Z, MCP detail, web stack dropped.
- Vayaa: 3 bullets kept, framed as requirements → migration with parity tests → live deployment; Rust dropped from the Tools line.
- Prodegee: all 8 bullets kept, re-ordered measurement-first (ground truth/baseline → non-diagnostic metric → sensitivity → scale → scoring → IoU root cause → leadership → router).
- Amart: kept, one bullet.
- Key Projects: Gemma (headed), Bro and Fire Detection inline. Time Flow, MGM Prayer Alerts, NeuroVisualZ, agent skills, IBM Z toolchain dropped (app/software, not data).
- Publication kept (40-combination benchmark = experimental comparison).
- Certifications kept; IBM badges condensed to one line.

## 4. Open items for the user

1. **Ask Michael: is a 485 accepted, which sub-team, what level.** Decides whether to go DS or DA, or both.
2. **Measurement gap.** Nothing in the base shows A/B testing, uplift, SQL analytics, Snowflake or dbt. A small project (e.g. Dunnhumby "The Complete Journey" in Snowflake + dbt, measuring one campaign's lift against a matched control) would add real evidence before the PDs land. Not added: it doesn't exist yet.
3. When the PDs arrive: replace `jd.md`, redo § 2 in their wording, and decide whether DS and DA need two separate resumes (DA likely wants SQL/BI/reporting language up front; DS wants modelling/measurement).

## 5. Log

- **2026-11-17** — Referral from Michael Luo (Coles 360). No PDs yet. Provisional resume drafted against reconstructed criteria; proofed clean (2 pages, page 2 53%). Status **Draft**.
- **2026-11-17** — Added the Full-Stack Data Professional program (The Data & AI Institute, commencing 24 Nov 2026; enrolled) to Education here and in `base_resume.md`. Course line only — no skills claimed from it until done. Change to "Nov 2026 – present" after the 24th.
- **2026-11-17** — Profile rewritten to point at Coles 360's work (retail media measurement on loyalty and transaction data), using existing evidence only. Still Draft.
- **2026-11-17** — Added a "Currently learning (Nov–Dec 2026)" skills line (advanced SQL, Snowflake, Power BI, campaign measurement), labelled as in progress rather than held skills. Move each into the main skills once done. Added README.md as a viewing copy of resume.md.
- **2026-11-17** — Portfolio link changed to faraaz817.github.io (chatbot) here and in base; Vercel removed. Skills split into Data / Data (learning now) / Agentic / SDE. Azure added to the learning-now line only. Measurement project added as first Key Project, marked in progress (scope and method only — no results until done). Key results bolded. Model-router bullet dropped; Key Projects moved above Education.
