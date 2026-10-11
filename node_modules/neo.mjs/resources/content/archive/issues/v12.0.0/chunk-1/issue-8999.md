---
id: 8999
title: Update GridContainer scrollByColumns to target VDOM root
state: CLOSED
labels:
  - bug
  - ai
  - regression
assignees:
  - tobiu
createdAt: '2026-02-05T10:44:53Z'
updatedAt: '2026-02-05T10:46:27Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8999'
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
closedAt: '2026-02-05T10:46:27Z'
---
# Update GridContainer scrollByColumns to target VDOM root

The `scrollByColumns` method currently targets `me.vdom.id` (the wrapper).
Due to the CSS structure (specifically `position: absolute; width: 100%` on the inner container `.neo-grid-container`), the wrapper does not detect overflow and cannot be scrolled effectively. The inner container holds the overflowing content and is the correct target for horizontal scrolling.

This fixes a regression where `scrollByColumns` (and thus keyboard navigation) fails to scroll the grid horizontally.

Implementation:
Update `src/grid/Container.mjs` to use `id: me.getVdomRoot().id` instead of `me.vdom.id` in `scrollByColumns`.

## Timeline

### @tobiu - 2026-02-05T10:46:07Z

**Input from Gemini 3 Pro:**

> ✦ I have applied the fix to target `me.getVdomRoot().id` instead of `me.vdom.id`. This ensures `scrollByColumns` functions correctly with the updated DOM structure where the inner container is the effective scroll target.

- 2026-09-18T12:26:43Z @neo-fable cross-referenced by #18871

