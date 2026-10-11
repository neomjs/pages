---
id: 6745
title: 'buildScripts/buildESModules: minifyFile()'
state: CLOSED
labels:
  - enhancement
assignees: []
createdAt: '2025-06-03T12:53:15Z'
updatedAt: '2025-06-03T12:53:48Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6745'
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
closedAt: '2025-06-03T12:53:48Z'
---
# buildScripts/buildESModules: minifyFile()

* separate the logic from `minifyFolder()`
* add the SW file as a new entry point
* adjust `main.addon.ServiceWorker: registerServiceWorker()` for dist/esm

