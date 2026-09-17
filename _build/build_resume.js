// Builds Faraaz_Mohammed_Resume_Base.docx in the style of the existing template
// (A4, Calibri, navy #1F3A5F headings with bottom rule, grey #444444 meta text).
const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, ExternalHyperlink, PositionalTab,
  PositionalTabAlignment, PositionalTabRelativeTo, PositionalTabLeader,
  AlignmentType, LevelFormat, BorderStyle, Tab, TabStopType,
} = require("docx");

const RIGHT_EDGE = 11906 - 780 - 780; // usable width in DXA
const rightTab = { tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_EDGE }] };

const NAVY = "1F3A5F";
const GREY = "444444";
const OUT = process.argv[2] || "Faraaz_Mohammed_Resume_Base.docx";

// ---------- helpers ----------
const t = (text, o = {}) => new TextRun({ text, size: 20, ...o });
const grey = (text, o = {}) => new TextRun({ text, size: 19, color: GREY, ...o });
const link = (text, url, size = 18) =>
  new ExternalHyperlink({
    link: url,
    children: [new TextRun({ text, size, color: NAVY, underline: {} })],
  });
const rtab = () => new TextRun({ children: [new Tab()] });

const heading = (text) =>
  new Paragraph({
    spacing: { before: 150, after: 60 },
    border: { bottom: { style: BorderStyle.SINGLE, color: NAVY, size: 6, space: 2 } },
    children: [new TextRun({ text, bold: true, allCaps: true, color: NAVY, size: 22 })],
  });

const para = (children, o = {}) => new Paragraph({ spacing: { after: 60 }, children, ...o });

const bullet = (children, after = 24) =>
  new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after },
    children: Array.isArray(children) ? children : [t(children)],
  });

// Title line: bold left, italic grey date on the right
const titleLine = (title, date, before = 110) =>
  new Paragraph({
    spacing: { before, after: 0 }, ...rightTab,
    children: [
      new TextRun({ text: title, bold: true, size: 21 }),
      rtab(),
      new TextRun({ text: date, italics: true, color: GREY, size: 20 }),
    ],
  });

const subLine = (children) =>
  new Paragraph({ spacing: { after: 30 }, children: Array.isArray(children) ? children : [grey(children)] });

// Project header: bold name · grey stack, date right
const projLine = (name, stack, date) =>
  new Paragraph({
    spacing: { before: 90, after: 0 }, ...rightTab,
    children: [
      new TextRun({ text: name, bold: true, size: 21 }),
      new TextRun({ text: `  ·  ${stack}`, color: GREY, size: 19 }),
      rtab(),
      new TextRun({ text: date, italics: true, color: GREY, size: 20 }),
    ],
  });

const linkLine = (parts) =>
  new Paragraph({
    spacing: { after: 40 },
    indent: { left: 360 },
    children: [grey("↳ ", { size: 18 }), ...parts],
  });

const skillLine = (label, text) =>
  new Paragraph({
    spacing: { after: 30 },
    children: [new TextRun({ text: `${label}: `, bold: true, size: 20 }), t(text)],
  });

