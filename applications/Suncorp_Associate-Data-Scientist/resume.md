# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)  •  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
_Full Australian working rights (Temporary Graduate visa, subclass 485) — no sponsorship required  •  Available immediately_

## Profile
Master of Artificial Intelligence graduate (RMIT, 2026) with a B.Tech in IT and an AI/ML engineering internship
delivering complex geospatial ML models and evaluation systems at national scale. Builds Generative AI tooling —
prompt engineering, retrieval augmented generation and agent-style MCP delegation — alongside tree-based predictive
models. Seeking an Associate Data Scientist role in the AI & Data Science Centre of Excellence at Suncorp, Melbourne.

## Technical Skills
**Languages:** Python (primary), SQL, TypeScript, JavaScript, Bash
**Machine learning:** XGBoost, scikit-learn, predictive analytics, evaluation design (precision/recall, IoU, sensitivity analysis, ground-truth construction), pandas, OpenCV
**Generative AI:** prompt engineering, retrieval augmented generation, agents (MCP servers, model routing), LLM fine-tuning (Unsloth, QLoRA, GGUF), Ollama, Claude Code / Cursor, Anthropic API
**Engineering:** Git / GitHub, VS Code, Colab / Jupyter, Docker (basic), Kestra, Linux, REST/JSON
**Also:** GeoPandas, Shapely, QGIS

## Experience
### AI/ML Engineering Intern — Prodegee | Mar 2026 – Jun 2026
> Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning
- Ran footprint inference across 200 villages in 7 Mauritanian Wilayas and trained an XGBoost multi-output tier
  regressor; documented that its 0.816 "confidence" measured agreement with the training heuristic, not accuracy.
- Designed and built the school-geolocation algorithm at the core of the team's pipeline (7.2M Overture building
  polygons, BFS spatial clustering, composite scoring); ran it on 18,121 schools in Côte d'Ivoire and ported it to
  Burundi and Chad.
- Built a ±20% sensitivity harness that identified cluster radius as the dominant parameter (±36–44% swing across 191
  villages), driving a 75 → 200 m recalibration that fixed a 90%+ household under-count (0.069 → 0.415).
- Built an IoU evaluation harness for compound polygons and traced all three generators' failures to a ~35× over-scoped
  upstream cluster rather than a fitting fault, which redirected the next assignment.
- Co-built a 40-school satellite-verified ground-truth set and used it to correct a published baseline (6–13% → 37%);
  published a negative result showing a proximity penalty hurt accuracy at every threshold.
- Replaced a binary distance cutoff with exponential-decay scoring and a weighted confidence score; added per-country
  sigmoid normalisation so one threshold works in all three countries; authored cross-team handoff contracts.
- Led 3 of 10 team assignments and was primary author of 3 of 4 formal deliverables (68 commits, 7 peer reviews);
  pinned upstream inputs by commit SHA for reproducible re-runs and wrote the semester-2 handoff memo.
- Built a Claude API model router that classifies task complexity with a cheap Haiku call and routes to Haiku / Sonnet /
  Opus, keeping cost proportional to difficulty.
> **Tools:** Python, XGBoost, scikit-learn, pandas, GeoPandas, Shapely, Git, VS Code, Kestra, Claude Code (MCP, hooks)

### Dispatch Team Member — Amart Furniture | Feb 2025 – Mar 2026
> Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study
- Tracked and reconciled stock in the inventory system, processed customer orders and resolved fulfilment discrepancies across 5 Melbourne stores; trained a new team member.

## Education
### Master of Artificial Intelligence — RMIT University | Jul 2024 – Oct 2026
> Melbourne, VIC  ·  Coursework: Machine Learning, Computer Vision, Intelligent Decision Making (ASP/Clingo), AI Systems Design
### Bachelor of Technology (Information Technology) — Keshav Memorial Institute of Technology | Dec 2020 – May 2024
> Hyderabad, India (affiliated to JNTUH)  ·  Coursework incl. Machine Learning, Neural Networks & Deep Learning, Data Mining

## Key Projects
### Gemma Delegation System — local/cloud LLM hybrid · Node.js, MCP SDK, Ollama, Unsloth/QLoRA, Colab | May 2026
- Built an MCP server that lets Claude Code or Cursor delegate lightweight tasks to a locally hosted Gemma model,
  failing open to the frontier model whenever Ollama is unavailable so delegation never blocks the user.
- Closed the loop: accept/reject feedback updates a capability profile and curates a JSONL dataset; Colab then
  fine-tunes confirmed examples (4-bit QLoRA, LoRA r=16) and exports GGUF back into Ollama.
↳ GitHub: [github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system)

- **Agent skills for Claude Code / Cursor:** authored five reusable skills — CO-STAR requirements builder, Socratic tutor, better-way reviewer, skill sync, and a pikepdf CLI that unlocks signature-locked PDFs.  [github.com/faraaz817/My_Skills](https://github.com/faraaz817/My_Skills)

### Bro — AI portfolio chatbot · Next.js, TypeScript, Anthropic API | 2026
- Built a recruiter-facing site that answers questions from a profile corpus via server-side retrieval with
  anti-hallucination constraints; deployed on Vercel.
↳ Live: [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)

### Fire Detection & Alerting System · Python, OpenCV, Haar cascades, threading | 2023 – 24
> B.Tech capstone, team of 4 — real-time detection from a live camera feed, with off-site alerting
- Trained a custom OpenCV Haar cascade end to end and chose it over heavier detectors on latency grounds — reaction
  time beats a few points of accuracy for a spreading fire.
- Built the real-time loop: per-frame detection, bounding-box overlay, and threaded alarm and WhatsApp alerting so
  detection and notification run without blocking each other.

## Publication
K. M. Asudaria, **M. F. Abdul Khadeer**, S. S. Rafai, K. S. Reddy. “A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning.” _Quest Journal of Software Engineering and Simulation_, Vol. 9(12), pp. 43–51, Dec 2023 (ISSN 2321-3795, peer-reviewed). Benchmarked 5 edge-detection operators × 8 classifiers (40 combinations) on a 15,000-image, four-class maize dataset; best result Sobel + MLP at 94.75%. Implemented the Canny arm (OpenCV + scikit-learn).  ↳ [questjournals.org/jses](http://www.questjournals.org/jses/archive.html)   ·   Code: [github.com/faraaz817/Machine_Learning](https://github.com/faraaz817/Machine_Learning)

## Certifications, Awards & Leadership
- IBM Z Xplore – Concepts and IBM Z & LinuxONE Community Contributor – Level 1 (IBM digital badges via Credly, 2026).
- Smart India Hackathon delegate, Government of India (2022)  ·  Certificate of Publication, Quest Journals (2023).
- Head, Vachan Speakers Club, KMIT (2022–23) — led public-speaking workshops, debates and communication seminars.
- Volunteer fundraiser, Taher Foundation (2023).

## Languages
English (native / bilingual)  •  Urdu (native / bilingual)  •  Hindi (full professional)  •  Telugu (elementary)

## Referees
Available on request.
