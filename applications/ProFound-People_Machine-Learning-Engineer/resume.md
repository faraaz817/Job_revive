# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)  •  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
_Full Australian working rights (Temporary Graduate visa, subclass 485) — no sponsorship required  •  Available immediately_

## Profile
Master of Artificial Intelligence graduate (RMIT, 2026) whose AI/ML engineering internship centred on evaluation:
IoU and sensitivity harnesses, a satellite-verified ground-truth set, and a published negative result. Builds applied
LLM systems end to end in Python: a cost-proportional Claude model router, a fine-tuning loop that turns user feedback
into a QLoRA dataset, and retrieval-grounded generation. Lets data settle arguments. Seeking a Machine Learning Engineer
(Applied LLMs) role; open to relocating to Sydney.

## Technical Skills
**Languages:** Python (primary, production: FastAPI, SQLAlchemy, pandas), SQL, TypeScript, JavaScript, Rust, Bash
**LLM systems:** evaluation design (precision/recall, IoU, sensitivity analysis, ground-truth construction), retrieval-grounded generation, LLM fine-tuning (Unsloth, QLoRA, GGUF), Ollama, Anthropic API (prompt caching, routing), MCP servers
**Applied ML:** scikit-learn, XGBoost, OpenCV, pandas, GeoPandas / Shapely, Kestra
**Platforms & tooling:** Git / GitHub, Docker, AWS (CloudFormation, Fargate, RDS, CloudFront), PostgreSQL, Colab, Linux, Claude Code (skills, hooks, subagents), Cursor

## Experience
### Full-Stack Developer Intern — Vayaa | Sep 2026 – present
> Melbourne, VIC  ·  hybrid  ·  company website: Python (FastAPI) + PostgreSQL, React + TypeScript, deployed on AWS
- Built the contact-enquiry API in Rust, then led its port to Python (FastAPI) on the mentor's call, gating the
  cutover on 50 parity tests passing against both backends.
- Took it live on AWS with CloudFormation (CloudFront → ECS Fargate → RDS PostgreSQL), fixing Free-plan limits, a
  CloudFront account block and RDS TLS (verify-full); kept a decision log (choice, alternatives, cost) for every call.
> **Tools:** Python, FastAPI, SQLAlchemy, PostgreSQL, Docker, AWS, Rust (Axum), React, TypeScript

### AI/ML Engineering Intern — Prodegee | Mar 2026 – Jun 2026
> Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning
- Built an IoU evaluation harness for compound polygons and traced all three generators' failures to a ~35× over-scoped
  upstream cluster rather than a fitting fault, which redirected the next assignment.
- Built a ±20% sensitivity harness that identified cluster radius as the dominant parameter (±36–44% swing across 191
  villages), driving a 75 → 200 m recalibration that fixed a 90%+ household under-count (0.069 → 0.415).
- Co-built a 40-school satellite-verified ground-truth set and used it to correct a published baseline (6–13% → 37%);
  published a negative result showing a proximity penalty hurt accuracy at every threshold.
- Trained an XGBoost multi-output tier regressor over 200 villages in 7 Mauritanian Wilayas; documented that its 0.816
  "confidence" measured agreement with the training heuristic, not accuracy.
- Designed and built the school-geolocation algorithm at the core of the team's pipeline (7.2M Overture building polygons, BFS spatial clustering, composite scoring); ran it on 18,121 schools in Côte
  d'Ivoire and ported it to Burundi and Chad.
- Replaced a binary distance cutoff with exponential-decay scoring and a weighted confidence score; added per-country
  sigmoid normalisation so one threshold works in all three countries.
- Built a Claude API model router that classifies task complexity with a cheap Haiku call and routes to Haiku / Sonnet /
  Opus, keeping cost proportional to difficulty.
- Led 3 of 10 team assignments and was primary author of 3 of 4 formal deliverables (68 commits, 7 peer reviews);
  pinned upstream inputs by commit SHA for reproducible re-runs.
> **Tools:** Python, scikit-learn, XGBoost, pandas, GeoPandas, Shapely, Kestra, Anthropic API, Git, Claude Code (MCP, hooks)

### Dispatch Team Member — Amart Furniture | Feb 2025 – Mar 2026
> Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study
- Tracked and reconciled stock in the inventory system, processed customer orders and resolved fulfilment discrepancies across 5 Melbourne stores; trained a new team member.

## Key Projects
### Gemma Delegation System — local/cloud LLM hybrid · Node.js, MCP SDK, Ollama, Unsloth/QLoRA, Colab | May 2026
- Built an MCP server that lets Claude Code or Cursor delegate lightweight tasks to a locally hosted Gemma model instead
  of spending frontier-model tokens, failing open to the frontier model whenever Ollama is unavailable.
- Closed the loop: accept/reject feedback updates a capability profile and curates a JSONL dataset from real usage; a
  Colab notebook fine-tunes on confirmed examples (4-bit QLoRA, LoRA r=16) and exports GGUF back into Ollama.
↳ GitHub: [github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system)

### Bro — interactive AI portfolio chatbot · Next.js, TypeScript, Prisma/Postgres, Anthropic API | 2026
- Built a recruiter-facing site that answers questions from a profile corpus via server-side retrieval with
  anti-hallucination constraints; deployed on Vercel.
↳ Live: [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)

### Agent skills for Claude Code / Cursor · skills, hooks, reusable workflows | 2026
- Authored five reusable, public agent skills — CO-STAR requirements builder, Socratic tutor, better-way reviewer,
  skill sync, and a pikepdf CLI that unlocks signature-locked PDFs.
↳ GitHub: [github.com/faraaz817/My_Skills](https://github.com/faraaz817/My_Skills)

- **Fire Detection & Alerting System (B.Tech capstone, team of 4):** trained a custom OpenCV Haar cascade (Python) for real-time fire detection, chosen over heavier detectors for latency; a threaded pipeline raises an alarm and sends WhatsApp alerts to the nearest fire station.

## Education
### Master of Artificial Intelligence — RMIT University | Jul 2024 – Jul 2026
> Melbourne, VIC  ·  Machine Learning, Computer Vision, AI Systems Design, Intelligent Decision Making (ASP/Clingo), IoT
### Bachelor of Technology (Information Technology) — Keshav Memorial Institute of Technology | Dec 2020 – May 2024
> Hyderabad, India (affiliated to JNTUH)  ·  Coursework incl. Machine Learning, Neural Networks & Deep Learning, Data Mining

## Publication
K. M. Asudaria, **M. F. Abdul Khadeer**, S. S. Rafai, K. S. Reddy. “A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning.” _Quest Journal of Software Engineering and Simulation_, Vol. 9(12), pp. 43–51, Dec 2023 (ISSN 2321-3795, peer-reviewed). Benchmarked 5 edge-detection operators × 8 classifiers (40 combinations) on a 15,000-image, four-class dataset; best result Sobel + MLP at 94.75%.  ↳ Code: [github.com/faraaz817/Machine_Learning](https://github.com/faraaz817/Machine_Learning)

## Certifications, Awards & Leadership
- Smart India Hackathon delegate, Government of India (2022)  ·  Certificate of Publication, Quest Journals (2023).
- Head, Vachan Speakers Club, KMIT (2022–23) — led public-speaking workshops, debates and communication seminars.

## Languages
English (native / bilingual)  •  Urdu (native / bilingual)  •  Hindi (full professional)  •  Telugu (elementary)

## Referees
Available on request.
