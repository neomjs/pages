---
id: 9543
title: Store Pipeline Instantiation and Legacy Parser Compatibility
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
  - core
assignees:
  - tobiu
createdAt: '2026-03-24T16:07:41Z'
updatedAt: '2026-03-24T18:39:32Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9543'
author: tobiu
commentsCount: 1
parentIssue: 9449
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-03-24T18:39:32Z'
---
# Store Pipeline Instantiation and Legacy Parser Compatibility

### Goal
Address the architectural friction introduced in `#9452` when migrating existing Stores to the new `Pipeline` architecture, specifically resolving the class instantiation issues within `Neo.data.Store`.

### Context
During the completion of `#9452` (Connection Foundation and Parser Refactoring), we successfully separated network logic from parsers. However, applying this to live stores (like `apps/devindex/store/Contributors.mjs`) revealed two major bottlenecks:

1. **Pipeline Instantiation Failure (`Store.mjs`)**: The `beforeSetPipeline` method in `Neo.data.Store` currently attempts to use `ClassSystemUtil.beforeSetInstance(value, null, ...)`. Because it passes `null` as the default class, supplying a raw `pipeline: { connection: {...}, parser: {...} }` config object fails to instantiate a `Neo.data.Pipeline` class, crashing with "missing className or module property".
2. **Dynamic Connection Imports**: If a Store requires a Connection in the App Worker (e.g., `connection.Stream`), attempting to use dynamic imports `module: () => import(...)` inside the Store's `pipeline` config fails synchronously during `ClassSystemUtil` instantiation. 
3. **Legacy Fallback**: `Neo.data.Store` still contains many references to `store.parser` and `store.url`.

### Acceptance Criteria
- **Fix Pipeline Instantiation**: Update `src/data/Store.mjs` to correctly resolve and instantiate `Neo.data.Pipeline` in `beforeSetPipeline()`.
- **Address Circular Dependencies**: Ensure importing `Pipeline` into `Store` (or vice versa) does not create unresolved circular dependencies during framework boot.
- **Bridge Legacy Configs**: Implement a temporary bridge in `Store.mjs` that detects legacy `parser: {}` and `url: ''` configs and automatically wraps them into a `pipeline: {}` config before `beforeSetPipeline` executes.
- **Fix DevIndex Tests**: Ensure `test/playwright/unit/app/devindex/StoreFilterProfile.spec.mjs` and `test/playwright/unit/data/StoreParser.spec.mjs` pass cleanly with the new architecture.

### Next Steps
This issue must be resolved to stabilize the codebase before proceeding with IPC routing (#9453).

## Timeline

### @tobiu - 2026-03-24T18:39:07Z

**Input from Gemini 3.1 Pro:**

> ✦ I have addressed the pipeline instantiation and legacy parser compatibility issues within `Store.mjs`.
> 
> **Key Changes:**
> 1.  **Legacy Bridge:** Implemented an override for `mergeConfig()` in `Store.mjs` that intercepts legacy `parser` and `url` configs. It dynamically maps these into the new `pipeline: { connection: {...}, parser: {...} }` format before the `beforeSetPipeline` lifecycle hook executes.
> 2.  **Static Imports:** Bypassed the synchronous `ClassSystemUtil` instantiation issue for dynamic imports by explicitly importing `ConnectionFetch` and `ConnectionStream` within `Store.mjs`. This guarantees their `ntype`s (`connection-fetch`, `connection-stream`) are registered in the main worker threads and can be reliably resolved by `ClassSystemUtil` without needing dynamic `module: () => import(...)`.
> 3.  **Pipeline Event Propagation:** Updated `Pipeline.mjs` to explicitly relay `data` and `progress` events from its internal `parser` to the `Pipeline` instance itself. This ensures that progressive loading (streaming) correctly bubbles up to the `Store`'s listeners.
> 4.  **Unit Tests:** Updated `test/playwright/unit/data/StoreParser.spec.mjs` to reflect the new nested pipeline object structure. All unit tests, including `StoreFilterProfile.spec.mjs`, now pass successfully.
> 
> This stabilizes the `Store` architecture and clears the path for implementing IPC routing. I will now close this sub-issue.

- 2026-06-23T03:33:42Z @neo-gpt cross-referenced by #9554

