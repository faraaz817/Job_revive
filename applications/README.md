# Applications

One folder per application, one row per application here. Maintained by the `tailor-resume`
skill (`.claude/skills/tailor-resume/`) — paste a job ad or URL into a Claude Code session in this
repo and it drafts `resume.md` for review; say "approve" and it renders the PDF and updates this
table. Say "applied to X" / "X rejected me" / "interview with X" to update a status.

## Tracker

| # | Date | Company | Role | **Resume** | Location | Source | Closes | Status | Folder | Last update |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-09-17 | eShepherd (Gallagher) | Computer Vision Engineer (Vision Weigh) | [PDF](eShepherd_Computer-Vision-Engineer/Faraaz_Mohammed_Resume_eShepherd_Computer-Vision-Engineer.pdf) | Australia (confirmed); city not stated, office-based |  | Not stated | Ready | [eShepherd_Computer-Vision-Engineer](eShepherd_Computer-Vision-Engineer/) | 2026-09-18 |
| 2 | 2026-09-18 | Kaliba | Associate Consultant – Technology | [PDF](Kaliba_Associate-Consultant-Technology/Faraaz_Mohammed_Resume_Kaliba_Associate-Consultant-Technology.pdf) | Greater Melbourne, on-site | LinkedIn (Easy Apply) | Not stated | Ready | [Kaliba_Associate-Consultant-Technology](Kaliba_Associate-Consultant-Technology/) | 2026-09-18 |
| 3 | 2026-09-18 | Suncorp Group | Associate Data Scientist | [PDF](Suncorp_Associate-Data-Scientist/Faraaz_Mohammed_Resume_Suncorp_Associate-Data-Scientist.pdf) | Melbourne / Brisbane / Sydney, hybrid | [LinkedIn](https://www.linkedin.com/jobs/view/4458049850/) | Not stated | Ready | [Suncorp_Associate-Data-Scientist](Suncorp_Associate-Data-Scientist/) | 2026-09-18 |
| 4 | 2026-09-18 | BCG X | Forward Deployed AI Engineer – Consulting (Graduate) | — | Perth / Sydney / Melbourne | [LinkedIn](https://www.linkedin.com/jobs/view/4455645312/) | Not stated | Withdrawn | [BCG-X_Forward-Deployed-AI-Engineer-Graduate](BCG-X_Forward-Deployed-AI-Engineer-Graduate/) | 2026-09-18 |

**Status:** Draft → Ready → Applied → Screening → Interview → Offer / Rejected / No response / Withdrawn

## Updates log

Newest first. One line per event, dated; rejection reasons recorded verbatim when given.

- **2026-09-18** — BCG X / Forward Deployed AI Engineer (Graduate): skipped after fit check. Hard blocker — AU/NZ citizenship or Australian PR required; 485 not eligible. Status **Withdrawn**. No resume drafted.

- **2026-09-18** — Suncorp / Associate Data Scientist: resume approved and rendered despite soft flag on "at least two years of commercial experience" (~4 months internship vs $90–100k associate band). Preferred stack mostly gaps (Git/VS Code only). Status **Ready**.

- **2026-09-18** — Kaliba / Associate Consultant – Technology: resume approved and rendered. A recruitment and sales role, not engineering — flagged before drafting and taken on knowingly; the resume argues communication, stakeholder work and technical credibility rather than engineering depth. Two caveats in `notes.md`: the ad's own requirements were never captured (tailored to the role type, not its criteria), and no recruitment or sales experience is claimed because there is none — that gap belongs in a cover letter.

- **2026-09-18** — eShepherd / Computer Vision Engineer: **location confirmed Australian**, so the 485 applies and the visa blocker is closed. Resume rendered and linked from the Resume column. Status stays **Ready** — not yet submitted. Remaining risk is fit, not eligibility (see `notes.md` § 2).

- **2026-09-18** — eShepherd / Computer Vision Engineer: resume drafted and rendered (2 pages). Two open items before applying — see `eShepherd_Computer-Vision-Engineer/notes.md`: (1) location unconfirmed, and if the role sits in New Zealand rather than Australia the 485 visa does not apply and this is a dead application; (2) the role is scoped as CV owner/subject-matter-expert with several stated hard prerequisites (PyTorch, segmentation/pose/point-cloud, edge hardware, depth sensing) with no evidence in `Source/` — a genuine stretch, not padded to look otherwise.

## Getting a resume on your phone

Tap the **Resume** link in the table above. GitHub renders the PDF in a mobile browser and
offers a download — no clone, no LibreOffice, nothing to install. That is why the renders are
tracked rather than left in a session container: a resume that only exists as a chat
attachment is not findable a week later.

## Per-application folder

```
<Company>_<Role>/
  jd.md        the ad as captured — URL, date, closing date, full text
  notes.md     fit check, criteria → evidence map, what changed vs base_resume.md, log
  resume.md    the tailored resume (constrained Markdown, see _build/README.md) — edit this
  Faraaz_Mohammed_Resume_<Company>_<Role>.docx   rendered on approval — tracked
  Faraaz_Mohammed_Resume_<Company>_<Role>.pdf    rendered on approval — tracked; upload this one
  draft.docx / draft.pdf                         page-proof scratch — gitignored
```

All four of the first files are committed and pushed, so every application has a permanent
link. Only the page-proof scratch is ignored.

## Patterns

Update this section as rejections accumulate — what kind of role, what stage, stated reason. This
is the most useful output of the tracker.
