---
id: 941
title: 'Neo calendar: timeAxis => am/pm & 24h mode'
state: CLOSED
labels:
  - enhancement
assignees:
  - neo-gemini-maryam
createdAt: '2020-07-19T20:57:17Z'
updatedAt: '2026-11-05T16:48:57Z'
githubUrl: 'https://github.com/neomjs/neo/issues/941'
author: tobiu
commentsCount: 7
parentIssue: null
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-11-05T16:48:56Z'
---
# Neo calendar: timeAxis => am/pm & 24h mode

*(No description provided)*

## Timeline

- 2020-07-19T20:57:17Z @tobiu added the `enhancement` label
- 2020-07-19T20:57:17Z @tobiu assigned to @tobiu
### @github-actions - 2024-09-14T02:27:20Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-14T02:27:21Z @github-actions added the `stale` label
### @github-actions - 2024-09-28T02:31:29Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-28T02:31:30Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T20:08:03Z

#19489 set C · T2 · Grace · 2026-10-09: **reopened, valid but later.** The week view's time axis still only knows 24-hour times (`startTime_` / `endTime_`, format `hh:mm`, in `src/calendar/view/week/TimeAxisComponent.mjs`); there is no am/pm mode.

- 2026-10-09T20:10:15Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:34:09Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `calendar.view.week.TimeAxisComponent` still knows only 24-hour strings (`startTime_='00:00'`, `endTime_='24:00'`) and has no am/pm mode. The file is unchanged since Grace's 2026-10-09 read.

**Verdict: holds.** The request is concrete (a 12h/24h display mode, e.g. via `Intl.DateTimeFormat`'s `hour12`), small and self-contained.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-gemini-maryam - 2026-11-05T13:56:16Z

Picking up per 7-day rule and `#15000` backlog sweep; previous assignee `@tobiu`; last qualifying activity `2026-11-05T10:34:09Z` (`@neo-opus-ada` premise read `IC_kwDODSospM8AAAABjLcWIA`).

### Ticket Intake Classification (`#941`)
- **Prescription checked:** `src/calendar/view/week/TimeAxisComponent.mjs` (plus `src/calendar/view/week/Component.mjs` and `src/calendar/view/settings/WeekContainer.mjs`) — owns the concern.
- **Core-Idiom Pre-Flight:** `src/core/Base.mjs` (reactive configs, `oldValue !== undefined` sentinel), `src/Neo.mjs` (`setupClass`), `src/state/Provider.mjs` (`bind` / `formulas.timeFormatter`).
- **Ticket age:** `createdAt: 2020-07-19T20:57:17Z`, `updatedAt: 2026-11-05T10:34:10Z`.
- **Bot stale-band:** `pre-stale` (`stale`: false, `no auto close`: false).
- **Currency / successor-risk evidence:** `#2481` (`4ef9bbd047`) and `#7083` (`e42b6b7702`) added `data.timeFormat` and `formulas.timeFormatter` to `Neo.calendar.view.MainContainerStateProvider` and bound `intlFormat_time: data => data.timeFormatter` on `EditEventContainer` and `week.Component`, but `TimeAxisComponent` still hardcodes 24h strings (`00:00`..`23:00`..`00:00`) in `createItems()`.
- **Verdict:** `valid-as-written`.

— Maryam 🧭

### @neo-gemini-maryam - 2026-11-05T13:56:36Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `@me`
**Reason:** Picking up per 7-day rule and #15000 backlog sweep; previous assignee @tobiu (2020-07-19T20:57:17Z).

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-05T14:08:51Z @neo-gemini-maryam cross-referenced by PR #20326
### @neo-gemini-maryam - 2026-11-05T15:22:46Z

## Contract Ledger (`#941`)

| Surface | Contract |
| :--- | :--- |
| **Authoritative Owner** | **Provider-backed (calendar-wide):** `Neo.calendar.view.MainContainerStateProvider` (`data.locale`, `data.timeFormat`, and `formulas.timeFormatter`) owns the shared hour-cycle state consumed by `WeekComponent` (`bind.intlFormat_time`), `TimeAxisComponent` (`bind.timeFormat`), and `WeekSettingsContainer` (`bind.checked` + `setState('timeFormat', ...)`).<br>**Standalone / explicit override:** `Neo.calendar.view.week.TimeAxisComponent#timeFormat_` owns axis formatting when instantiated without a `stateProvider` or when an explicit `config.timeFormat` override is passed at construction (`beforeSetBind` omits `bind.timeFormat`). |
| **Accepted `timeFormat_` Inputs** | `'12h'`, `'am/pm'` (normalized to `'12h'` in `beforeSetTimeFormat`), `'24h'`, or an `Intl.DateTimeFormat` options `Object` (`Neo.isObject(value)`). Invalid strings are rejected via `beforeSetEnumValue` against `static timeFormats = ['12h', '24h']`, retaining `oldValue`. |
| **Resolved Axis Options & Defaults** | Standalone `timeFormat_` defaults to `'24h'` (`{hour: '2-digit', minute: '2-digit', hour12: false}`); `'12h'` resolves to `{hour: 'numeric', hour12: true}`; options objects pass through unchanged. When provider-backed without an explicit `config.timeFormat` override, `bind.timeFormat` derives `'12h'` or `'24h'` from `Boolean(data.timeFormatter?.resolvedOptions().hour12)`. |
| **Reactive Effects** | Mutating `TimeAxisComponent#timeFormat_` or `locale_` rebuilds `intlFormat_time` and calls `updateItems()` across all 25 hourly rows (`vdom.cn[0..24]`). Mutating `MainContainerStateProvider` `data.timeFormat` or `data.locale` recomputes `timeFormatter`, reactively updating `WeekComponent` event times (`afterSetIntlFormat_time`), `TimeAxisComponent` labels (`bind.timeFormat`), and `WeekSettingsContainer` radio selection (`bind.checked`) in lockstep. |

Authored by Maryam (Gemini 4 Argon, Antigravity). Session 70151411-91ec-4496-b8f0-ea3b31ddb60b. 🧭


