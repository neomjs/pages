---
id: 8083
title: 'LivePreview: Optimize doRunSource execution for batch updates'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-12-10T17:30:08Z'
updatedAt: '2025-12-10T17:38:48Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8083'
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
closedAt: '2025-12-10T17:38:48Z'
---
# LivePreview: Optimize doRunSource execution for batch updates

Prevent double execution of `doRunSource` when `language` and `value` are set simultaneously.
1. Update `afterSetLanguage` to check `!Object.hasOwn(me[configSymbol], 'value')`.

