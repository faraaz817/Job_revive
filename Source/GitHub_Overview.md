# GitHub audit — github.com/faraaz817

First reviewed 17 September 2026 through the public API (public repos only). **Re-audited 21
October 2026** with account access, which also shows the private repos. Profile: **Faraaz Abdul
Khadeer Mohammed**, 16 public (including this one) and 8 private repos, account created September 2022.
(The first pass of this re-audit saw only 2 private repos; the other 6 became visible once the Claude
GitHub App was granted wider access later the same day.)

## What changed since 17 September

- **`time-flow-web` is now private and Time Flow is closed source.** The public PWA repo was made
  private after 17 September (last pushed 7 October). Development continues in the private
  `time-flow` repo (Android, v0.4.0), which is being built for commercial release. Every link to `time-flow-web` — on the
  resumes and on `faraaz817.github.io` — is dead. See [Time_Flow](Time_Flow/README.md).
- **`MgmPrayerAlerts` gained CI, versioned releases, a redesign and an outage fix** (v1.1.0,
  v1.1.1, 7–10 October). See [MGM_Prayer_Alerts](MGM_Prayer_Alerts/README.md).
- **`faraaz817.github.io` is new** (17 September): a plain HTML/CSS/JS portfolio site with the
  base resume PDF.
- The "no CI on any repo" flag below is now resolved: both Android repos run GitHub Actions.

## Verdict per repo