// ---------- content ----------
const children = [
  // Header
  new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 20 },
    children: [new TextRun({ text: "FARAAZ MOHAMMED", bold: true, color: NAVY, size: 40 })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 20 },
    children: [grey("Melbourne, VIC, Australia  •  0435 825 949  •  faraaz817@outlook.com")],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 20 },
    children: [
      link("linkedin.com/in/faraaz817", "https://linkedin.com/in/faraaz817", 19),
      grey("  •  "),
      link("github.com/faraaz817", "https://github.com/faraaz817", 19),
      grey("  •  "),
      link("job-go-mauve.vercel.app/portfolio", "https://job-go-mauve.vercel.app/portfolio", 19),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 40 },
    children: [grey("Temporary Graduate visa (subclass 485) — full Australian work rights, no sponsorship required  •  Available immediately", { italics: true, size: 18 })],
  }),

  // Summary
  heading("Summary"),
  para([t(
    "Master of Artificial Intelligence graduate (RMIT, Jul 2026) with a B.Tech in Information Technology, working across applied ML and software engineering. " +
    "At Prodegee, designed the school-geolocation algorithm at the core of a country-scale electrification pipeline (7.2M building polygons, 18,121 schools) and the sensitivity analysis that isolated the parameter behind a 90% household under-count. " +
    "Co-author of a peer-reviewed computer-vision paper (94.75% accuracy). " +
    "In 2026 independently shipped a Kotlin Android app, an offline-first PWA and an MCP-based local-LLM delegation system — requirements first, reviewed, unit-tested. " +
    "Open to roles anywhere in Australia."
  )]),

  // Experience
  heading("Experience"),
  titleLine("AI/ML Engineering Intern — Prodegee", "Mar 2026 – Jun 2026", 60),
  subLine("Remote, Melbourne  ·  RMIT industry capstone, Team DS4 — building-footprint inference for off-grid electrification planning"),
  bullet("Designed and built the three-stage school-geolocation refinement algorithm that became the team's core pipeline: a national layer of 7.2M Overture Maps building polygons (GeoPandas/Shapely → GeoPackage, wrapped in a Kestra flow), BFS spatial clustering with composite scoring, and a nearest-school proximity check; ran it on 18,121 schools in Côte d'Ivoire and ported it to Burundi and Chad."),
  bullet("Made scoring measurable and portable: replaced a binary distance cutoff with exponential decay, designed a weighted per-correction confidence score with weights derived from measured fix attribution, and added sigmoid normalisation with per-country inflection points so one threshold works across all three countries; authored the cross-team handoff contracts."),
  bullet("Built a ±20% sensitivity harness that ranked cluster radius as the dominant parameter (±36–44% swing in all 191 villages), driving the 75 → 200 m recalibration that lifted buildings-per-household from 0.069 (a 90%+ under-count) to 0.415, into the target band."),
  bullet("Built an IoU harness for compound polygons and showed that all three generators failed the ≥ 0.5 gate because the upstream cluster was ~35× over-scoped — a scoping fault, not a fitting one — which redirected the next assignment."),
  bullet("Ran footprint inference across 200 villages in 7 Mauritanian Wilayas, implemented the Multi-Tier Framework tier heuristic and an XGBoost multi-output tier regressor, and documented that the regressor's 0.816 \"confidence\" measured agreement with the heuristic it was trained on, not accuracy."),
  bullet("Corrected a published baseline (6–13% → 37%) against a co-built 40-school satellite-verified ground-truth set, and published a negative result — a proximity penalty hurt accuracy at all three thresholds — closing off a dead parameter."),
  bullet("Led 3 of 10 assignments; primary author of 3 of 4 formal deliverables; 68 commits, 7 peer reviews; pinned upstream inputs by commit SHA for reproducible re-runs; wrote the semester-2 handoff memo. Built model_router.py, a cost-proportional Claude API router (cached Haiku classifier → Haiku / Sonnet / Opus)."),
  subLine([grey("Tools: ", { bold: true }), grey("Python, GeoPandas, Shapely, scikit-learn, XGBoost, pandas, Kestra, QGIS, GeoPackage, Git, Claude Code (MCP, hooks)")]),

  titleLine("Dispatch Team Member — Amart Furniture", "Feb 2025 – Mar 2026"),
  subLine("Melbourne, VIC  ·  part-time, on-site, concurrent with full-time study"),
  bullet("Tracked and reconciled stock in the inventory-management system, processed customer order workflows, coordinated real-time fulfilment and resolved order discrepancies across 5 Melbourne stores; trained a new team member."),

  // Education
  heading("Education"),
  titleLine("Master of Artificial Intelligence — RMIT University", "Jul 2024 – Jul 2026", 60),
  subLine("Melbourne  ·  Coursework: Intelligent Decision Making (ASP/Clingo), Computer Vision, Machine Learning, AI Systems Design"),
  titleLine("Bachelor of Technology (Information Technology) — Keshav Memorial Institute of Technology", "Dec 2020 – May 2024"),
  subLine("KMIT, Hyderabad, India (affiliated to JNTUH)  ·  Coursework incl. Machine Learning, Neural Networks & Deep Learning, Data Mining"),

  // Projects
  heading("Key Projects"),
  projLine("Time Flow — ADHD-focused planner (PWA)", "JavaScript, Service Worker, Web Notifications, Kotlin bridge", "Jul – Sep 2026"),
  bullet("Built and deployed an installable, offline-first PWA (4,600 lines of vanilla JS, no framework or build step) that packs goals, recurring targets and reminders into a user's free minutes using an urgency × importance scoring model, with period-aware urgency for recurring quotas."),
  bullet("Implemented dual-timer focus sessions with auto-advance, weekly/monthly reminder scheduling and a cache-first service worker delivering system notifications; designed a JS ↔ Kotlin @JavascriptInterface bridge so the same code runs in a native Android wrapper with exact alarms; fixed input-focus loss under 1 s live re-renders with a targeted DOM-patch path."),
  linkLine([grey("Live: ", { size: 18 }), link("faraaz817.github.io/time-flow-web", "https://faraaz817.github.io/time-flow-web/"), grey("   ·   GitHub: ", { size: 18 }), link("github.com/faraaz817/time-flow-web", "https://github.com/faraaz817/time-flow-web")]),

  projLine("MGM Prayer Alerts — Android app for Melbourne Grand Mosque", "Kotlin, Android 8–15, AlarmManager, JUnit", "Aug 2026"),
  bullet("Shipped a community app that fetches the mosque's daily timetable, schedules exact Azaan alarms with per-prayer toggles and custom notification-channel sounds, refreshes nightly and survives reboot; sideloaded to community members."),
  bullet("Wrote the functional requirements (scope, decision log, acceptance criteria) before coding, then ran a severity-ranked code review against them: found and fixed a critical 12-hour AM/PM storage bug and a one-shot refresh alarm that stopped re-arming after a failed fetch; added round-trip unit tests for time parsing."),
  linkLine([grey("GitHub: ", { size: 18 }), link("github.com/faraaz817/MgmPrayerAlerts", "https://github.com/faraaz817/MgmPrayerAlerts")]),

  projLine("Gemma Delegation System — local/cloud LLM hybrid", "Node.js, MCP SDK, Ollama, Unsloth/QLoRA, Colab", "May 2026"),
  bullet("Built an MCP server through which Claude Code or Cursor delegate lightweight tasks to a locally hosted Gemma 4 E2B, failing open to the frontier model whenever Ollama is unavailable so delegation never blocks the user."),
  bullet("Closed the loop: accept/reject feedback updates a capability profile that governs future delegation and curates a JSONL dataset; a Colab notebook fine-tunes on confirmed examples (4-bit QLoRA, LoRA r=16) and exports GGUF back into Ollama as a drop-in replacement."),
  linkLine([grey("GitHub: ", { size: 18 }), link("github.com/faraaz817/gemma-delegation-system", "https://github.com/faraaz817/gemma-delegation-system")]),

  bullet([
    new TextRun({ text: "Bro — interactive AI portfolio chatbot: ", bold: true, size: 20 }),
    t("recruiter-facing site that answers questions from a profile corpus via server-side retrieval with anti-hallucination constraints; Anthropic API, deployed on Vercel. (Next.js, TypeScript, Prisma/Postgres)"),
  ]),
  linkLine([grey("Live: ", { size: 18 }), link("job-go-mauve.vercel.app/portfolio", "https://job-go-mauve.vercel.app/portfolio")]),
  bullet([
    new TextRun({ text: "Fire Detection & Alerting System — B.Tech capstone (team of 4): ", bold: true, size: 20 }),
    t("trained a custom Haar cascade in OpenCV for real-time webcam fire detection, chosen over heavier detectors for latency; on detection a threaded pipeline plays an audible alarm and dispatches WhatsApp alerts (RAPIWHA API) to the owner and nearest fire station without blocking the capture loop. (Python, OpenCV, threading, requests)"),
  ]),
  bullet([
    new TextRun({ text: "NeuroVisualZ — exam-timetabling AI, RMIT (team of 3): ", bold: true, size: 20 }),
    t("built the YAML-to-ASP parser/encoder translating timetabling instances into Clingo logic programs; scoped Levels 1–4 (room allocation, ITC'07 soft constraints, SWI-Prolog validator). (Python, Clingo/ASP, SWI-Prolog)"),
  ]),
  bullet([
    new TextRun({ text: "Agent skills for Claude Code / Cursor: ", bold: true, size: 20 }),
    t("authored five reusable skills — CO-STAR requirements builder, Socratic tutor, better-way reviewer, skill sync, and a pikepdf CLI that unlocks signature-locked PDFs — each a documented, trigger-scoped procedure.  "),
    link("github.com/faraaz817/My_Skills", "https://github.com/faraaz817/My_Skills"),
  ]),
  bullet([
    new TextRun({ text: "IBM Z development toolchain: ", bold: true, size: 20 }),
    t("connected VS Code to a live z/OS environment via Zowe CLI/Explorer and z/OSMF REST APIs; submitted and verified a JCL job with condition code 0000. (IBM z/OS, Zowe, JCL)"),
  ], 60),

  // Publication
  heading("Publication"),
  para([
    t("K. M. Asudaria, "), new TextRun({ text: "M. F. Abdul Khadeer", bold: true, size: 20 }), t(", S. S. Rafai, K. S. Reddy. “A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning.” "),
    new TextRun({ text: "Quest Journal of Software Engineering and Simulation", italics: true, size: 20 }),
    t(", Vol. 9(12), pp. 43–51, Dec 2023 (ISSN 2321-3795, peer-reviewed). Benchmarked 5 edge-detection operators × 8 classifiers (40 combinations) as a lesion feature-extraction step on a 15,000-image, four-class maize dataset; best result Sobel + MLP at 94.75%. Implemented the Canny arm (OpenCV + scikit-learn, ten classifiers).  "),
    grey("↳ ", { size: 18 }), link("questjournals.org/jses", "http://www.questjournals.org/jses/archive.html"),
    grey("   ·   Code: ", { size: 18 }), link("github.com/faraaz817/Machine_Learning", "https://github.com/faraaz817/Machine_Learning"),
  ]),

  // Skills
  heading("Technical Skills"),
  skillLine("Languages", "Python (primary), Kotlin, JavaScript, TypeScript, SQL, Prolog / ASP (Clingo), JCL, Bash"),
  skillLine("AI / ML", "scikit-learn, XGBoost, OpenCV (image classification, edge detection, Haar cascades), evaluation design (precision/recall, IoU, sensitivity analysis, ground-truth construction), LLM fine-tuning (Unsloth, QLoRA, GGUF), Ollama, Answer Set Programming, prompt engineering, retrieval-grounded generation"),
  skillLine("Geospatial", "GeoPandas, Shapely, QGIS, PostGIS, Overture Maps, OpenStreetMap, GeoPackage / GeoJSON / Parquet"),
  skillLine("Software", "Android (Kotlin, AlarmManager, BroadcastReceiver, notification channels, Gradle KTS, JUnit), PWA (service workers, Web Notifications), Node.js, Next.js, Prisma, REST/JSON integration"),
  skillLine("AI-assisted engineering", "MCP servers, Claude Code (skills, hooks, subagents), Cursor, Anthropic API (prompt caching, routing)"),
  skillLine("Tooling & platforms", "Git / GitHub, Kestra, Docker (basic), Colab / Jupyter, Vercel, GitHub Pages, IBM z/OS + Zowe, Linux"),

  // Certs
  heading("Certifications, Awards & Leadership"),
  bullet("IBM Z Xplore – Concepts and IBM Z & LinuxONE Community Contributor – Level 1 (IBM digital badges via Credly, 2026)."),
  bullet("Smart India Hackathon delegate, Government of India (2022)  ·  Certificate of Publication, Quest Journals (2023)."),
  bullet("Head, Vachan Speakers Club, KMIT (2022–23) — led public-speaking workshops, debates and communication seminars."),
  bullet("Volunteer fundraiser, Taher Foundation (2023)."),


  // Languages
  heading("Languages"),
  para([t("English (native / bilingual)  •  Urdu (native / bilingual)  •  Hindi (full professional)  •  Telugu (elementary)")]),
];

const doc = new Document({
  creator: "Faraaz Mohammed",
  title: "Faraaz Mohammed — Resume",
  styles: {
    default: { document: { run: { font: "Calibri", size: 20 } } },
  },
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 360, hanging: 220 } } },
      }],
    }],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 640, right: 780, bottom: 560, left: 780 },
      },
    },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(OUT, buf);
  console.log("wrote", OUT);
});
