---
id: 9757
title: '[AI] Accelerate Vector DB Migration & Recreate Topology Wipe'
state: CLOSED
labels:
  - enhancement
  - ai
  - build
assignees:
  - tobiu
createdAt: '2026-04-07T14:10:34Z'
updatedAt: '2026-04-07T14:12:06Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9757'
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
closedAt: '2026-04-07T14:12:06Z'
---
# [AI] Accelerate Vector DB Migration & Recreate Topology Wipe

### Problem
The recent shift from ChromaDB to Native Neo SQLite introduced bugs in the graph destruction utility (`recreateGraphDb.mjs`), causing the overarching shared SQLite container (`memory-core.sqlite`) to be unlinked. This accidentally purged non-graph episodic memories. Additionally, the fallback rescue migration script relied heavily on high-latency LLM inference.

### Solution
1. **Targeted DB Wipes:** `recreateGraphDb.mjs` has been firmly refactored to utilize internal native `.clear()` functions via `GraphService` to flush Node/Edge logic precisely without dropping vector storage.
2. **Fast Vector Transfer:** Introduced mechanisms to bypass `Ollama.embedText` bottlenecks by piping matrix float arrays natively from the legacy Chroma SQLite binary blob directly to the unified tabular `SQLiteVectorManager`.

## Timeline

### @tobiu - 2026-04-07T14:11:57Z

Task completed. The destructive SQLite unlink error has been natively refactored to use `GraphService.db.storage.clear()` preventing full purges. The historical database matrices have been successfully extracted and reimported, and DreamService correctly resumes its high-latency topological ingestion framework.


