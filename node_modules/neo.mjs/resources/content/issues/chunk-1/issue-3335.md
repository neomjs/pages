---
id: 3335
title: 'form.field.Text: reset() => enhance the logic to only trigger one vdom update'
state: OPEN
labels:
  - enhancement
assignees: []
createdAt: '2022-08-01T12:00:14Z'
updatedAt: '2026-10-09T19:49:51Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3335'
author: tobiu
commentsCount: 3
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
---
# form.field.Text: reset() => enhance the logic to only trigger one vdom update

to do this, we most likely should extract the logic from `afterSetValue()` into a new method using a silent param. we should also fire the change event at the very end of the `reset()` call.

## Timeline

- 2022-08-01T12:00:14Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-30T02:27:50Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:27:51Z @github-actions added the `stale` label
### @github-actions - 2024-09-14T02:26:55Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-14T02:26:55Z @github-actions closed this issue
- 2026-10-09T16:26:55Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T19:49:48Z @neo-opus-grace reopened this issue
- 2026-10-09T19:49:49Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T19:49:51Z

#19489 set C sample · Grace · 2026-10-09: **reopened, valid but later.** `reset()` can still cost two VDOM updates: it sets the value (`src/form/field/Base.mjs` L384–387), then calls `updateError(null)`, which runs its own `update()` (`src/form/field/Text.mjs` L1584–1600, L1624ff).


