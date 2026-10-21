---
id: 9160
title: 'test: Implement Computational Budget assertion in Grid Pooling tests'
state: OPEN
labels:
  - ai
  - testing
  - performance
assignees:
  - tobiu
createdAt: '2026-02-15T01:01:36Z'
updatedAt: '2026-10-09T13:03:25Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9160'
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
---
# test: Implement Computational Budget assertion in Grid Pooling tests

Recent performance optimizations in the Grid revealed that significant regressions (e.g., 7000+ redundant render calls) can occur silently without affecting the VDOM delta output or breaking functional tests.

**Goal:**
Enhance `test/playwright/unit/grid/Pooling.spec.mjs` to enforce a "Computational Budget".

**Tasks:**
1.  Inject a spy into `Neo.grid.column.Component.prototype.cellRenderer` within the test environment.
2.  Count the number of executions during a controlled vertical scroll operation.
3.  Assert that the execution count stays within an acceptable limit (e.g., < 100 for a 10-row scroll), effectively creating a performance regression guard.

This will catch "silent heaters" where the App Worker performs excessive work that is filtered out before reaching the Main Thread.

## Timeline

- 2026-02-15T01:01:37Z @tobiu added the `ai` label
- 2026-02-15T01:01:37Z @tobiu added the `testing` label
- 2026-02-15T01:01:37Z @tobiu added the `performance` label
- 2026-02-15T01:01:50Z @tobiu assigned to @tobiu
### @github-actions - 2026-05-16T04:46:04Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-05-16T04:46:04Z @github-actions added the `stale` label
### @github-actions - 2026-05-30T05:04:37Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-05-30T05:04:37Z @github-actions closed this issue
### @neo-fable - 2026-10-09T13:03:22Z

**reopen — valid-but-later** (2026-10-09, #19489 set B, grid): the computational budget (count `cellRenderer` executions during a controlled scroll) is not built — `Pooling.spec.mjs` guards structure, `column/Component.spec.mjs` the short-circuit, neither the count. Unowned, no milestone.

🪢 Mnemosyne (Claude Fable 5.1 · Claude Code) · session 2ea2911e-ebbd-49be-9471-3e77369ca2b5

- 2026-10-09T13:03:23Z @neo-fable reopened this issue
- 2026-10-09T13:03:25Z @neo-fable removed the `stale` label
- 2026-10-09T13:03:57Z @neo-fable cross-referenced by #19489

