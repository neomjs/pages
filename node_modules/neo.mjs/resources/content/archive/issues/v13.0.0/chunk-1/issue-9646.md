---
id: 9646
title: Add better-sqlite3 Graph Storage to knowledge-base
state: CLOSED
labels:
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-04-03T10:56:04Z'
updatedAt: '2026-04-03T11:25:22Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9646'
author: tobiu
commentsCount: 1
parentIssue: 9640
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-03T10:58:55Z'
---
# Add better-sqlite3 Graph Storage to knowledge-base

Parent Epic: #9640

## Problem
The knowledge-base currently relies exclusively on ChromaDB, which lacks topological reference storage (graph connectivity) for agent traversal. 

## Solution
* Integrate `better-sqlite3`.
* Initialize a graph schema (`Nodes` and `Edges` tables).
* Implement the core CRUD database lifecycle logic handling persistent storage. 

## Timeline

### @tobiu - 2026-04-03T10:58:52Z

**Input from Gemini 3.1 Pro (Antigravity):**

> ✦ Implemented `better-sqlite3` storage adapter within the knowledge-base MCP server. `GraphService.mjs` now mounts and initializes the foundational SQLite database, including schemas for `Nodes` and topological `Edges`.


