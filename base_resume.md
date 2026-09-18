# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)  •  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
_Full Australian working rights (Temporary Graduate visa, subclass 485) — no sponsorship required  •  Available immediately_

## Profile
Master of Artificial Intelligence graduate (RMIT, 2026) with a B.Tech in IT and an AI/ML engineering internship
delivering geospatial ML pipelines at national scale. Co-author of a peer-reviewed computer-vision paper.
Works end to end — requirements, code, tests, review — across Python ML, Android (Kotlin) and web; shipped an Android
app, an offline-first PWA and an MCP-based LLM tool in 2026. Seeking a graduate AI/ML or software engineering role anywhere in Australia.

## Technical Skills
**Languages:** Python (primary), Kotlin, JavaScript, TypeScript, SQL, Prolog / ASP (Clingo), JCL, Bash
**AI / ML:** scikit-learn, XGBoost, OpenCV (image classification, edge detection, Haar cascades), evaluation design (precision/recall, IoU, sensitivity analysis, ground-truth construction), LLM fine-tuning (Unsloth, QLoRA, GGUF), Ollama, Answer Set Programming, prompt engineering, retrieval-grounded generation
**Geospatial:** GeoPandas, Shapely, QGIS, PostGIS, Overture Maps, OpenStreetMap, GeoPackage / GeoJSON / Parquet
**Software:** Android (Kotlin, AlarmManager, BroadcastReceiver, notification channels, Gradle KTS, JUnit), PWA (service workers, Web Notifications), Node.js, Next.js, Prisma, REST/JSON integration
**AI-assisted engineering:** MCP servers, Claude Code (skills, hooks, subagents), Cursor, Anthropic API (prompt caching, routing)
**Tooling & platforms:** Git / GitHub, Kestra, Docker (basic), Colab / Jupyter, Vercel, GitHub Pages, IBM z/OS + Zowe, Linux

## Experience
### AI/ML Engineering Intern — Prodegee | Mar 2026 – Jun 2026
> Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning
- Designed and built the school-geolocation algorithm at the core of the team's pipeline (7.2M Overture building polygons, BFS spatial clustering, composite scoring); ran it on 18,121 schools in Côte d'Ivoire and ported it to Burundi and Chad.
- Replaced a binary distance cutoff with exponential-decay scoring and a weighted confidence score; added per-country sigmoid normalisation so one threshold works in all three countries; authored cross-team handoff contracts.
- Built a ±20% sensitivity harness that identified cluster radius as the dominant parameter (±36–44% swing across 191 villages), driving a 75 → 200 m recalibration that fixed a 90%+ household under-count (0.069 → 0.415).
- Built an IoU evaluation harness for compound polygons and traced all three generators' failures to a ~35× over-scoped upstream cluster rather than a fitting fault, which redirected the next assignment.
- Ran footprint inference across 200 villages in 7 Mauritanian Wilayas and trained an XGBoost multi-output tier regressor; documented that its 0.816 "confidence" measured agreement with the training heuristic, not accuracy.
- Co-built a 40-school satellite-verified ground-truth set and used it to correct a published baseline (6–13% → 37%); published a negative result showing a proximity penalty hurt accuracy at every threshold.
- Led 3 of 10 team assignments and was primary author of 3 of 4 formal deliverables (68 commits, 7 peer reviews); pinned upstream inputs by commit SHA for reproducible re-runs and wrote the semester-2 handoff memo.
- Built a Claude API model router that classifies task complexity with a cheap Haiku call and routes to Haiku / Sonnet / Opus, keeping cost proportional to difficulty.
> **Tools:** Python, GeoPandas, Shapely, scikit-learn, XGBoost, pandas, Kestra, QGIS, GeoPackage, Git, Claude Code (MCP, hooks)

### Dispatch Team Member — Amart Furniture | Feb 2025 – Mar 2026
> Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study
- Tracked and reconciled stock in the inventory system, processed customer orders and resolved fulfilment discrepancies across 5 Melbourne stores; trained a new team member.

## Education
### Master of Artificial Intelligence — RMIT University | Jul 2024 – Jul 2026
> Melbourne, VIC  ·  Coursework: Intelligent Decision Making (ASP/Clingo), Computer Vision, Machine Learning, AI Systems Design, Internet of Things (IoT)
### Bachelor of Technology (Information Technology) — Keshav Memorial Institute of Technology | Dec 2020 – May 2024
> Hyderabad, India (affiliated to JNTUH)  ·  Coursework incl. Machine Learning, Neural Networks & Deep Learning, Data Mining

