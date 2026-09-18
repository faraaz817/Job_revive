# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)  •  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
_Full Australian working rights (Temporary Graduate visa, subclass 485) — no sponsorship required  •  Available immediately_

## Profile
Master of Artificial Intelligence graduate (RMIT, 2026) with a B.Tech in IT and an AI/ML engineering internship
shipping production pipelines at national scale. Builds automations and AI tooling others can reuse — MCP servers,
Claude Code skills, API routers — and scopes problems with non-technical stakeholders before writing code. Uses AI
where it earns its place, and conventional software when it is the better call. Seeking an AI Solutions Engineer
role at pay.com.au, Melbourne.

## Technical Skills
**Languages:** Python (primary), TypeScript, JavaScript, SQL, Bash, Kotlin
**Automation & APIs:** REST/JSON, Node.js, MCP servers, Kestra, Next.js, Prisma/Postgres, agent-style workflows
**AI tools:** Claude Code (skills, hooks, subagents), Cursor, Anthropic API (prompt caching, routing), Ollama, LLM fine-tuning (Unsloth, QLoRA, GGUF), prompt engineering, retrieval-grounded generation
**Engineering habits:** evaluation / test harnesses (IoU, sensitivity analysis, JUnit), Git / GitHub, Docker (basic), Linux, Vercel
**Also:** scikit-learn, XGBoost, OpenCV, GeoPandas (pipeline context)

## Experience
### AI/ML Engineering Intern — Prodegee | Mar 2026 – Jun 2026
> Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning
- Designed and built the school-geolocation algorithm at the core of the team's pipeline (7.2M Overture building
  polygons, BFS spatial clustering, composite scoring); ran it on 18,121 schools in Côte d'Ivoire and ported it to
  Burundi and Chad.
- Built an IoU evaluation harness for compound polygons and traced all three generators' failures to a ~35× over-scoped
  upstream cluster rather than a fitting fault, which redirected the next assignment.
- Built a ±20% sensitivity harness that identified cluster radius as the dominant parameter (±36–44% swing across 191
  villages), driving a 75 → 200 m recalibration that fixed a 90%+ household under-count (0.069 → 0.415).
- Co-built a 40-school satellite-verified ground-truth set and used it to correct a published baseline (6–13% → 37%);
  published a negative result showing a proximity penalty hurt accuracy at every threshold.
- Led 3 of 10 team assignments and was primary author of 3 of 4 formal deliverables (68 commits, 7 peer reviews);
  pinned upstream inputs by commit SHA for reproducible re-runs and wrote the semester-2 handoff memo.
- Built a Claude API model router that classifies task complexity with a cheap Haiku call and routes to Haiku / Sonnet /
  Opus, keeping cost proportional to difficulty.
- Replaced a binary distance cutoff with exponential-decay scoring and a weighted confidence score; added per-country
  sigmoid normalisation so one threshold works in all three countries; authored cross-team handoff contracts.
> **Tools:** Python, Kestra, Git, Claude Code (MCP, hooks), scikit-learn, pandas, GeoPandas, Shapely, Docker (basic)

### Dispatch Team Member — Amart Furniture | Feb 2025 – Mar 2026
> Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study
- Tracked and reconciled stock in the inventory system, processed customer orders and resolved fulfilment discrepancies across 5 Melbourne stores; trained a new team member.

## Education
### Master of Artificial Intelligence — RMIT University | Jul 2024 – Oct 2026
> Melbourne, VIC  ·  Coursework: AI Systems Design, Machine Learning, Computer Vision, Intelligent Decision Making (ASP/Clingo)
### Bachelor of Technology (Information Technology) — Keshav Memorial Institute of Technology | Dec 2020 – May 2024
> Hyderabad, India (affiliated to JNTUH)  ·  Coursework incl. Machine Learning, Neural Networks & Deep Learning, Data Mining

## Key Projects
### Gemma Delegation System — local/cloud LLM hybrid · Node.js, MCP SDK, Ollama, Unsloth/QLoRA | May 2026
- Built an MCP server that lets Claude Code or Cursor delegate lightweight tasks to a locally hosted Gemma model,
  failing open to the frontier model whenever Ollama is unavailable so delegation never blocks the user.
- Closed the loop: accept/reject feedback updates a capability profile and curates a JSONL dataset; a Colab notebook
  fine-tunes on confirmed examples (4-bit QLoRA, LoRA r=16) and exports GGUF back into Ollama.
↳ GitHub: [github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system)

### Agent skills for Claude Code / Cursor · skills, hooks, reusable workflows | 2026
- Authored five reusable skills — CO-STAR requirements builder, Socratic tutor, better-way reviewer, skill sync, and a
  pikepdf CLI that unlocks signature-locked PDFs — packaged for others to pick up and run.
↳ GitHub: [github.com/faraaz817/My_Skills](https://github.com/faraaz817/My_Skills)

### MGM Prayer Alerts — Android app for Melbourne Grand Mosque · Kotlin, AlarmManager, JUnit | Aug 2026
- Wrote functional requirements (scope, decision log, acceptance criteria) with stakeholders before coding; shipped an
  app now in use by community members.
- Fixed a critical AM/PM storage bug and a refresh alarm that stopped re-arming; unit-tested time parsing.
↳ GitHub: [github.com/faraaz817/MgmPrayerAlerts](https://github.com/faraaz817/MgmPrayerAlerts)

### Bro — interactive AI portfolio chatbot · Next.js, TypeScript, Prisma/Postgres, Anthropic API | 2026
- Recruiter-facing site that answers questions from a profile corpus via server-side retrieval with anti-hallucination
  constraints; Anthropic API, deployed on Vercel.
↳ Live: [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)

### Time Flow — ADHD-focused planner (PWA) · JavaScript, Service Worker | Jul – Sep 2026
- Built and deployed an installable, offline-first PWA (4,600 lines of vanilla JS); fixed input-focus loss under
  1-second live re-renders with a targeted DOM-patch path instead of a full re-render.
↳ Live: [faraaz817.github.io/time-flow-web](https://faraaz817.github.io/time-flow-web/)   ·   GitHub: [github.com/faraaz817/time-flow-web](https://github.com/faraaz817/time-flow-web)

- **Fire Detection & Alerting System (B.Tech capstone, team of 4):** trained a custom OpenCV Haar cascade (Python) for real-time fire detection, chosen over heavier detectors for latency; a threaded pipeline raises an alarm and sends WhatsApp alerts to the nearest fire station.

## Publication
K. M. Asudaria, **M. F. Abdul Khadeer**, S. S. Rafai, K. S. Reddy. “A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning.” _Quest Journal of Software Engineering and Simulation_, Vol. 9(12), pp. 43–51, Dec 2023 (ISSN 2321-3795, peer-reviewed). Best result Sobel + MLP at 94.75%. Implemented the Canny arm (OpenCV + scikit-learn).  ↳ [questjournals.org/jses](http://www.questjournals.org/jses/archive.html)

## Certifications, Awards & Leadership
- Head, Vachan Speakers Club, KMIT (2022–23) — led public-speaking workshops, debates and communication seminars.
- IBM Z Xplore – Concepts and IBM Z & LinuxONE Community Contributor – Level 1 (IBM digital badges via Credly, 2026).
- Smart India Hackathon delegate, Government of India (2022)  ·  Certificate of Publication, Quest Journals (2023).
- Volunteer fundraiser, Taher Foundation (2023).

## Languages
English (native / bilingual)  •  Urdu (native / bilingual)  •  Hindi (full professional)  •  Telugu (elementary)

## Referees
Available on request.
