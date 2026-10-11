---
id: 9925
title: '[Sub-Task] Re-Ranker Middleware Construction (Hybrid RAG Pipeline)'
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-04-12T14:15:47Z'
updatedAt: '2026-04-12T17:00:07Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9925'
author: tobiu
commentsCount: 0
parentIssue: 9922
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-12T15:36:27Z'
---
# [Sub-Task] Re-Ranker Middleware Construction (Hybrid RAG Pipeline)

Origin Session ID: af26000d-914a-4eb0-8d28-2c09e9cb4cb5
Parent Epic: #9922

## Context
This is the core functional engine of the Two-Pillar Hybrid RAG implementation. We must replace the legacy $O(N)$ execution inside `SQLiteVectorManager.mjs` with an intelligent, dual-pass GraphQL-style Re-Ranker.

## Technical Requirements
1. **Vector Deprecation:** Formally disable or extract `SQLiteVectorManager.mjs` from actively returning distance geometry. Set `ChromaManager.mjs` as the binding agent for `AbstractVectorManager`.
2. **The Re-Ranker (`StorageRouter.mjs`):** Implement the `Phase 1 / Phase 2` query pipeline constraint:
    - *Pass 1:* Execute HNSW similarity search via Chroma DB returning Top K broad matches.
    - *Pass 2:* Filter those returned Chroma IDs structurally through the `Native Edge Graph` (SQLite). Score candidates based on edge proximity, sequence continuity, and explicit `SIMILAR_TO` links.
3. **Weighting Logic:** Develop the basic math function to combine the mathematical distance from Chroma with the topological edge depth from SQLite to provide a unified `relevanceScore` array to the LLM agent.

## Definitions of Done
- `StorageRouter.getMemoryCollection()` cleanly routes Semantic lookups to Chroma.
- Queries explicitly enforce the two-pass pipeline, validating the Node JS / C++ hybrid execution speed.

## Timeline

- 2026-04-12T14:23:34Z @tobiu cross-referenced by PR #9926

