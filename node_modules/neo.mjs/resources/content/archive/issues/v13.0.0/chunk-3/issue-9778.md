---
id: 9778
title: Integrate Real-Time Turn-by-Turn Memory Parsing
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-04-08T09:31:46Z'
updatedAt: '2026-04-08T10:18:01Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9778'
author: tobiu
commentsCount: 0
parentIssue: 9777
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-08T10:18:01Z'
---
# Integrate Real-Time Turn-by-Turn Memory Parsing

Migrate from Map-Reduce batch constraints to real-time ingestion by updating `MemoryService.addMemory` to execute real-time single-turn extraction via `DreamService`. This sets the architectural foundation for subsequent schema modifications.

