# Notes — Maincode, AI Software Engineer (Back End)

Captured 18 Sep 2026. Full ad text in `jd.md` (pasted from LinkedIn; URL fetch is login-walled).

## 1. Fit check

### Hard blockers

**None.** No citizenship/PR requirement, no security clearance, no "3+ years" mandatory, no closing date
passed. LinkedIn seniority: Entry level. Melbourne on-site — Faraaz is Melbourne-based.

### Soft flags

| Signal | Assessment |
| --- | --- |
| **"Existing and unrestricted work rights" / no sponsorship** | Classic soft flag for a 485 holder (`au-standards.md` § 6). The header already leads with "Full Australian working rights … no sponsorship required." Expect the question at screening; do not hide the subclass. |
| **"One or two years of experience building production software"** | Soft, not hard. Stated as "you may have", and the ad leads with early-career curiosity over tenure. Real production depth is ~4 months Prodegee plus shipped systems (MCP server, PWA, Android, Next.js API). Do not inflate years. |
| **High volume (100+ apply clicks / 200+ applicants on LinkedIn)** | `au-standards.md` § 7: mass LinkedIn posts convert poorly without a referral. Worth applying; do not count on the application alone. |
| **Core problems are performance, scale, reliability of model serving** | Strongest evidence is Gemma (fail-open delegation, checkpoint loop) and Prodegee debugging/evaluation — not production LLM serving at Maincode's scale. Honest stretch on serving experience; the ad explicitly says prior LLM-serving experience is not required. |

### Proceed?

Yes. Soft flags only. Drafting.

## 2. Criteria → evidence map

