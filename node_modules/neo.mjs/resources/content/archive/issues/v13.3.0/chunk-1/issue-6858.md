---
id: 6858
title: 'grid.plugin.AnimateRows: updateView() => row ids'
state: CLOSED
labels:
  - bug
  - no auto close
assignees:
  - tobiu
  - neo-opus-ada
createdAt: '2025-06-23T11:16:12Z'
updatedAt: '2026-10-15T20:00:51Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6858'
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
closedAt: '2026-10-15T20:00:51Z'
milestone: v13.3
---
# grid.plugin.AnimateRows: updateView() => row ids

* Since row ids are now index based, we need a different mechanism. The internal `map` should store record ids instead.

## Timeline

- 2025-06-23T11:16:12Z @tobiu assigned to @tobiu
- 2025-06-23T11:16:14Z @tobiu added the `bug` label
### @github-actions - 2025-09-22T02:47:59Z

This issue is stale because it has been open for 90 days with no activity.

- 2025-09-22T02:48:00Z @github-actions added the `stale` label
- 2025-09-22T08:34:12Z @tobiu removed the `stale` label
- 2025-09-22T08:34:12Z @tobiu added the `no auto close` label
- 2026-06-14T10:56:51Z @neo-gpt-euclid cross-referenced by #13219
- 2026-10-12T18:16:20Z @neo-opus-ada cross-referenced by #19665
### @neo-opus-ada - 2026-10-12T18:16:22Z

Current state, measured at `017c2a6773` in headless Chromium on `examples/grid/animatedRowSorting`: sorting by a header click and filtering via the Firstname field each throw `owner.createRow is not a function`. The pooled `grid.Body` has no `createRow`. The plugin also maps rows by vdom `id`, while `Body#getVdomRoot().cn` now holds Row component references (`createVdomReference()`), so the move/insert bookkeeping in `updateView()` has no match. A repair is a rewrite onto the Row pool (record-id keyed, as this ticket says), not a patch. No spec covers the plugin.

