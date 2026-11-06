# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)  •  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
_Full Australian working rights (Temporary Graduate visa, subclass 485) — no sponsorship required  •  Available immediately_

## Profile
Master of Artificial Intelligence graduate (RMIT, 2026) with a B.Tech in IT and two industry internships: AI/ML
engineering at Prodegee (evaluation harnesses and pipelines at national scale) and full-stack development at Vayaa
(a Python service taken live on AWS). Has worked across the stack around models: serving a fine-tuned local model
behind an MCP server, routing requests by cost, and testing back ends to parity before cutover. Seeking a Graduate
Software Engineer role at Maincode, Melbourne, on the inference and evaluation layers behind Matilda.

## Technical Skills
**Languages:** Python (primary), TypeScript, JavaScript, Rust, Kotlin, SQL, Bash
**Back end & infrastructure:** FastAPI, Rust/Axum, PostgreSQL (SQLAlchemy), REST/JSON, Docker, AWS (CloudFormation, Fargate, RDS, CloudFront, SNS), GitHub Actions CI, Linux
**AI / ML:** LLM fine-tuning (Unsloth, QLoRA, GGUF), Ollama, model routing, MCP servers, retrieval-grounded generation, evaluation design (precision/recall, IoU, sensitivity analysis, ground-truth construction), scikit-learn, XGBoost, OpenCV
**Front end & mobile:** React, Next.js, Prisma, PWA, Android (Kotlin, AlarmManager, JUnit)
**AI-assisted engineering:** Claude Code (skills, hooks, subagents), Cursor, Anthropic API (prompt caching, routing)

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
- Built the contact-enquiry API in Rust (server-side validation, clean types), then led its port to Python (FastAPI) on
  the mentor's call, gating the cutover on 50 parity tests passing against both backends.
- Took it live on AWS with CloudFormation (CloudFront → ECS Fargate → RDS PostgreSQL) in five attempts, fixing Free-plan
  limits, a CloudFront account block and RDS TLS (verify-full); SNS emails each enquiry.
> **Tools:** Python, FastAPI, SQLAlchemy, PostgreSQL, Docker, AWS, Rust (Axum), React, TypeScript, Claude Code

### AI/ML Engineering Intern — Prodegee | Mar 2026 – Jun 2026
> Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning
- Designed and built the school-geolocation algorithm at the core of the team's pipeline (7.2M Overture building polygons,
  BFS spatial clustering, composite scoring); ran it on 18,121 schools in Côte d'Ivoire and ported it to Burundi and Chad.
- Built an IoU evaluation harness for compound polygons and traced all three generators' failures to a ~35× over-scoped
  upstream cluster rather than a fitting fault, which redirected the next assignment.
- Built a ±20% sensitivity harness that identified cluster radius as the dominant parameter (±36–44% swing across 191
  villages), driving a 75 → 200 m recalibration that fixed a 90%+ household under-count (0.069 → 0.415).
- Co-built a 40-school satellite-verified ground-truth set and used it to correct a published baseline (6–13% → 37%);
  published a negative result showing a proximity penalty hurt accuracy at every threshold.
- Built a Claude API model router that classifies task complexity with a cheap Haiku call and routes to Haiku / Sonnet /
  Opus, keeping cost proportional to difficulty.
- Led 3 of 10 team assignments and was primary author of 3 of 4 formal deliverables (68 commits, 7 peer reviews); pinned
  upstream inputs by commit SHA for reproducible re-runs and wrote the semester-2 handoff memo.
- Replaced a binary distance cutoff with exponential-decay scoring and a weighted confidence score; added per-country
  sigmoid normalisation so one threshold works in all three countries.
> **Tools:** Python, scikit-learn, XGBoost, pandas, GeoPandas, Shapely, Kestra, Git, Claude Code (MCP, hooks)

### Dispatch Team Member — Amart Furniture | Feb 2025 – Mar 2026
> Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study
- Tracked and reconciled stock in the inventory system, processed customer orders and resolved fulfilment discrepancies across 5 Melbourne stores; trained a new team member.

## Key Projects
### Gemma Delegation System — local/cloud LLM hybrid · Node.js, MCP SDK, Ollama, Unsloth/QLoRA, Colab | May 2026
- Built an MCP server that lets Claude Code or Cursor delegate lightweight tasks to a locally hosted Gemma model,
  failing open to the frontier model whenever Ollama is unavailable so delegation never blocks the user.
- Closed the loop: accept/reject feedback updates a capability profile and curates a JSONL dataset; a Colab notebook
  fine-tunes on confirmed examples (4-bit QLoRA, LoRA r=16) and exports GGUF back into Ollama.
↳ GitHub: [github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system)

### MGM Prayer Alerts — Android app for Melbourne Grand Mosque · Kotlin, AlarmManager, JUnit | Aug – Oct 2026
- Shipped an Android app that fetches the mosque's daily timetable and schedules exact Azaan alarms; in use by
  community members. Fixed a critical AM/PM storage bug and a refresh alarm that stopped re-arming.
- When the source began returning bot-check pages, kept alarms working with a bundled annual timetable behind a new
  unit-tested parser; added GitHub Actions to test, build and publish releases.
↳ GitHub: [github.com/faraaz817/MgmPrayerAlerts](https://github.com/faraaz817/MgmPrayerAlerts)

- **Bro — interactive AI portfolio chatbot:** recruiter-facing site that answers questions from a profile corpus via server-side retrieval with anti-hallucination constraints; Anthropic API, deployed on Vercel. (Next.js, TypeScript, Prisma/Postgres)  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
- **Time Flow — Android planner for commercial release (closed source):** vanilla-JS UI in a Kotlin WebView shell with exact alarms and reboot recovery; CI runs the Kotlin and JavaScript test suites on every PR and builds a shrunk release APK, with signed tagged releases checked by apksigner; demo on request.

## Publication
K. M. Asudaria, **M. F. Abdul Khadeer**, S. S. Rafai, K. S. Reddy. “A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning.” _Quest Journal of Software Engineering and Simulation_, Vol. 9(12), pp. 43–51, Dec 2023 (ISSN 2321-3795, peer-reviewed). Best result Sobel + MLP at 94.75%; implemented the Canny arm (OpenCV + scikit-learn).  ↳ Code: [github.com/faraaz817/Machine_Learning](https://github.com/faraaz817/Machine_Learning)

## Certifications, Awards & Leadership
- Smart India Hackathon delegate, Government of India (2022)  ·  Certificate of Publication, Quest Journals (2023).
- Head, Vachan Speakers Club, KMIT (2022–23) — led public-speaking workshops, debates and communication seminars.

## Languages
English (native / bilingual)  •  Urdu (native / bilingual)  •  Hindi (full professional)  •  Telugu (elementary)

## Referees
Available on request.
