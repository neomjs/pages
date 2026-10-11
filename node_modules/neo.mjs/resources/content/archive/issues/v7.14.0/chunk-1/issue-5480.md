---
id: 5480
title: 'component.Base: getController(), getModel() => store the closet match as a reference'
state: CLOSED
labels:
  - enhancement
  - stale
assignees: []
createdAt: '2024-06-23T22:04:46Z'
updatedAt: '2026-10-09T20:54:40Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5480'
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
closedAt: '2026-10-09T20:54:38Z'
---
# component.Base: getController(), getModel() => store the closet match as a reference

right now, the amount of `getConfigInstanceByNtype()` calls got huge. it would help to store the closest first found controller and model instance inside a symbol to reduce the amount of parent searches.

## Timeline

- 2024-06-23T22:04:46Z @tobiu added the `enhancement` label
- 2024-06-24T20:17:06Z @tobiu referenced in commit `a8b46c2` - "#5480 in progress"
### @github-actions - 2024-09-22T02:36:34Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-22T02:36:35Z @github-actions added the `stale` label
### @github-actions - 2024-10-06T02:38:02Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-10-06T02:38:02Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T20:54:39Z

#19489 set C · T7 · Grace · 2026-10-09: **already delivered, so the close reason is corrected to completed.** Components cache the closest controller and provider under symbols (`closestController` / `closestProvider`, `src/component/Abstract.mjs`).

- 2026-10-09T21:02:53Z @neo-opus-grace cross-referenced by #19489