| Repo | Type | Decision | Write-up |
| --- | --- | --- | --- |
| `time-flow-web` | **Private** since Sep/Oct 2026 — the original PWA, superseded by `time-flow` | Not linked | [Time_Flow](Time_Flow/README.md) |
| `time-flow` | **Private, commercial.** Android app — WebView + vanilla JS UI, Kotlin native shell, CI and signed releases | **Resume, no link** — "closed source, demo on request" | [Time_Flow](Time_Flow/README.md) |
| `MgmPrayerAlerts` | Original — Kotlin Android, requirements + code review + tests + CI releases | **Resume** | [MGM_Prayer_Alerts](MGM_Prayer_Alerts/README.md) |
| `gemma-delegation-system` | Original — MCP server + Ollama + QLoRA fine-tune loop | **Resume** | [Gemma_Delegation_System](Gemma_Delegation_System/README.md) |
| `Machine_Learning` | Original — notebook; the Canny row of the published paper | **Resume** (as the paper's code) | [Maize_Leaf_Disease_ML](Maize_Leaf_Disease_ML/README.md) |
| `My_Skills` | Original — 5 Claude Code / Cursor skills | **Supporting** — one line, not a project entry | [Claude_Skills](Claude_Skills/README.md) |
| `faraaz817.github.io` | Original — personal portfolio site, plain HTML/CSS/JS | **Not a resume entry** — it *is* a link target; currently carries dead Time Flow links | — |
| `Prodegee` | Private — the capstone workspace | Covered by the Experience entry, never linked | [Prodegee-main](Prodegee-main/Prodegee.md) |
| `Vaya` | Private — website for Vaya, an IT & AI services company; React + TypeScript frontend, Rust (Axum) backend; README calls it an internship project; last pushed 11 Oct 2026 | **Not yet assessed** — no write-up, not on the resume | — |
| `job-go` | Private — job-search workspace and the Bro chatbot (Next.js on Vercel) | Bro is on the resume; since 21 Oct 2026 it answers from this repo's `base_resume.md` and write-ups | — |
| `claude-config`, `IDM`, `IOT-Ass1` | Private — agent config and RMIT coursework | Not reviewed | — |
| `AI-p2` | RMIT COSC1127 assignment, Prolog | **Exclude — and make private (see below)** | — |
| `rust-fundamentals` | Fork of alfredodeza's Rust bootcamp, 1 "Progress" commit | Exclude — a "currently learning Rust" line at most | — |
| `paddocktimeseries` | Fork of johnburley3000, 0 own commits, 75 MB | Exclude | — |
| `uptrain` | Fork of uptrain-ai/uptrain, 0 own commits | Exclude | — |
| `GPT-teaches-git`, `My_git`, `my_first`, `testing`, `something`, `proj` | 0–5 KB test repos from 2022–23 | Exclude — consider deleting or archiving | — |

## Flags

**Dead Time Flow links on the portfolio site.** `faraaz817.github.io` links to
`github.com/faraaz817/time-flow-web` and `faraaz817.github.io/time-flow-web` in both `index.html`
and its README. Replace them with the same "closed source, demo on request" wording the resume
now uses.

**Dead Time Flow links on three submitted applications.** AEY Robotics, Maincode Back End and
Maincode Talent Engineer went out with the `time-flow-web` links. Those resumes are left as sent.
If any of them reaches interview, expect "the link doesn't work" and answer it directly: the app
went closed source for commercial release, and you can demo it.

**`AI-p2` must be private — still open.** Its README (unmodified from the RMIT template) says:
*"You must ALWAYS keep your fork private and never share it with anybody in or outside the course,
even after the course is completed."* It was public on 17 September and still is on 21 October.
The repo is essentially unstarted, so there is nothing to lose by making it private. Settings →
Danger zone → Change visibility.

**Six scratch repos dilute the profile — still open.** `something`, `proj`, `testing`, `my_first`
sit alongside the real work. Delete or archive them; the two forks with no commits (`uptrain`,
`paddocktimeseries`) can go too.

**Pin the public resume repos** — `MgmPrayerAlerts`, `gemma-delegation-system`,
`Machine_Learning`, `My_Skills`. Time Flow can no longer be pinned; MGM is now the strongest
public repo and should be first.

**Descriptions and topics.** `Machine_Learning` and `My_Skills` have no description, and none of
the repos has topics.

## Timeline this reveals

| When | What | Where |
| --- | --- | --- |
| Sep 2022 | Maize disease notebook (Colab, T4) | KMIT, B.Tech IT |
| Feb 2023 | Learning git; first repos; `uptrain` fork | KMIT |
| Dec 2023 | Paper published (Quest JSES 9(12)) | KMIT |
| 2023–24 | Fire detection final-year project | KMIT |
| Sep 2025 | COSC1127 Artificial Intelligence | RMIT Melbourne |
| Mar 2026 | Prodegee capstone workspace (private) | Melbourne |
| May 2026 | Gemma delegation system | Melbourne |
| Jul – Sep 2026 | Time Flow as a public PWA | Melbourne |
| Jul 2026 – | Time Flow Android app (private, commercial; v0.4.0 in Oct) | Melbourne |
| Aug 2026 | MGM Prayer Alerts v1.0.0; Claude skills | Melbourne |
| Sep 2026 | Rust bootcamp; portfolio site | Melbourne |
| Oct 2026 | MGM v1.1.0 / v1.1.1: redesign, CI releases, Awqat outage fix | Melbourne |

The 2026 work is still the strongest: two Android apps with CI and real users or testers, plus an
MCP-based LLM tool. One of the two Android apps can now only be shown, not linked.

## Suggested resume bullets

Drafts to cut down, not to paste. The versions in `base_resume.md` are the approved ones.

**Time Flow — ADHD-focused planner (Android, closed source)** · JavaScript, Kotlin, AlarmManager, GitHub Actions
- Building a planner for commercial release that packs goals, recurring targets and reminders
  into the user's free minutes by an urgency × importance score; 10 tagged releases, the
  latest two driven by tester feedback.
- Vanilla-JS UI in a Kotlin WebView shell that owns exact alarms, reboot recovery and a
  foreground service for focus timers.
- CI builds a shrunk release APK and runs Kotlin and JS test suites on every PR; tagged releases
  are signed and verified with `apksigner` before publishing.

**MGM Prayer Alerts** · Kotlin, Android 8–15, AlarmManager, OkHttp, JUnit, GitHub Actions
- (as before) community app, requirements first, severity-ranked review, AM/PM bug.
- When the timetable source started returning a bot-check page, kept alarms working by falling
  back to a bundled annual timetable behind a new, unit-tested parser; GitHub Actions now tests,
  builds and publishes versioned releases.

## What the public profile does *not* show

- **Time Flow.** The most substantial codebase is now private. That is a business decision, not
  a gap, but it means the public profile under-represents the work. A short screen recording
  (unlisted video or a GIF on the portfolio site) would let a screener see it without the code.
- Prodegee work is private, which is correct given its restricted status.
