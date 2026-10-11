---
id: 9462
title: 'TreeGrid Big Data Demo: Scaffold Base Directory and Files'
state: CLOSED
labels:
  - enhancement
  - ai
  - grid
assignees:
  - tobiu
createdAt: '2026-03-13T11:06:43Z'
updatedAt: '2026-03-13T11:32:03Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9462'
author: tobiu
commentsCount: 1
parentIssue: 9461
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-03-13T11:32:03Z'
---
# TreeGrid Big Data Demo: Scaffold Base Directory and Files

### Goal
Scaffold the base directory and initial class files for the `examples/grid/treeBigData` demo. This provides the structural foundation for the remaining tasks in the epic.

### Implementation Steps

1. Create the new directory: `examples/grid/treeBigData`
2. Create `MainContainer.mjs` extending `Neo.container.Viewport`. It should contain the `GridContainer` and `ControlsContainer` in an `hbox` layout (similar to the bigData demo).
3. Create a placeholder `GridContainer.mjs` extending `Neo.grid.Tree` (similar to the tree demo, but prepared for dynamic columns).
4. Create a placeholder `ControlsContainer.mjs` extending `Neo.container.Base`.
5. Create a placeholder `MainStore.mjs` extending `Neo.data.TreeStore`.
6. Create `MainModel.mjs` extending `Neo.data.TreeModel`.

### Dependencies
- None. This is the first step of the Epic.

## Timeline

### @tobiu - 2026-03-13T11:31:46Z

Scaffolding is completed via commit a2a7831050237d4bfe91091a4acb4a15df9c5a84 by the user.


