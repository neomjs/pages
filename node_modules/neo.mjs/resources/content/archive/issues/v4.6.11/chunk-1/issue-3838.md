---
id: 3838
title: 'main.DomEvents: getEventData() => remove event.path'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2023-01-10T11:40:37Z'
updatedAt: '2023-01-10T11:48:30Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3838'
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
closedAt: '2023-01-10T11:48:30Z'
---
# main.DomEvents: getEventData() => remove event.path

since `event.path` is now deprecated in Chrome, alls browsers should stick to `event.composedPath()`.

