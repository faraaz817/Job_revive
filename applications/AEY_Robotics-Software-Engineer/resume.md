# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)  •  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
_Full Australian working rights (Temporary Graduate visa, subclass 485) — no sponsorship required  •  Available immediately_

## Profile
Master of Artificial Intelligence graduate (RMIT, 2026) with a B.Tech in IT, coursework including Internet of Things (IoT),
and an AI/ML internship delivering production pipelines at national scale. Builds software that has to work in the real
world — computer vision, evaluation harnesses, and end-to-end apps — and debugs complex behaviour when systems
misbehave. Seeking a Robotics Software Engineer role with AEY & Associates, Sydney (open to relocate).

## Technical Skills
**Languages:** Python (primary), TypeScript, JavaScript, Kotlin, SQL, Bash
**AI / Computer Vision:** OpenCV (image classification, edge detection, Haar cascades), scikit-learn, XGBoost, evaluation design (precision/recall, IoU, sensitivity analysis, ground-truth construction), LLM tooling (Ollama, Unsloth/QLoRA)
**Software engineering:** Linux, Git / GitHub, Docker (basic), Node.js, Next.js, REST/JSON, Android (Kotlin), PWA, testing (JUnit, evaluation harnesses)
**Also:** GeoPandas / Shapely (large-scale spatial pipelines), Claude Code / Cursor, Kestra, Colab / Jupyter

## Experience
### AI/ML Engineering Intern — Prodegee | Mar 2026 – Jun 2026
> Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning
- Built an IoU evaluation harness for compound polygons and traced all three generators' failures to a ~35× over-scoped
  upstream cluster rather than a fitting fault, which redirected the next assignment.
- Built a ±20% sensitivity harness that identified cluster radius as the dominant parameter (±36–44% swing across 191
  villages), driving a 75 → 200 m recalibration that fixed a 90%+ household under-count (0.069 → 0.415).
- Designed and built the school-geolocation algorithm at the core of the team's pipeline (7.2M Overture building
  polygons, BFS spatial clustering, composite scoring); ran it on 18,121 schools in Côte d'Ivoire and ported it to
  Burundi and Chad.
- Co-built a 40-school satellite-verified ground-truth set and used it to correct a published baseline (6–13% → 37%);
  published a negative result showing a proximity penalty hurt accuracy at every threshold.
- Led 3 of 10 team assignments and was primary author of 3 of 4 formal deliverables (68 commits, 7 peer reviews);
  pinned upstream inputs by commit SHA for reproducible re-runs and wrote the semester-2 handoff memo.
- Replaced a binary distance cutoff with exponential-decay scoring and a weighted confidence score; added per-country
  sigmoid normalisation so one threshold works in all three countries; authored cross-team handoff contracts.
> **Tools:** Python, Git, scikit-learn, GeoPandas, Shapely, Kestra, Claude Code (MCP, hooks), Docker (basic)

### Dispatch Team Member — Amart Furniture | Feb 2025 – Mar 2026
> Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study
- Tracked and reconciled stock in the inventory system, processed customer orders and resolved fulfilment discrepancies across 5 Melbourne stores; trained a new team member.

## Education
### Master of Artificial Intelligence — RMIT University | Jul 2024 – Oct 2026
> Melbourne, VIC  ·  Coursework: Computer Vision, Machine Learning, Internet of Things (IoT), AI Systems Design, Intelligent Decision Making (ASP/Clingo)
### Bachelor of Technology (Information Technology) — Keshav Memorial Institute of Technology | Dec 2020 – May 2024
> Hyderabad, India (affiliated to JNTUH)  ·  Coursework incl. Machine Learning, Neural Networks & Deep Learning, Data Mining

## Key Projects
### Fire Detection & Alerting System — B.Tech capstone, team of 4 · Python, OpenCV | 2024
- Trained a custom OpenCV Haar cascade for real-time fire detection, chosen over heavier detectors for latency; a
  threaded pipeline raises an alarm and sends WhatsApp alerts to the nearest fire station.

### Gemma Delegation System — local/cloud LLM hybrid · Node.js, MCP SDK, Ollama | May 2026
- Built an MCP server that delegates lightweight tasks to a local Gemma model, failing open to the frontier model when
  Ollama is unavailable so delegation never blocks the user.
- Closed the loop: accept/reject feedback updates a capability profile and curates a JSONL dataset; fine-tunes on
  confirmed examples (4-bit QLoRA) and exports GGUF back into Ollama.
↳ GitHub: [github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system)

- **Bro — interactive AI portfolio chatbot:** server-side retrieval with anti-hallucination constraints; Next.js, TypeScript, Anthropic API, Vercel.  ↳ [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)

### Time Flow — ADHD-focused planner (PWA) · JavaScript, Service Worker | Jul – Sep 2026
- Built and deployed an installable, offline-first PWA (4,600 lines of vanilla JS); fixed input-focus loss under
  1-second live re-renders with a targeted DOM-patch path instead of a full re-render.
- Implemented dual-timer focus sessions, weekly/monthly reminder scheduling and a cache-first service worker for system
  notifications; built a JS ↔ Kotlin bridge so the same code runs in a native Android wrapper with exact alarms.
↳ Live: [faraaz817.github.io/time-flow-web](https://faraaz817.github.io/time-flow-web/)   ·   GitHub: [github.com/faraaz817/time-flow-web](https://github.com/faraaz817/time-flow-web)

### MGM Prayer Alerts — Android app for Melbourne Grand Mosque · Kotlin, AlarmManager, JUnit | Aug 2026
- Shipped exact Azaan alarms with nightly refresh and reboot survival; in use by community members.
- Wrote acceptance criteria before coding, then fixed AM/PM storage and refresh re-arm bugs; unit-tested time parsing.
↳ GitHub: [github.com/faraaz817/MgmPrayerAlerts](https://github.com/faraaz817/MgmPrayerAlerts)

- **NeuroVisualZ — exam-timetabling AI, RMIT (team of 3):** built the YAML-to-ASP encoder that translates timetabling instances into Clingo logic programs; scoped Levels 1–4 (room allocation, ITC'07 soft constraints, Prolog validator).

## Publication
K. M. Asudaria, **M. F. Abdul Khadeer**, S. S. Rafai, K. S. Reddy. “A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning.” _Quest Journal of Software Engineering and Simulation_, Vol. 9(12), pp. 43–51, Dec 2023 (ISSN 2321-3795, peer-reviewed). Benchmarked 5 edge-detection operators × 8 classifiers; best result Sobel + MLP at 94.75%. Implemented the Canny arm (OpenCV + scikit-learn).  ↳ [questjournals.org/jses](http://www.questjournals.org/jses/archive.html)   ·   Code: [github.com/faraaz817/Machine_Learning](https://github.com/faraaz817/Machine_Learning)

## Certifications, Awards & Leadership
- Head, Vachan Speakers Club, KMIT (2022–23) — led public-speaking workshops, debates and communication seminars.
- IBM Z Xplore – Concepts and IBM Z & LinuxONE Community Contributor – Level 1 (IBM digital badges via Credly, 2026).
- Smart India Hackathon delegate, Government of India (2022)  ·  Certificate of Publication, Quest Journals (2023).
- Volunteer fundraiser, Taher Foundation (2023).

## Languages
English (native / bilingual)  •  Urdu (native / bilingual)  •  Hindi (full professional)  •  Telugu (elementary)

## Referees
Available on request.
