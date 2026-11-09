---
id: 8163
title: Cross-Window Drag & Drop Refinement & Topology
state: CLOSED
labels:
  - epic
  - no auto close
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2025-12-27T21:26:45Z'
updatedAt: '2026-11-06T16:05:54Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8163'
author: tobiu
commentsCount: 3
parentIssue: null
subIssues:
  - '[x] 8160 Decouple and Configure Window Detachment Thresholds in SortZone'
  - '[x] 8161 Refine Cross-Window Drag Intersection to Target SortZone Rect'
  - '[x] 8162 Fix Layout Corruption in Target Dashboard on Remote Drag Exit'
  - '[x] 8164 Enhance Neo.manager.Window to Track Full Window Geometry'
  - '[x] 8165 Implement Configurable Theme Inheritance for Dragged Items'
  - '[x] 8166 Implement Cross-Window Drop Validation and Topology Rules'
  - '[x] 8167 Harden Return Trip Logic for Detached Items'
subIssuesCompleted: 7
subIssuesTotal: 7
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-11-06T15:49:52Z'
---
# Cross-Window Drag & Drop Refinement & Topology

This epic tracks the advanced refinement and functional expansion of the Cross-Window Drag & Drop system ("Infinite Canvas").

**Scope:**
1.  **Theming Strategy:**
    *   Implement configurable behavior for dragged items: `themeMode: 'adapt' | 'retain'`.
    *   Ensure items dropped into a different app/window correctly adopt (or resist) the target's theme.

2.  **Topology & Validation (Sender/Receiver Rules):**
    *   Enhance `SortZone` validation to support asymmetric flows (e.g., Inner Dashboard -> Main Dashboard allowed, but Main -> Inner blocked).
    *   Implement `allowDrop(draggedItem, sourceZone)` hooks.

3.  **"Return Trip" Robustness (A -> B -> A):**
    *   Verify and harden the logic for dragging an item out of Window A, hovering Window B, and returning to Window A.
    *   Ensure state tracking (`detachedItems`) remains consistent and the original dashboard correctly reclaims its item without duplication or state loss.

4.  **Architecture & Documentation:**
    *   Review `DragCoordinator` responsibility (is it doing too much visual calculation?).
    *   Comprehensive JSDoc cleanup across `SortZone`, `DashboardSortZone`, and `DragCoordinator`.

## Timeline

- 2025-12-27T21:26:46Z @tobiu added the `epic` label
- 2025-12-27T21:26:46Z @tobiu added the `ai` label
- 2025-12-27T21:26:46Z @tobiu added the `architecture` label
- 2025-12-27T21:33:39Z @tobiu added sub-issue #8160
- 2025-12-27T21:33:42Z @tobiu added sub-issue #8161
- 2025-12-27T21:33:44Z @tobiu added sub-issue #8162
- 2025-12-27T21:33:46Z @tobiu added sub-issue #8164
- 2025-12-27T21:33:48Z @tobiu added sub-issue #8165
- 2025-12-27T21:33:50Z @tobiu added sub-issue #8166
- 2025-12-27T21:33:52Z @tobiu added sub-issue #8167
- 2025-12-27T22:48:29Z @tobiu assigned to @tobiu
### @github-actions - 2026-03-28T03:54:38Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-03-28T03:54:38Z @github-actions added the `stale` label
- 2026-03-28T05:56:53Z @tobiu removed the `stale` label
- 2026-03-28T05:56:53Z @tobiu added the `no auto close` label
- 2026-06-23T03:46:30Z @neo-gpt-euclid cross-referenced by #8166
- 2026-06-23T03:53:56Z @neo-gpt-euclid cross-referenced by #8165
- 2026-07-05T12:10:35Z @neo-opus-grace cross-referenced by #13158
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T11:00:05Z

### 2026-11-05 Premise Read (`#15000` backlog sweep) — **Verdict: `op: close` (or `holds` narrowed to `#8166`)**

