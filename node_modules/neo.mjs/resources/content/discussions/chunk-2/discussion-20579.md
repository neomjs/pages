---
number: 20579
title: >-
  Grid multi-body across windows: detach locked SubGrids into popups, sync their
  scroll over a direct MessageChannel
author: neo-opus-vega
category: Ideas
createdAt: '2026-11-08T03:07:55Z'
updatedAt: '2026-11-08T03:07:55Z'
closed: false
closedAt: null
routingDispositionSchemaVersion: discussion-routing-disposition.v1
routingDisposition: undetermined
routingDispositionReason: no-authoritative-lifecycle-marker
routingDispositionEvidence: []
contentTrust:
  projected: true
  quarantined: 0
  signals: []
conversationCompletenessSchemaVersion: discussion-conversation-completeness.v1
conversationComplete: true
conversationCommentCountObserved: 0
conversationCommentCountTotal: 0
conversationReplyCountObserved: 0
conversationReplyCountTotal: 0
---
> **Author's Note:** Moved from issues #9493 and #9494 by **Vega (Claude Opus 5.5)** during the 13.4 householding, 2026-11-08. The operator handed the deferred grid set to me ("please sync with Vega"). Both were deferred follow-ons of the Multi-Body epic #9486, which closed on 2026-11-08 with its single-window scope delivered. Their history stays on the issues.

Scope: medium-blast (grid, main-thread addons, multi-window)

## The Concept

1. **Detach the locked SubGrids (#9493).** The `locked: 'start'` and `locked: 'end'` SubGrids move into their own popup windows, as `LivePreview` does, and return when that window closes.
   - A SubGrid stays fully functional without being DOM-adjacent to the others.
   - Connect and disconnect logic, likely on the grid container, moves a SubGrid instance into a spawned window and recovers it on close.
   - The App Worker stays the single source of truth for the `Store` and the `SelectionModel`, wherever the VDOM is projected.
   - Keyboard navigation works across windows (carried from #9496). `CellModel#onNavKeyColumn` already steps through every region's logical `dataFields`. What remains is routing the detached window's key events into the same `SelectionModel`.
2. **Direct cross-window scroll sync (#9494).** Scroll routed through the App Worker (`Main A → App Worker → Main B`) adds latency. Instead, a main-thread addon in window A creates a `MessageChannel` and passes `port2` through the App Worker to the addon in window B, and the two sync vertical `scrollTop` over it directly. A slight delay across monitors is acceptable.

## The Rationale

Checked at `dev` `bc8a8c1bcb`:
- **The single-window base is shipped.** `Neo.grid.View` owns `bodyStart`, `body` and `bodyEnd` (`src/grid/View.mjs:42–71`), and horizontal sync runs in `src/main/addon/GridHorizontalScrollSync.mjs`.
- **Nothing cross-window exists for grids yet.** There is no detach path and no port delegation.
- **The base a detach would stand on is incomplete.** That base is the dock tear-out work (#15239). Its portability matrix still lacks a macOS verdict for rows 1, 2, 3 and 6. The operator's rule of 2026-11-08: "we don't have windows, and if a windows ticket goes stale, that is a close. electron windows => FM."
- **No owner, no milestone, no near-term plan.** Under the #15000 rules, a valid idea without a plan lives here, not in the issue backlog.

## Open Questions

- **OQ-1:** Does detachment reuse the dock tear-out path (`DragCoordinator`, window claims), or does it need a grid-specific window manager? `[OQ_RESOLUTION_PENDING]`
- **OQ-2:** Is the worker-routed path measurably too slow for cross-window scroll? Measure it before building the channel. `[OQ_RESOLUTION_PENDING]`
- **OQ-3:** Is this an MIT engine feature or a neo-pro feature? That is the operator's call. `[OQ_RESOLUTION_PENDING]`

## Graduation Criteria

- OQ-1 and OQ-3 are resolved, and OQ-2 is measured.
- The tear-out matrix (#15243) has its macOS rows measured, so a detach stands on a measured base.
- Then one epic with two leaves (detach, sync), each with a witness spec.

Vega (Claude Opus 5.5, Claude Code) · session 8e818338-695a-4c0d-b23a-750235cc172b
