---
id: 6984
title: Refactor - Store Composition with Collection
state: CLOSED
labels:
  - epic
  - no auto close
assignees: []
createdAt: '2025-07-07T23:52:22Z'
updatedAt: '2026-11-05T11:41:42Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6984'
author: tobiu
commentsCount: 5
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
closedAt: '2026-11-05T11:41:42Z'
---
# Refactor - Store Composition with Collection

## Refactor `Neo.data.Store` to use `Neo.collection.Base` via composition instead of inheritance.

**Description**
Currently, `Neo.data.Store` extends `Neo.collection.Base`, inheriting all its methods and properties. While this approach has been functional, it creates a tight coupling between the two classes and can lead to `Store` carrying unnecessary baggage from `Collection.Base`'s responsibilities. This refactoring proposes a shift from inheritance to composition, where `Neo.data.Store` will internally *use* an instance of `Neo.collection.Base`.

**Problem**
1.  **Tight Coupling:** `Store` is tightly coupled to `Collection.Base` through inheritance, meaning changes in `Collection.Base` directly impact `Store` and vice-versa, even if the changes are not directly relevant to `Store`'s core responsibilities.
2.  **Lack of Specialization:** `Store` inherits all collection methods, regardless of whether it needs them or if it has its own specialized versions (e.g., `add` in `Store` needs to handle record creation, which is different from `Collection.Base`'s generic `add`).
3.  **Reduced Flexibility:** It's less flexible to combine different data handling strategies (e.g., local vs. remote filtering/sorting) or to swap out the underlying collection implementation if `Store` is directly inheriting from it.

**Proposed Solution**
Refactor `Neo.data.Store` to use `Neo.collection.Base` via composition. This means:

1.  **Remove Inheritance:** `Neo.data.Store` will no longer `extend Neo.collection.Base`.
2.  **Internal Collection Instance:** `Neo.data.Store` will contain a private instance of `Neo.collection.Base` (e.g., `#collection`) as a core component.
3.  **Delegation:** All collection-related operations (e.g., `add`, `remove`, `get`, `filter`, `sort`, `splice`, `getCount`, `indexOf`) will be delegated to this internal `#collection` instance. `Store` will re-implement these methods, calling the corresponding method on its internal collection.
4.  **Focus on Store Responsibilities:** `Store` will primarily focus on its unique responsibilities, such as:
    *   Data loading (via `api` or `url`)
    *   Integration with `Neo.data.Model` (field management) and `Neo.data.RecordFactory` (record creation)
    *   Pagination
    *   Remote filtering and sorting
    *   Data readers and writers

**Benefits**
*   **Clearer Separation of Concerns:** `Collection.Base` can remain a pure data management utility, while `Store` focuses on data acquisition and higher-level data manipulation.
*   **Increased Modularity and Flexibility:** `Store` becomes more modular, allowing for easier integration of different data handling strategies or swapping out the underlying collection implementation.
*   **Easier Combinability:** Promotes simpler combination of local and remote data processing capabilities.
*   **Alignment with Proven Patterns:** Aligns with robust architectural patterns (e.g., similar to Ext.JS's Store/Collection relationship), leading to a more maintainable and scalable codebase.
*   **Improved Testability:** Each component can be tested more independently.

**Effort & Considerations**
This is a **medium-sized refactoring effort**. It will require:
*   Careful re-implementation of all delegated methods in `Neo.data.Store`.
*   Thorough review of internal property accesses within `Store` to ensure they use the internal collection's public API.
*   Extensive unit and integration testing to prevent regressions and ensure seamless functionality across all existing features.

## Timeline

- 2025-07-07T23:52:23Z @tobiu added the `enhancement` label
- 2025-07-07T23:52:23Z @tobiu added the `help wanted` label
### @github-actions - 2025-10-06T02:42:09Z

This issue is stale because it has been open for 90 days with no activity.

- 2025-10-06T02:42:10Z @github-actions added the `stale` label
- 2025-10-08T09:43:23Z @tobiu removed the `stale` label
- 2025-10-08T09:43:23Z @tobiu added the `good first issue` label
- 2025-10-08T09:43:23Z @tobiu added the `hacktoberfest` label
### @tobiu - 2025-10-08T09:44:23Z

this one could get refined to via the ai native workflows into new subs, and based on it fits the `hacktoberfest` scope.

- 2025-10-08T09:44:42Z @tobiu removed the `enhancement` label
- 2025-10-08T09:44:42Z @tobiu added the `epic` label
### @shrvansudhakara - 2025-10-30T18:56:19Z

@tobiu I'd like to work on this, pls assign.

### @github-actions - 2026-01-29T03:36:41Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-01-29T03:36:41Z @github-actions added the `stale` label
- 2026-01-29T15:07:25Z @tobiu removed the `help wanted` label
- 2026-01-29T15:07:25Z @tobiu removed the `good first issue` label
- 2026-01-29T15:07:25Z @tobiu removed the `stale` label
- 2026-01-29T15:07:25Z @tobiu removed the `hacktoberfest` label
- 2026-01-29T15:07:25Z @tobiu added the `no auto close` label
- 2026-06-23T05:24:11Z @neo-gpt-euclid cross-referenced by #6921
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T10:41:26Z

### Backlog Premise-Read (`neomjs/neo#15000`, `2026-11-05`)

- **Current Code Reality:**
  - `src/data/Store.mjs:29` (`class Store extends Collection`), `src/data/TreeStore.mjs:27` (`class TreeStore extends Store`), and `src/data/ChainedStore.mjs` rely directly on inheritance from `Neo.collection.Base`.
  - Since `#6984` was filed (`2025-07-08`), `Store` and `TreeStore` have built heavily on direct `Collection` inheritance: Turbo Mode (`autoInitRecords: false`, `resolveField`, `isFilteredItem`), `TreeStore` `#childrenMap` / `#allRecordsMap` splice/filter/doSort overrides, `sourceId` projection chaining, `FilterEvaluator`, and `ValueBanding`.
  - Replacing `extends Collection` with composition (`#collection`) would break `instanceof Collection` checks across `Grid`, `List`, `Select`, and `TreeStore` and add delegation overhead to every hot-path lookup (`get`, `getAt`, `indexOf`, `splice`).
- **Verdict (`op` — for `@tobiu`):** **Recommend Close (superseded by the `v10–v13` `Store` / `TreeStore` / `ChainedStore` / Turbo Mode architecture).**

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭


