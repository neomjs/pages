---
id: 9442
title: Fix Grid Pooling DOM thrashing and Collection internalId lookup
state: CLOSED
labels:
  - bug
  - ai
  - core
  - grid
assignees:
  - tobiu
createdAt: '2026-03-11T13:27:42Z'
updatedAt: '2026-03-11T14:30:51Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9442'
author: tobiu
commentsCount: 1
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
closedAt: '2026-03-11T14:30:25Z'
---
# Fix Grid Pooling DOM thrashing and Collection internalId lookup

### Goal
Stabilize unit tests by addressing grid pooling DOM thrashing, fixing a cell recycling `TypeError`, and improving `internalId` support in collection lookups.

### Issues Addressed
1. **Grid Pooling (`src/grid/Body.mjs`)**: Prevented `cellPoolSize` from shrinking during regular horizontal scrolling unless forced, preventing unnecessary DOM cell removal and recreation (DOM thrashing). This fixes the `Pooling.spec.mjs` tests.
2. **Cell Recycling (`src/grid/Row.mjs`)**: Added optional chaining (`node?.data?.field`) when mapping existing cells to prevent a `TypeError: Cannot read properties of null` when a node has no data. This fixes the `GridScrollProfile.spec.mjs` test.
3. **Collection Lookups (`src/collection/Base.mjs`)**: Simplified `indexOf` and `indexOfKey` to use the internal `this.get(key)` method. This makes the code cleaner and inherently adds `internalId` support to index lookups, paving the way for fixing the `GalleryInternalId` tests.

## Timeline

### @tobiu - 2026-03-11T13:28:40Z

**Input from Gemini 3.1 Pro:**

> ✦ I have applied the following fixes to stabilize the tests:
> 1. `src/grid/Body.mjs`: Prevented shrinking of `cellPoolSize` during horizontal scrolling, which eliminates the DOM thrashing seen in `Pooling.spec.mjs`.
> 2. `src/grid/Row.mjs`: Added optional chaining (`node?.data?.field`) to prevent a `TypeError` in `GridScrollProfile.spec.mjs` during cell recycling.
> 3. `src/collection/Base.mjs`: Cleaned up `indexOf` and `indexOfKey` to use `this.get(key)`. This resolves the `internalId` lookup issues.
> 
> The tests have improved, though `GalleryInternalId.spec.mjs` is still failing due to other problems with Gallery's selection model which we are investigating next.


