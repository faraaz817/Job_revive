# MGM Prayer Alerts (Android)

Kotlin Android app that fetches the day's prayer times for Melbourne Grand Mosque (Tarneit,
Victoria), schedules an exact local alarm at each Azaan time, and shows the Jamaat (congregation)
time in the notification. Per-prayer on/off toggles, per-prayer custom notification sounds, a
nightly 3 AM refresh, and reboot recovery. No server, no account, no location — the mosque's
published timetable is the single source of truth.

Built for the MGM community, August 2026. Source at
[github.com/faraaz817/MgmPrayerAlerts](https://github.com/faraaz817/MgmPrayerAlerts).

## Why

The mosque publishes its times on a website. People were opening it several times a day to check.
The app removes that: install once, allow notifications and exact alarms, and the phone tells you
at Azaan, with the Jamaat time in the same notification so you know how long you have.

The scope was deliberately narrow — one mosque, one platform, local notifications only — and
written down as a requirements document *before* any code. That document
(`FUNCTIONAL_REQUIREMENTS.md` in the repo) has a decision log, acceptance criteria and an explicit
out-of-scope list (no GPS calculation, no push server, no multi-mosque, no restore after
reinstall). The CO-STAR requirements skill in [Claude_Skills](../Claude_Skills/README.md)
cites this document as its worked example.

## What it does

- Pulls today's Azaan times from Awqat's Melbourne timetable and the mosque-specific Iqama config.
- Shows Azaan + Jamaat for Fajr, Dhuhr, Asr, Maghrib, Isha; on Fridays also Jumu'ah #1 / #2 / #3.
- Sunrise is parsed and displayed but is **never** a notification target.
- Schedules an `AlarmManager` exact alarm at each enabled Azaan for the rest of today.
- Notification text: *"Fajr Azaan — 5:46 AM · Jamaat: 6:16 AM"*.
- Every target has its own toggle. Turning one off mid-day clears and reschedules immediately.
- Every target has its own notification channel, so each can carry its own uploaded sound
  (system picker → copied into app storage → served to the channel via `FileProvider`).
- **Test** button fires a notification immediately with the chosen sound.
- 3:00 AM daily job: fetch → clear all alarms → reschedule enabled targets → re-arm itself.
- `BOOT_COMPLETED` receiver restores the schedule after a reboot.

## How it works

```
                       ┌──────────────────────────┐
  awqat.com.au ──────► │ AwqatPrayerRepository    │  OkHttp, three GETs, regex parsing
  wtimes-AU.MELBOURNE  │   fetchToday(): DaySchedule
  mgm/iqamafixed.js    └────────────┬─────────────┘
  mgm/  (Jumu'ah line)              │
                                    ▼
                       ┌──────────────────────────┐
                       │ AppPreferences           │  SharedPreferences: schedule cache,
                       │   saveSchedule / toggles │  per-target enabled, sound file, sound version
                       └────────────┬─────────────┘
                                    ▼
                       ┌──────────────────────────┐
                       │ PrayerScheduler          │  clearAll() then, per enabled target,
                       │   clearAndReschedule()   │  setExactAndAllowWhileIdle(RTC_WAKEUP)
                       │   ensureDailyRefresh()   │  + one alarm at 03:00 for DailyRefreshReceiver
                       └────────────┬─────────────┘
                                    │  PendingIntent (one request code per target)
                                    ▼
   PrayerAlarmReceiver ──► NotificationHelper.showPrayerNotification()
   DailyRefreshReceiver ─► ScheduleSync.refreshAndReschedule()   (goAsync + IO coroutine)
   BootReceiver ─────────► reschedule from cache if it is still today's
   MainActivity ─────────► renders schedule, toggles, sound pickers, Test, permission prompts
```

**Data source.** Awqat publishes a `wtimes-AU.MELBOURNE.ini` with one line per calendar day
(`"MM-DD~~~~~fajr|sunrise|dhuhr|asr|maghrib|isha"`), and each mosque has an `iqamafixed.js`
declaring either fixed Jamaat times or per-prayer offsets from Azaan. The repository parses both,
prefers a fixed time where one is set, otherwise adds the offset (falling back to the mosque's
defaults of +30/+15/+30/+5/+10). Friday session times are regex-extracted from the mosque page
(`JUMU'AH 12:30PM & 1:30PM & 2:15PM`) with a hard-coded fallback if the page changes.

**Time representation.** All stored and scheduled times are unambiguous 24-hour `H:mm`
(`TimeParse.formatStorage`); the UI formats to 12-hour with AM/PM only at display time. This is
the fix for the most serious bug found in review (below).

**Scheduling hygiene.** `clearAndReschedule` is the only path that arms prayer alarms. It first
cancels every possible target's `PendingIntent` (fixed request codes `200 + ordinal`), refuses to
schedule if the cached schedule's `dateKey` is not today, refuses if exact alarms are not
permitted (and surfaces that in the UI with a deep link to the system setting), skips triggers
already in the past, and always re-arms the 3 AM refresh before returning.

```kotlin
PrayerTarget.entries.forEach { target ->
    if (!prefs.isEnabled(target)) return@forEach
    if (target.isJumuah && !isFriday) return@forEach

    val pair = day.pairFor(target) ?: return@forEach
    val trigger = LocalDateTime.of(today, TimeParse.parseFlexible(pair.azan))
        .atZone(zone).toInstant().toEpochMilli()
    if (trigger <= System.currentTimeMillis()) return@forEach

    val intent = Intent(context, PrayerAlarmReceiver::class.java).apply {
        putExtra(EXTRA_TARGET, target.id)
        putExtra(EXTRA_AZAN, pair.azan)
        putExtra(EXTRA_JAMAAT, pair.jamaat)
    }
    val pending = PendingIntent.getBroadcast(
        context, requestCode(target), intent,
        PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
    )
    setExact(alarmManager, trigger, pending)
    NotificationHelper.ensureTargetChannel(context, target)
    scheduled++
}
```

**Per-target sound channels.** Android notification channels are immutable once created, so a
changed sound needs a *new* channel. The app versions channel IDs (`mgm_<target>_<soundVersion>`),
bumps the version on every sound change, deletes stale channels for that target, and creates the
new one with the `FileProvider` URI and `USAGE_NOTIFICATION_EVENT` audio attributes.

## Stack

| | |
| --- | --- |
| Language | Kotlin, JVM 17 |
| Min / target SDK | 26 (Android 8) / 35 (Android 15) |
| UI | AppCompat + Material 3, ViewBinding, XML layouts |
| Networking | OkHttp 4.12, 20 s timeouts |
| Concurrency | kotlinx-coroutines; `goAsync()` in receivers |
| Scheduling | `AlarmManager.setExactAndAllowWhileIdle` |
| Persistence | SharedPreferences + app-private files for sounds |
| Tests | JUnit 4 — `TimeParseTest` |
| Build | Gradle KTS, AGP; `gradlew assembleDebug` |

Permissions: `INTERNET`, `POST_NOTIFICATIONS`, `SCHEDULE_EXACT_ALARM`, `RECEIVE_BOOT_COMPLETED`,
`WAKE_LOCK`, `VIBRATE`. `USE_EXACT_ALARM` was deliberately dropped (Play policy).

## Code review and fixes

Before release the app was reviewed line-by-line against the requirements document and the
findings written up in `codereview.md`, ordered by severity, with a fix-status table. The two that
matter most:

**1 — Critical: afternoon alarms firing at the wrong time.** The first version stored times as
`5:40` (no meridian) and re-parsed them as `H:mm`, so Maghrib at 17:40 was being scheduled for
05:40. Fajr and Dhuhr happened to look right, which is why casual testing missed it. Fixed by
making storage 24-hour everywhere and adding round-trip unit tests:

```kotlin
@Test
fun storageRoundTripKeepsAfternoonTimes() {
    val maghrib = LocalTime.of(17, 40)
    val stored = TimeParse.formatStorage(maghrib)
    assertEquals("17:40", stored)
    assertEquals(maghrib, TimeParse.parseFlexible(stored))
}
```

**2 — High: a failed 3 AM fetch stopped all future refreshes.** The nightly alarm is one-shot and
was only re-armed on success. Moved the re-arm into a `finally` so a network error at 3 AM costs
one day's refresh, not every day after it.

Also fixed from the review: stale-schedule guard (never attach yesterday's clock strings to
today), exact-alarm denial surfaced in the UI instead of failing silently, `POST_NOTIFICATIONS`
checked before posting, ambiguous 12-hour display. Left open: moving the nightly refresh from
`goAsync()` to `WorkManager` for slow-network resilience, and broader unit coverage of the
parsing and Friday logic.

## Install / build

```bat
set JAVA_HOME=C:\Program Files\Android\Android Studio\jbr
gradlew.bat assembleDebug
adb install -r app\build\outputs\apk\debug\app-debug.apk
```

Then open the app, allow **notifications**, and allow **exact alarms** when prompted (required —
without it no prayer alarm can be scheduled, and the app says so in its status line).

Manual test checklist from the repo: today's times match awqat.com.au/mgm; toggle Asr off → no
Asr alert; Test button fires with the chosen sound; per-prayer sound upload works; on Friday the
three Jumu'ah targets appear.

## Limitations

- **Melbourne only, MGM only.** Timezone and data URLs are fixed. Multi-mosque was explicitly out
  of scope for v1.
- **Screen-scraping fragility.** Jumu'ah times come from a regex over the mosque's HTML; if the
  page wording changes the app silently falls back to the hard-coded defaults.
- **Custom sounds on some OEMs.** Channel sounds served via `FileProvider` are granted to a list
  of known notification hosts; some manufacturers' system UI may still ignore the URI and play the
  default sound.
- **Battery optimisers.** Exact alarms survive Doze via `setExactAndAllowWhileIdle`, but
  aggressive OEM battery managers can still kill the app's receivers. Standard caveat for any
  alarm app.
- **Debug build.** Distributed as a sideloaded debug APK to the community; not on the Play Store.
- iOS was specified in the requirements as a future platform with identical behaviour; not built.
