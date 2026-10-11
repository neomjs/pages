---
id: 7977
title: Sanitize commander inputs in buildScripts/buildAll.mjs
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2025-12-02T17:31:15Z'
updatedAt: '2025-12-02T17:43:10Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7977'
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
closedAt: '2025-12-02T17:43:10Z'
---
# Sanitize commander inputs in buildScripts/buildAll.mjs

The `commander` library does not sanitize inputs by default. This can lead to issues if users provide inputs with quotes (e.g., `-t "yes"`).
We need to implement a `sanitizeInput` function and apply it to the `program` options in `buildScripts/buildAll.mjs`.

References:
- `buildScripts/buildAll.mjs`

