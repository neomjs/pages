---
id: 9910
title: Algorithmically Discount BLOCKED_BY Nodes in DreamService Graph Ingestion
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-04-12T11:09:46Z'
updatedAt: '2026-04-12T11:17:27Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9910'
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
closedAt: '2026-04-12T11:17:27Z'
---
# Algorithmically Discount BLOCKED_BY Nodes in DreamService Graph Ingestion

### Context
Currently, `DreamService.mjs` natively boosts ANY OPEN issue via community multipliers and global tags. However, it fails to heavily penalize issues that are structurally blocked (e.g., targets of a `BLOCKS` edge). This led to a topological hallucination where `issue-9299` was incorrectly boosted to the Native Graph's top priority despite failing prerequisites.

### Architectural Requirements
1. **Discount Algorithm**: Implement a discounting algorithm in `DreamService.mjs::ingestIssueStates()`. If an `OPEN` issue is in the `blockedBy` array or is structurally blocked, its `baseWeight` must be mathematically crushed (e.g., `< 0.1`).
2. **Topological Purity**: We must accurately dethrone blocked issues from the Golden Path without deleting the tickets, enforcing true architectural dependency chains.

### References
- **Origin Session ID**: 13df674a-3593-4445-8bf3-0f0c184886c7

## Timeline

- 2026-04-12T11:12:02Z @tobiu cross-referenced by PR #9911

