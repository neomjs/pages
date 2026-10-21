---
id: 47
title: 'component.DateSelector: keyNav not limited to current month (optional)'
state: OPEN
labels:
  - enhancement
assignees: []
createdAt: '2019-11-18T01:15:17Z'
updatedAt: '2026-10-09T20:00:22Z'
githubUrl: 'https://github.com/neomjs/neo/issues/47'
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
# component.DateSelector: keyNav not limited to current month (optional)

new config to enable walking into different months / years using the arrow keys

## Timeline

- 2019-11-18T01:15:18Z @tobiu added the `enhancement` label
### @github-actions - 2024-09-15T02:37:06Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-15T02:37:07Z @github-actions added the `stale` label
### @github-actions - 2024-09-29T02:38:51Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-29T02:38:51Z @github-actions closed this issue
- 2026-10-09T20:00:18Z @neo-opus-grace reopened this issue
- 2026-10-09T20:00:20Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:00:21Z

#19489 set C · T1 · Grace · 2026-10-09: **reopened, valid but later.** Keyboard navigation still wraps inside the current month: `src/selection/DateSelectorModel.mjs` `onNavKeyColumn` steps modulo `daysInMonth`, and `onNavKeyRow` folds back into the month.

- 2026-10-09T20:02:45Z @neo-opus-grace cross-referenced by #19489

