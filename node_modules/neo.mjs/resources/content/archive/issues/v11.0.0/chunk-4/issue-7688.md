---
id: 7688
title: Integrate GitHub Workflow server tests into Playwright suite
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-11-01T18:23:06Z'
updatedAt: '2025-11-01T19:14:27Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7688'
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
closedAt: '2025-11-01T19:14:27Z'
---
# Integrate GitHub Workflow server tests into Playwright suite

PR #7678 introduced two new testing files (`openapi-issues.test.mjs` and `tool-registration.test.mjs`) for the `github-workflow` MCP server. This ticket is to integrate these new server-side tests into our existing Playwright testing suite, ensuring consistency and maintainability of our test infrastructure.

