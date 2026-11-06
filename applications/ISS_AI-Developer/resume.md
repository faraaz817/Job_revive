# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)  •  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
_Full Australian working rights (Temporary Graduate visa, subclass 485) — no sponsorship required  •  Available immediately_

## Profile
Master of Artificial Intelligence graduate (RMIT, 2026) building generative-AI solutions in Python: an LLM model
router that keeps cost proportional to the task, an MCP-based agent delegation tool, a fine-tuned local model, and a
retrieval-grounded (RAG) chatbot. Currently taking a Python (FastAPI) and PostgreSQL service live on AWS, with
requirements, a decision log and parity tests behind every change. Seeking the AI Developer role in ISS's AI Centre
of Excellence, Melbourne CBD.

## Technical Skills
**Generative AI:** LLMs, prompt engineering, retrieval-augmented generation (RAG), AI agent development (MCP servers, tool delegation), model routing for cost, Anthropic API (prompt caching), LLM fine-tuning (Unsloth, QLoRA, GGUF), Ollama
**Languages & data:** Python (primary), SQL, PostgreSQL (SQLAlchemy), pandas, TypeScript, JavaScript, Rust
**APIs & integration:** REST/JSON APIs (FastAPI, Rust/Axum), Next.js, Prisma, Kestra workflow orchestration
**Cloud & delivery:** AWS (CloudFormation, ECS Fargate, RDS, CloudFront, SNS), Docker, Git / GitHub, GitHub Actions CI, automated testing (parity tests, JUnit), Vercel
**Evaluation & ML:** evaluation design (precision/recall, IoU, sensitivity analysis, ground-truth construction), scikit-learn, XGBoost
**AI-assisted engineering:** Claude Code (skills, hooks, subagents), Cursor

## Experience
### Full-Stack Developer Intern — Vayaa | Sep 2026 – present
> Melbourne, VIC  ·  hybrid  ·  company website: React + TypeScript, Python (FastAPI) + PostgreSQL, deployed on AWS
- Building the company's website from a mentor's brief; turned each plain-language request into numbered functional and
  non-functional requirements and kept a decision log (choice, alternatives, cost) for every design call.
- Built the contact-enquiry API in Rust (server-side validation, clean types), then led its port to Python (FastAPI) on
  the mentor's call, gating the cutover on 50 parity tests passing against both backends.
- Took it live on AWS with CloudFormation (CloudFront → ECS Fargate → RDS PostgreSQL) in five attempts, fixing Free-plan
  limits, a CloudFront account block and RDS TLS (verify-full); SNS emails each enquiry.
> **Tools:** Python, FastAPI, SQLAlchemy, PostgreSQL, Docker, AWS, Rust (Axum), React, TypeScript, Claude Code

### AI/ML Engineering Intern — Prodegee | Mar 2026 – Jun 2026
> Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning
- Built a Claude API model router that classifies task complexity with a cheap Haiku call and routes to Haiku / Sonnet /
  Opus, keeping cost proportional to difficulty.
- Designed and built the school-geolocation algorithm at the core of the team's pipeline (7.2M Overture building polygons,
  BFS spatial clustering, composite scoring); ran it on 18,121 schools in Côte d'Ivoire and ported it to Burundi and Chad.
- Built an IoU evaluation harness for compound polygons and traced all three generators' failures to a ~35× over-scoped
  upstream cluster rather than a fitting fault, which redirected the next assignment.
- Built a ±20% sensitivity harness that identified cluster radius as the dominant parameter (±36–44% swing across 191
  villages), driving a 75 → 200 m recalibration that fixed a 90%+ household under-count (0.069 → 0.415).
- Co-built a 40-school satellite-verified ground-truth set and used it to correct a published baseline (6–13% → 37%);
  published a negative result showing a proximity penalty hurt accuracy at every threshold.
- Replaced a binary distance cutoff with exponential-decay scoring and a weighted confidence score; added per-country
  sigmoid normalisation so one threshold works in all three countries.
- Led 3 of 10 team assignments and was primary author of 3 of 4 formal deliverables (68 commits, 7 peer reviews); pinned
  upstream inputs by commit SHA for reproducible re-runs and authored cross-team handoff contracts.
> **Tools:** Python, pandas, scikit-learn, XGBoost, GeoPandas, Kestra, Anthropic API, Git, Claude Code (MCP, hooks)

### Dispatch Team Member — Amart Furniture | Feb 2025 – Mar 2026
> Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study
- Tracked and reconciled stock in the inventory system, processed customer orders and resolved fulfilment discrepancies across 5 Melbourne stores; trained a new team member.

## Key Projects
### Gemma Delegation System — AI agent tooling · Node.js, MCP SDK, Ollama, Unsloth/QLoRA | May 2026
- Built an MCP server that lets Claude Code or Cursor delegate lightweight tasks to a locally hosted Gemma model instead
  of spending frontier-model tokens, failing open to the frontier model whenever Ollama is unavailable.
- Closed the loop: accept/reject feedback updates a capability profile and curates a JSONL dataset; a Colab notebook
  fine-tunes on confirmed examples (4-bit QLoRA, LoRA r=16) and exports GGUF back into Ollama.
↳ GitHub: [github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system)

### Bro — RAG portfolio chatbot · Next.js, TypeScript, Prisma/Postgres, Anthropic API | 2026
- Built a recruiter-facing site that answers questions from a profile corpus via server-side retrieval with
  anti-hallucination constraints; deployed on Vercel.
↳ Live: [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)

### Agent skills for Claude Code / Cursor · reusable components | 2026
- Authored five reusable agent skills others can pick up and run — CO-STAR requirements builder, Socratic tutor,
  better-way reviewer, skill sync, and a pikepdf CLI that unlocks signature-locked PDFs.
↳ GitHub: [github.com/faraaz817/My_Skills](https://github.com/faraaz817/My_Skills)

- **MGM Prayer Alerts — Android app in community use:** wrote functional requirements before coding, reviewed the code against them and fixed a critical AM/PM storage bug; added GitHub Actions to test, build and publish releases. (Kotlin, JUnit)  [github.com/faraaz817/MgmPrayerAlerts](https://github.com/faraaz817/MgmPrayerAlerts)

## Education
### Master of Artificial Intelligence — RMIT University | Jul 2024 – Jul 2026
> Melbourne, VIC  ·  AI Systems Design, Machine Learning, Computer Vision, Intelligent Decision Making (ASP/Clingo), IoT
### Bachelor of Technology (Information Technology) — Keshav Memorial Institute of Technology | Dec 2020 – May 2024
> Hyderabad, India (affiliated to JNTUH)  ·  Coursework incl. Machine Learning, Neural Networks & Deep Learning, Data Mining

## Publication
K. M. Asudaria, **M. F. Abdul Khadeer**, S. S. Rafai, K. S. Reddy. “A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning.” _Quest Journal of Software Engineering and Simulation_, Vol. 9(12), pp. 43–51, Dec 2023 (peer-reviewed). Best result Sobel + MLP at 94.75%.

## Certifications, Awards & Leadership
- Head, Vachan Speakers Club, KMIT (2022–23) — led public-speaking workshops, debates and communication seminars.
- Smart India Hackathon delegate, Government of India (2022)  ·  Certificate of Publication, Quest Journals (2023).

## Languages
English (native / bilingual)  •  Urdu (native / bilingual)  •  Hindi (full professional)  •  Telugu (elementary)

## Referees
Available on request.
