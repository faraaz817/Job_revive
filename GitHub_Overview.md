# GitHub audit — github.com/faraaz817

Reviewed 17 September 2026 via the public API (no `gh` CLI or SSH key on this machine, so only
public repos were visible). Profile: **Faraaz Abdul Khadeer Mohammed**, 15 public repos, account
created September 2022.

## Verdict per repo

| Repo | Type | Decision | Write-up |
| --- | --- | --- | --- |
| `time-flow-web` | Original — JS PWA, 4 600 lines, live on GitHub Pages | **Resume** | [Time_Flow](Time_Flow/README.md) |
| `MgmPrayerAlerts` | Original — Kotlin Android, requirements + code review + tests | **Resume** | [MGM_Prayer_Alerts](MGM_Prayer_Alerts/README.md) |
| `gemma-delegation-system` | Original — MCP server + Ollama + QLoRA fine-tune loop | **Resume** | [Gemma_Delegation_System](Gemma_Delegation_System/README.md) |
| `Machine_Learning` | Original — notebook; the Canny row of the published paper | **Resume** (as the paper's code) | [Maize_Leaf_Disease_ML](Maize_Leaf_Disease_ML/README.md) |
| `My_Skills` | Original — 5 Claude Code / Cursor skills | **Supporting** — one line, not a project entry | [Claude_Skills](Claude_Skills/README.md) |
| `AI-p2` | RMIT COSC1127 assignment, Prolog | **Exclude — and make private (see below)** | — |
| `rust-fundamentals` | Fork of alfredodeza's Rust bootcamp, 1 "Progress" commit | Exclude — a "currently learning Rust" line at most | — |
| `paddocktimeseries` | Fork of johnburley3000, 0 own commits, 75 MB | Exclude | — |
| `uptrain` | Fork of uptrain-ai/uptrain, 0 own commits | Exclude | — |
| `GPT-teaches-git`, `My_git`, `my_first`, `testing`, `something`, `proj` | 0–5 KB test repos from 2022–23 | Exclude — consider deleting or archiving | — |

## Flags

**`AI-p2` must be private.** Its README (unmodified from the RMIT template) says: *"You must
ALWAYS keep your fork private and never share it with anybody in or outside the course, even
after the course is completed."* It is currently public. The repo is also essentially unstarted —
exercises 2–4 are the template's `true.` placeholders and exercise 1 has a syntax error (`..`) —
so there is nothing to lose by making it private, and an academic-integrity issue to gain by
leaving it public. Go to Settings → Danger zone → Change visibility.

**Six scratch repos dilute the profile.** A recruiter opening the profile sees `something`,
`proj`, `testing`, `my_first` alongside the real work. Deleting or archiving them is a
five-minute cleanup. The two forks with no commits (`uptrain`, `paddocktimeseries`) can go too
unless you're about to contribute.

**Pin the four resume repos** on the profile page so they show first.

**Descriptions and topics.** `Machine_Learning` and `My_Skills` have no description; none of the
repos has topics. Adding a one-line description and 3–5 topics (`pwa`, `kotlin`, `android`,
`mcp`, `ollama`, `scikit-learn`, …) is free searchability.

## Timeline this reveals

| When | What | Where |
| --- | --- | --- |
| Sep 2022 | Maize disease notebook (Colab, T4) | KMIT, B.Tech IT |
| Feb 2023 | Learning git; first repos; `uptrain` fork | KMIT |
| Dec 2023 | Paper published (Quest JSES 9(12)) | KMIT |
| 2023–24 | Fire detection final-year project | KMIT |
| Sep 2025 | COSC1127 Artificial Intelligence | RMIT Melbourne |
| May 2026 | Gemma delegation system | Melbourne |
| Jul–Sep 2026 | Time Flow PWA | Melbourne |
| Aug 2026 | MGM Prayer Alerts; Claude skills | Melbourne |
| Sep 2026 | Rust bootcamp | Melbourne |

The 2026 work is the strongest and most recent: three shipped, documented, self-directed projects
in four months across web, Android and AI tooling.

## Suggested resume bullets

These are drafts to cut down, not to paste. Each is backed by the linked README.

**Time Flow — ADHD-focused planner (PWA)** · JavaScript, Service Worker, Web Notifications
- Built and deployed an installable offline-first PWA (4 600 lines vanilla JS, no framework) that
  packs goals and recurring targets into a user's free time using an urgency × importance scoring
  model with period-aware urgency for recurring quotas.
- Implemented dual-timer focus sessions with auto-advance, weekly/monthly reminder scheduling, and
  a cache-first service worker delivering system notifications; designed a JS↔Kotlin bridge so the
  same codebase runs inside a native Android wrapper with exact alarms.
- Diagnosed and fixed input-focus loss under 1 s live re-renders with a targeted DOM patch path.

**MGM Prayer Alerts** · Kotlin, Android 8–15, AlarmManager, OkHttp, JUnit
- Delivered a community Android app that fetches a mosque's daily timetable, schedules exact
  Azaan alarms with per-prayer toggles and custom notification-channel sounds, refreshes nightly,
  and survives reboot; sideloaded to Melbourne Grand Mosque members.
- Wrote the functional requirements (scope, decision log, acceptance criteria) before coding, then
  ran a severity-ranked code review against them — caught and fixed a critical AM/PM
  storage bug that scheduled afternoon prayers 12 hours early, and a one-shot alarm that stopped
  re-arming after a failed fetch. Added unit tests for the time-parsing round trip.

**Gemma Delegation System** · Node.js, MCP, Ollama, Unsloth/QLoRA, Colab
- Designed a local/cloud hybrid where Claude Code or Cursor delegate lightweight tasks to a
  locally-hosted Gemma 4 E2B via a custom MCP server, with graceful fallback when the local model
  is unavailable.
- Built an adaptive feedback loop: user accept/reject signals update a capability profile that
  governs future delegation and curate a JSONL dataset; a Colab notebook fine-tunes the model
  (4-bit QLoRA, LoRA r=16) on confirmed examples and exports GGUF back into Ollama.

**Maize Leaf Disease Classification** · Python, OpenCV, scikit-learn — *code for the published paper*
- Implemented the Canny-edge feature-extraction arm of a published comparative study, evaluating
  ten classifiers on 2 000 images across four disease classes; Decision Tree reached 90.75 %,
  matching the paper's reported figures.

**AI tooling** (one line under Skills or Projects)
- Author of reusable Claude Code / Cursor agent skills (CO-STAR requirements builder, Socratic
  tutor, code-review-for-alternatives, PDF unlock CLI) — github.com/faraaz817/My_Skills.

## What the public profile does *not* show

- The `TimeFlowAndroid` bridge in `time-flow-web` implies a Kotlin WebView wrapper that is not
  public. If it exists, it is worth publishing or at least mentioning.
- No CI, no GitHub Actions on any repo. Adding even a lint/test workflow to `MgmPrayerAlerts`
  (it has a JUnit test) and a Pages deploy workflow to `time-flow-web` would be visible signal.
- Prodegee work (in this collection) is not on GitHub, which is correct given its restricted
  status.
