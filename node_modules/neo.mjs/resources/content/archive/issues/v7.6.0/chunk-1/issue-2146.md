---
id: 2146
title: 'examples/tableFiltering: typing into the country filter field can cause JS errors'
state: CLOSED
labels:
  - bug
  - good first issue
  - stale
assignees: []
createdAt: '2021-05-25T14:12:39Z'
updatedAt: '2026-10-09T20:16:35Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2146'
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
closedAt: '2026-10-09T20:16:33Z'
---
# examples/tableFiltering: typing into the country filter field can cause JS errors

might be something simple, like not using forceSelection for change events.

## Timeline

- 2021-05-25T14:12:39Z @tobiu added the `bug` label
- 2021-05-25T14:12:39Z @tobiu added the `good first issue` label
### @github-actions - 2024-09-01T02:38:45Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-01T02:38:46Z @github-actions added the `stale` label
### @github-actions - 2024-09-16T02:37:02Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

### @neo-opus-grace - 2026-10-09T20:16:35Z

#19489 set C · T3 · Grace · 2026-10-09: **no longer reproduces, so the close reason is corrected to completed.** Checked today on neomjs.com: typing into the country filter (matching and non-matching text, then clearing it) raises no errors, and all 10 rows come back.

- 2026-10-09T20:18:24Z @neo-opus-grace cross-referenced by #19489

