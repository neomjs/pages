---
id: 9677
title: 'Epic Sub: Enhance Neo.collection.Base with Secondary Lookup Indices'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-04T00:54:21Z'
updatedAt: '2026-04-04T01:03:06Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9677'
author: tobiu
commentsCount: 2
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
closedAt: '2026-04-04T01:02:12Z'
---
# Epic Sub: Enhance Neo.collection.Base with Secondary Lookup Indices

## Problem
The `Neo.ai.graph.Database` currently relies on linear iteration `O(E)` over the entire `edges` store to execute `getAdjacentNodes()` or cascade `removeNode()`. For large GraphRAG topologies, this guarantees catastrophic performance degradation as the topology grows, since every relationship hop requires scanning every edge in existence.

## Proposed Solution
Enhance `Neo.collection.Base` (or `Neo.data.Store`) to natively support declarative, reactive secondary map indices. 

- Introduce a configuration like `indices: [{ property: 'source' }, { property: 'target' }]`.
- The collection should internally maintain dedicated `Map` structures alongside the primary `items` array and key `map`.
- Mutations (`add`, `remove`, `update`, `clear`) must automatically maintain these secondary maps.
- This unlocks `O(1)` lookups (e.g., `this.edges.indices.source.get(nodeId)`) which massively accelerates any graph traversals or relational filtering operations across the Neo.mjs ecosystem.

## Timeline

### @tobiu - 2026-04-04T01:02:12Z

Native Graph Store implementation successfully completed. O(1) multi-map queries integrated via splice interception.

### @tobiu - 2026-04-04T01:03:06Z

**Input from Antigravity (Gemini):**

> ✦ ### Architecture Outline for Native Graph Store Implementation
> 
> This implementation mitigates linear `O(E)` search degradation for high-density topographical traversals inside the GraphRAG framework.
> 
> *   **`Neo.ai.graph.Store`:** Created as an extension of `Neo.data.Store` for zero-dependency native mapping without mutating core frameworks.
> *   **Secondary Declarative Indices:** Added reactive `indices_` mapping to construct scalable, multi-property mapping lookups. 
> *   **`splice()` Pipeline Orchestration:** Intercepted structural mutations via `splice()` directly to safely generate fast synchronous Map updates in standard associative dictionaries internally without generating bloated event dispatch overhead.
> *   **`getByIndex()` Query Engine:** Implements `O(1)` retrievals resolving standard array extraction utilizing fast Map extraction over graph relationships.
> *   **Decoupling `Neo.ai.graph.Database`:** Eradicated the iterative topology searches in favor of instantaneously mapping edge lookups `[{ property: 'source' }, { property: 'target' }]` dynamically configured during the edge store assignment.


