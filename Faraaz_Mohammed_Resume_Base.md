# Base Resume

Two-page A4 resume (`Faraaz_Mohammed_Resume_Base.docx` / `.pdf`, this folder) assembled from every
README in this collection, plus the original hand-written template. It is the base to tailor from
for individual applications, not a doc to send as-is without checking the items flagged below.

Built 17 September 2026, from a conversation that read every project README, the KMIT transcript,
the published paper, and the original `Faraaz_Mohammed_Resume.docx` template (kept unchanged
alongside it), then cross-checked dates and links against source before writing anything down.

## Why

The existing template had the right shape (contact block, summary, experience, education,
projects, publication, skills, certs) but under-represented Prodegee — 4 generic bullets against a
semester of measured, documented work in `Prodegee-main/` — and had one date error (B.Tech end
date) against the KMIT transcript. The brief was to extract what the template got right (name,
contact details, degree dates, target-role framing) and fill in the rest from source, asking
before making calls that change the document's substance rather than guessing.

## How it was built

```
Faraaz_Mohammed_Resume.docx (template)         Project READMEs (Prodegee, Time_Flow, MGM_Prayer_Alerts,
    └─ pandoc/XML extraction                    Gemma_Delegation_System, published paper, KMIT, GitHub_Overview)
         → name, contact, target roles, dates       └─ every resume bullet sourced and cross-checked
         → items with no README backing (Bro,             against the README it came from
           NeuroVisualZ, IBM Z, SIH, etc.) kept
           verbatim, flagged as unverified
                    │                                              │
                    └──────────────────┬───────────────────────────┘
                                        ▼
                        clarifying questions (AskUserQuestion):
                        Prodegee dates, AI/ML vs SE framing, grades, unverified items
                                        ▼
                          _build/build_resume.js  (docx-js; since
                          replaced by _build/render_resume.js)
                            → styled to match the template: A4, Calibri,
                              navy #1F3A5F headings, grey #444444 meta text
                            → rendered via LibreOffice + pdftoppm each pass,
                              read back as images to check line wraps / page breaks
                                        ▼
                     Faraaz_Mohammed_Resume_Base.docx + .pdf  (2 pages)
```

Iteration was visual, not just text-diffed: every draft was converted to PDF and rendered to JPEG
so the actual line breaks, orphan words and page split could be checked and trimmed, the same way
a human would proof a Word document rather than trust that "the text fits."

## What changed from the template

| Section | Change | Source |
| --- | --- | --- |
| Prodegee experience | 4 bullets → 7, covering the algorithm, scoring, sensitivity analysis, IoU diagnosis, Mauritania/XGBoost, and the measurement-discipline bullet (corrected baseline, published negative result) | `Prodegee-main/README-faraaz-contributions.md`, `Prodegee.md` |
| Prodegee dates | "Mar 2026 – Present" → "Mar 2026 – Jun 2026" | commit history ends 16 Jun 2026 per the contributions doc; user confirmed this framing |
| B.Tech end date | "Mar 2024" (template) → "May 2024" | KMIT Complete Course Completion Certificate |
| Time Flow, MGM Prayer Alerts, Gemma Delegation System | Each expanded from one line to two evidence bullets + a link line | respective project READMEs |
| Agent skills | Added as a project bullet (was absent) | `Claude_Skills/README.md` |
| Publication | Named the Canny-edge notebook as the underlying code | `Maize_Leaf_Disease_ML/README.md` |
| Heart Disease notebook | Left out entirely | its own README documents label leakage and a degenerate test split; not in `GitHub_Overview.md`'s include list |
| Grades | Omitted | user's call — mid-range CGPA (7.18/10), no RMIT GPA on file |

## Decisions made by asking, not guessing

Four things could not be settled from source alone and were put to the user directly rather than
assumed:

- **Prodegee framing** — intern with an end date, not an open-ended "Present" role (the capstone
  ran Mar–Jun 2026; the relationship is not confirmed ongoing).
