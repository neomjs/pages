---
id: 9682
title: 'Native Edge Graph: Traversal Query Engine & Aggregations'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-04T01:42:44Z'
updatedAt: '2026-04-04T02:01:00Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9682'
author: tobiu
commentsCount: 1
parentIssue: 9673
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-04T01:58:56Z'
---
# Native Edge Graph: Traversal Query Engine & Aggregations

## Native Edge Graph: Traversal Query Engine & Aggregations

This Epic introduces a fully functional stateless Traversal Query Engine scaling N-hop path lookups and optimal routing for Neo's memory core Graph Database.

### Features Implemented
- **Functional Architecture**: `Neo.ai.graph.queries.Traversal.mjs` implements a purely functional `getPaths` & `findShortestPath` design without massive `Neo.core.Base` class overheads natively scaling iteration logic dynamically.
- **Predicated Halt Routing**: Expanded traversal engines directly parsing `matchPredicate` and `stopPredicate` lambda mappings bounding Graph paths avoiding looping matrices safely. 
- **Min-Heap Dijkstra Paths**: Fully structured topological bounds mapped using customizable `weightFunction` edge arrays natively avoiding excessive looping allocations cleanly rendering optimal routes natively.

## Timeline

### @tobiu - 2026-04-04T01:58:55Z

Implemented full functional Native Edge Traversal Engine (#9682) providing stateless Dijkstra routing paths properly bounded by lambda-predicate evaluations inside tight recursive loops safely cleanly avoiding Neo.core.Base overheads.


