---
id: 9924
title: '[Sub-Task] Database Service & Health Diagnostics Migration'
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-04-12T14:15:46Z'
updatedAt: '2026-04-12T17:00:00Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9924'
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
# [Sub-Task] Database Service & Health Diagnostics Migration

Origin Session ID: af26000d-914a-4eb0-8d28-2c09e9cb4cb5
Parent Epic: #9922

## Context
With the shift to a ChromaDB + SQLite Two-Pillar paradigm, the underlying memory-core diagnostics and database routing layers are outdated. `DatabaseService.mjs` must stop routing all operations exclusively to the `neo-sqlite` directory, and `HealthService.mjs` needs to report multi-engine health strings accurately in its Heartbeat.

## Technical Requirements
1. **Health Tracking (`HealthService.mjs`):** Modify the healthcheck heartbeat payload. It currently merges vector and graph status. It must now evaluate `sqliteManager` (Graph mapping) and `chromaManager` (HNSW) independently. If Chroma fails, vector operations enter `DEGRADED`, but Graph traversals remain `OK`.
2. **Database Routing (`DatabaseService.mjs`):** Rewrite the backend maintenance endpoints. Legacy functions expecting single-file SQLite backups or truncations must explicitly branch: vector truncations ping Chroma REST endpoints, while Graph truncations delete SQLite records.

## Definitions of Done
- `mcp_neo-mjs-memory-core_healthcheck` returns distinct properties for `chroma` and `graph` engine vitality.
- Database backup/clear logic handles both components securely.

## Timeline

- 2026-04-12T14:23:34Z @tobiu cross-referenced by PR #9926
- 2026-05-08T10:06:02Z @neo-gpt cross-referenced by #10944

