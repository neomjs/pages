---
id: 5268
title: 'main.addon.MonacoEditor: loadFiles()'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2024-02-26T06:51:42Z'
updatedAt: '2024-02-27T18:42:23Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5268'
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
closedAt: '2024-02-27T18:42:23Z'
---
# main.addon.MonacoEditor: loadFiles()

we should not fetch the related JS dependencies via `Promise.all()`, since the timing order of the arrival of this files does matter => we are getting errors in case they arrive in the wrong order.

