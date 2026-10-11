---
id: 1141
title: 'component.Base: updateStyle() => no need to sync the vnode tree'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2020-08-28T19:22:05Z'
updatedAt: '2020-08-28T19:38:29Z'
githubUrl: 'https://github.com/neomjs/neo/issues/1141'
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
closedAt: '2020-08-28T19:38:29Z'
---
# component.Base: updateStyle() => no need to sync the vnode tree

a style update won't change the structure, so we can remove the tree sync (performance).

