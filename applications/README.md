# Applications

One folder per application, one row per application here. Maintained by the `tailor-resume`
skill (`.claude/skills/tailor-resume/`) — paste a job ad or URL into a Claude Code session in this
repo and it drafts `resume.md` for review; say "approve" and it renders the PDF and updates this
table. Say "applied to X" / "X rejected me" / "interview with X" to update a status.

## Tracker

| # | Date | Company | Role | Location | Source | Closes | Status | Folder | Last update |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-09-17 | eShepherd (Gallagher) | Computer Vision Engineer (Vision Weigh) | Not stated — unconfirmed whether AU or NZ; see notes.md |  | Not stated | Ready | [eShepherd_Computer-Vision-Engineer](eShepherd_Computer-Vision-Engineer/) | 2026-09-18 |

**Status:** Draft → Ready → Applied → Screening → Interview → Offer / Rejected / No response / Withdrawn

## Updates log

Newest first. One line per event, dated; rejection reasons recorded verbatim when given.

- **2026-09-18** — eShepherd / Computer Vision Engineer: resume drafted and rendered (2 pages). Two open items before applying — see `eShepherd_Computer-Vision-Engineer/notes.md`: (1) location unconfirmed, and if the role sits in New Zealand rather than Australia the 485 visa does not apply and this is a dead application; (2) the role is scoped as CV owner/subject-matter-expert with several stated hard prerequisites (PyTorch, segmentation/pose/point-cloud, edge hardware, depth sensing) with no evidence in `Source/` — a genuine stretch, not padded to look otherwise.

## Per-application folder

```
<Company>_<Role>/
  jd.md        the ad as captured — URL, date, closing date, full text
  notes.md     fit check, criteria → evidence map, what changed vs base_resume.md, log
  resume.md    the tailored resume (constrained Markdown, see _build/README.md) — edit this
  Faraaz_Mohammed_Resume_<Company>_<Role>.docx   rendered on approval
  Faraaz_Mohammed_Resume_<Company>_<Role>.pdf    rendered on approval — upload this one
```

## Patterns

Update this section as rejections accumulate — what kind of role, what stage, stated reason. This
is the most useful output of the tracker.
