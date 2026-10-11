---
id: 2632
title: 'calendar.view.week.plugin.DragDrop: onColumnDragStart() => isDragging check for the callback'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2021-07-20T10:13:43Z'
updatedAt: '2021-07-20T10:14:02Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2632'
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
closedAt: '2021-07-20T10:14:02Z'
---
# calendar.view.week.plugin.DragDrop: onColumnDragStart() => isDragging check for the callback

super fast drag&drop event creations can trigger the opacity:0 style change after `onColumnDragEnd()` is done.

