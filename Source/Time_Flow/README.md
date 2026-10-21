# Time Flow — ADHD-focused planner (Android)

Android planner that captures goals with as little friction as possible, then, when you tell it how
many free minutes you have, packs the highest-priority mix of goals, recurring targets and timed
reminders into that budget and runs them back-to-back with dual timers. No account, no backend —
data stays on the device. Ten tagged releases (v0.1.0 → v0.4.0), signed APKs sideloaded to
testers, about 8 300 lines (≈ 7 500 JavaScript UI and domain logic, ≈ 870 Kotlin native shell).

Solo project, July 2026 – present, Melbourne. **Closed source:** the repository
(`faraaz817/time-flow`) is private because the app is being developed for commercial release, so
there is no public link. A demo is available on request.

> **This write-up is deliberately shallow.** `Job_revive` is a public repository. Until
> September 2026 Time Flow was an open-source PWA (`time-flow-web`, made private since) and this file
> quoted its scheduler and data model. Those internals were removed on 21 October 2026 when the
> app went closed-source. What remains is what an interviewer needs: what it does, how it is built,
> and what was hard — not the code.

## Why

ADHD planning fails at two points: the capture step is too heavy (so the goal never gets written
down) and the "what now?" step is too open (so free time evaporates). Time Flow attacks both. The
goal wizard asks four things — title, importance, deadline *or* urgency, duration — with
tap-presets for every number. The free-time screen asks one thing — how many minutes — and answers
with an ordered queue that starts in one tap.

## History

| When | Version | What changed |
| --- | --- | --- |
| Jul – Sep 2026 | — | Built as an installable, offline-first **PWA** (`time-flow-web`, public, GitHub Pages): 4 600 lines of vanilla JS, no framework, service-worker notifications, and an optional `TimeFlowAndroid` bridge for a native wrapper. |
| 28 Jul 2026 | v0.1.0 – v0.3.1 | Native **Android shell** started in a separate private repo: a WebView host around the same `web/` code, with Kotlin for exact alarms, boot resync and a foreground service that keeps focus timers running while minimised. Signed-release workflow. |
| After 17 Sep 2026 | — | The PWA repository was made private (last pushed 7 Oct 2026); the private Android repo is where the app is developed. |
| 7 – 9 Oct 2026 | v0.3.2 – v0.3.4 | Two **tester-feedback** releases: one-tap free-time start, back-button and typing fixes, exact time's-up alarms on Android 13+, a live focus countdown, a free-time list that refills itself when a task is removed, alert tones with preview, greeting by name. |
| 9 Oct 2026 | v0.4.0 | **Notify times and nudges:** reminders can alert at the time and/or minutes, hours or days before (up to five); recurring targets nudge at chosen times of day. |
| 20 Oct 2026 | — | Architecture diagram of the WebView + web ship path. |

## How it works

**Scheduling.** Every candidate gets a 1–9 score: urgency × importance, each on a 1–3 scale. A
goal's urgency comes from its deadline or the user's own pick. A recurring target's urgency
compares *where you are* with *where you should be* at this point in the period, so a "3× per week"
target is calm on Monday and loud on Saturday if nothing has been done. Candidates are packed
greedily by score into the free-minute budget. That is deliberately not an optimal knapsack: for an
ADHD user the point is a predictable, explainable order ("most important-and-urgent first, small
things fill the gaps"), and the user can reorder, remove or pull in anything the packer skipped.

**Architecture.**

```
web/  (HTML / CSS / vanilla JS — the whole UI and domain)
  app.js       screens, packing, timers, calendar, sprints
  storage.js   schema sanitisers + localStorage load/save
  alerts.js    plans alert times and builds the payload for the native side
  voice.js     notification and greeting copy
        │  copied into the APK on every build (Gradle task), never hand-edited
        ▼
Android shell (Kotlin)
  MainActivity        WebView host, origin allowlist
  TimeFlowBridge      @JavascriptInterface — validates everything the web side sends
  ReminderScheduler   AlarmManager exact alarms, persisted so a reboot can restore them
  BootReceiver        re-arms alarms after restart
  FocusForegroundService  keeps the focus countdown alive while the app is minimised
```

One codebase is the product; Kotlin does only what a WebView cannot (exact alarms, surviving
reboot, background timers). Data is local-only (WebView storage); no accounts, no sync in v1.

**Engineering practice.**

- **CI on every PR:** builds a release APK with the same R8 / resource shrinking as a real release
  and runs the Kotlin unit tests plus three Node suites (storage, alerts, copy — 218 assertions).
- **Signed releases on tag:** a `v*` tag builds a signed APK and attaches it to the GitHub
  Release. CI fails if signing secrets are missing or partial, and refuses to upload an APK that
  `apksigner verify` rejects.
- **Product spec before code** (`SPEC.md`, a "decisions locked in" table), and a shared memory
  bank so Claude Code and Cursor sessions work from the same context.

## What was hard

- **Typing lost under live re-renders.** One `render()` rebuilds the screen from state; a timer
  ticking every second was wiping wizard inputs. Fixed with a narrow live-patch path that updates
  only the timer while a field is focused.
- **Duplicate notifications on Android.** The in-app poll and AlarmManager were both posting the
  same alert. Fixed by letting the native side own alerts whenever it is present.
- **Repeating reminders went silent.** After a repeating reminder was completed, its next round was
  never handed to the native scheduler. Found and fixed while building notify times (v0.4.0).
- **Fitting the bridge.** The native bridge truncates large messages, so the alert planner caps
  and sizes its payload to stay safely under that limit instead of risking a corrupted schedule.
- **Android notification channels are immutable.** A channel's sound and importance are fixed at
  creation, so changing the alert style means encoding the choice in the channel id and rebuilding
  the channel.

## Attribution

Solo product. Since July 2026 the code has been written with AI coding agents (Claude Code and
Cursor) under the author's direction: 8 of 32 commits are authored by Claude sessions and merged
through PRs, the rest by the author. Product decisions, the spec, testing on devices and the
tester feedback loop are the author's.

## Known issues / Limitations

- **No public evidence.** A screener cannot verify any of this from a link. Resumes describe it as
  closed-source and offer a demo; that is the honest position and it should stay that way.
- **Android only.** The PWA build that ran on iPhone was retired with the public repo.
- **Sideload only.** Not on the Play Store; testers allow installs from unknown sources.
- **Single device.** Local storage only — no sync or export. Uninstalling clears everything.
- **One large file.** `app.js` is ~6 600 lines; splitting it into modules is an open follow-up.
- **History in this repo.** Earlier commits of this file (before 21 October 2026) still contain the
  quoted scheduler code and data model. They came from the then-public PWA. Purging them would mean
  rewriting this repository's history, as was done for the restricted Prodegee folder.
