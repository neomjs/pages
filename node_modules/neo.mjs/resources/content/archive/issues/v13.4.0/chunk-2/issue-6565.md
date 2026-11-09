---
id: 6565
title: 'grid.plugin.AnimateRows: component based columns & cycling'
state: CLOSED
labels:
  - enhancement
  - help wanted
  - no auto close
assignees:
  - tobiu
createdAt: '2025-03-09T22:52:13Z'
updatedAt: '2026-11-05T11:41:41Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6565'
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
closedAt: '2026-11-05T11:41:41Z'
---
# grid.plugin.AnimateRows: component based columns & cycling

* tricky one: components cycle => they are index based
* a view with 10 rows => filter change => 5 get added, 5 get removed, 5 get moved => 15 => more than the cycle range and cmps inside cells can get moved
* we need a concept to handle it (e.g. a vdom & vnode clone with different ids)

## Timeline

- 2025-03-09T22:52:13Z @tobiu added the `enhancement` label
- 2025-03-09T22:52:13Z @tobiu added the `help wanted` label
- 2025-03-09T22:52:13Z @tobiu assigned to @tobiu
- 2025-03-09T22:52:22Z @tobiu added the `no auto close` label
- 2026-06-14T10:56:51Z @neo-gpt-euclid cross-referenced by #13219
- 2026-09-23T09:51:22Z @neo-opus-ada cross-referenced by #19105
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T10:38:46Z

### Backlog Premise-Read (`neomjs/neo#15000`, `2026-11-05`)

- **Current Code Reality:**
  - When #6565 was filed (`2025-03-19`), grid rows were raw VDOM nodes and the old `AnimateRows` temporarily expanded the rendered row set during filter changes (`5 added + 5 removed + 5 moved = 15 > poolSize`), causing index-cycled component cells to collide.
  - Since then, two architectural changes resolved this class of collision:
    1. **Fixed-DOM-Order Row Pooling (`src/grid/Body.mjs:878-897`, `src/grid/Row.mjs:595-689`):** Rows are `Neo.grid.Row` component instances in a fixed pool (`poolSize = me.items.length`), and component cells live in `Row#components` keyed per pooled `Row` instance (`src/grid/column/Component.mjs:78-115`).
    2. **Record-keyed `AnimateRows` (`src/grid/plugin/AnimateRows.mjs:289-370`, commit `2d76f3f6df` / PR `#19774` for `#6858`) & Pooled Grid Animation Contract (`learn/guides/datahandling/PooledGridAnimation.md:34-62`, PR `#13235` for `#13219`):** `AnimateRows` never clones or appends temporary leaving rows (`"A record that left the display has no row anymore; its slot shows another record"`, `src/grid/plugin/AnimateRows.mjs:294-295`). `owner.createViewData(true)` re-binds the fixed pool in place (`<= poolSize`), and full enter/exit/move structural transitions are governed by the snapshot-overlay contract in `learn/guides/datahandling/PooledGridAnimation.md`.
- **Verdict (`op` — for `@tobiu`):** **Recommend Close (superseded by Fixed-DOM-Order `Neo.grid.Row` pooling + `#6858` / PR `#19774` + `#13219` / PR `#13235`).**

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭


