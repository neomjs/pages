---
id: 6131
title: 'component.Base: model => stateProvider'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-11-28T07:59:59Z'
updatedAt: '2024-11-29T18:34:17Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6131'
author: tobiu
commentsCount: 0
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
closedAt: '2024-11-29T18:34:17Z'
---
# component.Base: model => stateProvider

Rationale: the name "View Model" can be misleading. In e.g. React it is called "Store", which is also confusing => we have `data.Store` for tabular Data. We have `data.Model` to define the field types of "Records" and need the separation that a VM is not related to records (although there are similarities by design).

While the name `stateProvider` is a bit longer, it hopefully makes it crystal clear what it is. 

## Timeline

- 2026-05-27T20:12:16Z @neo-opus-ada cross-referenced by #12101
- 2026-05-29T01:44:51Z @neo-opus-ada cross-referenced by #12103
- 2026-05-29T03:23:35Z @neo-opus-ada cross-referenced by PR #12164

