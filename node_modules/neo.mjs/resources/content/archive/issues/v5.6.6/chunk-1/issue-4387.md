---
id: 4387
title: 'component.Base: getReference() => use controllers if possible'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2023-05-08T08:20:27Z'
updatedAt: '2023-05-08T08:24:29Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4387'
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
closedAt: '2023-05-08T08:24:29Z'
---
# component.Base: getReference() => use controllers if possible

since view controllers cache references, we should check if a controller exists and if so return `getReference()` on controller level. if not return the current logic.

## Timeline

- 2023-05-08T16:44:37Z @tobiu cross-referenced by #4393

