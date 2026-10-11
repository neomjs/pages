---
id: 9641
title: The "Night Shift" REM Pipeline (Hippocampus)
state: CLOSED
labels:
  - epic
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-04-03T10:44:44Z'
updatedAt: '2026-04-03T11:22:06Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9641'
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
closedAt: '2026-04-03T11:22:06Z'
---
# The "Night Shift" REM Pipeline (Hippocampus)

Parent Epic: #9638

## Problem
Episodic memories inside `memory-core` represent rich experiences but are unstructured. We need a way to asynchronously convert these into Knowledge Graph relationships.

## Solution
*   Create `DreamService.mjs` inside `neo/ai/mcp/server/memory-core/services/`.
*   Implement a background ingestion loop (find unprocessed sessions, generate extraction prompt).
*   Extract Nodes/Edges and push into the `knowledge-base` Neocortex graph.

## Timeline

- 2026-04-03T11:04:25Z @tobiu cross-referenced by #9649
- 2026-04-03T11:04:28Z @tobiu cross-referenced by #9651
- 2026-04-03T11:04:31Z @tobiu cross-referenced by #9650
### @tobiu - 2026-04-03T11:22:06Z

Completed Epic 3 with offline ingestion loop, graph entity extraction, and memory-core to knowledge-base bridge.


