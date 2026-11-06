# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)  •  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
_Full Australian working rights (Temporary Graduate visa, subclass 485) — no sponsorship required  •  Available immediately_

## Profile
Master of Artificial Intelligence graduate (RMIT, 2026, Computer Vision coursework) with a B.Tech in IT (Neural Networks
& Deep Learning) and co-author of a peer-reviewed computer-vision paper on image classification. Built a real-time
detector trained end to end and chosen on latency grounds for constrained hardware, and an AI/ML internship where
evaluation harnesses and a hand-built ground-truth set drove the fixes. Seeking an Engineer II, Deep Learning role
on Shield AI's perception team in Melbourne.

## Technical Skills
**Computer Vision:** OpenCV (image classification, object detection, Haar cascade training, edge detection — Canny/Sobel), IoU evaluation, real-time camera pipelines
**Machine Learning:** Python (primary), scikit-learn (incl. MLP), XGBoost, pandas, LLM fine-tuning of transformer models (Unsloth, QLoRA, GGUF), Ollama, evaluation design (precision/recall, IoU, sensitivity analysis, ground-truth construction)
**Engineering:** Git / GitHub, GitHub Actions CI, Docker, Linux, Colab / Jupyter, Kestra, AWS (CloudFormation, Fargate), FastAPI, SQL
**Also:** Rust, Kotlin, TypeScript, JavaScript, Bash; Claude Code (skills, hooks, subagents), MCP servers

## Key Projects
### Fire Detection & Alerting System · Python, OpenCV, Haar cascades, threading | 2023 – 24
> B.Tech capstone, team of 4 — real-time detection from a live camera feed, with off-site alerting
- Trained a custom OpenCV Haar cascade end to end (positive marking, sample vectorisation, 15-stage training, XML
  export) and chose it over heavier detectors on latency grounds — reaction time beats a few points of accuracy.
- Built the real-time loop: per-frame detection, bounding-box overlay, and threaded alarm and WhatsApp alerting so
  capture never blocks; targeted sub-5-second response, restart-safe, on a 4 GB / 2.9 GHz minimum spec.

### Gemma Delegation System — local/cloud LLM hybrid · Node.js, MCP SDK, Ollama, Unsloth/QLoRA, Colab | May 2026
- Fine-tuned a transformer model on curated examples (4-bit QLoRA, LoRA r=16) in Colab and exported GGUF for local
  inference in Ollama; accept/reject feedback curates the JSONL training set.
- Built the MCP server that delegates lightweight tasks to the local model and fails open to the frontier model.
↳ GitHub: [github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system)

- **MGM Prayer Alerts — Android app in community use:** wrote functional requirements before coding, reviewed the code against them and fixed a critical AM/PM storage bug; added GitHub Actions to test, build and publish releases. (Kotlin, JUnit)  [github.com/faraaz817/MgmPrayerAlerts](https://github.com/faraaz817/MgmPrayerAlerts)

## Publication
K. M. Asudaria, **M. F. Abdul Khadeer**, S. S. Rafai, K. S. Reddy. “A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning.” _Quest Journal of Software Engineering and Simulation_, Vol. 9(12), pp. 43–51, Dec 2023 (ISSN 2321-3795, peer-reviewed). Benchmarked 5 edge-detection operators × 8 classifiers (40 combinations) as a lesion feature-extraction step on a 15,000-image, four-class maize dataset; best result Sobel + MLP at 94.75%. Implemented the Canny arm (OpenCV + scikit-learn, ten classifiers).  ↳ [questjournals.org/jses](http://www.questjournals.org/jses/archive.html)   ·   Code: [github.com/faraaz817/Machine_Learning](https://github.com/faraaz817/Machine_Learning)

## Experience
### AI/ML Engineering Intern — Prodegee | Mar 2026 – Jun 2026
> Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning
- Built an IoU evaluation harness for compound polygons and traced all three generators' failures to a ~35× over-scoped
  upstream cluster rather than a fitting fault, which redirected the next assignment.
- Co-built a 40-school satellite-verified ground-truth set and used it to correct a published baseline (6–13% → 37%);
  published a negative result showing a proximity penalty hurt accuracy at every threshold.
- Built a ±20% sensitivity harness that identified cluster radius as the dominant parameter (±36–44% swing across 191
  villages), driving a 75 → 200 m recalibration that fixed a 90%+ household under-count (0.069 → 0.415).
- Designed and built the school-geolocation algorithm at the core of the team's pipeline (7.2M Overture building polygons,
  BFS spatial clustering, composite scoring); ran it on 18,121 schools in Côte d'Ivoire and ported it to Burundi and Chad.
- Trained an XGBoost multi-output tier regressor over 200 villages in 7 Mauritanian Wilayas; documented that its 0.816
  "confidence" measured agreement with the training heuristic, not accuracy.
- Replaced a binary distance cutoff with exponential-decay scoring and a weighted confidence score; added per-country
  sigmoid normalisation so one threshold works in all three countries.
- Led 3 of 10 team assignments and was primary author of 3 of 4 formal deliverables (68 commits, 7 peer reviews); pinned
  upstream inputs by commit SHA for reproducible re-runs and wrote the semester-2 handoff memo.
> **Tools:** Python, scikit-learn, XGBoost, pandas, GeoPandas, Shapely, QGIS, Kestra, Git

### Full-Stack Developer Intern — Vayaa | Sep 2026 – present
> Melbourne, VIC  ·  hybrid  ·  company website: Python (FastAPI) + PostgreSQL, React + TypeScript, deployed on AWS
- Built the contact-enquiry API in Rust, then led its port to Python (FastAPI) on the mentor's call, gating the
  cutover on 50 parity tests passing against both backends.
- Took it live on AWS with CloudFormation (CloudFront → ECS Fargate → RDS PostgreSQL), fixing Free-plan limits, a
  CloudFront account block and RDS TLS (verify-full); kept a decision log for every design call.

### Dispatch Team Member — Amart Furniture | Feb 2025 – Mar 2026
> Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study
- Tracked and reconciled stock in the inventory system, processed customer orders and resolved fulfilment discrepancies across 5 Melbourne stores; trained a new team member.

## Education
### Master of Artificial Intelligence — RMIT University | Jul 2024 – Jul 2026
> Melbourne, VIC  ·  Coursework: **Computer Vision**, Machine Learning, AI Systems Design, Intelligent Decision Making (ASP/Clingo), IoT
### Bachelor of Technology (Information Technology) — Keshav Memorial Institute of Technology | Dec 2020 – May 2024
> Hyderabad, India (affiliated to JNTUH)  ·  Coursework incl. Artificial Neural Networks & Deep Learning, Machine Learning, Data Mining

## Certifications, Awards & Leadership
- Certificate of Publication, Quest Journals (2023)  ·  Smart India Hackathon delegate, Government of India (2022).
- IBM Z Xplore – Concepts and IBM Z & LinuxONE Community Contributor – Level 1 (IBM digital badges via Credly, 2026).
- Head, Vachan Speakers Club, KMIT (2022–23) — led public-speaking workshops, debates and communication seminars.

## Languages
English (native / bilingual)  •  Urdu (native / bilingual)  •  Hindi (full professional)  •  Telugu (elementary)

## Referees
Available on request.
