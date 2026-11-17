# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)  •  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
_Full Australian working rights (Temporary Graduate visa, subclass 485) — no sponsorship required  •  Available immediately_

## Profile
Master of Artificial Intelligence graduate (RMIT, 2026) with a B.Tech in IT. In an AI/ML engineering internship, built
Python data pipelines and predictive models over 7.2M building polygons, and the measurement behind them: sensitivity analysis,
a ground-truth set that corrected a published baseline, and a check showing a model's headline metric was not accuracy.
Now a full-stack developer intern taking work from requirements to a live PostgreSQL / AWS deployment, with retail
operations experience at Amart. Seeking a Data Scientist or Data Analyst role in Coles 360.

## Technical Skills
**Languages:** Python (primary), SQL, Bash, TypeScript
**Data & analytics:** pandas, PostgreSQL, Parquet, Jupyter / Colab, Kestra (pipeline orchestration), GeoPandas, QGIS
**Machine learning & statistics:** XGBoost, scikit-learn, predictive modelling, evaluation design (precision/recall, IoU, sensitivity analysis, baseline and ground-truth construction)
**Engineering:** Git / GitHub, Docker, AWS (RDS, ECS Fargate, CloudFormation), FastAPI, Linux
**Generative AI:** prompt engineering, retrieval-grounded generation, MCP agents, LLM fine-tuning (QLoRA), Anthropic API

## Experience
### Full-Stack Developer Intern — Vayaa | Sep 2026 – present
> Melbourne, VIC  ·  hybrid  ·  company website: React + TypeScript, Python (FastAPI) + PostgreSQL, deployed on AWS
- Turned a mentor's plain-language brief into numbered functional and non-functional requirements, and kept a decision
  log (choice, alternatives, cost) for every design call.
- Built the contact-enquiry API in Rust (server-side validation, clean types), then led its port to Python (FastAPI) on
  the mentor's call, gating the cutover on 50 parity tests passing against both backends.
- Took it live on AWS with CloudFormation (CloudFront → ECS Fargate → RDS PostgreSQL) in five attempts, fixing Free-plan
  limits, a CloudFront account block and RDS TLS (verify-full); SNS emails each enquiry.
> **Tools:** Python, FastAPI, SQLAlchemy, PostgreSQL, Docker, AWS, React, TypeScript

### AI/ML Engineering Intern — Prodegee | Mar 2026 – Jun 2026
> Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning
- Co-built a 40-school satellite-verified ground-truth set and used it to correct a published baseline (6–13% → 37%);
  published a negative result showing a proximity penalty hurt accuracy at every threshold.
- Ran footprint inference across 200 villages in 7 Mauritanian Wilayas and trained an XGBoost multi-output tier
  regressor; documented that its 0.816 "confidence" measured agreement with the training heuristic, not accuracy.
- Built a ±20% sensitivity harness that identified cluster radius as the dominant parameter (±36–44% swing across 191
  villages), driving a 75 → 200 m recalibration that fixed a 90%+ household under-count (0.069 → 0.415).
- Designed and built the school-geolocation algorithm at the core of the team's pipeline (7.2M Overture building
  polygons, BFS spatial clustering, composite scoring); ran it on 18,121 schools in Côte d'Ivoire and ported it to
  Burundi and Chad.
- Replaced a binary distance cutoff with exponential-decay scoring and a weighted confidence score; added per-country
  sigmoid normalisation so one threshold works in all three countries; authored cross-team handoff contracts.
- Built an IoU evaluation harness for compound polygons and traced all three generators' failures to a ~35× over-scoped
  upstream cluster rather than a fitting fault, which redirected the next assignment.
- Led 3 of 10 team assignments and was primary author of 3 of 4 formal deliverables (68 commits, 7 peer reviews);
  pinned upstream inputs by commit SHA for reproducible re-runs and wrote the semester-2 handoff memo.
- Built a Claude API model router that classifies task complexity with a cheap Haiku call and routes to Haiku / Sonnet /
  Opus, keeping cost proportional to difficulty.
> **Tools:** Python, pandas, XGBoost, scikit-learn, GeoPandas, Shapely, Parquet / GeoPackage, Kestra, QGIS, Git

### Dispatch Team Member — Amart Furniture | Feb 2025 – Mar 2026
> Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study
- Tracked and reconciled stock in the inventory system, processed customer orders and resolved fulfilment discrepancies across 5 Melbourne stores; trained a new team member.

## Education
### Full-Stack Data Professional program — The Data & AI Institute | commencing Nov 2026
> SQL, Power BI, Azure data engineering (Data Factory, Databricks); includes a 6-month industry internship
### Master of Artificial Intelligence — RMIT University | Jul 2024 – Jul 2026
> Melbourne, VIC  ·  Machine Learning, Intelligent Decision Making (ASP/Clingo), Computer Vision, AI Systems Design, IoT
### Bachelor of Technology (Information Technology) — Keshav Memorial Institute of Technology | Dec 2020 – May 2024
> Hyderabad, India (affiliated to JNTUH)  ·  Coursework incl. Machine Learning, Neural Networks & Deep Learning, Data Mining

## Key Projects
### Gemma Delegation System — local/cloud LLM hybrid · Node.js, MCP SDK, Ollama, Unsloth/QLoRA, Colab | May 2026
- Built an MCP server that lets Claude Code or Cursor delegate lightweight tasks to a locally hosted Gemma model,
  failing open to the frontier model whenever Ollama is unavailable so delegation never blocks the user.
- Closed the loop: accept/reject feedback updates a capability profile and curates a JSONL dataset; a Colab notebook
  fine-tunes on confirmed examples (4-bit QLoRA, LoRA r=16) and exports GGUF back into Ollama.
↳ GitHub: [github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system)

- **Bro — interactive AI portfolio chatbot:** recruiter-facing site that answers questions from a profile corpus via server-side retrieval with anti-hallucination constraints; Anthropic API, deployed on Vercel. (Next.js, TypeScript, Prisma/Postgres)
↳ Live: [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
- **Fire Detection & Alerting System (B.Tech capstone, team of 4):** trained a custom OpenCV Haar cascade (Python) for real-time fire detection, chosen over heavier detectors for latency; a threaded pipeline raises an alarm and sends WhatsApp alerts to the nearest fire station.

## Publication
K. M. Asudaria, **M. F. Abdul Khadeer**, S. S. Rafai, K. S. Reddy. “A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning.” _Quest Journal of Software Engineering and Simulation_, Vol. 9(12), pp. 43–51, Dec 2023 (ISSN 2321-3795, peer-reviewed). Benchmarked 5 edge-detection operators × 8 classifiers (40 combinations) on a 15,000-image, four-class maize dataset; best result Sobel + MLP at 94.75%. Implemented the Canny arm (OpenCV + scikit-learn, ten classifiers).  ↳ [questjournals.org/jses](http://www.questjournals.org/jses/archive.html)   ·   Code: [github.com/faraaz817/Machine_Learning](https://github.com/faraaz817/Machine_Learning)

## Certifications, Awards & Leadership
- IBM Z Xplore – Concepts and IBM Z & LinuxONE Community Contributor – Level 1 (IBM digital badges via Credly, 2026).
- Smart India Hackathon delegate, Government of India (2022)  ·  Certificate of Publication, Quest Journals (2023).
- Head, Vachan Speakers Club, KMIT (2022–23) — led public-speaking workshops, debates and communication seminars.
- Volunteer fundraiser, Taher Foundation (2023).

## Languages
English (native / bilingual)  •  Urdu (native / bilingual)  •  Hindi (full professional)  •  Telugu (elementary)

## Referees
Available on request.
