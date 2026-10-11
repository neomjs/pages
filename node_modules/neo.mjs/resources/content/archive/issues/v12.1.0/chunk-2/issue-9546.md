---
id: 9546
title: Refactor Pipeline IPC to use Declarative Remote Configs (Instance Proxies)
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
  - core
assignees:
  - tobiu
createdAt: '2026-03-24T20:19:58Z'
updatedAt: '2026-03-24T20:34:00Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9546'
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
closedAt: '2026-03-24T20:34:00Z'
---
# Refactor Pipeline IPC to use Declarative Remote Configs (Instance Proxies)

### Goal
Refactor the `Neo.data.Pipeline` class to utilize the declarative `remote` configuration for instance-to-instance IPC, replacing the procedural on-the-fly proxy generation.

### Context
In issue #9453, we implemented the initial IPC routing for pipelines by explicitly calling `Neo.currentWorker.generateRemote` inside the `read`, `create`, and `update` methods. 

This approach is highly procedural and violates the elegant, declarative design patterns of the framework. Neo.mjs heavily relies on defining capabilities statically (e.g., `static config = { remote: ... }`) and letting the class system or mixins handle the wiring.

We need to adopt "Option C" (Explicit `remote` Namespace on Instances):
Instead of generating the proxy dynamically on every call, the `Pipeline` should define its remote capabilities in its static config. The framework should then automatically populate a `this.remote` object on the instance with pre-bound proxy functions during construction.

### Acceptance Criteria
- Add `remote: { data: ['create', 'read', 'update'] }` to the `static config` of `Neo.data.Pipeline`.
- Update the `initRemote` method in `src/core/Base.mjs` (or the RMA mixin) to properly handle `remote` configs for non-singleton instances. If a class is not a singleton, it should generate the proxies and attach them to a `remote` property on the *instance*, organized by destination (e.g., `this.remote.data.read`).
- Refactor `Neo.data.Pipeline` to remove the manual `generateRemote` calls and instead invoke the pre-generated proxies via `this.remote.data[operation]({ ...params, remoteId: this.remoteId })`.
- Ensure the unit tests for `RemoteMethodAccess` and `StoreParser` continue to pass with this declarative architecture.

## Timeline

### @tobiu - 2026-03-24T20:31:32Z

**Input from Gemini 3.1 Pro:**

> ✦ I have refactored the `Pipeline` IPC architecture to use declarative `remote` configs, adhering to the highest code quality standards of `core.Base`.
> 
> **Implementation Details:**
> 1.  **Removed the Procedural Hacks:** The `generateRemote` calls inside `read` and `executeRemoteOrLocal` have been removed from `Pipeline.mjs`. The pipeline now simply declares `static config = { remote: { data: ['create', 'read', 'update'] } }`.
> 2.  **`core.Base.initRemote` Enhancement:** 
>     *   I modified `initRemote()` to correctly handle non-singleton classes. 
>     *   If a class is *not* a singleton, it now dynamically generates a `this.remote` object containing pre-bound proxy functions during instance construction.
>     *   These instance-level proxies are designed to resolve `this.remoteId` at execution time, perfectly accommodating the asynchronous "Handshake" pattern where the target ID is populated *after* the remote thread instantiates the counterpart.
> 3.  **Strict Promise Resolution:** The user rightly pointed out that `Base.promiseRemotes(className, remote)` was only being called for singletons, which risked leaving the `#remotesReadyPromise` hanging. With the new implementation, non-singletons don't need to await global registration (`registerRemote`), so the synchronous population of the `this.remote` object allows the lifecycle to continue without blocking.
> 4.  **Knowledge Base Enhancements:** The comments inside `initRemote` have been thoroughly updated using the Knowledge Base Enhancement Strategy. They clearly articulate the intent, differentiating "Singleton Routing (Namespace-Driven)" from "Instance-to-Instance Routing (ID-Driven)", and documenting the "Handshake" resolution pattern for future context.
> 
> The pipeline now executes cleanly via `this.remote.data[operation](params)`, restoring the elegant DX of the Neo.mjs framework. I will close this sub-issue.

- 2026-03-24T21:18:09Z @tobiu cross-referenced by #9547
- 2026-06-23T03:33:42Z @neo-gpt cross-referenced by #9554
- 2026-08-31T03:51:07Z @neo-gpt cross-referenced by #17909

