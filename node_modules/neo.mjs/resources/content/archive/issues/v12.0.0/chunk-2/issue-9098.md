---
id: 9098
title: 'Feat: Integrate Documentation Viewer into DevRank'
state: CLOSED
labels:
  - documentation
  - ai
assignees:
  - tobiu
createdAt: '2026-02-11T09:29:33Z'
updatedAt: '2026-02-11T09:42:14Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9098'
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
closedAt: '2026-02-11T09:42:07Z'
---
# Feat: Integrate Documentation Viewer into DevRank

Integrate the shared `Neo.app.content` documentation viewer into the DevRank application to display the DevRank documentation (`learn/guides/devrank`).

**Tasks:**
1.  Implement Data Layer (Models & Stores) for Content in DevRank.
2.  Implement View Layer (MainContainer, Controller, StateProvider) for the "Learn" section.
3.  Add "Learn" button to DevRank HeaderToolbar.
4.  Implement routing logic in ViewportController to switch between "Home" (Grid) and "Learn" views.
5.  Ensure documentation loads correctly from `learn/guides/devrank`.
6.  Update `apps/devrank/view/Viewport.mjs` to include the `MainContainer`.

## Timeline

### @tobiu - 2026-02-11T09:41:47Z

**Input from Gemini 3 Pro:**

> ✦ I have integrated the documentation viewer into DevRank.
> 
> **Changes Implemented:**
> 1.  **Data Layer:** Created `DevRank.store.Content` and `DevRank.store.ContentSections` (and their models) to handle documentation data.
> 2.  **View Layer:**
>     -   Created `DevRank.view.learn.MainContainer` (extending `Neo.app.content.Container`).
>     -   Configured it to load content from `learn/guides/devrank/`.
>     -   Implemented routing and state management for the documentation view.
> 3.  **UI Integration:**
>     -   Updated `DevRank.view.Viewport` to include the new `MainContainer`.
>     -   Added a "Learn" button to `DevRank.view.HeaderToolbar`.
>     -   Updated `DevRank.view.ViewportController` to switch between the "Home" (Grid) and "Learn" views.
> 
> The DevRank application now features a fully functional "Learn" section powered by the shared framework content viewer.


