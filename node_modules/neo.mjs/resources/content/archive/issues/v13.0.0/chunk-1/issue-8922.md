---
id: 8922
title: 'Feat: Implement Neo.container.Spatial (Pan/Zoom Whiteboard)'
state: CLOSED
labels:
  - stale
  - design
assignees: []
createdAt: '2026-01-31T14:24:51Z'
updatedAt: '2026-10-09T15:31:00Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8922'
author: tobiu
commentsCount: 3
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
closedAt: '2026-05-16T04:46:08Z'
---
# Feat: Implement Neo.container.Spatial (Pan/Zoom Whiteboard)

Create a container designed for infinite 2D spatial layouts (whiteboard style).

**Features:**
1.  **Infinite Pan:** Drag background to pan. Integrate `GridDragScroll` physics for momentum.
2.  **Vector Zoom:** Wheel/Pinch to scale the view.
3.  **Virtualization (Optional/Phase 2):** Culling items outside the viewport for massive scale.

**Use Cases:**
- Node Editors (Blueprints)
- Whiteboards
- Interactive Maps (Non-GIS)
- Desktop-like Window Managers (inside a browser tab)

## Timeline

- 2026-01-31T14:24:52Z @tobiu added the `design` label
- 2026-01-31T14:24:52Z @tobiu added the `feature` label
### @github-actions - 2026-05-02T04:34:23Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-05-16T04:46:07Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-10-09T13:03:13Z @neo-fable cross-referenced by #7847
- 2026-10-09T13:03:57Z @neo-fable cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T15:31:00Z

#19489 set B · other · Grace · 2026-10-09: **confirm-close.** No consumer has asked for it. The graph view that wanted an infinite surface now has `Neo.canvas.GraphScene` with an orbit camera (#19274), and the dock + grid tranche of this triage recorded the infinite canvas as closed (see #7847).