## Key Projects
### Time Flow — ADHD-focused planner (PWA) · JavaScript, Service Worker, Web Notifications, Kotlin bridge | Jul – Sep 2026
- Built and deployed an installable, offline-first PWA (4,600 lines of vanilla JS, no framework or build step) that schedules goals, recurring targets and reminders into free minutes using an urgency × importance scoring model.
- Implemented dual-timer focus sessions, weekly/monthly reminder scheduling and a cache-first service worker for system notifications; built a JS ↔ Kotlin bridge so the same code runs in a native Android wrapper with exact alarms.
- Fixed input-focus loss under 1-second live re-renders with a targeted DOM-patch path instead of a full re-render.
↳ Live: [faraaz817.github.io/time-flow-web](https://faraaz817.github.io/time-flow-web/)   ·   GitHub: [github.com/faraaz817/time-flow-web](https://github.com/faraaz817/time-flow-web)

### MGM Prayer Alerts — Android app for Melbourne Grand Mosque · Kotlin, Android 8–15, AlarmManager, JUnit | Aug 2026
- Shipped an Android app that fetches the mosque's daily timetable, schedules exact Azaan alarms with per-prayer toggles and custom sounds, refreshes nightly and survives reboot; in use by community members.
- Wrote functional requirements (scope, decision log, acceptance criteria) before coding, then reviewed the code against them: fixed a critical AM/PM storage bug and a refresh alarm that stopped re-arming; unit-tested time parsing.
↳ GitHub: [github.com/faraaz817/MgmPrayerAlerts](https://github.com/faraaz817/MgmPrayerAlerts)

### Gemma Delegation System — local/cloud LLM hybrid · Node.js, MCP SDK, Ollama, Unsloth/QLoRA, Colab | May 2026
- Built an MCP server that lets Claude Code or Cursor delegate lightweight tasks to a locally hosted Gemma model, failing open to the frontier model whenever Ollama is unavailable so delegation never blocks the user.
- Closed the loop: accept/reject feedback updates a capability profile and curates a JSONL dataset; a Colab notebook fine-tunes on confirmed examples (4-bit QLoRA, LoRA r=16) and exports GGUF back into Ollama.
↳ GitHub: [github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system)

- **Bro — interactive AI portfolio chatbot:** recruiter-facing site that answers questions from a profile corpus via server-side retrieval with anti-hallucination constraints; Anthropic API, deployed on Vercel. (Next.js, TypeScript, Prisma/Postgres)
↳ Live: [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
- **Fire Detection & Alerting System (B.Tech capstone, team of 4):** trained a custom OpenCV Haar cascade (Python) for real-time fire detection, chosen over heavier detectors for latency; a threaded pipeline raises an alarm and sends WhatsApp alerts to the nearest fire station.
- **NeuroVisualZ — exam-timetabling AI, RMIT (team of 3):** built the YAML-to-ASP encoder that translates timetabling instances into Clingo logic programs; scoped Levels 1–4 (room allocation, ITC'07 soft constraints, Prolog validator).
- **Agent skills for Claude Code / Cursor:** authored five reusable skills — CO-STAR requirements builder, Socratic tutor, better-way reviewer, skill sync, and a pikepdf CLI that unlocks signature-locked PDFs.  [github.com/faraaz817/My_Skills](https://github.com/faraaz817/My_Skills)
- **IBM Z development toolchain:** connected VS Code to a live z/OS environment via Zowe CLI/Explorer and z/OSMF REST APIs; submitted and verified a JCL job with condition code 0000. (IBM z/OS, Zowe, JCL)

## Publication
K. M. Asudaria, **M. F. Abdul Khadeer**, S. S. Rafai, K. S. Reddy. “A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning.” _Quest Journal of Software Engineering and Simulation_, Vol. 9(12), pp. 43–51, Dec 2023 (ISSN 2321-3795, peer-reviewed). Benchmarked 5 edge-detection operators × 8 classifiers (40 combinations) as a lesion feature-extraction step on a 15,000-image, four-class maize dataset; best result Sobel + MLP at 94.75%. Implemented the Canny arm (OpenCV + scikit-learn, ten classifiers).  ↳ [questjournals.org/jses](http://www.questjournals.org/jses/archive.html)   ·   Code: [github.com/faraaz817/Machine_Learning](https://github.com/faraaz817/Machine_Learning)

## Certifications, Awards & Leadership
- IBM Z Xplore – Concepts and IBM Z & LinuxONE Community Contributor – Level 1 (IBM digital badges via Credly, 2026).
- Smart India Hackathon delegate, Government of India (2022)  ·  Certificate of Publication, Quest Journals (2023).
- Head, Vachan Speakers Club, KMIT (2022–23) — led public-speaking workshops, debates and communication seminars.
- Volunteer fundraiser, Taher Foundation (2023).

## Languages
English (native / bilingual)  •  Urdu (native / bilingual)  •  Hindi (full professional)  •  Telugu (elementary)

## Referees
Available on request.
