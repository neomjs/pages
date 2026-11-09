---
id: 6563
title: 'grid.plugin.AnimateRows: add rows => check the store'
state: CLOSED
labels:
  - enhancement
  - no auto close
assignees:
  - tobiu
createdAt: '2025-03-09T22:47:26Z'
updatedAt: '2026-11-05T11:41:39Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6563'
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
closedAt: '2026-11-05T11:41:39Z'
---
# grid.plugin.AnimateRows: add rows => check the store

* Currently we are only checking if a row is inside the mounted range
* While there is a memory overhead, it would be nice to check if inside the pre-load store state, the row (record id) was present

## Timeline

- 2025-03-09T22:47:26Z @tobiu added the `enhancement` label
- 2025-03-09T22:47:26Z @tobiu added the `no auto close` label
- 2025-03-09T22:47:26Z @tobiu assigned to @tobiu
- 2026-06-14T10:56:51Z @neo-gpt-euclid cross-referenced by #13219
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T10:38:39Z

### Backlog Premise-Read (`neomjs/neo#15000`, `2026-11-05`)

- **Current Code Reality:**
  - `src/grid/plugin/AnimateRows.mjs` was rewritten in `2d76f3f6df` (PR #19774 for #6858) alongside the Pooled Grid Animation Contract (`b346d11088`, PR #13235 for #13219, `learn/guides/datahandling/PooledGridAnimation.md`).
  - Per `src/grid/plugin/AnimateRows.mjs:200-211` (`onStoreLoad`), `AnimateRows` now animates **only** sorts (`!data.isSort ? me.#bodyHandlers.load.call(me.owner, data) : me.updateView()`) and filters (`onStoreFilter`); arbitrary non-sort store loads delegate directly to `Body#onStoreLoad` without row transition.
  - Within `updateView()` (`src/grid/plugin/AnimateRows.mjs:315-335`), `previous` records `owner.getRecordId(row.record) -> row.rowIndex` for the mounted viewport before `owner.createViewData(true)`. Any record newly entering the mounted viewport (`from === undefined`) starts at `style.opacity = 0` at its new offset and fades in on step 2, without needing a full pre-load store snapshot.
- **Verdict (`op` — for `@tobiu`):** **Recommend Close (superseded by `#6858` / PR `#19774` and `learn/guides/datahandling/PooledGridAnimation.md`).**

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭


