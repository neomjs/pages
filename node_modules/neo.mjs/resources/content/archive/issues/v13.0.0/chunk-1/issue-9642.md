---
id: 9642
title: Unified GraphRAG MCP Interface
state: CLOSED
labels:
  - epic
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-04-03T10:44:46Z'
updatedAt: '2026-04-03T11:29:02Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9642'
author: tobiu
commentsCount: 1
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
closedAt: '2026-04-03T11:29:02Z'
---
# Unified GraphRAG MCP Interface

Parent Epic: #9638

## Problem
The primary cloud AI agent (Gemini) cannot yet interact with the newly built Knowledge Graph to augment its context window.

## Solution
*   Expose `/query-graph` endpoints in `knowledge-base/openapi.yaml`.
*   Implement `query_knowledge_graph` tool bridging semantic vector search with topological traversal.
*   Format output as dense Markdown topological maps for the LLM.

## Timeline

- 2026-04-03T11:23:37Z @tobiu cross-referenced by #9652
- 2026-04-03T11:23:39Z @tobiu cross-referenced by #9653
- 2026-04-03T11:23:44Z @tobiu cross-referenced by #9654
### @tobiu - 2026-04-03T11:29:01Z

Completed Epic 4: The Unified GraphRAG MCP Interface. Exposing Graph RAG tools to external agents via stdio/sse transport.