- **AI/ML vs software-engineering lead** — resolved as a deliberate balanced hybrid, since the
  portfolio site itself lists both as target areas.
- **Grades** — left off; mid-range undergrad CGPA and no verified postgrad GPA.
- **Template-only items** (Bro chatbot, NeuroVisualZ, IBM Z badges, Smart India Hackathon, Vachan
  Speakers Club, Taher Foundation, Amart Furniture) — kept verbatim on the user's confirmation,
  since none of them has a README in this collection to verify against.

## Regenerating or tailoring

The content now lives in `base_resume.md` (constrained Markdown, format in `_build/README.md`);
the `.docx`/`.pdf` are rendered from it:

```bash
cd _build
npm install                                        # once
node render_resume.js ../base_resume.md ../Faraaz_Mohammed_Resume_Base.docx
soffice --headless --convert-to pdf ../Faraaz_Mohammed_Resume_Base.docx --outdir ..
```

Edit `base_resume.md`, not the `.docx`. Per-application tailoring is done by the `tailor-resume`
skill in `.claude/skills/tailor-resume/` — paste a job ad or URL and it drafts
`applications/<Company>_<Role>/resume.md` from the base for review, renders the PDF on approval,
and tracks the application in `applications/README.md`.

## Second pass — 17 September 2026, Australian conventions

The first build reproduced the template's structure faithfully; this pass reworked it for how
Australian screeners read (see `.claude/skills/tailor-resume/au-standards.md`). Same facts, same
numbers, same sources — only phrasing, order and length changed:

| Change | Why |
| --- | --- |
| Generator replaced: `_build/build_resume.js` (content inline in JS) → `_build/render_resume.js` (renders Markdown) | The approved Markdown is now the exact input to the PDF — nothing to port by hand per application. Verified pixel-identical against the old generator's output before switching. |
| "Summary" → "Profile", rewritten to 4 lines | The old summary led with Prodegee specifics (7.2M polygons, 90% under-count) that mean nothing in a six-second scan; the profile now says degree → strongest evidence → breadth → what is sought. |
| Technical Skills moved from the bottom of page 2 to under the Profile | Screeners look for the stack match on page 1. |
| Every bullet cut to ≤ 2 rendered lines, verb → action → result; the 7th Prodegee bullet split into two | 3–4-line bullets bury the result; the skill selects bullets per ad, so each needs to stand alone. |
| Work-rights line now leads with "Full Australian working rights" | The phrase recruiters need; "Temporary" as the first word made the visa the headline. |
| "Referees: Available on request." added | Australian convention; its absence is noticed. |
| Location trimmed to "Melbourne, VIC"; "willing to relocate" moved into the Profile | Suburb/state is the norm; the header line was wrapping. |

## Known issues / Limitations

- **Not proofread in Word.** Layout was verified in LibreOffice (2 pages, no orphaned lines at
  render time); Word's line-breaking engine can differ slightly and should be checked before
  sending.
- **Portfolio site and LinkedIn are out of sync.** Both still say Prodegee "Mar 2026 – Present"
  as of this write-up; the resume says Mar–Jun 2026. Align them before a recruiter cross-checks.
- **GitHub profile hygiene not yet actioned.** `AI-p2` (should be private per its own RMIT
  template README) and six scratch repos are still public — see `GitHub_Overview.md`.
- **Six template items are unverified.** Bro, NeuroVisualZ, IBM Z toolchain + Credly badges, SIH,
  Vachan Speakers Club and Taher Foundation have no README in this collection; they were kept on
  the user's word, not cross-checked against a source document the way everything else here was.
- **"15,000-image dataset"** in the publication line is the paper's own published claim; the
  underlying notebook in this collection ran on 2,000 images (500 per class). Worth knowing before
  an interview question about the paper.
- **This is a base resume, not a per-application one.** It is the inventory the `tailor-resume`
  skill selects from; it should never be sent as-is.
