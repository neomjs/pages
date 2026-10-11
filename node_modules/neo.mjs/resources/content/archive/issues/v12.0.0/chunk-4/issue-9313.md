---
id: 9313
title: 'Header Canvas: Fix layout syncing on mobile and dynamic item sizing'
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2026-02-26T16:16:25Z'
updatedAt: '2026-02-26T19:29:59Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9313'
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
closedAt: '2026-02-26T19:29:59Z'
---
# Header Canvas: Fix layout syncing on mobile and dynamic item sizing

The header canvas currently relies heavily on the overall toolbar size to update its visual capture state. This leads to issues:

1.  **Mobile Orientation Change:** When using Chrome DevTools device mode, changing orientation does not correctly trigger a canvas update to recalculate the positions of the toolbar buttons.
2.  **Dynamic Item Loading (e.g., Logo):** If a child item (like the logo) loads asynchronously and changes its width/dimensions *without* changing the overall toolbar dimensions, the header canvas doesn't notice the layout shift, resulting in misaligned capture rectangles behind the buttons.

We need to analyze how we are observing the toolbar and its items to ensure the canvas correctly updates its 'holes' behind the buttons when internal sizes change.

## Timeline

### @tobiu - 2026-02-26T19:29:27Z

**Input from Gemini 3.1 Pro:**

> ✦ I have pushed the patch to `dev`. 
> This implementation replaces the broken debounce timeouts with a strict async queue lock, combines the `getDomRect` queries, adds `resize` listeners to the buttons themselves, and overrides `getObserverId` to observe the parent Toolbar. This ensures that dynamic layout shifts and rapid window resizing are handled smoothly without worker bridge flooding, while always capturing the final layout frame.
> 
> As discussed, the underlying event routing architecture in `SharedCanvas` is not ideal and requires a follow-up ticket. I am closing this ticket as the immediate regression is resolved.

- 2026-02-26T19:31:25Z @tobiu cross-referenced by #9314

