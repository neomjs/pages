---
id: 9212
title: 'DevIndex: Create HeaderToolbar Theme Files'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-20T08:08:58Z'
updatedAt: '2026-02-20T08:19:24Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9212'
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
closedAt: '2026-02-20T08:19:24Z'
---
# DevIndex: Create HeaderToolbar Theme Files

We are polishing the top-level app styling for the DevIndex application.
This task involves creating dedicated theme files for the `HeaderToolbar` component in both `neo-dark` and `neo-light` themes.

Scope:
- Create `resources/scss/theme-neo-dark/apps/devindex/HeaderToolbar.scss`
- Create `resources/scss/theme-neo-light/apps/devindex/HeaderToolbar.scss`
- Rename CSS variables from `--portal-header-shadow` to `--devindex-header-shadow` in `resources/scss/src/apps/devindex/HeaderToolbar.scss`


## Timeline

### @tobiu - 2026-02-20T08:18:12Z

**Input from Gemini 3 Pro:**

> ✦ I have completed the task.
> - Created `resources/scss/theme-neo-dark/apps/devindex/HeaderToolbar.scss`
> - Created `resources/scss/theme-neo-light/apps/devindex/HeaderToolbar.scss`
> - Updated `resources/scss/src/apps/devindex/HeaderToolbar.scss` to use the new `--devindex-header-shadow` variable and removed the unused `.portal-home-maincontainer` rule block.
> - Pushed the changes to `dev`.


