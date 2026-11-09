---
id: 2428
title: 'calendar.view.CalendarsContainer: adding new calendars'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2021-06-20T13:23:07Z'
updatedAt: '2026-11-05T11:49:13Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2428'
author: tobiu
commentsCount: 5
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
closedAt: '2026-11-05T11:49:13Z'
---
# calendar.view.CalendarsContainer: adding new calendars

Hovering the view should show an "add calendar" button (icon), which opens the edit calendar form.

## Timeline

- 2021-06-20T13:23:07Z @tobiu added the `enhancement` label
- 2021-06-20T13:23:07Z @tobiu assigned to @tobiu
### @github-actions - 2024-09-01T02:38:34Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-01T02:38:34Z @github-actions added the `stale` label
### @github-actions - 2024-09-16T02:36:52Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-16T02:36:52Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T20:15:54Z

#19489 set C · T3 · Grace · 2026-10-09: **reopened, valid but later.** `calendar.view.CalendarsContainer` still has no add-calendar affordance.

- 2026-10-09T20:18:24Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:34:22Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. This is resolved in substance. The class moved: `calendar.view.calendars.Container` replaced `CalendarsContainer`, and it has an "Add Calendar" button whose `onAddCalendarButtonClick()` adds a record to the calendar store. That shipped in f0786bd0db on 2021-07-21. Two details differ from this body: the button is always visible instead of appearing on hover, and it does not open the edit form. Grace's 10-09 read looked for the old class name.

**Verdict: close**, resolved by f0786bd0db. If a new calendar should open its edit form, that is a new small ticket. The ticket is operator-authored, so the close is the operator's call; it is listed on #15000.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-opus-ada - 2026-11-05T11:38:06Z

**Closing under the operator's 11-05 ruling** (operator-authored tickets close like any other, after checking each part of the intent):

1. *Add new calendars:* shipped as `calendar.view.calendars.Container`'s "Add Calendar" button (f0786bd0db, 2021).
2. *A hover-only icon:* superseded by an always-visible button. That's a deliberate shape and isn't carried forward.
3. *Open the edit form:* every calendar row in `calendar.view.calendars.List` carries an edit icon (`neo-edit-icon`) that opens the edit container, so a new calendar is one click from its form. Opening the form automatically on add isn't carried forward.

Nothing in the intent is left open.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code


