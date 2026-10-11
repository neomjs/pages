---
id: 9075
title: 'refactor: Optimize Grid Selection Models Architecture'
state: CLOSED
labels:
  - no auto close
  - ai
  - refactoring
  - core
  - needs-re-triage
assignees:
  - neo-opus-grace
createdAt: '2026-02-09T12:18:06Z'
updatedAt: '2026-09-14T21:09:09Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9075'
author: tobiu
commentsCount: 2
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
closedAt: '2026-09-14T21:09:09Z'
---
# refactor: Optimize Grid Selection Models Architecture

**Context:**
Following the implementation of `internalId` (#9070) and subsequent fixes for selection logic, we identified significant technical debt in the `src/selection/grid` namespace. The current architecture suffers from deep inheritance chains, duplicated logic, and brittle type-checking heuristics.

**Problem:**
1.  **Deep Inheritance:** The chain `CellColumnRowModel -> CellRowModel -> CellModel -> BaseModel` forces hybrid models to override logic from ancestors that doesn't fit (e.g., `CellRowModel` having to manually sync row selection because `CellModel` ignores it).
2.  **Logic Duplication:** `CellColumnModel` and `CellColumnRowModel` duplicate the "Conditional Flush" logic (checking `isEqual` on `selectedColumns`) to ensure visual updates.
3.  **Brittle `updateRows`:** `BaseModel.updateRows` uses string parsing (`includes('__')`) to distinguish between Cell IDs and Record IDs. This is fragile and should be polymorphic.
4.  **Column Selection Redundancy:** Multiple models manage column selection using copied logic.

**Objectives:**
1.  **Introduce Mixins:** Refactor `RowSelection` and `ColumnSelection` into reusable Mixins. Use composition instead of deep inheritance for hybrid models (e.g., `CellModel` + `RowSelectionMixin`).
2.  **Polymorphic Updates:** Refactor `updateRows` to delegate to a polymorphic `updateItem(item)` method on the subclass, eliminating the need for `isCell` checks in the base class.
3.  **Centralize Flush Logic:** Move the `selectedColumns` change detection and flush logic into a shared location (Mixin or Base).
4.  **Normalize IDs:** Ensure consistent handling of `internalId` vs `recordId` across all models.

**Scope:**
- `src/selection/grid/BaseModel.mjs`
- `src/selection/grid/RowModel.mjs`
- `src/selection/grid/CellModel.mjs`
- `src/selection/grid/ColumnModel.mjs`
- `src/selection/grid/CellRowModel.mjs`
- `src/selection/grid/CellColumnModel.mjs`
- `src/selection/grid/CellColumnRowModel.mjs`


## Timeline

- 2026-02-09T12:18:07Z @tobiu added the `ai` label
- 2026-02-09T12:18:07Z @tobiu added the `refactoring` label
- 2026-02-09T12:18:07Z @tobiu added the `core` label
- 2026-02-09T12:25:41Z @tobiu added the `no auto close` label
- 2026-06-07T21:26:57Z @neo-opus-grace cross-referenced by #9492
- 2026-06-07T21:42:16Z @neo-gpt cross-referenced by PR #12697
- 2026-06-07T21:42:18Z @neo-gpt cross-referenced by #12696
- 2026-06-08T11:19:57Z @neo-opus-grace cross-referenced by #12758
- 2026-06-23T03:43:38Z @neo-gpt added the `not-code-ready` label
- 2026-06-23T03:43:38Z @neo-gpt added the `needs-design` label
- 2026-06-23T03:43:38Z @neo-gpt added the `needs-re-triage` label
- 2026-07-06T13:21:50Z @tobiu removed the `not-code-ready` label
- 2026-07-06T13:22:28Z @tobiu removed the `needs-design` label
- 2026-09-13T11:36:35Z @neo-fable-clio cross-referenced by #18626
- 2026-09-13T12:42:08Z @neo-fable-clio cross-referenced by PR #18661
### @neo-opus-grace - 2026-09-14T18:47:39Z

## Intake finding: the debt is real at head, two of the four prescribed mechanisms don't fit, and the duplication already hides a live bug

Verified at `dev@f8425236af`. No parent epic; no open PR touches `src/selection/grid`; #18626 explicitly deferred this refactor here.

**1. The duplication has already diverged into a bug.** `CellColumnModel` and `CellColumnRowModel` are byte-identical apart from `onCellClick`'s head — and `unregister`. `CellColumnModel#unregister` clears `selectedColumns` and calls `view.createViewData()`; `CellColumnRowModel#unregister` clears them and relies on `BaseModel#unregister`, which re-projects only when `selectedRows` is non-empty (`BaseModel.mjs:412`). `grid/Row.mjs:249` paints the column class from `selectionModel.selectedColumns` at render, so swapping out a `CellColumnRowModel` that holds a column selection but no row leaves the highlight painted. Probe — column selected, no row, `view.selectionModel = null`, body re-projections counted:

| model | re-projections |
|---|---|
| `ColumnModel` | 1 |
| `CellColumnModel` | 1 |
| `CellColumnRowModel` | **0** |

`ViewOwnedSelectionModel.spec.mjs:378` covers this swap for `ColumnModel` only.

**2. There are three copies of column selection, not two.** `ColumnModel#onNavKeyColumn` runs the same wrap-and-assign algorithm, plus `scrollByColumns`. The Cell* pair reach their scroll through `super` → `CellModel`.

**3. "RowSelection / ColumnSelection mixins" doesn't fit Neo's mixins as written.** `mixinProperty` (`Neo.mjs:1184`) assigns `proto[key] = mixinProto[key]`, overwriting the class's own method, and a copied method keeps its home object — so `super` inside it resolves against the mixin's parent. The column methods (`onCellClick`, `onNavKeyColumn`, `unregister`) all `super`-chain into the model hierarchy. A shared helper free of `super`, or the base, fits: the operator's 2026-02-09 ruling was *"this belongs into the base model. we do not want code duplication."*

**4. "Polymorphic `updateItem` per class" doesn't fit alone.** One `CellRowModel` instance feeds record IDs (`selectRow` → `updateRows(recordId)`, `BaseModel:256/381`) *and* logical cell IDs (`CellModel#onCellClick` → `toggleSelection`) through the same `updateBodyRows`. That is why the `includes('__')` branch at `:98` exists. Removing it means typing the items at the call site, which is where the caller actually knows the type.

**5. Coverage.** No unit arm exercises the combined models' `onCellClick` column flush, `onNavKeyColumn`, or `unregister`. `SelectionModelStateIsolation` checks per-instance arrays only; `e2e/grid/SelectionMultiBody` is Neural-Link-gated and covers rows only. Characterization arms have to come before any refactor.

🖖 Grace · Opus 5 · Claude Code · Session b43a5b46-c79a-40ce-8eb8-d4eb122f4cd8


- 2026-09-14T18:50:52Z @neo-opus-grace assigned to @neo-opus-grace
- 2026-09-14T19:30:35Z @neo-opus-grace cross-referenced by #18707
### @neo-opus-grace - 2026-09-14T19:32:06Z

## Scope, per @tobiu's option A (2026-09-14)

The operator chose to resolve a **narrowed** #9075 and to move the rest into one follow-up: **#18707**. This body is left as written; the narrowing is recorded here.

**The PR resolving #9075 delivers** column selection that repaints, from one place:

- **Every column change now repaints its cells.** Select, arrow navigation and clear used to re-project the bodies, and `grid.Body#createViewData` skips every row whose record is unchanged, so no column change ever reached a cell. `BaseModel` now owns `setSelectedColumns`, a granular `updateColumns` (the column counterpart to #9014's `updateRows`), and `stepSelectedColumn`. `ColumnModel`, `CellColumnModel` and `CellColumnRowModel` call them instead of carrying three drifted copies.
- **Two drifts are gone.** `ColumnModel#onCellClick` returned early on every click: its `data.body !== view` guard predates the View-owned model. `CellColumnModel` toggled on the DOM cell id instead of the logical one, so a second click never cleared its column.
- **Swapping a model out leaves nothing painted.** `BaseModel#unregister` clears columns *and rows* granularly; the row highlight had the same unforced-repaint flaw. The repaint is skipped while the view is being destroyed.
- **`View#createViewData` is removed.** It was added for the column models' re-projection and has no caller left.

**Moved to #18707:** typed row/cell updates in place of `updateBodyRows`' `includes('__')` branch; a declared row-selection trait in place of `View#rowSelectionModel`'s ntype predicate; composing the two column-selecting Cell\* overrides; and the `internalId` / `recordId` objective, which gets verified before it's acted on. The intake finding above explains why "mixins" and "polymorphic `updateItem`" were reshaped rather than implemented as written.

🖖 Grace · Opus 5 · Claude Code · Session b43a5b46-c79a-40ce-8eb8-d4eb122f4cd8


- 2026-09-14T19:33:12Z @neo-opus-grace cross-referenced by PR #18708
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
- 2026-09-14T21:09:09Z @tobiu closed this issue
- 2026-09-14T21:44:08Z @neo-gpt-emmy cross-referenced by PR #18711

