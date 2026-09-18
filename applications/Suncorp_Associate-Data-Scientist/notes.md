# Notes — Suncorp Group, Associate Data Scientist (Melbourne)

Captured 18 Sep 2026. Ad in `jd.md`. **The strongest match of the four applications assessed so far.**

## 1. Fit check

### Hard blockers

**None.** No citizenship or permanent-residency requirement stated, no security clearance, no closing date passed.
The degree requirement — *"a relevant advanced technical bachelor degree in statistics, actuarial studies,
engineering, mathematics or a related field"* — is met and exceeded (B.Tech in Information Technology plus a
Master of Artificial Intelligence).

### Soft flags

| Signal | Assessment |
| --- | --- |
| **"At least two years of commercial experience in complex data science or multivariate data analysis"** | `au-standards.md` § 6 treats *3+ years* as a hard blocker but **2+ years as a soft flag**. Faraaz has a 4-month AI/ML engineering internship. This is the single real gap and it is the one a screener will see first. Everything else on the list is met or exceeded, which is unusual enough to be worth the application. |
| **$90,000 – $100,000 + Super** | Above the ~$65–90k graduate band `au-standards.md` § 6 gives for 2026. Read together with the two-year requirement, this is a **mid-level role, not a graduate one** — the salary is confirming the experience bar rather than contradicting it. |
| **Suncorp is a major bank/insurer** | § 7 notes PR or citizenship is the norm for banks' *graduate programs*. This is a permanent role, not a graduate program, and the ad states no such requirement — but the application form may ask. Worth answering plainly: full working rights on a 485, no sponsorship required. |
| "Over 100 people clicked apply", posted 2 weeks ago | Competitive, but responses are managed off LinkedIn via Suncorp's own system rather than Easy Apply, which § 7 rates better than a mass-posting channel. |

**Verdict: apply.** The gap is experience duration, not capability, and the ad's other requirements line up
unusually well — including Generative AI, which is listed as a requirement and is the single strongest area in
`Source/`.

## 2. Criteria → evidence map

### What You'll Bring

| Ad criterion | Evidence | Status |
| --- | --- | --- |
| "relevant advanced technical bachelor degree in statistics, actuarial studies, engineering, mathematics or a related field" | B.Tech (Information Technology), KMIT, 2024 — plus Master of Artificial Intelligence, RMIT, 2026 | **Exceeded** |
| "At least two years of commercial experience in complex data science or multivariate data analysis" | 4-month AI/ML engineering internship (Prodegee, Mar–Jun 2026). The *work* is complex multivariate analysis at national scale; the *duration* is not two years. | **GAP — the main one** |
| "Experience delivering complex data science models and systems" | 7.2M-polygon geospatial pipeline into a queryable store; three-stage geolocation algorithm across 18,121 records in 3 countries; XGBoost multi-output regressor over 5 simultaneous targets across 200 villages; IoU evaluation harness with 95% CIs; ±20% sensitivity harness | **Strong yes** |
| "Jenkins, DBeaver, Posit/VS Code, Bitbucket/Git, Databricks, UiPath Maestro is strongly preferred" | **Git** (68 commits, peer reviews, commit-SHA pinning) and **VS Code** (z/OS via Zowe CLI/Explorer) are real. **Kestra** is pipeline orchestration — adjacent to Jenkins in role, not the same tool. **Databricks, Jenkins, DBeaver, UiPath: gaps.** | **Partial** |
| "Understanding of Generative AI technologies, including **prompt engineering, retrieval augmented generation and agents**" | All three, with shipped artefacts: prompt engineering and cost-proportional model routing via the Anthropic API; **RAG** — Bro answers from a profile corpus via server-side retrieval with anti-hallucination constraints; **agents** — an MCP server delegating to a local model with graceful fallback, plus five authored Claude Code / Cursor agent skills | **Strongest match on the ad** |
| "Practical knowledge of machine learning, predictive analytics, natural language processing or **tree based approaches**" | XGBoost (`MultiOutputRegressor`) and Decision Tree as the best classifier in the published study — literally tree-based; scikit-learn, predictive analytics, Neural Networks & Deep Learning coursework | **Yes** |
| "commitment to developing your technical skills as data science methods and technologies evolve" | Three shipped self-directed projects in four months of 2026 (Gemma delegation system, Time Flow, MGM Prayer Alerts) plus five published agent skills | **Yes** |

