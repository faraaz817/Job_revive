# Source — the evidence behind the resume

Every claim on the resume traces back to a folder here. One folder per project, paper or academic
record, each with a write-up in the same shape — summary, why it was built, how it works, what is
wrong with it — plus the original artefacts (report PDFs, notebooks, certificates) where they
exist. [GitHub_Overview.md](GitHub_Overview.md) audits the public GitHub profile and says which
repos earned a folder here and which did not.

The base resume at the repo root (`base_resume.md`) is built *from* this folder, not the other
way round: a bullet is only allowed there if a README here backs it. The tailor-resume skill then
selects, reorders and cuts from that base per job ad — it never adds.

## Why

The first round of applications went out on a template resume whose bullets were written from
memory. Some were vague, one or two were wrong, and there was nothing to point a screener or
interviewer at when they asked "tell me more about X". This folder is the fix: the write-ups were
produced by re-reading the actual code, reports and git history, and each one records what was
found — including the label leak, the degenerate test split, the AM/PM alarm bug, the classifier
that scored below chance. A resume line that survives that scrutiny is one that can be defended
in an interview.

The candour is deliberate. A README that says only good things is marketing copy; a README that
says "cell 29 leaks the label, ignore that result" is a source.

## How it is used

```
Source/<Project>/README.md          base_resume.md                applications/<Company>_<Role>/
  facts, numbers, dates,      ───►    one bullet per claim,   ───►    resume.md — subset of the base,
  limitations, attribution            each backed by a README         reworded to the ad's criteria
        ▲                                                                       │
        │  "is this true? where does it say so?"                                │
        └───────────────────────────────────────────────────────────────────────┘
```

Reading order for someone new to the material:

1. [GitHub_Overview.md](GitHub_Overview.md) — the map. Which repos exist, what each one is,
   verdict per repo, the timeline they reveal, draft bullets.
2. The three 2026 projects — [Time_Flow](Time_Flow/README.md),
   [MGM_Prayer_Alerts](MGM_Prayer_Alerts/README.md),
   [Gemma_Delegation_System](Gemma_Delegation_System/README.md) — the strongest and most recent
   self-directed work.
3. [Prodegee-main/Prodegee.md](Prodegee-main/Prodegee.md) — the industry capstone, the only
   Experience entry, and the one most likely to be probed in an interview.
4. Everything else as needed.

## Index

### Projects and publications

