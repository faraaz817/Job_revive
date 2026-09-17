# Time Flow — ADHD-focused planner (PWA)

Installable phone web app that captures goals with as little friction as possible, then, when you
tell it how many free minutes you have, packs the highest-priority mix of goals, recurring targets
and timed reminders into that budget and runs them back-to-back with dual timers. No account, no
backend — everything lives in the browser's `localStorage`.

Solo project, July–September 2026. Live at
[faraaz817.github.io/time-flow-web](https://faraaz817.github.io/time-flow-web/); source at
[github.com/faraaz817/time-flow-web](https://github.com/faraaz817/time-flow-web).

## Why

ADHD planning fails at two points: the capture step is too heavy (so the goal never gets written
down) and the "what now?" step is too open (so free time evaporates). Time Flow attacks both. The
goal wizard asks exactly four things — title, importance, deadline *or* urgency, duration — with
tap-presets for every numeric field. The free-time screen asks one thing — how many minutes — and
answers with a concrete, ordered queue that starts on tap.

It is a PWA rather than a native app so it installs from a link, runs on both iPhone and Android
from one codebase, and works offline. The trade-off, documented in the app, is that browser tabs
throttle background timers; the installed Home Screen version is more reliable, and a native
wrapper is more reliable still (see *Android bridge* below).

## Features

| Screen | What it does |
| --- | --- |
| **Goals** | Four-step wizard: title → importance (3 levels) → deadline or urgency (3 levels) → duration (presets 5–120 min). Status `PENDING` / `OVERDUE` / `COMPLETED`. |
| **Free time** | Enter minutes available → app packs goals + targets by score → arrange/shuffle/edit the queue → focus screen with session timer and per-task timer; task timer ending auto-advances. |
| **Sprint** | Ad-hoc queue of custom tasks and/or existing items, saveable by name. Sprint completions never write back to goals or the calendar — it's a scratchpad session. |
| **Reminders** | One-off date/time, countdown, or weekly (by weekday) / monthly (by day-of-month) repeat. Polled in-app and mirrored to the service worker for system notifications. |
| **Targets** | Recurring quotas — *N times per day/week/month/year* — with per-period completion counting, pause/resume, and urgency that rises as the period runs down. |
| **Calendar** | Day / week / month views over the same data. Read-only; does not write to Google or phone calendar. |
| **Quick strip** | Sticky bar on Home: one-tap timer presets, quick-capture goal by title only, and the current session if one is running. |
| **Alerts prefs** | `off` / `soft` / `full` notification modes; sound via Web Audio; system notifications via the service worker when permission is granted. |

## How the scheduler works

Every candidate gets a score from 1 to 9: **urgency × importance**, each on a 1–3 scale.

```
goal urgency      deadline < 1 day (or overdue)  → 3
                  deadline < 7 days              → 2
                  otherwise                      → 1
                  (or the user's explicit urgency pick)

target urgency    elapsed  = fraction of the period gone by
                  expected = frequency × elapsed
                  behind   = expected − completions so far
                  behind ≥ 1  or  > 75 % of period gone  → 3
                  behind ≥ 0.25  or  ≥ half still to do  → 2
                  otherwise                              → 1

importance        Very important 3 · Important 2 · Not so important 1
```

Candidates are sorted by score desc, then shorter duration first, then oldest first, and greedily
packed into the free-minute budget:

```js
function packTasks(goals, targets, freeMinutes, now = Date.now()) {
  const goalItems = goals
    .filter((g) => g.status === "PENDING" || g.status === "OVERDUE")
    .map((g) => goalToPackItem(g, now));
  const targetItems = availableTargets(targets, now).map((t) => targetToPackItem(t, now));

  const candidates = [...goalItems, ...targetItems].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.estimatedMinutes !== b.estimatedMinutes) return a.estimatedMinutes - b.estimatedMinutes;
    return a.createdAt - b.createdAt;
  });

  const selected = [];
  let remaining = freeMinutes;
  for (const item of candidates) {
    if (item.estimatedMinutes <= remaining) {
      selected.push(item);
      remaining -= item.estimatedMinutes;
    }
    if (remaining <= 0) break;
  }
  return selected;
}
```

Greedy-by-score is deliberately not an optimal knapsack: for an ADHD user the point is a
predictable, explainable ordering ("most important-and-urgent first, small things fill the gaps"),
not squeezing the last minute out of the budget. The user can then reorder, remove, shuffle, or
pull in anything the packer skipped.

The target-urgency rule is the more interesting one: it compares *where you are* against *where
you should be* at this point in the period, so a "3× per week" target is calm on Monday and loud
on Saturday if nothing has been done.

## Architecture

```
index.html  ──  <div id="app">  +  registers sw.js
app.js      ──  4 600 lines, vanilla JS, no framework, no build step
                ├─ persistence   loadGoals / saveGoals … (5 localStorage keys, versioned)
                ├─ domain        scoring, packing, period maths, trigger computation
                ├─ state         one mutable `state` object; render() re-draws #app from it
                ├─ session       startTick / autoAdvance / endSession (1 s tick, dual timers)
                ├─ notifications Web Notification API ⇄ sw.js ⇄ optional window.TimeFlowAndroid
                └─ screens       renderHome / renderFreeTime / renderArrange / renderFocus /
                                 renderSprint / renderRemind / renderTargets / renderCalendar …
styles.css  ──  1 000 lines, design tokens, DM Sans + Fraunces
sw.js       ──  cache-first app shell (versioned cache), stale-while-revalidate for same-origin
                GETs, and a `message` handler that turns app events into system notifications
manifest.webmanifest — standalone display, portrait, maskable icon
```

**Rendering.** There is one `render()` that rebuilds the current screen from `state`. Two commits
in the log deal with the consequence: a live timer re-rendering every second was making the
quick-capture input blink and lose focus. The fix (`patchStickySessionLive`, `uiInputLocked`) is a
narrow live-patch path that updates only the timer text while an input is focused, and a full
re-render otherwise — the same idea as a virtual-DOM diff, applied by hand to the one place it
mattered.

**Time handling.** Period starts are Monday-based local weeks / local days / months / years,
computed without a date library. Weekly and monthly reminders compute their next trigger from the
chosen weekdays / month-days and a `HH:MM` string.

**Android bridge.** `app.js` checks for `window.TimeFlowAndroid`. If present (a Kotlin WebView
wrapper injecting a `@JavascriptInterface`), reminders and running timers are mirrored to native
alarms via `syncReminders(json)` / `syncTimers(json)`, and permission results come back through
`window.onAndroidNotificationPermissionResult`. The web build works identically without it —
every bridge call is wrapped in `try/catch` and no-ops when absent. The wrapper is not in the
public repo.

## Running it

```bash
git clone https://github.com/faraaz817/time-flow-web
cd time-flow-web
npx --yes serve .        # any static server works; file:// won't register the service worker
```

Install on a phone: open the deployed URL in Safari (iPhone: Share → Add to Home Screen) or
Chrome (Android: menu → Install app). It opens full-screen as its own app.

## Data model

```js
goal      { id, title, importance, scheduling: { type: "DEADLINE", deadlineEpochMillis }
                                          | { type: "URGENCY",  urgency },
            estimatedMinutes, status, createdAt, updatedAt, completedAt }

target    { id, title, importance, period, frequency, estimatedMinutes,
            periodStart, completionsInPeriod, completedForPeriod, paused }

reminder  { id, title, status: "SCHEDULED" | "DONE", triggerAt,
            repeat?: { kind: "WEEKLY", weekdays, time } | { kind: "MONTHLY", monthDays, time } }

session   { mode: "freetime" | "sprint", queue, index, sessionLeft, taskLeft, taskTotal,
            totalSeconds, completed, skipped }
```

All keys are suffixed `.v1` so a future schema change can migrate rather than clobber.

## Limitations

- **Background timers.** A backgrounded browser tab throttles `setInterval`; the focus timer can
  drift or stall when the screen locks. The installed PWA is better; only the native wrapper is
  reliable. The README on the repo says this up front.
- **iOS notifications** require the app to be installed to the Home Screen (iOS 16.4+) and
  permission granted from inside the installed app; Safari tabs cannot show them.
- **Single device.** Data is `localStorage` only — no sync, no export yet. Clearing site data
  clears everything.
- **No tests.** The scoring and period functions are pure and would be straightforward to unit
  test; that has not been done.
- **One file.** `app.js` is a single 4 600-line file. It is organised by section comments and
  function prefix rather than modules, which was fine for one author but would need splitting
  before a second contributor joins.
