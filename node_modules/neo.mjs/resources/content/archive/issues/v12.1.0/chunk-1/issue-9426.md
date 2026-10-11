---
id: 9426
title: Refactor Tree column and component reactivity
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
  - grid
assignees:
  - tobiu
createdAt: '2026-03-10T10:31:16Z'
updatedAt: '2026-03-10T10:41:31Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9426'
author: tobiu
commentsCount: 0
parentIssue: 9404
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-03-10T10:41:31Z'
---
# Refactor Tree column and component reactivity

The `Tree` component (`src/grid/column/component/Tree.mjs`) previously relied on a `record_` config to observe state changes. Due to the Row Pooling architecture, `Neo.core.Base`'s config setter ignores changes when the object reference is identical (`===`), preventing UI updates when node state (e.g. `collapsed`) changes.

This ticket resolves the issue by:
1. Updating `Neo.grid.column.Tree` to extract reactive primitive properties (`collapsed`, `depth`, `hasError`, `isLeaf`, `isNodeLoading`) directly from the record in `applyRecordConfigs`.
2. Refactoring `Neo.grid.column.component.Tree` to use these primitive configs (`collapsed_`, `depth_`, etc.) so that `afterSet` hooks reliably trigger visual updates (like `updateIconCls`).