| Folder | What it is | When | Where | Resume | Write-up |
| --- | --- | --- | --- | --- | --- |
| `Prodegee-main/` | RMIT × Prodegee WIL capstone, Team DS4 — building-footprint inference for off-grid electrification demand estimation. Three-stage school-geolocation algorithm (7.2M Overture polygons, 18,121 schools across Côte d'Ivoire, Burundi, Chad), sigmoid score normalisation across countries, ±20 % sensitivity harness that found a 90 % under-count, and a cost-proportional `model_router.py` for the governed Claude Code environment. Python (GeoPandas, Shapely, scikit-learn, XGBoost), Kestra, QGIS. | Mar–Jun 2026 | Melbourne | **Experience entry** | [Prodegee.md](Prodegee-main/Prodegee.md) → [contributions](Prodegee-main/README-faraaz-contributions.md), [AI workflow](Prodegee-main/README-faraaz-ai-workflow.md) |
| `Time_Flow/` | ADHD-focused planner as an installable PWA. 4 600 lines of vanilla JS, no framework, no backend; urgency × importance greedy packer, period-aware urgency for recurring targets, dual-timer focus sessions, service-worker notifications, optional Kotlin `TimeFlowAndroid` bridge. Live on GitHub Pages. | Jul–Sep 2026 | Melbourne | Key Project | [README](Time_Flow/README.md) |
| `MGM_Prayer_Alerts/` | Kotlin Android app for Melbourne Grand Mosque: fetches the day's timetable, schedules exact Azaan alarms with per-prayer toggles and custom channel sounds, 3 AM refresh, reboot recovery. Requirements document written before code; severity-ranked review found a critical AM/PM storage bug. Sideloaded to the community. | Aug 2026 | Melbourne | Key Project | [README](MGM_Prayer_Alerts/README.md) |
| `Gemma_Delegation_System/` | Local/cloud hybrid: Gemma 4 E2B on Ollama behind a Node MCP server, so Claude Code / Cursor delegate lightweight tasks locally. Accept/reject feedback maintains a capability profile and curates a JSONL dataset; a Colab notebook QLoRA-fine-tunes on confirmed examples and exports GGUF back to Ollama. | May 2026 | Melbourne | Key Project | [README](Gemma_Delegation_System/README.md) |
| `Claude_Skills/` | Five Claude Code / Cursor agent skills: CO-STAR requirements builder, better-way reviewer, Socratic tutor, skill sync, and a `pikepdf` CLI that strips `/Encrypt` from signed government PDFs. | Aug 2026 | Melbourne | One line | [README](Claude_Skills/README.md) |
| `published paper/` | *A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning*, Quest JSES 9(12), pp. 43–51, Dec 2023. Five edge operators × eight classifiers; best Sobel + MLP 94.75 %. Second author of four. Paper PDF and publication certificates. | Dec 2023 | KMIT, Hyderabad | Publication | [Published Paper.md](published%20paper/Published%20Paper.md) |
| `Maize_Leaf_Disease_ML/` | The Canny-edge arm of the paper — the notebook whose numbers match Table 1's Canny row exactly (Decision Tree 90.75 %). Documents the per-image `VarianceThreshold` bug and the label mutation that likely explains the low KNN score. | Sep 2022 (pushed Feb 2023) | KMIT | Publication (as its code) | [README](Maize_Leaf_Disease_ML/README.md) |
| `Fire Detection/` | B.Tech final-year project: real-time fire detection from a camera feed with an OpenCV Haar cascade, audible alarm on one thread and WhatsApp alert (RAPIWHA) on another. Team of four; full project report PDF. | 2023–24 | KMIT | One line | [README](Fire%20Detection/README.md) |
| `Heart_disease/` | Coursework notebook on the UCI Cleveland dataset — EDA, logistic regression, decision tree, exported `.pkl`. Only one clean number (0.85 LR); the rest are label leaks, a sorted-by-label test slice, and oversampling before the split. | ~2023 | KMIT | **No — deliberately** | [Hear_Disease.md](Heart_disease/Hear_Disease.md) |

### Academic records

| Folder | What it is | Resume | Write-up |
| --- | --- | --- | --- |
| `RMIT/` | Statement of Academic Completion — Master of Artificial Intelligence (MC271), 22 Jul 2024 → 13 Jul 2026, RMIT City Campus. Encrypted PDF; see the unlock skill in `Claude_Skills/` if a portal rejects it. | Education dates | [README](RMIT/README.md) |
| `KMIT/` | B.Tech Information Technology, Keshav Memorial Institute of Technology, 2020–24, CGPA 7.18. Course-completion letter and 11-page transcript (image-only scans). | Education dates | [README](KMIT/README.md) |

### Reference material (not evidence of own work)

| Folder / file | What it is |
| --- | --- |
| `Prodegee-main/ds4-supporting-document-Prodegee.pdf` | Prodegee's brief for the DS4 problem. |
| `Prodegee-main/tool-setup.md`, `tool-setup.html` | Cohort onboarding checklist (GitHub, Claude Code, QGIS, Zotero). |
| `Prodegee-main/weekly engagement and contribution - v1.docx`, `Zotero Invite.pdf` | Cohort admin documents. |
| `Prodegee-restricted-do-not-publish/` | Prodegee's *Project Pipeline — From Raw Data to Connection Points* (PDF + Markdown): the five-team pipeline, Kestra, flow maturity stages, week-by-week work plan. Explains where DS4 sat in the whole. **Distribution: participating students and RMIT staff only** — see Known issues. |

## Timeline the folder reveals

| When | What | Where |
| --- | --- | --- |
| 2020 – May 2024 | B.Tech IT, CGPA 7.18 | KMIT, Hyderabad |
| Sep 2022 | Maize disease notebook (Colab, T4) | KMIT |
| Dec 2023 | Paper published, Quest JSES 9(12) | KMIT |
| 2023–24 | Fire detection final-year project | KMIT |
| Jul 2024 – Jul 2026 | Master of AI (MC271) | RMIT, Melbourne |
| Mar – Jun 2026 | Prodegee capstone, Team DS4 | Melbourne |
| May 2026 | Gemma delegation system | Melbourne |
| Jul – Sep 2026 | Time Flow PWA | Melbourne |
| Aug 2026 | MGM Prayer Alerts; Claude skills | Melbourne |

## How the folders relate

- `Maize_Leaf_Disease_ML/` is the code for one row of `published paper/`. The paper's folder notes
  that no code was published with it; the notebook is that code for the Canny operator, and its
  README checks the notebook's numbers against the paper's table.
- `Claude_Skills/` — the `costar` skill uses the `MGM_Prayer_Alerts/` requirements document as
  its worked example; the `unlock-pdf-encryption` skill exists because of PDFs like the one in
  `RMIT/`.
- `Prodegee-restricted-do-not-publish/` is the cohort-wide context that `Prodegee-main/` assumes:
  what "Branch D", "Stage 2", "Step 9" and "connection point" mean.
- `Time_Flow/` mentions a `TimeFlowAndroid` Kotlin wrapper that is not public; the same author's
  Android work is evidenced by `MGM_Prayer_Alerts/` instead.
- `Heart_disease/` is here so the decision to *exclude* it is documented, not just made.

## Conventions

**Every write-up has the same shape.** H1 → one-paragraph summary with the headline number →
context line (dates, place, links) → *Why* → *How it works* (ASCII diagram where one helps) →
tables and short code excerpts → *Known issues* / *Limitations*. The last section is mandatory
and is where a reader should look first if they are deciding whether to trust the rest.

**Numbers are checked, not copied.** Accuracy figures are re-read from notebook cells; line
counts from the files; commit counts from `git log --author`. Where the source itself is
inconsistent (the paper's text vs. its Table 1), the README says so.

**Team work is attributed.** Co-authors, teammates and guides are named in the folder that
concerns them (Prodegee: Chaitanya Rathod, Ann Mini Baby, supervisor Marc Torra; paper: Khushi M
Asudaria as corresponding author, Syed Shujauddin Rafai, Kondakindi Sphoorthy Reddy; fire
detection: Shaik Huzair, Mohammed Abdul Muqeet, Azim Damani). Environments built by others
(Prodegee's `.claude/` governance layer) are marked as consumed, not authored.

**Australian English** — write-ups, dates (day month year), and spelling.

**Adding a folder.** Create `Source/<Name>/README.md` in the shape above; drop the original
artefacts beside it; if it is a public repo, add a row to `GitHub_Overview.md` with a verdict;
then, and only then, add a bullet to `base_resume.md` that cites it.

## Known issues / Limitations

- **Sensitive material is in this folder.** `KMIT/` and `RMIT/` contain full name, student and
  hall-ticket numbers, signatures and stamps — both of their READMEs say to keep them out of any
  public repository. `Prodegee-restricted-do-not-publish/` is marked by Prodegee as restricted to
  participating students and RMIT staff. `Prodegee-main/weekly engagement and contribution -
  v1.docx` is a cohort admin document. As of 19 September 2026 all of these are tracked in git
  and the repository is public; either the files need to move out of the tree (and out of
  history) or the repository needs to go private. This README does not resolve that — it records
  it.
- **Three write-ups are not named `README.md`.** `Heart_disease/Hear_Disease.md` (note the
  typo), `published paper/Published Paper.md` and `Prodegee-main/Prodegee.md` are the README-
  equivalents of their folders. GitHub will not render them automatically on the folder page.
- **Two folder names contain spaces** (`Fire Detection`, `published paper`), which means
  percent-encoded links and quoted paths everywhere they are referenced.
- **`Prodegee-main/` is the only folder with three write-ups**, and they overlap: `Prodegee.md`
  is the summary, the contributions and AI-workflow documents are the long form. The other
  folders have one README each.
- **The academic scans have no text layer.** Both KMIT PDFs are OKEN Scanner images; nothing in
  them is searchable or copyable without OCR.
- **The public repos have no CI.** `GitHub_Overview.md` notes it: no GitHub Actions on any repo,
  so "has tests" (MGM) and "deploys to Pages" (Time Flow) are manual facts, not enforced ones.
- **Coverage is complete for GitHub, partial for everything else.** Items on the base resume
  that came from the original template rather than a folder here (volunteering, club roles,
  badges) are kept on the author's word and have no write-up. If one of them is ever probed, this
  is where the gap is.
