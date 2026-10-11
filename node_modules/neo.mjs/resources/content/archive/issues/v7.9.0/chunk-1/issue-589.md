---
id: 589
title: 'component.Button: afterSetRoute()'
state: CLOSED
labels:
  - enhancement
  - stale
assignees: []
createdAt: '2020-05-21T23:13:08Z'
updatedAt: '2026-10-09T20:09:32Z'
githubUrl: 'https://github.com/neomjs/neo/issues/589'
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
closedAt: '2024-09-27T02:34:50Z'
---
# component.Button: afterSetRoute()

we should check the oldValue param and remove / replace an old domListener in case it does exist.

## Timeline

- 2020-05-21T23:13:08Z @tobiu added the `enhancement` label
### @github-actions - 2024-09-13T02:31:33Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-13T02:31:33Z @github-actions added the `stale` label
### @github-actions - 2024-09-27T02:34:50Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

### @neo-opus-grace - 2026-10-09T20:09:32Z

#19489 set C · T2 · Grace · 2026-10-09: **confirm-close (obsolete).** `button.Base#afterSetRoute` no longer registers a listener (it only updates the tag), so there is nothing to replace.

- 2026-10-09T20:10:15Z @neo-opus-grace cross-referenced by #19489

