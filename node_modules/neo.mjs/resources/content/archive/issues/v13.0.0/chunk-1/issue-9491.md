---
id: 9491
title: 'Grid Multi-Body: Overhaul Column Drag & Drop (SortZone) across Split Headers'
state: CLOSED
labels:
  - enhancement
  - ai
  - refactoring
  - grid
assignees:
  - neo-opus-ada
createdAt: '2026-03-16T18:21:28Z'
updatedAt: '2026-06-09T10:27:19Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9491'
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
closedAt: '2026-06-09T10:27:19Z'
---
# Grid Multi-Body: Overhaul Column Drag & Drop (SortZone) across Split Headers

Phase 6 of the Multi-Body Epic (#9486).

The current `Neo.draggable.grid.header.toolbar.SortZone` assumes a single contiguous `Neo.grid.header.Toolbar` containing all columns.

In the V2 Multi-Body architecture, the header is split into three independent toolbars (`start`, `center`, `end`).

**The Challenge:**
When a user drags a column header from the `center` toolbar into the `start` toolbar (to lock it), the `SortZone` must support cross-container drag and drop.

**Requirements:**

**1. Cross-Container DD:**
  * The `SortZone` must be refactored to allow dragging items *between* the three sibling header toolbars. This likely means registering the sort zone at a higher level (the wrapper) or enabling communication between the three independent zones.

**2. Surgical DOM Move Proxy Update:**
  * The current `createDragProxy()` logic builds a proxy that perfectly mimics the entire grid height. In the multi-body setup, dragging a column from Center to Left means the proxy needs to traverse *across* the physical subgrid boundaries. The proxy logic must be updated to build its structure based on the SubGrid it originated from, but be allowed to float over the entire Grid Container.

**3. State Mutation & Collection Handoff:**
  * Dropping a column into a different toolbar must automatically update the `locked` configuration of that column (e.g., dropping into the left toolbar sets `locked: 'start'`).
  * Dropping the column must trigger logic that removes the column definition from the source collection and inserts it into the target collection.

**4. Visual Indicators:**
  * The proxy and drop indicators must seamlessly transition across the boundaries of the split header containers.

**5. State Sync:**
  * The collection change must automatically trigger the layout engine to redraw the SubGrids (and potentially toggle `removeDom` states if a zone becomes empty or active).

## Timeline

- 2026-03-16T18:21:29Z @tobiu added the `enhancement` label
- 2026-03-16T18:21:29Z @tobiu added the `ai` label
- 2026-03-16T18:21:29Z @tobiu added the `refactoring` label
- 2026-03-16T18:21:30Z @tobiu added the `grid` label
- 2026-03-16T18:21:43Z @tobiu added parent issue #9486
- 2026-03-17T19:00:08Z @tobiu assigned to @tobiu
- 2026-03-29T17:55:27Z @tobiu cross-referenced by #9594
- 2026-06-07T23:10:59Z @neo-opus-ada unassigned from @tobiu
- 2026-06-07T23:11:01Z @neo-opus-ada assigned to @neo-opus-ada
### @neo-opus-ada - 2026-06-07T23:11:03Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `neo-opus-ada`
**Reason:** Operator @tobiu override (relayed via @neo-claude-opus, grid-lead): finish the grid (View-owned SM + multi-body DnD) before the v13 release. Claude holds the SM spine (#9872/#9492); @neo-opus-ada takes multi-body column DnD (#9491, SortZone.mjs). Reassigning from default owner @tobiu to the executing maintainer.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-06-07T23:36:08Z @neo-gpt cross-referenced by #12698
- 2026-06-07T23:55:00Z @neo-opus-ada cross-referenced by #12707
- 2026-06-07T23:56:40Z @neo-opus-ada cross-referenced by PR #12708
- 2026-06-08T00:37:37Z @neo-gpt cross-referenced by PR #12714
- 2026-06-08T03:53:46Z @neo-gpt cross-referenced by PR #12730
- 2026-06-08T04:20:15Z @neo-gpt cross-referenced by #12733
- 2026-06-08T04:49:29Z @neo-gpt cross-referenced by #12734
- 2026-06-08T05:16:28Z @neo-gpt cross-referenced by PR #12736
- 2026-06-08T09:48:00Z @neo-opus-grace cross-referenced by #9872
- 2026-06-08T11:14:24Z @neo-opus-ada cross-referenced by PR #12754
- 2026-06-08T17:01:08Z @neo-opus-vega cross-referenced by PR #12777
- 2026-06-08T19:44:23Z @neo-opus-ada referenced in commit `872b9e0` - "feat(grid): wire cross-toolbar drop-region into SortZone.onDragEnd (#9491)

onDragMove captures the release x-coordinate (lastDragClientX); onDragEnd resolves the start/end body rects and calls getDropRegion for the position-based lock region, overriding column.locked ONLY for cross-region moves (positionRegion != column.locked). Within-region drops keep the existing neighbor-inference path, so the within-region resort is preserved (purely additive). The cross-region re-homing end-to-end is visual-verify-gated (the integration is embedded in the async onDragEnd, not unit-testable in isolation); getDropRegion itself stays unit-tested. Follow-up slices on this branch: cross-boundary visual indicators + the local-to-global column-index remap for cross-region moves, then visual-verify the motion."
- 2026-06-08T19:52:26Z @neo-opus-vega cross-referenced by PR #12785
- 2026-06-08T20:04:38Z @neo-gpt cross-referenced by #12696
- 2026-06-08T20:30:34Z @neo-gpt cross-referenced by #12787
- 2026-06-08T20:35:18Z @neo-opus-ada referenced in commit `8811188` - "feat(grid): offset SortZone.moveTo column indices for locked regions (#9491)

moveTo reordered the global gridContainer.columns using the owner toolbar's LOCAL indices, which only matched the global indices in the no-locked common case. New columnIndexOffset() offsets the local index by the preceding regions' column counts (start->0, center->start count, end->start+center counts), so center/end toolbars move the correct columns in locked-multi-region grids. Backward-compatible: offset is 0 with no locked columns, so within-region resort is unchanged. columnIndexOffset is unit-tested; the live within-region positioning in a locked grid is visual-verify-gated."
- 2026-06-08T21:40:11Z @neo-opus-ada cross-referenced by PR #12792
- 2026-06-08T21:45:37Z @neo-opus-ada cross-referenced by PR #12784
- 2026-06-09T00:11:22Z @neo-opus-grace cross-referenced by #12800
- 2026-06-09T02:12:08Z @neo-opus-ada cross-referenced by #12807
- 2026-06-09T02:12:43Z @neo-opus-ada cross-referenced by #12808
- 2026-06-09T08:04:32Z @neo-gpt cross-referenced by PR #12801
- 2026-06-09T10:27:19Z @tobiu referenced in commit `0ff1128` - "feat(grid): cross-toolbar column DnD across split headers (#9491) (#12792)

* feat(grid): add cross-toolbar drop-region detection to SortZone (#9491)

First slice of cross-toolbar column DnD. getDropRegion maps the pointer release x-coordinate to the target lock region (start/center/end) by the locked-start/locked-end body x-ranges -- the position-based signal a cross-toolbar drag needs, vs the within-region neighbor-inference in onDragEnd which only keys off the dragged column's siblings. Pure + unit-tested (start/center/end, boundary-inclusive, center-only-grid). Follow-up slices on this branch: wire getDropRegion into onDragEnd (resolve dropX + the body region rects, set column.locked), the local-to-global column-index remap for cross-region moves, cross-boundary visual indicators, then visual-verify the motion.

* feat(grid): wire cross-toolbar drop-region into SortZone.onDragEnd (#9491)

onDragMove captures the release x-coordinate (lastDragClientX); onDragEnd resolves the start/end body rects and calls getDropRegion for the position-based lock region, overriding column.locked ONLY for cross-region moves (positionRegion != column.locked). Within-region drops keep the existing neighbor-inference path, so the within-region resort is preserved (purely additive). The cross-region re-homing end-to-end is visual-verify-gated (the integration is embedded in the async onDragEnd, not unit-testable in isolation); getDropRegion itself stays unit-tested. Follow-up slices on this branch: cross-boundary visual indicators + the local-to-global column-index remap for cross-region moves, then visual-verify the motion.

* feat(grid): offset SortZone.moveTo column indices for locked regions (#9491)

moveTo reordered the global gridContainer.columns using the owner toolbar's LOCAL indices, which only matched the global indices in the no-locked common case. New columnIndexOffset() offsets the local index by the preceding regions' column counts (start->0, center->start count, end->start+center counts), so center/end toolbars move the correct columns in locked-multi-region grids. Backward-compatible: offset is 0 with no locked columns, so within-region resort is unchanged. columnIndexOffset is unit-tested; the live within-region positioning in a locked grid is visual-verify-gated.

---------

Co-authored-by: tobiu <tobiasuhlig78@gmail.com>"
- 2026-06-09T10:27:19Z @tobiu closed this issue
- 2026-06-10T23:25:54Z @neo-fable cross-referenced by #12878
- 2026-06-11T00:42:45Z @neo-gpt cross-referenced by PR #12881
- 2026-06-11T01:21:10Z @neo-fable cross-referenced by #9486
- 2026-06-12T00:20:10Z @neo-fable-clio cross-referenced by #12934

