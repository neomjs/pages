---
id: 8270
title: '[Neural Link] Implement toJSON in manager.Window'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-01-01T17:26:37Z'
updatedAt: '2026-01-01T17:53:22Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8270'
author: tobiu
commentsCount: 0
parentIssue: 8200
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-01T17:52:09Z'
---
# [Neural Link] Implement toJSON in manager.Window

Implement `toJSON` for the singleton `manager.Window`. This should serialize the collection of windows, ensuring each window object (`{appName, chrome, id, ...}`) is correctly serialized.

## Timeline

- 2026-01-01T17:26:38Z @tobiu added the `enhancement` label

