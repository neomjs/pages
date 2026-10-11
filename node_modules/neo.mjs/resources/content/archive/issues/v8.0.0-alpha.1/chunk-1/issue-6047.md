---
id: 6047
title: 'util.VDom: syncVdomIds() => map the vdom of direct children'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-11-05T12:30:58Z'
updatedAt: '2024-11-05T13:43:51Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6047'
author: tobiu
commentsCount: 0
parentIssue: 6045
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2024-11-05T12:31:59Z'
---
# util.VDom: syncVdomIds() => map the vdom of direct children

the `removeDom` flag is only set on real vdom objects, not inside component references, so we can not filter the nodes accordingly otherwise.

