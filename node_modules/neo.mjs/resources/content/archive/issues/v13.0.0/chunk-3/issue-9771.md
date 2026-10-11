---
id: 9771
title: Add missing config JSDoc to Memory Core Lifecycle Services
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-07T22:24:46Z'
updatedAt: '2026-04-07T22:25:37Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9771'
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
closedAt: '2026-04-07T22:25:37Z'
---
# Add missing config JSDoc to Memory Core Lifecycle Services

The `static config` objects inside `ChromaLifecycleService.mjs` and `InferenceLifecycleService.mjs` are missing the required JSDoc property annotations (`@member`, `@type`). This violates the Neo.mjs strict coding guidelines which require all configurations to be documented for the class system and the auto-generated documentation generator.

These config blocks will be retrofitted with the required JSDoc.

