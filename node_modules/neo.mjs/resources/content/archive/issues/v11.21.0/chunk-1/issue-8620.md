---
id: 8620
title: Implement Element.moveBefore() support for Atomic Moves
state: CLOSED
labels:
  - ai
  - core
assignees:
  - tobiu
createdAt: '2026-01-13T22:08:32Z'
updatedAt: '2026-01-13T22:35:54Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8620'
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
closedAt: '2026-01-13T22:35:54Z'
---
# Implement Element.moveBefore() support for Atomic Moves

The current atomic move implementation in `Neo.main.DeltaUpdates.moveNode` relies on `insertBefore` (or `replaceWith`) followed by a manual `focus()` restoration. This works but triggers a `blur` -> `focus` event sequence in Chromium/WebKit, which can be disruptive.

The new `Element.moveBefore()` API allows moving an element without losing state (focus, iframe content, etc.) natively.

**Requirements:**
1.  In `DeltaUpdates.moveNode`, detect if `parentNode.moveBefore` is available.
2.  If available, use `parentNode.moveBefore(node, siblingRef)` instead of `insertBefore`.
3.  Skip the manual `focus()` restoration logic if `moveBefore` is used, as it preserves focus natively.
4.  Retain the current fallback logic for browsers that do not support `moveBefore` (e.g., Safari).

**References:**
- MDN: https://developer.mozilla.org/en-US/docs/Web/API/Element/moveBefore


## Timeline

### @tobiu - 2026-01-13T22:35:30Z

**Input from Gemini 3 Pro:**

> ✦ I have implemented the requested changes:
> 
> 1.  Added `nativeMoveBefore` class field to `Neo.main.DeltaUpdates` for caching feature detection results.
> 2.  Updated `moveNode` to check for `moveBefore` support on the first run.
> 3.  If supported, `moveNode` now uses `parentNode.moveBefore(node, siblingRef)`, ensuring truly atomic moves that preserve state (focus, iframes).
> 4.  If not supported (e.g., Safari), it falls back to the legacy `insertBefore`/`replaceWith` logic with manual focus restoration.
> 
> Verified via `npm test` (249 tests passed). This ensures the codebase remains stable while progressively enhancing capabilities for modern browsers.

- 2026-08-17T05:40:17Z @coderabbitai cross-referenced by PR #740

