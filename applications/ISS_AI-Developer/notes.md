# Notes — ISS Facility Services ANZ, AI Developer (AI Centre of Excellence)

Captured 6 Nov 2026. Full ad text in `jd.md` (pasted from LinkedIn).

## 1. Fit check

**Citizen/PR-only:** not stated. Proceeding (user rule, 6 Nov 2026).

Notes (not stops):
- Melbourne CBD is an option ("dependent on where you live"). Fits.
- "Proven experience … in a commercial environment": two internships (Prodegee, Vayaa current). Thin but real.
- Microsoft stack (Copilot Studio, Power Platform, Azure AI Foundry, Azure OpenAI, Semantic Kernel): **GAP — not added.** Ad accepts "or similar enterprise AI platforms"; nearest evidence is AWS (CloudFormation, Fargate, RDS) and the Anthropic API.
- Posted 3 weeks ago, 100+ apply clicks.

## 2. Criteria → evidence map

| Criterion (ad's words) | Evidence | Where |
| --- | --- | --- |
| Deploying AI / automation / intelligent software commercially | Vayaa service live on AWS; Prodegee pipeline; model router | Vayaa; Prodegee |
| Python and SQL | Python primary; PostgreSQL/SQLAlchemy; SQL | Skills; Vayaa |
| Integrating systems via APIs and structured data | FastAPI + Rust/Axum APIs; REST/JSON; MCP server; Kestra; GeoPackage/handoff contracts | Vayaa; Gemma; Prodegee |
| Azure / Copilot Studio / AI Foundry / Power Platform or similar | **GAP** on Microsoft; AWS + Anthropic API as "similar" | Skills |
| GenAI, LLMs, prompt engineering, RAG, agent development | Bro (retrieval, anti-hallucination); MCP agent delegation; router; fine-tuning | Projects; Prodegee |
| Business challenges → user-focused solutions | Requirements + decision logs (Vayaa, MGM) | Vayaa; MGM |
| Source control, testing, deployment, production support | Git; 50 parity tests; CloudFormation deploy; GitHub Actions CI; JUnit | Vayaa; MGM |
| Analytical, troubleshooting, stakeholder engagement | IoU root cause; sensitivity harness; AWS deploy fixes; handoff contracts | Prodegee; Vayaa |
| Evaluate and optimise accuracy and cost | Ground-truth set, IoU/sensitivity harnesses; cost-proportional router | Prodegee |
| Reusable components and patterns | Five agent skills | Projects |
| Tertiary qualification in AI / IT | Master of AI; B.Tech IT | Education |
| Desirable: Azure OpenAI, vector DBs, Semantic Kernel, orchestration | Orchestration: MCP, Kestra. Rest **GAP** | — |
| Desirable: governance / security / privacy | RDS TLS verify-full only; **GAP** otherwise | Vayaa |
| Desirable: DevOps, monitoring, cost optimisation | CloudFormation, CI, router cost; **GAP** on monitoring | Vayaa; Prodegee |

## 3. Changes vs base
- Profile rewritten for GenAI delivery (router, MCP agent, fine-tune, RAG) + production deploy; ends with ISS title, Melbourne CBD.
- Skills regrouped to the ad: Generative AI line first; Geospatial, Android lines dropped.
- Vayaa 3 bullets; Prodegee 7 (router first; Mauritania dropped). Amart 1.
- Projects: Gemma, Bro (as RAG), Agent skills headed; MGM inline. Time Flow, Fire Detection, IBM Z dropped.

## Log
- **2026-11-06** — JD captured; drafted; proofed (2 pages, no defects, page 2 55%); rendered `Faraaz_Mohammed_Resume_ISS_AI-Developer.pdf`. Status **Ready**.
- **2026-11-06** — Cover letter drafted (`cover_letter.md`) and rendered to PDF/DOCX (1 page). States the Microsoft-stack gap plainly.
