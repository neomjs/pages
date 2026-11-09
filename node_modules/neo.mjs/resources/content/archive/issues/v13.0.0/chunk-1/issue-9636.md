---
id: 9636
title: 'Grid Multi-Body: Simplify GridDragScroll Scrollbar Hit Detection'
state: CLOSED
labels:
  - enhancement
  - ai
  - grid
assignees:
  - neo-opus-ada
createdAt: '2026-04-02T23:02:24Z'
updatedAt: '2026-06-07T23:09:54Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9636'
author: tobiu
commentsCount: 1
parentIssue: 9486
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-06-07T23:09:54Z'
---
# Grid Multi-Body: Simplify GridDragScroll Scrollbar Hit Detection

With the reintroduction of the dedicated proxy `VerticalScrollbar` component, the `grid.View` no longer utilizes native scrollbars within its direct bounding geometry (both vertical and horizontal proxies are now absolutely positioned overlays).

The `GridDragScroll` Main Thread addon currently uses complex bounding box mathematics (`getBoundingClientRect()`, `event.offsetX`, `clientWidth`) to guess if a `mousedown` originated over a native scrollbar, to prevent panning the grid while dragging the scroll thumb.

We can completely remove this localized mathematical logic. Since the scrollbars are now discrete proxy DOM nodes, we can rely directly on `event.target` boundaries, exactly as currently implemented in the `neo-testing` branch. 

**Task:**
Refactor `GridDragScroll.mjs` scrollbar hit-detection logic to replace bounding box math with direct target node verification using the newly introduced vertical and horizontal proxy nodes.

## Timeline

- 2026-04-02T23:02:26Z @tobiu added the `enhancement` label
- 2026-04-02T23:02:26Z @tobiu added the `ai` label
- 2026-04-02T23:02:26Z @tobiu added the `grid` label
- 2026-04-02T23:02:31Z @tobiu added parent issue #9486
- 2026-04-02T23:03:21Z @tobiu assigned to @tobiu
- 2026-06-07T21:25:19Z @neo-opus-ada unassigned from @tobiu
- 2026-06-07T21:25:21Z @neo-opus-ada assigned to @neo-opus-ada
### @neo-opus-ada - 2026-06-07T21:25:23Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `neo-opus-ada`
**Reason:** Operator @tobiu activated @neo-opus-ada for v13 grid support; @neo-claude-opus (operator-delegated grid-lead) routed the clean-split GridDragScroll lane (#9636) to Ada. Reassigning from default owner @tobiu to the executing maintainer.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-06-07T21:33:04Z @neo-opus-ada referenced in commit `b5ce9d7` - "refactor(grid): replace GridDragScroll bbox hit-detection with proxy-node path check (#9636)

The grid.View no longer exposes a native scrollbar within its own bounding geometry (View.scss sets scrollbar-width: none); the dedicated grid.VerticalScrollbar / grid.HorizontalScrollbar proxies are now discrete overlay nodes. The previous getBoundingClientRect / offsetX / clientWidth edge math was therefore dead (hasVisibleScrollbar always false) and fragile (magic 18px gutter). Detect a scrollbar interaction directly from event.composedPath() instead, mirroring the existing neo-draggable path guard.

Co-Authored-By: neo-opus-ada <neo-opus-ada@neomjs.com>"
- 2026-06-07T21:33:35Z @neo-opus-ada cross-referenced by PR #12701
- 2026-06-07T23:09:54Z @tobiu referenced in commit `d5ee66c` - "refactor(grid): replace GridDragScroll bbox hit-detection with proxy-node path check (#9636) (#12701)

The grid.View no longer exposes a native scrollbar within its own bounding geometry (View.scss sets scrollbar-width: none); the dedicated grid.VerticalScrollbar / grid.HorizontalScrollbar proxies are now discrete overlay nodes. The previous getBoundingClientRect / offsetX / clientWidth edge math was therefore dead (hasVisibleScrollbar always false) and fragile (magic 18px gutter). Detect a scrollbar interaction directly from event.composedPath() instead, mirroring the existing neo-draggable path guard.

Co-authored-by: tobiu <tobiasuhlig78@gmail.com>
Co-authored-by: neo-opus-ada <neo-opus-ada@neomjs.com>"
- 2026-06-07T23:09:55Z @tobiu closed this issue

