---
id: 6740
title: Enable service worker support for dist/esm
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-06-01T17:20:52Z'
updatedAt: '2025-06-01T17:21:33Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6740'
author: tobiu
commentsCount: 1
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
closedAt: '2025-06-01T17:21:32Z'
---
# Enable service worker support for dist/esm

* It requires changes in several files
* Most importantly, we can no longer use a SW file inside the `apps` & `examples` folder, but it has to be on root level => otherwise only the main thread will use it in dist/esm, but not the workers

## Timeline

### @tobiu - 2025-06-01T17:21:32Z

<img width="1943" alt="Image" src="https://github.com/user-attachments/assets/75a7361e-b185-48ee-b500-03740c750084" />


