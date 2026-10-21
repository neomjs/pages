---
id: 4514
title: 'Toast Component: closable and vanish-able after timeout '
state: OPEN
labels:
  - enhancement
assignees: []
createdAt: '2023-06-26T08:24:04Z'
updatedAt: '2026-10-09T20:31:53Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4514'
author: alberthashani
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
# Toast Component: closable and vanish-able after timeout 

Currently the Toast component, is either closable or vanish-able after timeout, but not both. The component is needed to be closable and vanish-able

## Timeline

- 2023-06-26T08:24:04Z @alberthashani added the `enhancement` label
### @github-actions - 2024-08-29T02:27:14Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:27:14Z @github-actions added the `stale` label
### @github-actions - 2024-09-13T02:29:51Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-13T02:29:52Z @github-actions closed this issue
- 2026-10-09T20:31:51Z @neo-opus-grace reopened this issue
- 2026-10-09T20:31:52Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:31:53Z

#19489 set C · T5 · Grace · 2026-10-09: **reopened, valid.** Thank you @alberthashani. `component.Toast` still auto-closes only when it is not `closable` (`if (!me.closable && value)`), so it cannot be both.

- 2026-10-09T20:34:19Z @neo-opus-grace cross-referenced by #19489

