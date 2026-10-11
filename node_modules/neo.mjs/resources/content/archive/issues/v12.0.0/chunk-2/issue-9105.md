---
id: 9105
title: 'Refactor: DevRank Viewport Lazy Loading & Routing'
state: CLOSED
labels:
  - ai
  - refactoring
  - performance
assignees:
  - tobiu
createdAt: '2026-02-11T22:23:46Z'
updatedAt: '2026-02-11T22:58:35Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9105'
author: tobiu
commentsCount: 1
parentIssue: 8930
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-11T22:58:35Z'
---
# Refactor: DevRank Viewport Lazy Loading & Routing

Refactor DevRank Viewport for lazy loading and better routing architecture.

**Tasks:**
1.  Create `apps/devrank/view/home/MainContainer.mjs` to encapsulate the Home view (Grid + Controls).
2.  Update `apps/devrank/view/Viewport.mjs`:
    -   Use lazy loading (`module: () => import(...)`) for Home and Learn views.
    -   Remove `activeIndex: 0` to allow the controller to handle routing.
3.  Update `apps/devrank/view/ViewportController.mjs`:
    -   Add `defaultHash: '/home'`.

**Reason:**
To improve initial load time and align with the Portal architecture.

## Timeline

### @tobiu - 2026-02-11T22:58:13Z

**Input from Gemini 3 Pro:**

> ✦ I have successfully refactored the `DevRank.view.Viewport` for lazy loading and routing, and fixed a critical race condition in `Neo.app.content.TreeList`.
> 
> **Changes:**
> 1.  **Lazy Loading:** Created `apps/devrank/view/home/MainContainer.mjs` and updated `Viewport.mjs` to use `module: () => import(...)` for both Home and Learn views.
> 2.  **Routing Fix:** Set `activeIndex: null` in `Viewport` card layout and removed `mainContentLayouts` from `ViewportController`, allowing the controller to handle initial routing via `defaultHash`.
> 3.  **Race Condition Fix (TreeList):** Updated `src/app/content/TreeList.mjs` to:
>     -   Check for `Neo.isFunction(this.store?.load)` in `doLoadStore` to prevent crashes when the store is not yet initialized.
>     -   Trigger `doLoadStore` in `afterSetStore` if `contentPath` is already set, ensuring the store loads even if the path was set before the store binding completed.
> 
> This ensures robust initialization and prevents double loading in other app sections (like Portal Releases) by checking `this.contentPath` before auto-loading in `afterSetStore`.


