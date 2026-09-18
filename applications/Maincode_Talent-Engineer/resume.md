# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)  •  [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)
_Full Australian working rights (Temporary Graduate visa, subclass 485) — no sponsorship required  •  Available immediately_

## Profile
Master of Artificial Intelligence graduate (RMIT, 2026) with a B.Tech in IT — technical depth to judge engineering
fundamentals, and practice testing claims against evidence. Builds real tools in Python and TypeScript (screening-adjacent
automation, MCP servers, recruiter-facing AI) and works carefully with people: peer review, stakeholder requirements,
workshops. Seeking a Talent Engineer role at Maincode, Melbourne.

## Technical Skills
**Languages:** Python (primary), TypeScript, JavaScript, SQL, Bash, Kotlin
**Judgment & evaluation:** evaluation design (precision/recall, IoU, sensitivity analysis, ground-truth construction), technical writing, peer review
**Tooling & automation:** MCP servers, Claude Code (skills, hooks, subagents), Cursor, Anthropic API (prompt caching, routing), Node.js, Next.js, Prisma/Postgres, REST/JSON, Kestra, Git / GitHub
**AI / ML literacy:** scikit-learn, XGBoost, OpenCV, Ollama, LLM fine-tuning (Unsloth, QLoRA, GGUF), retrieval-grounded generation
**Also:** Docker (basic), Linux, Vercel, Colab / Jupyter

## Experience
### AI/ML Engineering Intern — Prodegee | Mar 2026 – Jun 2026
> Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning
- Co-built a 40-school satellite-verified ground-truth set and used it to correct a published baseline (6–13% → 37%);
  published a negative result showing a proximity penalty hurt accuracy at every threshold.
- Ran footprint inference across 200 villages in 7 Mauritanian Wilayas and trained an XGBoost multi-output tier
  regressor; documented that its 0.816 "confidence" measured agreement with the training heuristic, not accuracy.
- Built an IoU evaluation harness for compound polygons and traced all three generators' failures to a ~35× over-scoped
  upstream cluster rather than a fitting fault, which redirected the next assignment.
- Built a ±20% sensitivity harness that identified cluster radius as the dominant parameter (±36–44% swing across 191
  villages), driving a 75 → 200 m recalibration that fixed a 90%+ household under-count (0.069 → 0.415).
- Led 3 of 10 team assignments and was primary author of 3 of 4 formal deliverables (68 commits, 7 peer reviews);
  pinned upstream inputs by commit SHA for reproducible re-runs and wrote the semester-2 handoff memo.
- Built a Claude API model router that classifies task complexity with a cheap Haiku call and routes to Haiku / Sonnet /
  Opus, keeping cost proportional to difficulty.
- Replaced a binary distance cutoff with exponential-decay scoring and a weighted confidence score; added per-country
  sigmoid normalisation so one threshold works in all three countries; authored cross-team handoff contracts.
> **Tools:** Python, Git, Claude Code (MCP, hooks), Kestra, scikit-learn, pandas, GeoPandas, Shapely

### Dispatch Team Member — Amart Furniture | Feb 2025 – Mar 2026
> Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study
- Tracked and reconciled stock in the inventory system, processed customer orders and resolved fulfilment discrepancies across 5 Melbourne stores; trained a new team member.

## Education
### Master of Artificial Intelligence — RMIT University | Jul 2024 – Oct 2026
> Melbourne, VIC  ·  Coursework: AI Systems Design, Machine Learning, Computer Vision, Intelligent Decision Making (ASP/Clingo)
### Bachelor of Technology (Information Technology) — Keshav Memorial Institute of Technology | Dec 2020 – May 2024
> Hyderabad, India (affiliated to JNTUH)  ·  Coursework incl. Machine Learning, Neural Networks & Deep Learning, Data Mining

## Key Projects
### Bro — interactive AI portfolio chatbot · Next.js, TypeScript, Prisma/Postgres, Anthropic API | 2026
- Recruiter-facing site that answers questions from a profile corpus via server-side retrieval with anti-hallucination
  constraints; Anthropic API, deployed on Vercel.
↳ Live: [job-go-mauve.vercel.app/portfolio](https://job-go-mauve.vercel.app/portfolio)

### Gemma Delegation System — local/cloud LLM hybrid · Node.js, MCP SDK, Ollama, Unsloth/QLoRA | May 2026
- Built an MCP server that lets Claude Code or Cursor delegate lightweight tasks to a locally hosted Gemma model,
  failing open to the frontier model whenever Ollama is unavailable so delegation never blocks the user.
- Closed the loop: accept/reject feedback updates a capability profile and curates a JSONL dataset for later fine-tuning.
↳ GitHub: [github.com/faraaz817/gemma-delegation-system](https://github.com/faraaz817/gemma-delegation-system)

### Agent skills for Claude Code / Cursor · reusable skills and workflows | 2026
- Authored five reusable skills — CO-STAR requirements builder, Socratic tutor, better-way reviewer, skill sync, and a
  pikepdf CLI — packaged for others to pick up and run.
↳ GitHub: [github.com/faraaz817/My_Skills](https://github.com/faraaz817/My_Skills)

### MGM Prayer Alerts — Android app for Melbourne Grand Mosque · Kotlin, AlarmManager, JUnit | Aug 2026
- Wrote functional requirements (scope, decision log, acceptance criteria) with stakeholders before coding; fixed a
  critical AM/PM storage bug and a refresh alarm that stopped re-arming; unit-tested time parsing.
↳ GitHub: [github.com/faraaz817/MgmPrayerAlerts](https://github.com/faraaz817/MgmPrayerAlerts)

- **Time Flow — ADHD-focused planner (PWA):** installable offline-first PWA (4,600 lines of vanilla JS); fixed input-focus loss under 1-second live re-renders.  ↳ [faraaz817.github.io/time-flow-web](https://faraaz817.github.io/time-flow-web/)
- **Fire Detection & Alerting System (B.Tech capstone, team of 4):** trained a custom OpenCV Haar cascade (Python) for real-time fire detection, chosen over heavier detectors for latency; threaded pipeline with WhatsApp alerts.

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
