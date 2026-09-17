---
name: tailor-resume
description: Tailor Faraaz's resume to a specific Australian job ad and track the application. Use whenever the user pastes a job description or a job URL (SEEK, LinkedIn, company careers page, GradConnection, Prosple), says "tailor my resume for…", "apply to…", "here's a JD", or wants to update an application's status ("applied to X", "X rejected me", "interview with X on…"). Produces applications/<Company>_<Role>/resume.md for review, renders the approved version to PDF, and keeps applications/README.md up to date.
---

# Tailor resume

Workflow: **JD in → fit check → criteria map → `resume.md` draft → user reviews → approved → PDF → tracker updated.**
The Markdown file the user approves is the exact input to the renderer, so what they read is what ships.

Read these before drafting, every time:
- `base_resume.md` — the complete inventory of sourced material. Every line in a tailored resume comes from here (or a project README under `Source/`). Nothing else. `Source/GitHub_Overview.md` indexes what each folder is.
- `.claude/skills/tailor-resume/au-standards.md` — the Australian conventions and the bullet style. Follow it; it is why this skill exists.
- `_build/README.md` — the constrained Markdown format the renderer understands. A line that does not follow it renders wrong.

## 1. Capture the job ad

- **Pasted text** → save it verbatim.
- **URL** → fetch it with WebFetch. SEEK, company careers pages, GradConnection and Prosple usually work. LinkedIn and Workday-hosted ads often need a login and return nothing useful — if the fetch yields no criteria, say so and ask the user to paste the text. Never reconstruct a JD from memory or from the URL slug.
- Write `applications/<Company>_<Role>/jd.md`: a header with company, role title, location, source URL, date captured, closing date if stated, salary if stated, then the ad text.

Folder name: `<Company>_<Role>` — spaces to hyphens inside each part, letters/digits/hyphens only, underscore between the parts. `Atlassian_Graduate-Software-Engineer`, `NAB_Data-Scientist-Graduate`. If the folder exists (re-applying), add `-2`.

## 2. Fit check — before writing a word

Read the ad for the blockers in `au-standards.md` § Fit check. Report them in the reply and in `notes.md`:

