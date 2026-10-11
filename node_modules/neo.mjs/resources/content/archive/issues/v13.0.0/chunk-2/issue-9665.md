---
id: 9665
title: Stabilize MCP Server Infrastructure & Fix Memory/Graph Regression
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2026-04-03T18:37:49Z'
updatedAt: '2026-04-03T21:44:48Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9665'
author: tobiu
commentsCount: 0
parentIssue: 9638
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-03T21:44:48Z'
---
# Stabilize MCP Server Infrastructure & Fix Memory/Graph Regression

### Description
During the `DreamService` integration, the Antigravity sandbox suffered a severe startup regression for both the `knowledge-base` and `memory-core` MCP servers, leading to "context deadline exceeded" and process locks.

### Fixes Documented
1. **Database Path Isolation:** Addressed file locking between ChromaDB Python and `better-sqlite3` by isolating GraphService SQLite artifacts physically within the `/graph` subdirectory (`chroma-neo-knowledge-base/graph/knowledge-graph.sqlite`).
2. **Cross-Service Import Severance:** Removed the unsafe import and usage of `KB_GraphService` inside `DreamService.mjs` to ensure `memory-core` does not spin up or lock SQLite bindings belonging exclusively to `knowledge-base`.
3. **Config Stability:** Maintained `process.cwd()` heuristic path fallbacks to provide safety nets across isolated editor/sandbox execution vectors.

