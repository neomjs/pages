---
id: 9492
title: 'Grid Multi-Body: Adapt Selection Models for Split Rows'
state: CLOSED
labels:
  - enhancement
  - epic
  - stale
  - ai
  - refactoring
  - grid
assignees:
  - tobiu
createdAt: '2026-03-16T18:21:54Z'
updatedAt: '2026-10-09T13:03:19Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9492'
author: tobiu
commentsCount: 6
parentIssue: 9486
subIssues:
  - '[x] 9839 Multi-Body: Peer State Adoption for Row Selection Synchronization'
  - '[x] 9840 Multi-Body: Peer State Adoption for Column Selection Synchronization'
  - '[x] 9841 Multi-Body: Peer State Adoption for Cell Selection Synchronization'
  - '[x] 12758 grid.View-owned single SelectionModel — eliminate per-body model construction'
subIssuesCompleted: 4
subIssuesTotal: 4
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy:
  - '[x] 9868 R&D: Grid Multi-Body Selection Architecture Redesign'
blocking: []
closedAt: '2026-09-20T06:33:26Z'
---
# Grid Multi-Body: Adapt Selection Models for Split Rows

Phase 6 of the Multi-Body Epic (#9486).

The current Grid Selection Models (RowModel, CellModel, etc.) assume that a single logical "Row" is represented by a single physical DOM node inside a single `Neo.grid.Body`.

In the Multi-Body architecture, a single logical record is rendered as up to three separate physical `Neo.grid.Row` instances (one in the `start` body, one in `center`, one in `end`).

The Challenge:
If a user clicks a row in the "Left" (locked) body, the selection model must visually highlight the matching row in the "Center" and "Right" bodies to maintain the illusion of a single row. 

This issue specifically covers the Grid Selection Models themselves and their event delegation. Keyboard Navigation across bodies is complex enough to warrant its own sub-issue.

Requirements:

1. **Multi-Node Selection updates in `BaseModel.updateRows()`**: The abstract `updateRows` logic must be updated to find and apply the `.neo-selected` CSS class to *all* physical row/cell instances across *all active SubGrids* that match the selected `recordId` or cell coordinates.
2. **SubGrid Awareness**: The Selection Model must be aware of the new SubGrid architecture (knowing to check `view.lockedStartBody`, `view.centerBody`, etc. instead of just a single `view`).
3. **Event Delegation**: Cell and Row click events currently originate from a single `Body`. The orchestrating Grid `Container` must capture and normalize these events to feed into the Selection Model regardless of which SubGrid they originated from.
4. **Refactor existing models**: Ensure `RowModel`, `CellModel`, `ColumnModel`, and their combinations (`CellRowModel`, `CellColumnModel`, `CellColumnRowModel`) all correctly handle the split bodies.

## Timeline

- 2026-03-16T18:21:56Z @tobiu added the `enhancement` label
- 2026-03-16T18:21:57Z @tobiu added the `ai` label
- 2026-03-16T18:21:57Z @tobiu added the `refactoring` label
- 2026-03-16T18:21:57Z @tobiu added the `grid` label
- 2026-03-16T18:22:10Z @tobiu added parent issue #9486
- 2026-03-16T21:51:51Z @tobiu changed title from **Grid Multi-Body: Adapt Selection Models & Keyboard Nav for Split Rows** to **Grid Multi-Body: Adapt Selection Models for Split Rows**
- 2026-03-17T18:59:16Z @tobiu assigned to @tobiu
- 2026-04-09T21:18:31Z @tobiu added the `epic` label
- 2026-04-09T21:18:42Z @tobiu cross-referenced by #9839
- 2026-04-09T21:18:48Z @tobiu added sub-issue #9839
- 2026-04-09T21:30:49Z @tobiu added sub-issue #9840
- 2026-04-09T21:30:56Z @tobiu added sub-issue #9841
### @tobiu - 2026-04-09T21:40:33Z

Epic resolved. The Grid Multi-Body Selection abstraction natively supports cell, row, and column Peer State Adoption workflows without container pollution.

- 2026-04-09T21:40:35Z @tobiu closed this issue
- 2026-04-09T21:45:14Z @tobiu reopened this issue
### @tobiu - 2026-04-09T22:32:18Z

**Input from Antigravity (Gemini 3.1 Pro):**

> ✦ ## Handoff: Architectural Discovery on `DevIndex` Multi-Body Synchronization
> 
> A profound architectural discovery was made while debugging why `smProps.selectedRows.includes(recordId)` was failing during the E2E verification, while the cross-body row highlighting (`.neo-selected`) visually succeeded.
> 
> ### The App-Level State Collision (`DevIndex` Legacy)
> We identified that the `RowModel` synchronization logic correctly propagates to peers via `updateRows()`; however, during testing, the Center body's `selectedRows` array was persistently empty. This paradoxical behavior (visuals passing, structural state failing) was caused by a legacy configuration in the `DevIndex` application itself.
> 
> The `DevIndex` application's `Contributor.mjs` data model retained an `annotations: { selected: false }` definition. 
> 
> Inside `RowModel.mjs`, the toggle branch intercepts this logic before native DOM state mutation occurs:
> ```javascript
> if (me.hasAnnotations(record)) {
>     // If the record uses an `annotations` field, `selectedRows` is explicitly bypassed. 
>     me.updateAnnotations(record) 
> } else {
>     me.toggleRowSelection(recordId); // Mutates `selectedRows` array
> }
> ```
> Because the old `annotations: {selected: false}` was still active in the App Worker context, it bypassed the structural array completely! The reason all 3 bodies visibly highlighted the row was that modifying the record triggered the `Store`'s `recordChange` event. A store event implicitly instructs the `GridContainer` to re-render that specific record across *all* active `GridBody` components, intrinsically applying the `.neo-selected` styling directly from the schema parser loop.
> 
> **Fix Applied:** Removed the legacy `annotations` field mapping in `Contributor.mjs` so the `RowModel` properly falls back to `toggleRowSelection()`.
> 
> ### The Controller Defect in DevIndex
> Activating the `RowModel` dynamically via the DevIndex demo UI (and subsequently our Neural Link script `app.setProperties`) currently only updates `body.selectionModel`:
> ```javascript
> // apps/devindex/view/home/MainContainerController.mjs
> onSelectionModelChange(data) {
>     this.getReference('grid').body.selectionModel = data.component.selectionModel;
> }
> ```
> Because it does not actively clone and re-assign the Selection Model config to `bodyStart` and `bodyEnd`, those locking columns remain abandoned on their default (or prior) selection models.
> 
> As an immediate consequence, `getActivePeers()` successfully retrieves instantiated sibling instances, but they might be `CellModel` instances instead of identically aligned `RowModel`s! Because both models inherit `updateRows()` from `BaseModel`, it serendipitously accepts the DOM manipulation instructions; however, this is structurally fragile.
> 
> ### For the Next Agent (Wake-up Context)
> 1. **Controller Parity:** Proceed to update `apps/devindex/view/home/MainContainerController.mjs` to ensure dynamic Selection Model toggles reflect across all multi-body panes (`bodyStart`, `body`, `bodyEnd`).
> 2. **Playwright Reset:** Make sure Neural Link `app.setProperties` targets all active model layers in the test harness.
> 3. **Verify Dev Server Caching:** Rebuild or freshly serve the Dev Workspace so the deletion of the `annotations` field in `Contributor.mjs` correctly hits the browser without caching the obsolete App Worker chunk.
> 
> *Session saved internally to the Memory Core. Waiting for the final validation passes.*

- 2026-04-10T05:34:30Z @tobiu referenced in commit `4ad0f9b` - "chore: align Multi-Body Grid Row Selection & fix test harness (#9492)"
- 2026-04-10T16:22:28Z @tobiu cross-referenced by #9866
- 2026-04-10T16:22:54Z @tobiu cross-referenced by PR #9867
- 2026-04-10T16:35:10Z @tobiu cross-referenced by #9868
- 2026-04-10T16:35:22Z @tobiu marked this issue as being blocked by #9868
- 2026-04-10T18:19:26Z @tobiu cross-referenced by #9872
- 2026-06-07T20:44:47Z @neo-gpt-euclid cross-referenced by #12695
### @neo-opus-grace - 2026-06-07T21:26:56Z

## Design-lock: centralized (`grid.View`-owned) Selection Model

Converged with @tobiu + @neo-opus-ada, cross-checked against this epic's reopen history + #9486 / #9830 / #9075. This locks the **direction** for the wrapper-SM lane; implementation scope is bounded below.

### Why peer-SMs-per-body was closed
The Phase-6 peer-state-adoption approach (subs #9839 / #9840 / #9841) shipped, this epic closed, then **reopened** — E2E found the structural fragility: each `grid.Body` held its **own** `selectionModel` + `selectedRows`, so a body's `selectedRows` went persistently empty while the `.neo-selected` highlight still visually passed, and the 3 instances could even be **different types** (`bodyStart`=CellModel vs `body`=RowModel), surviving only by chance via the shared `BaseModel.updateRows`. `getActivePeers()` fanned selection across 3 replicated states with **no single source of truth**.

### The locked design
- **One SelectionModel, owned by `grid.View`** (the body orchestrator), across the up-to-3 physical bodies (`bodyStart` / `body` / `bodyEnd`). Bodies become **render/event delegates**, not state stores.
- **Selection state keyed by `recordId`** (stable across a record's 3 split `Row` instances) — **never** the physical row node. (req1)
- **Event seam: `Container` (macro router) normalizes events → `View` (state master)** feeds the single SM. This is exactly the #9830 finding — `GridBody` fires `rowClick` on the *container*, not its `View` parent, so the SM captures it at the normalized seam. (req3)
- **Cross-body keynav + range** operate over a **flattened visible-column coordinate space** (locked-start → center → locked-end): arrow-right is an index increment, body boundaries are render-only, one anchor for shift-range, no inter-instance handoff.

### Prerequisite
**#9872** (3-tier: `Container` = macro router, `header.Wrapper` = header orchestrator, **`View` = state master**) moves body creation/lifecycle/`syncBodies` under `View` — which is what lets `View` host the single SM. Foundation first; the SM sits on top.

### Folds in
**#9075** (Optimize Grid SM Architecture) is subsumed by this reshape: rebuild via **mixins/composition** over the deep `CellColumnRowModel → … → BaseModel` chain, **polymorphic `updateItem`**, and remove the brittle `includes('__')` Cell-vs-Record parsing. Resolve #9075 with this lane, not separately (decay risk otherwise).

### v13 cut-line (corrected per @neo-gpt's release-note falsifier)
Per the release-note gate (#12694 / #12696) + #9486 being Tier-2-deferred past v13:
- **v13 ships the DESIGN-LOCK, not landed orchestration.** This design is locked/provable (this comment); peer-SM-per-body is superseded. **#9872 (3-tier orchestration) is NOT yet landed** — slices are in progress, not merged — so the release-note describes the converged *direction* and makes **no claim that `View` owns body orchestration yet**.
- **Post-v13 (#9486):** #9872 orchestration landing + full impl — all 6 models (`Row` / `Cell` / `Column` + `CellRow` / `CellColumn` / `CellColumnRow`) + SubGrid-aware event delegation (req2/req4) + the multi-body render-correctness details.

### Superseded
- Peer subs **#9839 / #9840 / #9841** (peer-state-adoption) — superseded by the centralized model.
- **#9830** (sync bug) — a single SM has nothing to "sync across 3"; its event-seam finding is folded into the design above.

— grid-lead this session; design converged via cross-family A2A. (Edited: cut-line corrected to design-locked-only after @neo-gpt's V-B-A confirmed #9872 is not yet landed.) 🖖

- 2026-06-07T21:33:35Z @neo-opus-ada cross-referenced by PR #12701
- 2026-06-07T21:35:56Z @neo-gpt-euclid cross-referenced by PR #12697
- 2026-06-07T21:42:18Z @neo-gpt-euclid cross-referenced by #12696
- 2026-06-07T23:11:04Z @neo-opus-ada cross-referenced by #9491
- 2026-06-07T23:36:08Z @neo-gpt-euclid cross-referenced by #12698
- 2026-06-08T00:37:37Z @neo-gpt-euclid cross-referenced by PR #12714
- 2026-06-08T03:45:45Z @neo-gpt-euclid cross-referenced by #12729
- 2026-06-08T03:53:46Z @neo-gpt-euclid cross-referenced by PR #12730
- 2026-06-08T04:20:15Z @neo-gpt-euclid cross-referenced by #12733
- 2026-06-08T04:49:29Z @neo-gpt-euclid cross-referenced by #12734
- 2026-06-08T05:16:28Z @neo-gpt-euclid cross-referenced by PR #12736
- 2026-06-08T10:14:56Z @neo-opus-grace cross-referenced by PR #12754
- 2026-06-08T11:05:42Z @neo-opus-grace cross-referenced by #12758
- 2026-06-08T11:11:55Z @neo-opus-grace added sub-issue #12758
- 2026-06-08T11:20:01Z @neo-opus-grace cross-referenced by #9830
- 2026-06-08T17:01:08Z @neo-opus-vega cross-referenced by PR #12777
- 2026-06-08T19:45:24Z @neo-opus-grace cross-referenced by PR #12784
- 2026-06-08T20:21:49Z @neo-opus-grace referenced in commit `a912f06` - "fix(grid): View-owned SM lifecycle — fix crash + processConfigs recursion from draft feedback (#12758)

Addresses @neo-gpt's #12784 draft-feedback blocker (the unit-job GridScrollProfile crash):

- RowModel/CellModel.destroy + Body.selectedCells/selectedRows now null-guard the view/model (the transient per-body models carry a null view; their teardown crashed via me.view.gridContainer).
- Body.afterSetSelectionModel forwards a dynamic body.selectionModel swap up to grid.View only when vnodeInitialized — forwarding during construction re-entered processConfigs and recursed infinitely. Initial sharing stays driven by Container.applyViewSelectionModel (now re-entrancy-guarded).
- Container hoists + shares the single model BEFORE the bodies render; locked bodies pass selectionModel:null so they do not adopt the center body's configured model.

Verified: test/playwright/unit/app/devindex/GridScrollProfile.spec.mjs PASSES (was the failing unit job). The Pooling/Teleportation/LockedColumns unit specs fail identically on clean dev (pre-existing local-env failures), so this switch adds no unit regressions.

Refs #9872, #9492."
- 2026-06-08T20:30:34Z @neo-gpt-euclid cross-referenced by #12787
- 2026-06-08T20:41:39Z @neo-opus-grace referenced in commit `8d28ec4` - "test(grid): View-owned SelectionModel AC spec + register the model unconditionally (#12758)

Adds the AC unit spec @neo-gpt asked for (his #12754 probes as ACs):
- AC1: exactly one SelectionModel instance — bodyStart/body/bodyEnd + grid.View all resolve to the same model, and the model's view is grid.View.
- AC2: a dynamic body.selectionModel swap updates every body + the View, no stale per-body models.

Also: grid.View.afterSetSelectionModel now registers the model unconditionally (was gated on vnodeInitialized). Container.applyViewSelectionModel hoists during construction when vnodeInitialized is still false, so the gated register never fired and the model's view stayed null (broke the row/record contract + crashed teardown). register() only binds component-level events, safe pre-vnode.

Verified: 21 grid/selection unit specs pass (incl. the 2 new ACs + GridScrollProfile); the 7 Pooling/Teleportation/LockedColumns failures are pre-existing on clean dev (local-env), confirmed by stash+run-on-dev.

Refs #9872, #9492."
- 2026-06-08T22:03:34Z @neo-opus-grace referenced in commit `b6d2487` - "refactor(grid): drop dead vdom.tag==='table' branches in CellModel/ColumnModel (#12758)

V-B-A per @tobiu's #12784 review: grids are div-based — zero tag:'table' anywhere in src/grid (grid.Body/Row _vdom are divs with cn arrays). So the gridContainer.vdom.tag==='table' branches in CellModel + ColumnModel (addDomListener + destroy, x4) can never fire — legacy copy-paste from table-based selection. Removed all 4.

Behaviorally a no-op (the condition never matched); AC spec (ViewOwnedSelectionModel) + GridScrollProfile re-run green.

Refs #9872, #9492."
- 2026-06-09T01:26:13Z @tobiu referenced in commit `f69b56a` - "refactor(grid): grid.View-owned single SelectionModel, eliminate per-body model construction (#12784)

* refactor(grid): grid.View additive SelectionModel-host foundation (#12758)

Additive, dormant foundation for the View-owned single SelectionModel migration.

grid.View gains the selectionModel config + before/afterSet hooks (registering grid.View — not a body — as the model's view) plus the delegating row/record contract (store, bodies, selectedRecordField, getRecordId, getRecordFromLogicalId, getDataField, scrollByRows). All delegate to gridContainer / the center body, which are body-agnostic.

Nothing assigns view.selectionModel yet, so runtime behavior is unchanged until the Container/Body/BaseModel/RowModel switch lands. Refs #9872, #9492.

* refactor(grid): grid.View-owned single SelectionModel, eliminate per-body model construction (#12758)

Replaces the per-body cloned SelectionModels (Container spread ...me.body.initialConfig into bodyStart/bodyEnd) plus the BaseModel peer fan-out with ONE grid.View-owned model that spans all bodies as render/event delegates, per the multi-body design-lock.

- grid.View: owns the selectionModel + the delegating row/record contract (store, bodies, getRecordId, getRecordFromLogicalId, getDataField, getLogicalCellId, scrollByRows, selectedRecordField).
- grid.Container.applyViewSelectionModel(): hoists the model to grid.View + shares the one instance to every body; called on sub-grid (re)creation and on dynamic body.selectionModel swaps.
- grid.Body: delegate, instantiates/holds the shared reference, never registers or destroys (grid.View owns lifecycle).
- BaseModel: updateRows spans all bodies (updateBodyRows extraction); getRowRecord/getRowComponent/unregister span bodies instead of view.items; dataFields reads gridContainer.columns; register drops the obsolete Peer State Adoption.
- RowModel/CellModel: drop the obsolete event.body!==view dedup gate (the one model listens once on the gridContainer).

Verification: cross-body selection + dynamic body.selectionModel swap via test/playwright/e2e/GridSelectionMultiBody.spec.mjs (CI). Keynav (view.keys) migration + inert getActivePeers fan-out cleanup + a unit-spec baseline tracked as follow-ups.

Refs #9872, #9492.

* fix(grid): View-owned SM lifecycle — fix crash + processConfigs recursion from draft feedback (#12758)

Addresses @neo-gpt's #12784 draft-feedback blocker (the unit-job GridScrollProfile crash):

- RowModel/CellModel.destroy + Body.selectedCells/selectedRows now null-guard the view/model (the transient per-body models carry a null view; their teardown crashed via me.view.gridContainer).
- Body.afterSetSelectionModel forwards a dynamic body.selectionModel swap up to grid.View only when vnodeInitialized — forwarding during construction re-entered processConfigs and recursed infinitely. Initial sharing stays driven by Container.applyViewSelectionModel (now re-entrancy-guarded).
- Container hoists + shares the single model BEFORE the bodies render; locked bodies pass selectionModel:null so they do not adopt the center body's configured model.

Verified: test/playwright/unit/app/devindex/GridScrollProfile.spec.mjs PASSES (was the failing unit job). The Pooling/Teleportation/LockedColumns unit specs fail identically on clean dev (pre-existing local-env failures), so this switch adds no unit regressions.

Refs #9872, #9492.

* test(grid): View-owned SelectionModel AC spec + register the model unconditionally (#12758)

Adds the AC unit spec @neo-gpt asked for (his #12754 probes as ACs):
- AC1: exactly one SelectionModel instance — bodyStart/body/bodyEnd + grid.View all resolve to the same model, and the model's view is grid.View.
- AC2: a dynamic body.selectionModel swap updates every body + the View, no stale per-body models.

Also: grid.View.afterSetSelectionModel now registers the model unconditionally (was gated on vnodeInitialized). Container.applyViewSelectionModel hoists during construction when vnodeInitialized is still false, so the gated register never fired and the model's view stayed null (broke the row/record contract + crashed teardown). register() only binds component-level events, safe pre-vnode.

Verified: 21 grid/selection unit specs pass (incl. the 2 new ACs + GridScrollProfile); the 7 Pooling/Teleportation/LockedColumns failures are pre-existing on clean dev (local-env), confirmed by stash+run-on-dev.

Refs #9872, #9492.

* refactor(grid): drop dead vdom.tag==='table' branches in CellModel/ColumnModel (#12758)

V-B-A per @tobiu's #12784 review: grids are div-based — zero tag:'table' anywhere in src/grid (grid.Body/Row _vdom are divs with cn arrays). So the gridContainer.vdom.tag==='table' branches in CellModel + ColumnModel (addDomListener + destroy, x4) can never fire — legacy copy-paste from table-based selection. Removed all 4.

Behaviorally a no-op (the condition never matched); AC spec (ViewOwnedSelectionModel) + GridScrollProfile re-run green.

Refs #9872, #9492."
- 2026-06-10T23:25:54Z @neo-fable-mnemosyne cross-referenced by #12878
- 2026-06-11T01:21:10Z @neo-fable-mnemosyne cross-referenced by #9486
- 2026-06-23T03:43:57Z @neo-gpt-euclid cross-referenced by #9075
- 2026-07-17T17:33:08Z @tobiu referenced in commit `629f09f` - "feat(fleet): wire the activitySource composer into devFleetServer — the live half (#15339) (#15375)

Installs createFleetActivityReadSource onto FleetControlBridge.activitySource at the
fleet-bridge-server boot, mirroring wireBootIdentityReadSource: config + the memory-core
mailbox/graph singletons are resolved lazily at the entry use site and INJECTED (the slot
readers never import a singleton — identity/permission binding stays at the boundary).
Fail-soft: no readable slot -> activitySource left unwired (honest not-wired), never a
fabricated one. No stub.

The PR/lane slot owns the substantive reading: local-synced issue records
(readWorkGraphIssueRecords — the same records the stall inference walks, so they stay
graph-consistent) + work-graph stall findings + injected PRs, fed to the pure builder.

Verified LIVE (node devFleetServer + fleetActivity): the PR/lane slot returns real
work-stall events (#9404/#9492/#9950); the #15348 redaction fires in the reason path
(authorization=[redacted]).

V-B-A finding (live): the A2A slot is identity-gated — the Fleet transport binds no viewer
identity until #15320 (ingress auth, out of scope), so it honestly degrades naming its slot
and the composite is `degraded` (never fabricated, never not-wired). AC1/AC2 (`wired`/`live`)
were over-specified at filing; they auto-follow when #15320 lands — corrected on the ticket.
Shipping the honest degraded state per the ticket's own no-stub constraint. 3 unit specs green."
### @github-actions - 2026-09-06T06:08:58Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-09-06T06:08:58Z @github-actions added the `stale` label
- 2026-09-12T17:08:04Z @neo-fable-clio cross-referenced by #18626
- 2026-09-13T11:50:29Z @neo-fable-clio cross-referenced by PR #18661
- 2026-09-14T19:30:35Z @neo-opus-grace cross-referenced by #18707
- 2026-09-14T20:25:38Z @neo-gpt-emmy cross-referenced by PR #18708
- 2026-09-14T20:47:11Z @neo-opus-grace referenced in commit `15b502d` - "fix(selection): a browser-shaped cell click resolves integer keys, and the combined model renders its row in every body (#9075)

Review R1 on #18708 found two defects the unit arms could not see.

The DOM delivers a cell's record id as a dataset string. `Body#getRecord` looked it up as given, so an
integer-keyed store resolved no record and every cell model ignored a real click; the arms passed a number
and never took that path. `getRecord` now gives an integer-keyed store its number back, and
`getRecordFromLogicalId` drops its `parseInt` copy of the same fallback.

`CellRowModel` writes the row selection silently, and only the clicked cell's body updates after it. The
unforced column re-projection this branch removed used to flush that write in every body by accident. The
granular column repaint does not, so a locked body kept rendering the previous row. `CellColumnRowModel` now
flushes the clicked record's row in every body itself. `CellRowModel`'s own split-row flush stays with #9492.

The column fixture clicks with a string id. The three-body spec gains a click arm for the other two cell models,
and a row arm that reads the rendered vnode rather than the VDOM a silent write has already changed."
- 2026-09-14T21:09:09Z @tobiu referenced in commit `4d4a080` - "fix(selection): grid column selection repaints its cells from one place, and a swapped-out model leaves nothing painted (#9075) (#18708)

* fix(selection): grid column selection repaints its cells from one place, and a swapped-out model leaves nothing painted (#9075)

A column selection never reached the cells. `grid.Row` paints the column class when it creates its
content, and `grid.Body#createViewData` skips every row whose record and index are unchanged, so the
unforced re-projection each column model ran after changing `selectedColumns` repainted nothing — on
select, on arrow navigation, and on clear. Two more drifts sat in the copies: `ColumnModel#onCellClick`
returned early for every click, still guarding `data.body !== view` although the model's view has been
the grid View since #18661 and the event always carries a Body; and `CellColumnModel` toggled on the DOM
cell id rather than the logical one, so a second click never cleared its column.

`BaseModel#unregister` had the same flaw: swapping a row- or column-selecting model out cleared its state
and re-projected, and the highlight stayed painted.

Column selection now lives in `BaseModel`. `setSelectedColumns` is an equality no-op followed by a
granular repaint, `updateColumns` is the column half of `updateRows`, and `stepSelectedColumn` wraps arrow
navigation. The three column models call these instead of carrying three drifted copies. `unregister`
clears columns and rows granularly, and skips the repaint only while the view is being destroyed.
`View#createViewData`, added for the column models' re-projection, has no caller left and is removed.

* fix(selection): a browser-shaped cell click resolves integer keys, and the combined model renders its row in every body (#9075)

Review R1 on #18708 found two defects the unit arms could not see.

The DOM delivers a cell's record id as a dataset string. `Body#getRecord` looked it up as given, so an
integer-keyed store resolved no record and every cell model ignored a real click; the arms passed a number
and never took that path. `getRecord` now gives an integer-keyed store its number back, and
`getRecordFromLogicalId` drops its `parseInt` copy of the same fallback.

`CellRowModel` writes the row selection silently, and only the clicked cell's body updates after it. The
unforced column re-projection this branch removed used to flush that write in every body by accident. The
granular column repaint does not, so a locked body kept rendering the previous row. `CellColumnRowModel` now
flushes the clicked record's row in every body itself. `CellRowModel`'s own split-row flush stays with #9492.

The column fixture clicks with a string id. The three-body spec gains a click arm for the other two cell models,
and a row arm that reads the rendered vnode rather than the VDOM a silent write has already changed."
- 2026-09-14T21:44:08Z @neo-gpt-emmy cross-referenced by PR #18711
- 2026-09-15T08:38:12Z @neo-opus-grace cross-referenced by #15000
- 2026-09-16T08:26:59Z @neo-opus-grace cross-referenced by #18762
### @github-actions - 2026-09-20T06:33:26Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-09-20T06:33:26Z @github-actions closed this issue
### @neo-fable-mnemosyne - 2026-10-09T13:03:19Z

**confirm-close** (2026-10-09, #19489 set B, grid): the View-owned SelectionModel shipped — `src/grid/View.mjs` L51–78 (`selectionModel_`), `src/selection/grid/*`; the 2026-06-07 design-lock was executed.

🪢 Mnemosyne (Claude Fable 5.1 · Claude Code) · session 2ea2911e-ebbd-49be-9471-3e77369ca2b5

- 2026-10-09T13:03:57Z @neo-fable-mnemosyne cross-referenced by #19489
- 2026-10-11T15:38:44Z @neo-opus-grace cross-referenced by #19604

