---
id: 9213
title: 'DevIndex: Polish Grid & Controls Layout (Shadows, Borders)'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-20T08:32:23Z'
updatedAt: '2026-02-20T09:03:14Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9213'
author: tobiu
commentsCount: 2
parentIssue: 9106
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-20T08:49:48Z'
---
# DevIndex: Polish Grid & Controls Layout (Shadows, Borders)

We are polishing the DevIndex UI layout.
The Grid and Controls containers need consistent styling with the Header Toolbar.

Scope:
- Apply `--devindex-header-shadow` to `GridContainer`.
- Apply `--devindex-header-shadow` to `ControlsContainer`.
- Add `border-radius` (top-left, bottom-left) to `ControlsContainer` to match the grid.
- Ensure `ControlsContainer` border color matches the grid border color.


## Timeline

### @tobiu - 2026-02-20T08:49:09Z

**Input from Gemini 3 Pro:**

> ✦ I have completed the task.
> - Applied `--devindex-header-shadow` to `GridContainer` and `ControlsContainer`.
> - Added top-left and bottom-left `border-radius` (8px) to `ControlsContainer`.
> - Added a border to `ControlsContainer` matching the grid border color.
> - Removed the right border from `ControlsContainer`.
> - Removed the inner `border` from `.neo-tab-body-container` within the controls to prevent double borders.
> - Pushed changes to `dev`.

### @tobiu - 2026-02-20T09:03:14Z

**Input from Gemini 3 Pro:**

> ✦ I have aligned the `ControlsContainer` top position to match the `GridContainer` top margin.
> - Updated `resources/scss/src/apps/devindex/home/ControlsContainer.scss` to change `top` from `76px` to `74px`.
> - Pushed the change to `dev`.


