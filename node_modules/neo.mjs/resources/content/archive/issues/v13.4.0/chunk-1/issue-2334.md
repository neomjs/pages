---
id: 2334
title: calendar.view.month.EventDragZone
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2021-06-10T12:02:47Z'
updatedAt: '2026-11-05T21:13:31Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2334'
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
closedAt: '2026-11-05T21:13:31Z'
---
# calendar.view.month.EventDragZone

We need the ability to drag events into different days.

## Timeline

- 2021-06-10T12:02:47Z @tobiu added the `enhancement` label
- 2021-06-10T12:02:47Z @tobiu assigned to @tobiu
### @github-actions - 2024-09-01T02:38:43Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-01T02:38:43Z @github-actions added the `stale` label
### @github-actions - 2024-09-16T02:37:00Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-16T02:37:00Z @github-actions closed this issue
- 2026-10-09T20:15:43Z @neo-opus-grace reopened this issue
- 2026-10-09T20:15:45Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:15:46Z

#19489 set C · T3 · Grace · 2026-10-09: **reopened, valid but later.** Only the week view can drag events (`src/calendar/view/week/EventDragZone.mjs`); the month view has no event drag zone.

- 2026-10-09T20:18:24Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:34:19Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `src/calendar/view/month/` holds only `Component.mjs`. Event dragging exists for the week view alone (`week/EventDragZone.mjs`, `week/plugin/DragDrop.mjs`).

**Verdict: holds.** The week view's drag zone is the pattern to port.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-11-05T19:12:27Z @neo-gemini-maryam added the `ai` label
- 2026-11-05T19:12:27Z @neo-gemini-maryam added the `core` label
### @neo-gemini-maryam - 2026-11-05T19:15:19Z

Picking up per 7-day rule; previous assignee @tobiu; last qualifying activity 2021-06-10T12:02:47Z.

- 2026-11-05T19:15:40Z @neo-gemini-maryam assigned to @neo-gemini-maryam
- 2026-11-05T19:15:41Z @neo-gemini-maryam unassigned from @tobiu
### @neo-gemini-maryam - 2026-11-05T19:15:42Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `@me`
**Reason:** Picking up per 7-day rule; previous assignee @tobiu; last qualifying activity 2021-06-10T12:02:47Z (#15000 backlog sweep).

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-05T19:22:29Z @neo-gemini-maryam cross-referenced by PR #20369
- 2026-11-05T19:29:35Z @neo-gemini-maryam referenced in commit `ac87e66` - "docs(calendar): update class-hierarchy.json for month EventDragZone and DragDrop (#2334)"
### @neo-gemini-maryam - 2026-11-05T20:14:16Z

## Contract Ledger

| Surface | Kind | Contract |
|---|---|---|
| `Neo.calendar.view.month.Component#enableDrag_` | reactive config (`Boolean`, default `true`, bound to `data.events.enableDrag`) | Lazily imports and registers `Neo.calendar.view.month.plugin.DragDrop` on the month view when enabled; gates event drag initiation and completion. |
| `Neo.calendar.view.month.Component#pluginDragDropConfig` | config (`Object\|null`, default `null`) | Optional configuration object spread into the lazily created `Neo.calendar.view.month.plugin.DragDrop` instance. |
| `Neo.calendar.view.month.plugin.DragDrop` | plugin (`ntype: 'plugin-calendar-month-dragdrop'`) | Attaches delegated `drag:start`, `drag:move`, and `drag:end` DOM listeners on `.neo-event`, lazily creates and reconfigures `owner.eventDragZone` (`Neo.calendar.view.month.EventDragZone`), and destroys/clears `owner.eventDragZone` when the plugin destroys. |
| `Neo.calendar.view.month.EventDragZone` | class (`extends Neo.draggable.DragZone`) | Clones the dragged month `.neo-event` VDOM into a `DragProxyComponent`, moves the proxy across hovered `.neo-day` cells (`index: 1`, right below `.neo-day-number`) during `dragMove`, and commits the new target day (`startDate`/`endDate` preserving local time-of-day and duration) plus `eventStore.doSort()` and `owner.createContent()` on `dragEnd`. |

Authored by Maryam (Gemini 4 Argon, Antigravity). Session 70151411-91ec-4496-b8f0-ea3b31ddb60b. 🧭

- 2026-11-05T20:16:06Z @neo-gemini-maryam referenced in commit `0087b2e` - "feat(calendar): add month view EventDragZone and DragDrop plugin (#2334)"
- 2026-11-05T20:16:07Z @neo-gemini-maryam referenced in commit `8779bae` - "docs(calendar): update class-hierarchy.json for month EventDragZone and DragDrop (#2334)"
- 2026-11-05T20:16:07Z @neo-gemini-maryam referenced in commit `14f7f92` - "fix(calendar): arm month event drag sensor and destroy EventDragZone (#2334)"
- 2026-11-05T20:20:20Z @neo-gemini-maryam referenced in commit `ed30095` - "feat(calendar): add month view EventDragZone and DragDrop plugin (#2334)"
- 2026-11-05T20:20:20Z @neo-gemini-maryam referenced in commit `4065887` - "docs(calendar): update class-hierarchy.json for month EventDragZone and DragDrop (#2334)"
- 2026-11-05T20:20:21Z @neo-gemini-maryam referenced in commit `f5104b6` - "fix(calendar): arm month event drag sensor and destroy EventDragZone (#2334)"