| Criterion (ad's words) | Evidence | Where |
| --- | --- | --- |
| Back end services in a modern language (Python common) | Python primary; Node.js MCP server; Next.js/TypeScript API for Bro | Skills; Gemma; Bro |
| APIs and service interfaces | REST/JSON; MCP server; Claude API model router; Bro server-side retrieval | Skills; Prodegee router; Gemma; Bro |
| Requests, sessions, streaming responses | **GAP — not added.** No sourced streaming/session work. Closest: request routing (model router) and MCP request delegation. | — |
| Rate limiting, retries, graceful failure | Gemma: fail open to frontier model when Ollama unavailable so delegation never blocks. **GAP** on rate limiting / retries as named mechanisms. | Gemma |
| Authentication and access controls | **GAP — not added.** | — |
| Logging, telemetry, and evaluation signals | Prodegee: IoU harness, ±20% sensitivity harness, ground-truth set, negative result published | Prodegee bullets |
| Latency, throughput, reliability of model serving | Fire Detection: Haar cascade chosen over heavier detectors for latency; Gemma fail-open reliability | Fire Detection; Gemma |
| Integrating new model checkpoints into production | Gemma: QLoRA fine-tune → GGUF export back into Ollama | Gemma |
| Work with training / infrastructure / product engineers | Prodegee Team DS4: cross-team handoff contracts, 7 peer reviews, semester-2 handoff memo | Prodegee |
| Runtime behaviour / system reliability | Prodegee: traced generator failures to ~35× over-scoped upstream cluster; Time Flow: fixed input-focus loss under 1s re-renders | Prodegee; Time Flow |
| Debugging real systems | Sensitivity harness → recalibration; IoU failure root-cause; MGM AM/PM bug and refresh re-arm | Prodegee; MGM (cut — less relevant) |
| System boundaries and failure modes | Gemma fail-open boundary between local and frontier model | Gemma |
| Stable under load | National-scale pipeline (7.2M polygons, 18,121 schools); **GAP** on load testing / concurrency under public traffic | Prodegee scale |
| Reading logs and system metrics | **GAP — not added** as ops tooling. Closest: evaluation harnesses and parameter sensitivity as behavioural measurement. | — |
| Early career, curiosity, learn how large-scale AI systems work | Master's AI; end-to-end stack projects; profile seeks this role wording | Profile |
| Not front end / prompt engineering / third-party AI wrappers | Resume de-emphasises Android UI, prompt engineering, PWA polish; leads with serving/reliability | Profile; project selection |

## 3. Changes vs base

| Section | Change | Why |
| --- | --- | --- |
| Profile | Rewritten for production back-end / model-serving systems; ends with "AI Software Engineer (Back End) role at Maincode, Melbourne" | Ad title mirroring; core requirement is services between model and world |
| Technical Skills | Dropped Geospatial, Android, IBM Z, Prolog lines as own blocks. Five lines: Languages → Back end & APIs → AI systems (serving/eval) → Tooling → AI-assisted engineering pruned. Python and APIs first. | Ad stack; avoid front-end/geospatial noise |
| Prodegee bullets | Kept 7, reordered: (1) school-geolocation scale, (2) IoU debugging, (3) sensitivity/reliability, (4) handoff/collaboration, (5) model router, (6) ground-truth/evaluation, (7) sigmoid/contracts. Dropped Mauritania XGBoost (layout — page-break). | Reliability, evaluation signals, APIs, collaboration |
| Tools line | Python, Git, Kestra, Docker (basic); pruned geospatial-as-primary stack | Match ad |
| Amart | Kept, one bullet | Local employment signal |
| Education | After Experience | Not a graduate-program ad; experience is the argument |
| Key Projects | Gemma first (fail-open + checkpoint loop), Bro (server-side API), Fire Detection (latency), Time Flow (runtime debugging), MGM (production bug fixes); dropped NeuroVisualZ, agent skills, IBM Z | Ad: serving, reliability, failure modes |
| Publication | Citation + one result clause + Canny arm | Software role; kept as credibility |
| Certifications | Kept; Taher Foundation volunteer retained | Standard |

**Nothing added.** Gaps (auth, rate limiting, streaming, ops metrics tooling) left as gaps.

## 4. Status

**Applied.** 2 pages A4, page 2 at 53.0%, no layout defects.

## Log

- **18 Sep 2026** — Applied. Status **Applied**. Application form essay draft saved under § 5.
- **18 Sep 2026** — Approved. Rendered `Faraaz_Mohammed_Resume_Maincode_AI-Software-Engineer-Back-End.pdf` / `.docx`. Status **Ready**.

## 5. Application form — long answer (draft)

Paste-ready. Sourced only from Prodegee + Gemma (base resume). Edit tone before submit.

### Earliest start
Resume says available immediately — pick **today** or the next Monday you can actually start on-site in Melbourne.

### Unrestricted work rights
485 Post-Study Work = full-time work, no employer sponsorship, but time-limited. If the form is Yes/No only, **Yes** is the usual reading against this JD (they already said no sponsorship). Be ready to name subclass 485 at screening; do not hide it.

### Essay (paste)

The hardest systems problem I worked on recently was during my AI/ML internship at Prodegee (RMIT industry capstone, Mar–Jun 2026). Our pipeline inferred building footprints for off-grid electrification planning. Downstream generators kept failing evaluation, and the natural assumption was that the fitting stage was wrong.

What made it difficult was that the failure looked local but was not. Three separate generators all failed the same way. I built an IoU evaluation harness for compound polygons so we could measure behaviour instead of arguing from intuition, then traced the shared failure to a ~35× over-scoped upstream cluster — a boundary problem one stage earlier, not a bug in the fitting code. That redirected the next assignment. Separately, a ±20% sensitivity harness across 191 villages showed cluster radius dominated the output (±36–44% swing); recalibrating 75 → 200 m fixed a 90%+ household under-count (0.069 → 0.415). The lesson was operational: measure the running system, distrust the first blame target, and treat upstream contracts as part of reliability.

I have also built smaller services that sit next to models — an MCP server that delegates work to a local Gemma model and fails open to a frontier model when Ollama is unavailable, and a Claude API router that classifies request complexity before choosing a model — so I care about graceful failure and clear service boundaries, not only training accuracy.

I want to do this work at Maincode because Matilda is a production model you train and serve yourselves. The problems you describe — inference APIs, load behaviour, failure propagation, keeping services reliable over long runtimes — are exactly the layer I want to learn deeply, on a real system rather than a wrapper around someone else's API. Melbourne on-site with a small team that owns the full stack is the environment I am looking for.
- **18 Sep 2026** — JD captured from pasted LinkedIn text + URL. Fit check: soft flags only (485 "unrestricted" wording; ~4 months vs "1–2 years"; high applicant volume; no production LLM serving at their scale). Criteria map written; `resume.md` drafted for review.
