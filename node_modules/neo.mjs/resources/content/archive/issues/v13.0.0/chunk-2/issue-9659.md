---
id: 9659
title: Enhance Memory Core with Agent and Model Traceability
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-03T13:49:57Z'
updatedAt: '2026-04-03T14:01:21Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9659'
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
closedAt: '2026-04-03T14:01:21Z'
---
# Enhance Memory Core with Agent and Model Traceability

### Description
To support multi-agent swarm orchestration ("Dream Mode"), the Memory Core must track which agent and model executed each turn. This establishes a structural foundation for cross-agent introspection and accurate multi-actor session summaries.

### Proposed Changes
1. Update the `addMemory` API signature in the `memory-core` MCP Server to accept optional `agent` and `model` metadata fields.
2. Update the `ContextAssembler` and `MemoryService` SDKs to pass this metadata during the cognitive runtime's terminal save block.
3. Update `SessionService.mjs` to aggregate and include involved agents and models inside the generated `SessionSummary` metadata.
4. Ensure the schema updates are backwards compatible with the existing vector topology in ChromaDB.

