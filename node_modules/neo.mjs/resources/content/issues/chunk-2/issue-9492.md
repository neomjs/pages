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
- 2026-06-07T20:44:47Z @neo-gpt cross-referenced by #12695
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
- 2026-06-07T21:35:56Z @neo-gpt cross-referenced by PR #12697
- 2026-06-07T21:42:18Z @neo-gpt cross-referenced by #12696
- 2026-06-07T23:11:04Z @neo-opus-ada cross-referenced by #9491
- 2026-06-07T23:36:08Z @neo-gpt cross-referenced by #12698
- 2026-06-08T00:37:37Z @neo-gpt cross-referenced by PR #12714
- 2026-06-08T03:45:45Z @neo-gpt cross-referenced by #12729
- 2026-06-08T03:53:46Z @neo-gpt cross-referenced by PR #12730
- 2026-06-08T04:20:15Z @neo-gpt cross-referenced by #12733
- 2026-06-08T04:49:29Z @neo-gpt cross-referenced by #12734
- 2026-06-08T05:16:28Z @neo-gpt cross-referenced by PR #12736
- 2026-06-08T10:14:56Z @neo-opus-grace cross-referenced by PR #12754
- 2026-06-08T11:05:42Z @neo-opus-grace cross-referenced by #12758
- 2026-06-08T11:20:01Z @neo-opus-grace cross-referenced by #9830
- 2026-06-08T17:01:08Z @neo-opus-vega cross-referenced by PR #12777
- 2026-06-08T19:45:24Z @neo-opus-grace cross-referenced by PR #12784
- 2026-06-08T20:30:34Z @neo-gpt cross-referenced by #12787
- 2026-06-10T23:25:54Z @neo-fable cross-referenced by #12878
- 2026-06-11T01:21:10Z @neo-fable cross-referenced by #9486
- 2026-06-23T03:43:57Z @neo-gpt cross-referenced by #9075
### @github-actions - 2026-09-06T06:08:58Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-09-12T17:08:04Z @neo-fable-clio cross-referenced by #18626
- 2026-09-13T11:50:29Z @neo-fable-clio cross-referenced by PR #18661
- 2026-09-14T19:30:35Z @neo-opus-grace cross-referenced by #18707
- 2026-09-14T20:25:38Z @neo-gpt-emmy cross-referenced by PR #18708
- 2026-09-14T21:44:08Z @neo-gpt-emmy cross-referenced by PR #18711
- 2026-09-15T08:38:12Z @neo-opus-grace cross-referenced by #15000
- 2026-09-16T08:26:59Z @neo-opus-grace cross-referenced by #18762
### @github-actions - 2026-09-20T06:33:26Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-09-20T06:33:26Z @github-actions closed this issue
### @neo-fable - 2026-10-09T13:03:19Z

**confirm-close** (2026-10-09, #19489 set B, grid): the View-owned SelectionModel shipped — `src/grid/View.mjs` L51–78 (`selectionModel_`), `src/selection/grid/*`; the 2026-06-07 design-lock was executed.

🪢 Mnemosyne (Claude Fable 5.1 · Claude Code) · session 2ea2911e-ebbd-49be-9471-3e77369ca2b5

- 2026-10-09T13:03:57Z @neo-fable cross-referenced by #19489

