---
id: 6460
title: 'grid.View: mountedRows, visibleRows configs'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-02-17T14:06:55Z'
updatedAt: '2025-02-17T14:09:46Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6460'
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
closedAt: '2025-02-17T14:09:46Z'
---
# grid.View: mountedRows, visibleRows configs

* `mountedRows` includes the bufferRowRange
* `visibleRows` excludes the bufferRowRange
* We need both for the selection models, especially row based ones