- **Hard blockers** (citizenship/PR required, security clearance, 3+ years' experience stated as mandatory, closing date passed): stop, tell the user plainly, and ask whether to continue. Do not silently tailor a resume for a role that will auto-reject.
- **Soft flags** (location outside Melbourne with no remote/relocation mention, "future sponsorship" wording, unusually senior scope): note them; carry on.

## 3. Criteria → evidence map

Extract from the ad, in the ad's own words: must-haves, nice-to-haves, tech stack, and the soft-skill / values language ("collaborative", "customer-obsessed", "agile"). For each item find the evidence in `base_resume.md` and record where it will appear. Mark honest gaps as **GAP — not added**. Write the table to `notes.md`.

This table is the tailoring. It decides what gets selected, what gets cut, and what words to use. It also stops fabrication: if the ad wants AWS and the base has no AWS, the resume does not gain AWS.

## 4. Draft `applications/<Company>_<Role>/resume.md`

Copy `base_resume.md` and cut it down. Rules, in priority order:

1. **Never add a fact, tool, number or date that is not in the base or a README.** Rephrasing and reordering are the only tools. If a claim would help and might be true, ask the user; do not write it.
2. **Profile** (3–4 lines): rewrite for this role. Lead with the degree + the single strongest piece of evidence for the ad's core requirement; use the ad's title wording for the last sentence ("Seeking a Graduate Software Engineer role at <Company>" or the role title). No adjectives about the self ("passionate", "motivated", "dynamic").
3. **Technical Skills**: keep only what the ad asks for plus genuine core strengths. Reorder each line so the ad's stack comes first, spelled the way the ad spells it (if the ad says "Scikit-learn" or "Scikit-Learn", match it). Drop whole lines that are irrelevant to the role (Geospatial, IBM Z, Android for a data role). Target 4–5 lines.
4. **Section order**: Profile → Technical Skills → Experience → Education → Key Projects → Publication → Certifications → Languages → Referees. Move **Education above Experience** for graduate programs and any ad that leads with degree requirements. Move **Key Projects above Experience** only if the ad is about a stack the internship does not cover and the projects do.
5. **Experience — Prodegee**: choose 4–6 of the 8 bullets, ordered by relevance to the criteria map, not by the base order. Every bullet ≤ 2 rendered lines. Keep the numbers. Keep the `> **Tools:**` line but prune it to the ad.
6. **Amart**: keep the title and one bullet. Australian screeners read local employment as reliability; cutting it looks like a gap.
7. **Key Projects**: keep 2–3 headed projects that map to the criteria, 1–2 inline bullets at most, drop the rest. Keep links.
8. **Publication**: keep for AI/ML/data/research roles; shorten to the citation + one clause for pure software roles.
9. **Certifications / Languages / Referees**: keep; short. "Referees: Available on request." always closes the document.
10. **Length**: 2 pages, never 3, and the second page should be at least half full (a nearly empty page 2 reads as padding — cut or promote content until it isn't). One page is fine for a short-form ad that asks for it.
11. **Australian English** (-ise, -our, "program", "fulfilment", "licence" as noun). Dates as "Mar 2026". No "I". No photo, DOB, nationality, marital status, full street address.
12. Do not touch: name, contact block, dates, job titles, degree names. Those change only if the user says so.

## 5. Render check — before showing the user

```bash
cd _build && node render_resume.js "../applications/<dir>/resume.md" "../applications/<dir>/draft.docx" \
  && soffice --headless --convert-to pdf "../applications/<dir>/draft.docx" --outdir "../applications/<dir>" >/dev/null 2>&1
pdfinfo "applications/<dir>/draft.pdf" | grep Pages
pdftoppm -jpeg -r 70 "applications/<dir>/draft.pdf" "<scratchpad>/<dir>"   # then Read the JPEGs
```

Look at the pages. Fix any bullet that wraps to a third line, any orphan word, a page 2 under half full, or a heading stranded at the bottom of page 1. Repeat until clean. Delete `draft.docx`/`draft.pdf` afterwards; only the approved render stays.

## 6. Present for review

In the reply, in this order, briefly:
1. Fit-check result (blockers first).
2. Criteria coverage: "9 of 12 must-haves evidenced; gaps: AWS, Java, Agile ceremonies."
3. What changed from the base (profile rewritten for X; Prodegee bullets 1, 3, 6, 8 kept; Geospatial line dropped; Education moved up…).
4. Anything you want the user to decide (e.g. "the ad wants SQL prominently — the base only lists it; do you have a project to cite?").
5. The path to `resume.md`, and that it is the file to edit — any edit they make there is what gets rendered.

Then wait. Do not render the final PDF until the user says it's approved. If they edit `resume.md` and say "approve", render from the file as it is — do not re-apply your own draft.

## 7. On approval

```bash
cd _build && node render_resume.js "../applications/<dir>/resume.md" "../applications/<dir>/Faraaz_Mohammed_Resume_<Company>_<Role>.docx" \
  && soffice --headless --convert-to pdf "../applications/<dir>/Faraaz_Mohammed_Resume_<Company>_<Role>.docx" --outdir "../applications/<dir>" >/dev/null 2>&1
```

The PDF is named `Faraaz_Mohammed_Resume_<Company>_<Role>.pdf` — the candidate's name goes first because recruiters download dozens of files and a file called `Atlassian_Graduate-Engineer.pdf` tells them nothing. Keep the `.docx` beside it; some portals want Word.

Re-check the page count on the final render. Then:
- Append the approval to `notes.md` § Log.
- Add or update the row in `applications/README.md` with status **Ready** (or **Applied** if the user says they've submitted), and add a line to the Updates log there.

## 8. Status updates

Trigger: "applied to X", "X rejected me", "phone screen with X Friday", "withdraw X", "X offered". Update the row's Status and Last update in `applications/README.md`, add a dated line under the Updates log, and append the same line to that application's `notes.md` § Log. Statuses: Draft → Ready → Applied → Screening → Interview → Offer / Rejected / No response / Withdrawn. If the user gives a reason for a rejection, record it verbatim — patterns across rejections are the most useful thing this tracker will ever produce.

## Files this skill writes

```
applications/
  README.md                        tracker table + updates log (this skill maintains it)
  <Company>_<Role>/
    jd.md                          the ad as captured, with URL/date/closing date
    notes.md                       fit check, criteria → evidence table, changes vs base, log
    resume.md                      the tailored resume — the file the user reviews and edits
    Faraaz_Mohammed_Resume_<Company>_<Role>.docx   rendered on approval
    Faraaz_Mohammed_Resume_<Company>_<Role>.pdf    rendered on approval — the file to upload
```

## Hard rules

- No fabrication, ever. Rephrase, reorder, cut — never add.
- The user's edits to `resume.md` win over the draft.
- Nothing is rendered as final without an explicit approval.
- Two pages maximum; verify by rendering, not by estimating.
- Australian English and Australian conventions per `au-standards.md`.
- Report gaps and blockers plainly. A resume that hides a mismatch gets a rejection later instead of now; the tracker is for learning what works.
