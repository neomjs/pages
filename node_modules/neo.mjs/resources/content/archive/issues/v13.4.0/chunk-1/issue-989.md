---
id: 989
title: 'Neo.calendar.view.MonthComponent: onWheelEnd() => header date'
state: CLOSED
labels:
  - enhancement
assignees:
  - neo-gemini-maryam
createdAt: '2020-07-29T22:44:42Z'
updatedAt: '2026-11-05T17:14:41Z'
githubUrl: 'https://github.com/neomjs/neo/issues/989'
author: tobiu
commentsCount: 6
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
closedAt: '2026-11-05T17:14:41Z'
---
# Neo.calendar.view.MonthComponent: onWheelEnd() => header date

get the date of the first fully visible row for the header

## Timeline

- 2020-07-29T22:44:43Z @tobiu added the `enhancement` label
- 2020-07-29T22:44:43Z @tobiu assigned to @tobiu
### @github-actions - 2024-09-14T02:27:17Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-14T02:27:17Z @github-actions added the `stale` label
### @github-actions - 2024-09-28T02:31:25Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-28T02:31:25Z @github-actions closed this issue
- 2026-09-16T19:15:33Z @neo-opus-grace cross-referenced by PR #18811
### @neo-opus-grace - 2026-10-09T20:08:07Z

#19489 set C · T2 · Grace · 2026-10-09: **reopened, valid but later.** `calendar.view.month.Component#onWheel` swaps weeks in and out, but nothing derives the header date from the first fully visible row.

- 2026-10-09T20:10:15Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:34:11Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `calendar.view.month.Component#onWheelEnd()` exists and still carries `// todo: get the date of the first fully visible row for the header`. It takes the header from the first flagged row among rows 6–11, not from the first fully visible row.

**Verdict: holds.** The code marks the exact spot. It is small, and it can ship with #990, which ends the same method.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-11-05T10:34:14Z @neo-opus-ada cross-referenced by #990
### @neo-gemini-maryam - 2026-11-05T14:30:43Z

Picking up per 7-day rule; previous assignee @tobiu; last qualifying activity 2020-07-29T22:44:42Z.

### Ticket Intake Classification (`#989` + `#990`)
- **Ticket age:** `createdAt: 2020-07-29T22:44:42Z`, `updatedAt: 2026-11-05T10:34:11Z`
- **Bot stale-band:** `pre-stale` (`stale: false`, `no auto close: false`)
- **Prescription checked:** `src/calendar/view/month/Component.mjs` (`onWheelEnd`) — owns the concern (paired with `#990`).
- **Core-Idiom Pre-Flight:** Read `src/core/Base.mjs`, `src/Neo.mjs`, `src/state/Provider.mjs`.
- **Verdict:** `valid-as-written` — deriving the snapped top visible `.neo-week` row (`0 <= closestIndex <= weeks.length - 6`) in `onWheelEnd()` and formatting its `flag` date (`YYYY-MM-DD`, where `day === 1` already wins `row.flag` in `createWeek()`) into the static header without the legacy `+ 1` month offset.

— Maryam 🧭

### @neo-gemini-maryam - 2026-11-05T14:31:10Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `@me`
**Reason:** Picking up per 7-day rule (operator backlog sweep #15000); previous assignee @tobiu; last qualifying activity 2020-07-29T22:44:42Z.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-05T14:36:37Z @neo-gemini-maryam cross-referenced by PR #20331

