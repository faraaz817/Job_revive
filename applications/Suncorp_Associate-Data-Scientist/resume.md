# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)  •  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
_Full Australian working rights (Temporary Graduate visa, subclass 485) — no sponsorship required  •  Available immediately_

## Profile
Master of Artificial Intelligence graduate (RMIT, 2026) with a B.Tech in Information Technology and an AI/ML
engineering internship delivering complex data science models at national scale — a 7.2M-record geospatial
pipeline, an XGBoost multi-output regressor, and the quality controls that decided which results could be
trusted. Practical Generative AI work across prompt engineering, retrieval-augmented generation and agents.
Seeking the Associate Data Scientist role in Suncorp's AI & Data Science Centre of Excellence.

## Technical Skills
**Machine learning & analytics:** Python (primary), scikit-learn, XGBoost (tree-based, multi-output regression), pandas, predictive analytics, evaluation design (precision/recall, IoU, sensitivity analysis, ground-truth construction)
**Generative AI:** prompt engineering, retrieval-grounded generation, agents (MCP servers; Claude Code skills, hooks and subagents; Cursor), Anthropic API (prompt caching, cost-proportional model routing), LLM fine-tuning (Unsloth, QLoRA, GGUF), Ollama
**Data engineering:** GeoPandas, Shapely, SQL, Parquet / GeoPackage / GeoJSON, Kestra pipeline orchestration, QGIS, PostGIS
**Tools & practice:** Git / GitHub, VS Code, Docker (basic), Colab / Jupyter, JUnit, code review, Linux
**Also:** Kotlin, JavaScript, TypeScript, Node.js, Next.js, Prolog / ASP (Clingo)

## Experience
### AI/ML Engineering Intern — Prodegee | Mar 2026 – Jun 2026
> Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning
- Evaluated data sources and analytical techniques for the team: owned 3 of 8 research categories and produced
  source notes on ~30 papers and technical references that set the method inventory the build ran on.
- Designed and built the school-geolocation algorithm at the core of the team's pipeline (7.2M Overture building
  polygons, BFS spatial clustering, composite scoring); ran it on 18,121 schools across three countries.
- Trained an XGBoost multi-output regressor over 5 simultaneous targets across 200 villages in 7 regions, and
  documented that its 0.816 "confidence" measured agreement with the training heuristic, not accuracy.
- Corrected a published accuracy baseline (6–13% → 37%) against a hand-built 40-case ground-truth set, and
  published a negative result showing a candidate parameter hurt accuracy at every threshold tested.
- Built a ±20% sensitivity harness that ranked cluster radius the dominant parameter (±36–44% swing across 191
  villages), driving a 75 → 200 m recalibration that fixed a 90%+ under-count (0.069 → 0.415).
- Delivered on a weekly assignment cadence: led 3 of 10 assignments, authored 3 of 4 formal deliverables (68
  commits, 7 peer reviews), wrote the cross-team interface contracts, and pinned upstream inputs by commit SHA.
> **Tools:** Python, scikit-learn, XGBoost, pandas, GeoPandas, Shapely, Kestra, QGIS, GeoPackage, Git, VS Code

### Dispatch Team Member — Amart Furniture | Feb 2025 – Mar 2026
> Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study
- Processed customer orders and resolved fulfilment discrepancies across 5 Melbourne stores.
- Tracked and reconciled stock in the inventory system, and trained a new team member into the role.

## Key Projects
### Bro — retrieval-augmented AI assistant · Next.js, TypeScript, Anthropic API, Prisma/Postgres | 2026
- Built a question-answering assistant that retrieves from a profile corpus server-side and answers under
  anti-hallucination constraints, so it declines rather than inventing an answer it cannot support.
- Deployed to production on Vercel against a Postgres-backed corpus, for a non-technical audience asking
  open-ended questions rather than structured queries.
↳ Live: [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)

### Gemma Delegation System — agent tooling with a retraining loop · Node.js, MCP SDK, Ollama, Unsloth/QLoRA | May 2026
- Built an MCP server that lets an AI coding agent delegate lightweight tasks to a locally hosted Gemma model,
  failing open to the frontier model whenever the local one is unavailable.
- Closed the loop: accept/reject feedback curates a JSONL dataset, a notebook fine-tunes on confirmed examples
  (4-bit QLoRA, LoRA r=16), and the result is exported back into serving.
↳ GitHub: [github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system)

- **MGM Prayer Alerts — Android app in community use:** gathered and wrote the functional requirements with a non-technical committee before building, then reviewed the delivered app against those acceptance criteria and caught two scheduling defects before release. (Kotlin, AlarmManager, JUnit)
- **Cost-proportional model routing:** built a router that classifies task complexity with a cheap model call and routes to a cheaper or stronger model accordingly, keeping spend proportional to task difficulty.
- **Agent skills for Claude Code / Cursor:** authored five reusable skills — a CO-STAR requirements builder, Socratic tutor, better-way reviewer, skill sync, and a pikepdf CLI that unlocks signature-locked PDFs.  [github.com/faraaz817/My_Skills](https://github.com/faraaz817/My_Skills)
- **Time Flow — offline-first planner (PWA):** built and deployed an installable planner in 4,600 lines of vanilla JavaScript that schedules goals and recurring targets into free time using an urgency × importance scoring model.  [faraaz817.github.io/time-flow-web](https://faraaz817.github.io/time-flow-web/)

## Education
### Master of Artificial Intelligence — RMIT University | Jul 2024 – Jul 2026
> Melbourne, VIC  ·  Coursework: Machine Learning, Computer Vision, AI Systems Design, Intelligent Decision Making (ASP/Clingo)
### Bachelor of Technology (Information Technology) — Keshav Memorial Institute of Technology | Dec 2020 – May 2024
> Hyderabad, India (affiliated to JNTUH)  ·  Coursework incl. Machine Learning, Neural Networks & Deep Learning, Data Mining, Big Data

## Publication
K. M. Asudaria, **M. F. Abdul Khadeer**, S. S. Rafai, K. S. Reddy. “A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning.” _Quest Journal of Software Engineering and Simulation_, Vol. 9(12), pp. 43–51, Dec 2023 (ISSN 2321-3795, peer-reviewed). Benchmarked 5 feature-extraction operators (Canny, Sobel, Roberts, Prewitt, Laplacian) against 8 classifiers — 40 combinations — on a four-class image dataset; best result 94.75%. Implemented the Canny arm in OpenCV and scikit-learn.  ↳ [questjournals.org/jses](http://www.questjournals.org/jses/archive.html)   ·   Code: [github.com/faraaz817/Machine_Learning](https://github.com/faraaz817/Machine_Learning)

## Certifications, Awards & Leadership
- IBM Z Xplore – Concepts, and IBM Z & LinuxONE Community Contributor – Level 1 (IBM digital badges via Credly, 2026).
- Certificate of Publication, Quest Journals (2023)  ·  Smart India Hackathon delegate, Government of India (2022).
- Head, Vachan Speakers Club, KMIT (2022–23) — led public-speaking workshops, debates and communication seminars.

## Languages
English (native / bilingual)  •  Urdu (native / bilingual)  •  Hindi (full professional)  •  Telugu (elementary)

## Referees
Available on request.