### What You'll Do

| Responsibility | Evidence |
| --- | --- |
| "Engage with business customers to understand their needs" | MGM Prayer Alerts — gathered functional requirements with a non-technical committee before building. Amart — customer orders and fulfilment discrepancies across 5 stores. |
| "Translate business requirements into iterative solution designs that support timely delivery" | Wrote scope, decision log and acceptance criteria before coding, then reviewed the delivered app against them. Prodegee ran v1 → v7 across one semester, each version driven by a measured failure of the last. |
| "**Evaluate data sources and analytical techniques**" | Owned 3 of 8 research categories in the team's method inventory; source notes on ~30 papers and technical references. |
| "Develop complex data, models, algorithms and technical advice within an agile framework" | Weekly assignment cadence with named owners; led 3 of 10; authored 3 of 4 formal deliverables. |
| "**Check analytical components for quality, reasonableness and appropriate risk management**" | The signature evidence: corrected an inflated baseline 6–13% → 37% against real ground truth; published a negative result closing off a dead parameter; flagged his own XGBoost 0.816 as measuring agreement with the training heuristic rather than accuracy; ±20% sensitivity analysis ranking parameters before tuning them. |
| "Collaborate with technical specialists, business teams and external partners" | 7 formal peer reviews; cross-team interface contracts v2 and v3; a semester-2 handoff memo; industry partner engagement throughout. |
| "support **responsible AI** and data science practices through quality controls" | Same as above, plus Bro's anti-hallucination constraints — a deliberate design choice to decline rather than fabricate. |

**Coverage: 6 of 7 "What You'll Bring" met or exceeded, 1 partial, 1 gap (duration of commercial experience).
All 6 "What You'll Do" responsibilities evidenced.** No other application assessed here comes close to this.

## 3. Changes vs base

| Section | Change | Why |
| --- | --- | --- |
| Profile | Rewritten: degree → complex models at national scale → **the quality controls that decided which results could be trusted** → Generative AI across the ad's three named technologies. Closes on the ad's own team name. | Leads with the two things the ad weights most: delivering complex models, and checking them for reasonableness. |
| Technical Skills | Reordered to mirror the ad: Machine learning & analytics → **Generative AI** (its own line, with prompt engineering / retrieval-grounded generation / agents named as the ad names them) → Data engineering → Tools. VS Code surfaced because the ad names it. | § 3 of `au-standards.md`: mirror the ad's stack in the ad's words. |
| Prodegee bullets | Reordered to follow "What You'll Do": evaluate sources → build complex models → tree-based regressor → quality correction → sensitivity/risk → agile cadence and collaboration. | Bullet order is the criteria map. |
| Key Projects | **Bro promoted to a headed project and reframed as retrieval-augmented** — it is the ad's named RAG requirement. Gemma reframed as agent tooling. Model routing, agent skills, MGM and Time Flow kept as inline entries. | RAG and agents are stated requirements, not nice-to-haves. |
| Publication | Kept with the operator names and the OpenCV/scikit-learn implementation note. | Peer-reviewed ML benchmarking is credibility for a data science desk. |

**Nothing added.** Every line traces to `base_resume.md` or a `Source/` README. Databricks, Jenkins, DBeaver and
UiPath are absent because there is no evidence for them.

## 4. Status

**Drafted and proofed — awaiting review.** 2 pages A4, page 2 at ~51%, all 19 bullets within limits, no stranded
headings, verified against the rendered pages.

## Log

- **18 Sep 2026** — Ad captured from LinkedIn with full text and URL. Fit check: no hard blockers; main gap is the
  two-year commercial experience requirement, which `au-standards.md` treats as a soft flag. Criteria map built
  against both "What You'll Bring" and "What You'll Do" — 6 of 7 met or exceeded plus all 6 responsibilities
  evidenced. Resume drafted and proofed clean. Awaiting approval.