Content-sized grids (#19658) take the plugin out of play instead: #19665.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-10-12T18:32:43Z @neo-opus-ada cross-referenced by PR #19677
- 2026-10-12T19:53:53Z @tobiu referenced in commit `358af02` - "feat(grid): AnimateRows stands aside in content-sized mode (#19665) (#19677)

* feat(grid): AnimateRows stands aside in content-sized mode (#19665)

The plugin animates rows to fixed-height positions and does not read the row geometry. With
contentSizedRows it now takes its row transitions off the body, warns once that animatedRowSorting is
ignored, and hands the store's filter and load events back to the body's own handlers, so rows render at
their geometry offsets. This works whichever comes first, the mode or the plugin.

Its fixed-height path is untouched. That path throws `owner.createRow is not a function` since the
pooled Body; its repair is #6858.

* test(grid): AnimateRows stands aside in both activation orders and when declared by hand (#19665)

* fix(grid): AnimateRows follows the content-sized mode as it switches, before rows re-render (#19665)

grid.View#updateRowGeometry now has each body fire `rowGeometryChange` before a mode switch re-renders
every row. AnimateRows listens on its body: switching content-sized rows on takes its row transitions
off and warns, before measured heights move any row, and switching back restores them, with no store
event needed. The plugin releases the listener when it is destroyed."
- 2026-10-13T03:17:01Z @neo-opus-ada cross-referenced by #19658
- 2026-10-13T14:04:32Z @neo-opus-ada cross-referenced by #19712
- 2026-10-15T18:29:14Z @neo-opus-ada added this to the **v13.3** milestone
- 2026-10-15T18:30:13Z @neo-opus-ada cross-referenced by #6327
- 2026-10-15T18:34:15Z @neo-opus-ada assigned to @neo-opus-ada
### @neo-opus-ada - 2026-10-15T18:34:19Z

Picking this up for 13.3, at the operator's direction (2026-10-15, chat); @tobiu stays assigned.

**Current state, `dev` at `7f0856c106`, headless Chrome on `examples/grid/animatedRowSorting`:** a header sort and a Firstname filter each throw `owner.createRow is not a function`. The plugin predates the Row pool (#8965): it maps vdom rows by the pooled slot id and pushes new row vdom, both of which the fixed-DOM-order body forbids ([PooledGridAnimation.md](https://github.com/neomjs/neo/blob/dev/learn/guides/datahandling/PooledGridAnimation.md), *Source Contracts*). Its SCSS also gives every row a permanent `transition: transform` while the plugin is on, so ordinary scroll recycling animates too, the guide's rejected *global transform transitions*.

**Proposed fix (this ticket's 2025 prescription, sharpened by the guide):** key movement by record identity, never by slot ids, and keep the pool fixed. On a sort or filter, re-bind the rows silently, place each row at its record's previous offset, then move it to the new offset with a transition scoped to a temporary body class; a row whose record was not visible fades in. Scrolling (`neo-is-scrolling`) and the next sort or filter end the transition. The snapshot overlay stays the TreeGrid path, as the guide decides. Test-first: an e2e spec on the example (no throw on sort and filter, the final order, a mid-transition sample, no transform transition outside the window).

Prescription checked: `src/grid/plugin/AnimateRows.mjs` owns the concern, driving `src/grid/Body.mjs#createViewData` for the re-bind.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-10-15T18:59:29Z @neo-opus-ada cross-referenced by #19772
- 2026-10-15T19:14:18Z @neo-opus-ada cross-referenced by PR #19774
- 2026-10-15T19:33:11Z @neo-opus-ada cross-referenced by PR #19777
- 2026-10-15T19:40:17Z @neo-opus-ada referenced in commit `a6a4627` - "fix(grid): AnimateRows settles before every store event and on a failed first step (#6858)

Review RA-1: a load that is not a sort went to the body without settle(),
so rows the first step had placed at their records' previous offsets kept
them, an entering row stayed transparent, and the old second step re-added
the transition class afterwards. Both store handlers now settle first.

Review RA-2: a rejected first update only logged. It now settles the rows
of the change it belonged to and still reports the failure; a rejection of
a superseded change leaves the newer move alone.

AnimateRowsSteps.spec.mjs gains the non-sort load interruption, the
rejected first step and the superseded-rejection control."
- 2026-10-15T20:00:51Z @tobiu referenced in commit `2d76f3f` - "fix(grid): AnimateRows moves pooled rows by record and transitions only while they move (#6858) (#19774)

* fix(grid): AnimateRows moves pooled rows by record and transitions only while they move (#6858)

The plugin predated the Row pool: it mapped vdom rows by their slot id and
pushed new row vdom, so every sort and filter threw `owner.createRow is not
a function`, and its permanent row transition animated scroll recycling.

It now notes each displayed record's offset, re-binds the pool silently,
starts every row at its record's previous offset and, one update later,
moves it to the new offset under `neo-animate-rows-moving`, the only class
under which a row transitions. A scroll, the next store change, a switch of
row mode or a destroy between the two updates settles the rows instead:
settle() places them where the body renders them, drops the class and
invalidates the pending second step. A load that is not a sort renders
through the body.

AnimatedRowSorting.spec.mjs covers the sort, the filter and the transition
window in the browser; AnimateRowsSteps.spec.mjs covers the two steps and
each interruption. PooledGridAnimation.md describes the repaired plugin.

* fix(grid): AnimateRows settles before every store event and on a failed first step (#6858)

Review RA-1: a load that is not a sort went to the body without settle(),
so rows the first step had placed at their records' previous offsets kept
them, an entering row stayed transparent, and the old second step re-added
the transition class afterwards. Both store handlers now settle first.

Review RA-2: a rejected first update only logged. It now settles the rows
of the change it belonged to and still reports the failure; a rejection of
a superseded change leaves the newer move alone.

AnimateRowsSteps.spec.mjs gains the non-sort load interruption, the
rejected first step and the superseded-rejection control."
- 2026-10-15T20:00:51Z @tobiu closed this issue
- 2026-10-15T20:47:26Z @neo-opus-ada cross-referenced by #19780
- 2026-10-15T21:01:41Z @neo-opus-ada cross-referenced by PR #19781
- 2026-10-15T22:42:34Z @neo-opus-ada cross-referenced by #19782
- 2026-10-15T22:44:23Z @neo-opus-ada cross-referenced by PR #19783
- 2026-10-15T23:14:41Z @tobiu referenced in commit `5572021` - "docs(release): the 13.3.0 notes' iteration 5, animated row sorting and locked columns (#19782) (#19783)

#19774 closed #6858, so the content-sized rows section's honest bound
("AnimateRows keeps a pre-existing fixed-height defect, open as #6858")
is gone. Also in 13.3 gains two bullets: animated row sorting works again
(#6858, #19774), and locked columns follow the grid's body and header
settings (#19772, #19777).

Prose only: the cut-prep (#19765) regenerates the counts and lists."
- 2026-10-20T10:25:21Z @neo-opus-ada cross-referenced by #19889

