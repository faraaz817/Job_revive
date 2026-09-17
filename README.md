# Job_revive — resume material, renderer and application workflow

A job-search workspace: the source write-ups every resume claim traces back to, a small renderer
that turns a Markdown resume into a styled PDF, a Claude Code skill that tailors that resume to an
Australian job ad, and a tracker for the applications that go out. The point is that nothing on
the resume is unsourced and nothing sent is untracked.

Faraaz Mohammed, Melbourne — Master of AI (RMIT, 2026), looking for graduate AI/ML and software
engineering roles. Portfolio at [faraaz817.github.io](https://faraaz817.github.io);
code at [github.com/faraaz817](https://github.com/faraaz817).

## Why

The first round of applications went out on a single generic resume and got nowhere. Two problems,
one on each side of the process: the resume itself — a project-dump summary, 3–4-line bullets,
skills buried on page 2 — did not survive a screener's six-second scan; and there was no record of
what had been sent where, so nothing could be learned from the rejections. This repo fixes both.
Every bullet is sourced from a README in `Source/`, every application is tailored to the ad's own
selection criteria, and every one is logged.

## How it works

```
Source/                     base_resume.md                 job ad (pasted text or URL)
  one README per project      the complete inventory,           │
  paper, transcripts,   ───►  every line sourced from a          ▼
  GitHub_Overview.md          Source/ README            .claude/skills/tailor-resume
                                    │                     1. fit check (PR-only? 3+ yrs? closed?)
                                    │                     2. ad criteria → evidence map
                                    └────────────────►    3. select / reorder / cut — never add
                                                          4. render, look at the pages, fix wraps
                                                                  │
                                                                  ▼
                                              applications/<Company>_<Role>/resume.md
                                                        (reviewed and edited by hand)
                                                                  │  "approve"
                                                                  ▼
                                                 _build/render_resume.js  →  .docx  →  .pdf
                                                 applications/README.md row + log updated
```

The Markdown the reviewer approves is the exact input to the renderer, so what was read is what
ships. The renderer produces a single-column, table-free document (A4, Calibri, navy headings) that
applicant-tracking systems parse cleanly.

## Layout

| Path | What it is |
| --- | --- |
| `Source/` | The material. One folder per project or document, each with a README written in the same shape (summary → why → how it works → limitations) and candid about what did not work. `Source/GitHub_Overview.md` indexes the public repos and says which made the resume and which did not. |
| `base_resume.md` | The base resume in the renderer's constrained Markdown — the superset the skill selects from. **Local only** (gitignored): it carries contact details. |
| `Faraaz_Mohammed_Resume_Base.md` | Write-up of how the base was built, what changed from the original template, the decisions made by asking rather than guessing, and its known issues. |
| `_build/` | `render_resume.js` (Markdown → .docx via docx-js) and the format spec in its README. |
| `.claude/skills/tailor-resume/` | The skill: `SKILL.md` is the procedure; `au-standards.md` is the Australian resume conventions it follows — format, tone, the fit-check table for a Temporary Graduate (485) visa holder, and bullet before/afters. |
| `applications/` | `README.md` tracker (one row and a dated log per application) plus one folder per application: `jd.md`, `notes.md` (fit check, criteria map, what changed vs base), `resume.md`, and the rendered files. Rendered files and `resume.md` are gitignored. |

## What is in `Source/`

| Folder | Content | On the resume? |
| --- | --- | --- |
| `Prodegee-main/` | RMIT × Prodegee capstone — building-footprint inference for off-grid electrification; contributions doc, AI-workflow doc, supporting PDFs | Yes — the Experience entry |
| `Time_Flow/`, `MGM_Prayer_Alerts/`, `Gemma_Delegation_System/` | 2026 solo projects: offline-first PWA, Kotlin Android app, MCP + Ollama delegation with a QLoRA fine-tune loop | Yes — Key Projects |
| `Claude_Skills/` | Five Claude Code / Cursor skills | Yes — one line |
| `published paper/`, `Maize_Leaf_Disease_ML/` | The Quest JSES paper (Dec 2023) and the Canny-edge notebook behind its Canny row | Yes — Publication |
| `Fire Detection/` | B.Tech capstone, OpenCV Haar cascade + WhatsApp alerting | Yes — one line |
| `KMIT/` | Transcript and completion certificate | Dates only |
| `Heart_disease/` | Coursework notebook with a documented label leak and a degenerate test split | No — deliberately |

## Using it

```bash
cd _build && npm install                                             # once
node render_resume.js ../base_resume.md ../Faraaz_Mohammed_Resume_Base.docx
soffice --headless --convert-to pdf ../Faraaz_Mohammed_Resume_Base.docx --outdir ..
```

For an application: open Claude Code in this repo, paste the ad or its URL. The skill drafts
`applications/<Company>_<Role>/resume.md` and reports the fit check, criteria coverage and what
changed from the base. Edit the file, say "approve", and the PDF is rendered and the tracker
updated. "Applied to X" / "X rejected me" updates the row.

## Conventions

- **Sourced or absent.** A claim goes on the resume only if a README in `Source/` backs it.
  Rephrasing, reordering and cutting are the tailoring tools; adding is not.
- **Candid write-ups.** Each README has a Known issues / Limitations section, including the ones
  that disqualify a project from the resume. Team work is attributed to the teammates by name.
- **Australian English and conventions** throughout — see `au-standards.md`.
- **Look at the page.** Every render is converted to images and checked for three-line bullets,
  orphaned words and page breaks before it is shown to anyone.

## Known issues / Limitations

- **Layout is verified in LibreOffice, not Word.** Line breaking can differ slightly in Word.
- **Cover letters are not part of the skill yet.** Australian ads often expect one; the criteria
  map in `notes.md` is the draft for it.
- **The tracker has no patterns yet.** Its "Patterns" section fills in as rejections accumulate —
  that is the output the whole workflow is for.
- **Job-ad fetching is best-effort.** SEEK and company careers pages fetch fine; LinkedIn and
  Workday-hosted ads need a login, so the text has to be pasted.
