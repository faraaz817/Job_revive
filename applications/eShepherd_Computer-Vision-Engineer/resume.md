# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)  •  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
_Full Australian working rights (Temporary Graduate visa, subclass 485) — no sponsorship required  •  Available immediately_

## Profile
Master of Artificial Intelligence graduate (RMIT, 2026, computer vision coursework) and co-author of a peer-reviewed
computer-vision paper. Classical CV in Python and OpenCV — edge-detection feature pipelines, and a Haar cascade
trained and run on a live camera feed under a latency budget. An AI/ML internship where a hand-built ground-truth set,
an IoU harness and a sensitivity analysis drove the recalibration that fixed a 90% under-count. Seeking a computer
vision engineering role on Vision Weigh at eShepherd; willing to relocate.

## Technical Skills
**Computer Vision:** OpenCV (image classification, edge detection — Canny/Sobel, Haar cascade training), geometric methods (spatial clustering, IoU evaluation, shape descriptors, projected-CRS distance), GeoPandas, Shapely, QGIS
**Python & ML:** Python (primary), scikit-learn, XGBoost, pandas, evaluation design (precision/recall, IoU, sensitivity analysis, ground-truth construction), LLM fine-tuning (Unsloth, QLoRA, GGUF), Ollama
**Generative AI:** agentic coding tools — Claude Code (skills, hooks, subagents), Cursor; MCP servers, Anthropic API (prompt caching, routing), prompt engineering, retrieval-grounded generation
**Engineering:** Git / GitHub, Docker (basic), JUnit, code review, Kestra, Colab / Jupyter, Linux, GeoPackage / GeoJSON / Parquet
**Also:** Kotlin, JavaScript, TypeScript, SQL, Bash, Node.js

## Experience
### AI/ML Engineering Intern — Prodegee | Mar 2026 – Jun 2026
> Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning
- Co-built a 40-school satellite-verified ground-truth set and used it to correct a published baseline (6–13% → 37%);
  published a negative result showing a proximity penalty hurt accuracy at every threshold.
- Built a ±20% sensitivity harness that identified cluster radius as the dominant parameter (±36–44% swing across 191
  villages), driving a 75 → 200 m recalibration that fixed a 90%+ household under-count (0.069 → 0.415).
- Built an IoU evaluation harness for compound polygons and traced all three generators' failures to a ~35× over-scoped
  upstream cluster rather than a fitting fault, which redirected the next assignment.
- Designed and built the school-geolocation algorithm at the core of the team's pipeline (7.2M Overture building polygons,
  BFS spatial clustering, composite scoring); ran it on 18,121 schools in Côte d'Ivoire and ported it to Burundi and Chad.
- Replaced a binary distance cutoff with exponential-decay scoring and a weighted confidence score; added per-country
  sigmoid normalisation so one threshold works in all three countries; authored cross-team handoff contracts.
- Ran footprint inference across 200 villages in 7 Mauritanian Wilayas and trained an XGBoost multi-output tier regressor;
  documented that its 0.816 "confidence" measured agreement with the training heuristic, not accuracy.
- Led 3 of 10 team assignments and was primary author of 3 of 4 formal deliverables (68 commits, 7 peer reviews); pinned
  upstream inputs by commit SHA for reproducible re-runs and wrote the semester-2 handoff memo.
- Built a Claude API model router that classifies task complexity with a cheap Haiku call and routes to Haiku, Sonnet or
  Opus accordingly, keeping token cost proportional to the difficulty of the task.
> **Tools:** Python, GeoPandas, Shapely, scikit-learn, XGBoost, pandas, QGIS, Kestra, GeoPackage, Git, Claude Code (MCP, hooks)

### Dispatch Team Member — Amart Furniture | Feb 2025 – Mar 2026
> Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study
- Tracked and reconciled stock in the inventory system, processed customer orders and resolved fulfilment discrepancies across 5 Melbourne stores; trained a new team member.

## Key Projects
### Fire Detection & Alerting System · Python, OpenCV, Haar cascades, threading | 2023 – 24
> B.Tech capstone, team of 4 — real-time detection from a live camera feed, with off-site alerting
- Trained a custom OpenCV Haar cascade end to end (positive marking, sample vectorisation, 15-stage training, XML
  export) and chose it over heavier detectors on latency grounds — reaction time beats a few points of accuracy.
- Built the real-time loop: per-frame detection, bounding-box overlay, and threaded alarm and WhatsApp alerting so
  capture never blocks; targeted sub-5-second response, restart-safe, on a 4 GB / 2.9 GHz minimum spec.

### Gemma Delegation System · Node.js, MCP SDK, Ollama, Unsloth/QLoRA, Colab | May 2026
- Built an MCP server that lets Claude Code or Cursor delegate lightweight tasks to a locally hosted Gemma model,
  failing open to the frontier model whenever Ollama is unavailable so delegation never blocks the user.
- Closed the retraining loop: accept/reject feedback updates a capability profile and curates a JSONL dataset; a Colab
  notebook fine-tunes on confirmed examples (4-bit QLoRA, LoRA r=16) and exports GGUF back into Ollama.
↳ GitHub: [github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system)

- **MGM Prayer Alerts — Android app in community use:** wrote the functional requirements before coding, then reviewed the code against them — caught a critical AM/PM bug and an alarm that stopped re-arming; unit-tested the time-parsing round trip. (Kotlin, AlarmManager, JUnit)
- **Bro — interactive AI portfolio chatbot:** recruiter-facing site answering questions from a profile corpus via server-side retrieval with anti-hallucination constraints; Anthropic API, deployed on Vercel. (Next.js, TypeScript, Prisma/Postgres)
- **Agent skills for Claude Code / Cursor:** authored five reusable skills — CO-STAR requirements builder, Socratic tutor, better-way reviewer, skill sync, and a pikepdf CLI that unlocks signature-locked PDFs.  [github.com/faraaz817/My_Skills](https://github.com/faraaz817/My_Skills)

## Publication
K. M. Asudaria, **M. F. Abdul Khadeer**, S. S. Rafai, K. S. Reddy. “A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning.” _Quest Journal of Software Engineering and Simulation_, Vol. 9(12), pp. 43–51, Dec 2023 (ISSN 2321-3795, peer-reviewed). Benchmarked 5 edge-detection operators × 8 classifiers (40 combinations) as a lesion feature-extraction step on a 15,000-image, four-class maize dataset; best result Sobel + MLP at 94.75%. Implemented the Canny arm (OpenCV + scikit-learn, ten classifiers).  ↳ [questjournals.org/jses](http://www.questjournals.org/jses/archive.html)   ·   Code: [github.com/faraaz817/Machine_Learning](https://github.com/faraaz817/Machine_Learning)

## Education
### Master of Artificial Intelligence — RMIT University | Jul 2024 – Jul 2026
> Melbourne, VIC  ·  Coursework: **Computer Vision**, Machine Learning, AI Systems Design, Intelligent Decision Making (ASP/Clingo)
### Bachelor of Technology (Information Technology) — Keshav Memorial Institute of Technology | Dec 2020 – May 2024
> Hyderabad, India (affiliated to JNTUH)  ·  Coursework incl. Machine Learning, Neural Networks & Deep Learning, Data Mining

## Certifications, Awards & Leadership
- Certificate of Publication, Quest Journals (2023)  ·  Smart India Hackathon delegate, Government of India (2022).
- Head, Vachan Speakers Club, KMIT (2022–23) — led public-speaking workshops, debates and communication seminars.

## Languages
English (native / bilingual)  •  Urdu (native / bilingual)  •  Hindi (full professional)  •  Telugu (elementary)

## Referees
Available on request.
