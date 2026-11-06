# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)  •  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
_Full Australian working rights (Temporary Graduate visa, subclass 485) — no sponsorship required  •  Available immediately_

## Profile
Master of Artificial Intelligence graduate (RMIT, 2026) with a B.Tech in IT. Works in Python and with AI daily: an AI/ML
engineering internship, an LLM model router and a fine-tuned local model. Turns plain-language requests into numbered
requirements and decision logs before building, and has a year of customer service across 5 Melbourne stores. Seeking
the IT Analyst Intern – AI and Software role in Capgemini's 2026/27 Summer Internship, Melbourne; available full-time
for the whole program.

## Technical Skills
**Python & AI:** Python (primary), pandas, scikit-learn, XGBoost, Anthropic API (prompt caching, routing), LLM fine-tuning (Unsloth, QLoRA), Ollama, retrieval-grounded generation, prompt engineering, MCP servers
**Business analysis:** functional and non-functional requirements, acceptance criteria, decision logs (choice, alternatives, cost), stakeholder handoff contracts, written deliverables and peer review
**Software & cloud:** FastAPI, PostgreSQL, SQL, REST/JSON, React, TypeScript, Android (Kotlin), AWS (CloudFormation, Fargate, RDS), Docker, Git / GitHub
**AI-assisted engineering:** Claude Code (skills, hooks, subagents), Cursor

## Education
### Master of Artificial Intelligence — RMIT University | Jul 2024 – Jul 2026
> Melbourne, VIC  ·  AI Systems Design, Machine Learning, Computer Vision, Intelligent Decision Making (ASP/Clingo), IoT
### Bachelor of Technology (Information Technology) — Keshav Memorial Institute of Technology | Dec 2020 – May 2024
> Hyderabad, India (affiliated to JNTUH)  ·  Coursework incl. Machine Learning, Neural Networks & Deep Learning, Data Mining

## Experience
### Full-Stack Developer Intern — Vayaa | Sep 2026 – present
> Melbourne, VIC  ·  hybrid  ·  company website: React + TypeScript, Python (FastAPI) + PostgreSQL, deployed on AWS
- Building the company's website from a mentor's brief; turned each plain-language request into numbered functional and
  non-functional requirements and kept a decision log (choice, alternatives, cost) for every design call.
- Built the contact-enquiry API in Rust, then led its port to Python (FastAPI) on the mentor's call, gating the cutover
  on 50 parity tests passing against both backends.
- Took it live on AWS with CloudFormation (CloudFront → ECS Fargate → RDS PostgreSQL) in five attempts, fixing Free-plan
  limits, a CloudFront account block and RDS TLS (verify-full); SNS emails each enquiry.
> **Tools:** Python, FastAPI, SQLAlchemy, PostgreSQL, Docker, AWS, Rust (Axum), React, TypeScript, Claude Code

### AI/ML Engineering Intern — Prodegee | Mar 2026 – Jun 2026
> Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning
- Led 3 of 10 team assignments and was primary author of 3 of 4 formal deliverables (68 commits, 7 peer reviews); wrote
  the semester-2 handoff memo and authored cross-team handoff contracts.
- Designed and built the school-geolocation algorithm at the core of the team's pipeline (7.2M Overture building polygons,
  BFS spatial clustering, composite scoring); ran it on 18,121 schools in Côte d'Ivoire and ported it to Burundi and Chad.
- Built a ±20% sensitivity harness that identified cluster radius as the dominant parameter (±36–44% swing across 191
  villages), driving a 75 → 200 m recalibration that fixed a 90%+ household under-count (0.069 → 0.415).
- Co-built a 40-school satellite-verified ground-truth set and used it to correct a published baseline (6–13% → 37%);
  published a negative result showing a proximity penalty hurt accuracy at every threshold.
- Built an IoU evaluation harness for compound polygons and traced all three generators' failures to a ~35× over-scoped
  upstream cluster rather than a fitting fault, which redirected the next assignment.
- Replaced a binary distance cutoff with exponential-decay scoring and a weighted confidence score; added per-country
  sigmoid normalisation so one threshold works in all three countries.
- Built a Claude API model router that classifies task complexity with a cheap Haiku call and routes to Haiku / Sonnet /
  Opus, keeping cost proportional to difficulty.
> **Tools:** Python, pandas, scikit-learn, XGBoost, GeoPandas, Kestra, Git, Claude Code

### Dispatch Team Member — Amart Furniture | Feb 2025 – Mar 2026
> Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study
- Processed customer orders and resolved fulfilment discrepancies across 5 Melbourne stores; tracked and reconciled stock
  in the inventory system and trained a new team member.

## Key Projects
### MGM Prayer Alerts — Android app for Melbourne Grand Mosque · Kotlin, AlarmManager, JUnit | Aug – Oct 2026
- Wrote functional requirements (scope, decision log, acceptance criteria) before coding, then reviewed the code against
  them: fixed a critical AM/PM storage bug and a refresh alarm that stopped re-arming. In use by community members.
- When the timetable source began returning bot-check pages, kept alarms working by falling back to a bundled annual
  timetable behind a new unit-tested parser; added GitHub Actions to test, build and publish releases.
↳ GitHub: [github.com/faraaz817/MgmPrayerAlerts](https://github.com/faraaz817/MgmPrayerAlerts)

### Gemma Delegation System — local/cloud LLM hybrid · Node.js, MCP SDK, Ollama, Unsloth/QLoRA, Colab | May 2026
- Built an MCP server that lets Claude Code or Cursor delegate lightweight tasks to a locally hosted Gemma model,
  failing open to the frontier model whenever Ollama is unavailable so delegation never blocks the user.
- Accept/reject feedback curates a JSONL dataset; a Colab notebook fine-tunes on confirmed examples (4-bit QLoRA).
↳ GitHub: [github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system)

- **Bro — interactive AI portfolio chatbot:** recruiter-facing site that answers questions from a profile corpus via server-side retrieval with anti-hallucination constraints; Anthropic API, deployed on Vercel.  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
- **Agent skills for Claude Code / Cursor:** authored five reusable skills, including a CO-STAR requirements builder.  [github.com/faraaz817/My_Skills](https://github.com/faraaz817/My_Skills)

## Publication
K. M. Asudaria, **M. F. Abdul Khadeer**, S. S. Rafai, K. S. Reddy. “A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning.” _Quest Journal of Software Engineering and Simulation_, Vol. 9(12), pp. 43–51, Dec 2023 (peer-reviewed). Best result Sobel + MLP at 94.75%.

## Certifications, Awards & Leadership
- Head, Vachan Speakers Club, KMIT (2022–23) — led public-speaking workshops, debates and communication seminars.
- IBM Z Xplore – Concepts and IBM Z & LinuxONE Community Contributor – Level 1 (IBM digital badges via Credly, 2026).
- Smart India Hackathon delegate, Government of India (2022)  ·  Volunteer fundraiser, Taher Foundation (2023).

## Languages
English (native / bilingual)  •  Urdu (native / bilingual)  •  Hindi (full professional)  •  Telugu (elementary)

## Referees
Available on request.