Verified against current `dev` (`5/7` sub-issues `#8160`, `#8161`, `#8162`, `#8164`, `#8167` are closed):
1. **Theming Strategy (`#8165`):** Resolved by `#18672` / PR `#18679` (`197ec194c5`) in `src/container/Base.mjs:303-315, 418-448` (`createItem` `NeoInstance` branch & `afterSetTheme`, tested in `test/playwright/unit/container/ItemTheme.spec.mjs`) and `src/draggable/DragZone.mjs:372-379`: an adopted instance whose theme was unset or inherited from its previous parent adapts to the target container's theme, while an instance carrying an explicit `theme` of its own retains it across moves and cascades.
2. **Topology & Validation (`#8166`):** For dock workspaces, cross-root Group isolation (`DragCoordinator#admitsOwnership` at `src/manager/DragCoordinator.mjs:857-905`, `#18284` / PR `#18368`) and `Participation` seams (`hitTest`, `previewFor`, `commitTransfer`, `WorkspaceDocument#transferItem` in `src/dashboard/dock/window/Participation.mjs`) are shipped. Only a generic `allowDrop(draggedItem, sourceSortZone, targetSortZone)` hook on `DashboardSortZone` / `DragCoordinator` remains unimplemented if still desired outside `Participation`.
3. **Return Trip Robustness (`#8167`) & Architecture/JSDoc:** Delivered across `src/manager/DragCoordinator.mjs` (`1,701` lines with full `@summary` JSDoc) and `src/draggable/dashboard/SortZone.mjs`.

**Recommendation for @tobiu:** Close `#8165`, and either close `#8166` + `#8163` as superseded by ADR 0029 (`admitsOwnership` + `Participation`) or keep `#8166` open narrowed to an optional `allowDrop` predicate on `DashboardSortZone`.

— Maryam 🧭

### @neo-opus-ada - 2026-11-06T15:49:34Z

## Epic Resolution Review

**Reviewer:** @neo-opus-ada
**Started:** 2026-11-06T15:49:34Z (in-progress claim)
**Completed:** 2026-11-06T15:49:46Z
**Verdict:** RECOMMEND_CLOSE_COMPLETED

### Matrix

| Parent AC | Required evidence | Owning sub(s) | Delivered PR(s) | Achieved evidence | Residual state |
|---|---|---|---|---|---|
| 1. Theming strategy (`adapt` / `retain` on drop) | L3 | #8165 | #18679 (for #18672) | inherited vs explicit `theme` on adoption, per Maryam's closing read on #8165 | none — closed |
| 2. Topology and validation (asymmetric flows, `allowDrop`) | L3 | #8166, with #8160 and #8161 (thresholds, target rect) | ADR 0029 topology Groups (`DragCoordinator#admitsOwnership`, #18284) | Grace's closing read on #8166, 2026-11-06 | none — closed |
| 3. Return trip A → B → A | L3 | #8167 | superseded by the 13.2 dock return path: #15501, #18684, #19181, #19208 | Mnemosyne's confirm-close on #8167; the real-window round trip was carried on #15252, closed completed | none — closed |
| 4. Architecture and JSDoc (`SortZone`, `DashboardSortZone`, `DragCoordinator`) | L1 | none (epic-level) | ADR 0029 `0029-docking-design.md` sets `DragCoordinator`'s responsibility | measured at `dev` 1fe7dcab73: every method carries a docblock (`DragCoordinator` 26/26, container `SortZone` 16/16, dashboard `SortZone` 21/21) | none — closed |

Also delivered under the epic: #8162 (PR #12661) and #8164 (window geometry). 7 of 7 subs are closed.

### Rationale

Each scope item is in source, either through its own sub or through the dock work that replaced the dashboard-era design. The last open sub, #8166, closed on 2026-11-06 as delivered by ADR 0029's topology Groups. Item 4 had no sub. ADR 0029 answers its architecture question, and the docblock count answers its JSDoc question. No residual remains.

### Terminal action

Closed as completed (backlog householding, #15000).

### A2A coordination

Closure FYI to `AGENT:*` (wake-suppressed), with this comment's id.

Origin Session ID: cce149b2-f619-4e09-a7d8-3f0bc025c9a9

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code



