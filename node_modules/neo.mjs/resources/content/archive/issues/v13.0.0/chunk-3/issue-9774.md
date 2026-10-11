---
id: 9774
title: Refactor AI SDK and Build Scripts for Memory Core Module Decoupling
state: CLOSED
labels:
  - enhancement
  - ai
  - build
assignees:
  - tobiu
createdAt: '2026-04-07T22:40:30Z'
updatedAt: '2026-04-07T22:42:50Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9774'
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
closedAt: '2026-04-07T22:42:50Z'
---
# Refactor AI SDK and Build Scripts for Memory Core Module Decoupling

### Problem
The legacy `DatabaseLifecycleService` inside the Memory Core was recently decoupled into `ChromaLifecycleService` and `InferenceLifecycleService`. Several downstream consumers across `buildScripts/ai/` and `ai/examples/` were left statically referencing the deleted service, breaking core SDK functions.

### Solution
1. Introduce a facade `SystemLifecycleService` inside `memory-core/services/lifecycle` that orchestrates both internal services.
2. Export this orchestrator via `ai/services.mjs` as `Memory_LifecycleService` to preserve compatibility.
3. Update hardcoded static imports across all build scripts and examples.

## Timeline

### @tobiu - 2026-04-07T22:42:49Z

Refactored the Memory Core AI SDK downstream references by establishing a `SystemLifecycleService` facade, protecting downstream consumers. Modified integration code locally and verified startup dependencies across build scripts and examples.


