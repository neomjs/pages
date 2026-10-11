---
id: 9785
title: Implement Topological Gravity Detection in GraphService
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-08T10:01:16Z'
updatedAt: '2026-04-08T10:07:56Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9785'
author: tobiu
commentsCount: 1
parentIssue: 9784
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-08T10:07:56Z'
---
# Implement Topological Gravity Detection in GraphService

> Modify `GraphService.mjs` native SQLite queries to dynamically compute `in_degree` and `out_degree` metrics for nodes when querying their vicinity. This provides downstream LLMs with a hard mathematical proxy for a node's structural importance or "Gravity."

## Timeline

### @tobiu - 2026-04-08T10:07:54Z

Task completed. Added native topological gravity calculations (in_degree, out_degree) to GraphService.mjs, and verified via Playwright integration.

- 2026-04-08T10:08:09Z @tobiu cross-referenced by #9784

