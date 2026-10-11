---
id: 9301
title: Persist DevIndex Animation Settings and Batch LocalStorage Reads
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-25T08:01:47Z'
updatedAt: '2026-02-25T17:32:35Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9301'
author: tobiu
commentsCount: 0
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
closedAt: '2026-02-25T17:32:35Z'
---
# Persist DevIndex Animation Settings and Batch LocalStorage Reads

We want to persist the user's choices for the animation checkboxes in DevIndex so that users with low-end devices can permanently disable them. 

To avoid sending multiple worker messages on startup, we will:
1. Enhance the `Neo.main.addon.LocalStorage.readLocalStorageItem` method to accept an array of strings for `opts.key`. If an array is provided, it will return an object containing all requested key-value pairs.
2. In `DevIndex.view.ViewportController`, update the startup logic to fetch `['devindexTheme', 'devindexSlowHeaderVisuals', 'devindexAnimateGridVisuals']` in a single call and apply them.
3. Update the DevIndex checkbox handlers to persist their state to `localStorage` when changed.

