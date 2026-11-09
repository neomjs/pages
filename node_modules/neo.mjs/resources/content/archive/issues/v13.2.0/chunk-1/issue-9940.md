---
id: 9940
title: Enforce Explicit SQLite Indexing on Foreign Keys schema validation
state: CLOSED
labels:
  - enhancement
  - stale
  - architecture
  - performance
assignees:
  - tobiu
createdAt: '2026-04-12T18:58:54Z'
updatedAt: '2026-10-09T15:31:04Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9940'
author: tobiu
commentsCount: 3
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
closedAt: '2026-07-26T04:51:10Z'
---
# Enforce Explicit SQLite Indexing on Foreign Keys schema validation

### Context
During the Sandman Vector Apoptosis stabilization marathon, we discovered a fatal architectural trap: SQLite `ON DELETE CASCADE` foreign key bindings do **NOT** automatically propagate column indexing upon the child nodes. This allowed unindexed `$O(N \times M)$` Cartesian `LEFT JOIN` paths to silently deadlock the Node.js V8 execution thread processing `better-sqlite3` operations on Native Edge Graphs over 50,000 vectors deep.

### Scope
While the `Edges(source)` and `Edges(target)` indexes were explicitly injected via #9938, we must harden the `SQLite.mjs` WAL Engine structure:
1. Implement a diagnostic schema assertion inside `initSchema()` that actively tests database index coverage mappings natively upon system start.
2. Extend `buildScripts/ai/defragSQLiteDB.mjs` to execute an index mapping validation routine right before executing its SQLite `VACUUM` loop to explicitly ensure that any dynamically deployed edge tables from external Swarm Skills natively inherit the required index paths.

### Origin Session
Origin Session ID: af26000d-914a-4eb0-8d28-2c09e9cb4cb5

## Timeline

### @github-actions - 2026-07-12T04:46:27Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-07-26T04:51:09Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-10-09T15:28:25Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T15:31:04Z

#19489 set B · other · Grace · 2026-10-09: **confirm-close (moved).** The trap is fixed where it lived: the Brain indexes the `Edges` foreign-key columns explicitly (`ai/graph/storage/SQLite.mjs` L133–134 in `neo-agent-brain`, `idx_edges_source` / `idx_edges_target`). A schema check that enforces it would be filed in `neo-agent-brain`.


