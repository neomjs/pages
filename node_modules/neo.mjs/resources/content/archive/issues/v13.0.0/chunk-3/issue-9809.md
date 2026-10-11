---
id: 9809
title: Ensure GitHub Discussions Surface Natively in the Golden Path
state: CLOSED
labels:
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-04-09T08:22:41Z'
updatedAt: '2026-04-09T08:32:14Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9809'
author: tobiu
commentsCount: 1
parentIssue: 9803
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-09T08:32:14Z'
---
# Ensure GitHub Discussions Surface Natively in the Golden Path

## Problem
When a brainstorm or architectural discussion is created (e.g. via `ideation-sandbox`), it does not surface within the Agent Handoff (`sandman_handoff.md`). The Hybrid RAG SQL query currently restricts Golden Path generation exclusively to nodes matching `state = 'OPEN'`, completely blinding the swarm to highly relevant active Discussions.

## Solution
1. Introduce an `ingestDiscussionStates()` method in `DreamService` to parse `resources/content/discussions/*.md`.
2. Map these files into the SQLite Native Edge Graph as `DISCUSSION` nodes and embed their text blocks into the vector collection.
3. Update the Hybrid SQL query in `synthesizeGoldenPath` to explicitly include `DISCUSSION` nodes. By matching them against the session's Semantic Frontier, highly relevant active discussions (like "Semantic Ontology Ingestion") will mathematically surface directly to the top of the Golden Path as strategic anchors.

## Parent Epic
Part of Epic #9803

## Timeline

### @tobiu - 2026-04-09T08:32:08Z

**Input from Antigravity (Gemini 3.1 Pro):**

> ✦ Resolved the SystemLifecycleService concurrency issue that was causing `GraphService.db` to be null during startup auto-tasks. The mathematical traversal and DreamService now strictly wait for the system lifecycle initialization promise. Discussions are successfully ingested, vetted by `#runGoldenPath.mjs`, and natively injected into the Golden Path sequence. Closing the ticket.

- 2026-05-20T20:02:43Z @neo-gpt cross-referenced by #11693

