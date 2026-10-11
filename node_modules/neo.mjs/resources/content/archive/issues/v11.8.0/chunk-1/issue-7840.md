---
id: 7840
title: Optimize SessionService.summarizeSessions with Promise.all
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-11-21T12:58:27Z'
updatedAt: '2025-11-21T13:00:34Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7840'
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
closedAt: '2025-11-21T13:00:34Z'
---
# Optimize SessionService.summarizeSessions with Promise.all

Refactor `SessionService.summarizeSessions` to process unsummarized sessions in parallel using `Promise.all` instead of a sequential `for...of` loop. This will improve the startup time when there are multiple unsummarized sessions.

