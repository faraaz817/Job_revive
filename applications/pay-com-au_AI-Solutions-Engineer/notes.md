# Notes — pay.com.au, AI Solutions Engineer

Captured 18 Sep 2026. Full ad text in `jd.md` (pasted from LinkedIn; URL is login-walled).

## 1. Fit check

### Hard blockers

**None.** No citizenship/PR requirement, no security clearance (police check ≠ AGSVA), no "3+ years"
mandatory, no closing date passed. LinkedIn seniority: Entry level. Melbourne hybrid (Windsor HQ) —
Faraaz is Melbourne-based. Ad explicitly: "We know not everyone will meet every requirement."

### Soft flags

| Signal | Assessment |
| --- | --- |
| **National Police Record Check on joining** | Soft. Not a citizenship clearance. Normal for fintech. Proceed. |
| **n8n named** | **GAP — not added.** Closest sourced orchestrator is Kestra (Prodegee). Do not invent n8n. |
| **"Automation projects across a range of contexts"** | Partial. Evidence is MCP delegation, Claude skills packaging, Kestra-wrapped pipelines, model router — not years of internal ops automation across sales/marketing. Stretch on breadth, not on build-first AI tooling. |
| **Secrets / PII / fintech production discipline** | **GAP** on payments/PII handling. Closest: fail-open reliability, evaluation harnesses, unit tests (MGM). Do not claim fintech compliance experience. |
| **Instrument usage and iterate until it sticks** | Weak / **GAP** as product analytics. Closest: Gemma accept/reject feedback loop curating JSONL. |
| **100+ apply clicks / 200+ applicants** | High-volume LinkedIn. Worth applying; do not count on the application alone. |

### Proceed?

Yes. Soft flags only. Strong match on MCPs, Claude, Python/TypeScript, APIs, packaging reusable workflows, stakeholder requirements (MGM), and judgment about when not to use AI.

## 2. Criteria → evidence map

| Criterion (ad's words) | Evidence | Where |
| --- | --- | --- |
| Discovery with non-technical stakeholders; reframe vague asks | MGM: wrote functional requirements (scope, decision log, acceptance criteria) before coding with mosque stakeholders | MGM |
| Design first, then build; right tool for scale (code / AI / off-the-shelf) | Fire Detection: Haar cascade chosen over heavier detectors for latency; XGBoost "confidence" documented as heuristic agreement not accuracy; Gemma fail-open when local model unavailable | Fire Detection; Prodegee; Gemma |
| Automations and workflows; orchestrating (n8n, agent SDKs) | Kestra-wrapped Prodegee pipeline; MCP agent delegation; Claude Code skills/hooks/subagents. **GAP: n8n** | Skills; Prodegee Tools; Gemma; Agent skills |
| Production discipline: human-in-the-loop, observable/recoverable failures | Gemma: accept/reject feedback loop; fail open so delegation never blocks; MGM: unit-tested time parsing, fixed re-arm bug | Gemma; MGM |
| Secrets and PII handled properly | **GAP — not added** | — |
| Package shareable workflows; AI enablement; connectors and MCPs | Five reusable Claude Code / Cursor skills; MCP server for Gemma delegation | Agent skills; Gemma |
| Instrument usage and iterate until it sticks | Gemma capability profile updated from accept/reject feedback. **GAP** on usage telemetry dashboards | Gemma |
| Support product on AI initiatives | Bro (productised retrieval chatbot); model router | Bro; Prodegee |
| Python or TypeScript; APIs | Python primary; TypeScript/Next.js Bro; REST/JSON; Anthropic API | Skills; Bro |
| Claude, connectors, MCPs | Claude Code, Anthropic API, MCP servers, Cursor | Skills; Gemma; Agent skills |
| Test harnesses, telemetry, logging | IoU harness; ±20% sensitivity harness; MGM JUnit | Prodegee; MGM |
| Question existing workflows / push back | Corrected published baseline 6–13% → 37%; published negative result on proximity penalty | Prodegee |
| Independent, lean, own what you ship | Led 3/10 assignments; primary author 3/4 deliverables; shipped MGM/Time Flow/Gemma | Prodegee; Projects |
| Where AI helps vs conventional software | Same as design-first row | Profile / projects |

## 3. Changes vs base

| Section | Change | Why |
| --- | --- | --- |
| Profile | Rewritten for build-first AI solutions / automation / MCP enablement; ends with AI Solutions Engineer at pay.com.au, Melbourne | Ad title + core "ship automations that get used" |
| Technical Skills | Lead with Python/TypeScript, APIs, MCP/Claude, orchestration (Kestra). Drop Geospatial/Android/IBM Z walls | Ad stack; n8n not invented |
| Prodegee bullets | Keep 6: scale pipeline, IoU debug, sensitivity, ground-truth/pushback, handoff/own, model router. Drop Mauritania XGBoost and sigmoid (layout room for projects) | Stakeholder contracts, judgment, APIs, test harnesses |
| Amart | Keep one bullet | Local + non-technical operational context |
| Key Projects | Gemma first (MCP + HITL feedback), Agent skills headed (enablement/packaging), MGM (discovery), Bro (shipped AI product); Time Flow/Fire shortened or inline | Mirror MCP/enablement/discovery |
| Publication | Short citation | Not the argument |
| Certifications | Keep Speakers Club (stakeholder communication) | Discovery soft skill |

**Nothing added.** Gaps (n8n, PII/secrets, fintech, usage instrumentation) left as gaps.

## 4. Status

**Approved and rendered.** 2 pages A4, page 2 at 56.5%, no layout defects.

## Log

- **18 Sep 2026** — Approved. Rendered `Faraaz_Mohammed_Resume_pay-com-au_AI-Solutions-Engineer.pdf` / `.docx`. Status **Ready**.
- **18 Sep 2026** — JD captured from pasted LinkedIn text + URL. Fit check: soft flags only (police check; n8n GAP; automation-breadth stretch; PII/fintech GAP; high volume). Criteria map written; `resume.md` drafted for review.
