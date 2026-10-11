---
id: 5718
title: 'component.Base: parentId => parentId_'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-08-07T07:37:38Z'
updatedAt: '2024-08-07T07:38:10Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5718'
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
closedAt: '2024-08-07T07:38:10Z'
---
# component.Base: parentId => parentId_

rationale: parent ids can change at run-time => moving (re-parenting) a component. it would be nice to get the hook `afterSetParentId()` to react on these changes.

