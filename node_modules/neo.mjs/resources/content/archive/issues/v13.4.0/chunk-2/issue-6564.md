---
id: 6564
title: 'grid.plugin.AnimateRows: store listeners improvement'
state: CLOSED
labels:
  - enhancement
  - no auto close
  - ai
  - grid
assignees:
  - tobiu
  - neo-gemini-julia
createdAt: '2025-03-09T22:49:19Z'
updatedAt: '2026-11-05T15:55:56Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6564'
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
closedAt: '2026-11-05T15:55:56Z'
---
# grid.plugin.AnimateRows: store listeners improvement

* Instead of rebinding view based store listeners logic, the cleaner way would be to remove the relevant view based listeners and add own listeners to the store
* This way, we could easily restore the view to its previous state, in case the plugin needs to get disabled at run-time

## Timeline

- 2025-03-09T22:49:19Z @tobiu added the `enhancement` label
- 2025-03-09T22:49:19Z @tobiu added the `no auto close` label
- 2025-03-09T22:49:19Z @tobiu assigned to @tobiu
- 2026-06-14T10:56:51Z @neo-gpt-euclid cross-referenced by #13219
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T10:38:42Z

### Backlog Premise-Read (`neomjs/neo#15000`, `2026-11-05`)

- **Current Code Reality:**
  - In `src/grid/plugin/AnimateRows.mjs:93-102` (`construct`), the plugin still swaps `owner.onStoreFilter` and `owner.onStoreLoad` via `owner.store = null; me.#bodyHandlers = {filter: owner.onStoreFilter, load: owner.onStoreLoad}; ... owner.store = store;`.
  - PR #19774 (`2d76f3f6df` for #6858) added `me.#bodyHandlers` (`line 66`) and `standAside()` (`lines 273-286`) so the plugin dynamically hands `filter` and `load` events back to `me.#bodyHandlers` whenever `contentSizedRows` (`!!owner.rowGeometry`) is active (`lines 196, 210`).
  - However, `destroy()` (`src/grid/plugin/AnimateRows.mjs:146-164`) does not yet restore `owner.onStoreFilter = me.#bodyHandlers.filter` / `owner.onStoreLoad = me.#bodyHandlers.load` (or use independent `store.on(...)` listeners) if the plugin is destroyed or disabled while the grid body remains alive.
- **Verdict (`op` — for `@tobiu`):** **Holds (partially addressed by `#bodyHandlers` + `standAside()` in PR `#19774`, with listener restoration on disable/destroy still applicable at `src/grid/plugin/AnimateRows.mjs:93-102, 146-164`)** — or close candidate if `standAside()` satisfies the runtime disable requirement.

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭

### @neo-gemini-julia - 2026-11-05T12:52:40Z

### Triage & Intake (`2026-11-05` · `neomjs/neo#15000` backlog execution)

Triaged per `ticket-triage` skill. Applied: `ai`, `grid` (alongside existing `enhancement`). Stage retrospective passed.
Picking up per 7-day rule alongside `@tobiu` (created `2025-03-19T13:33:16Z`; premise verified on `2026-11-05T10:38:42Z` in `#issuecomment-6655865726`).

- **Ticket reality classification:** `valid-as-written` (`Ticket age`: `createdAt 2025-03-19T13:33:16Z`, `updatedAt 2026-11-05T10:38:42Z`; `Bot stale-band`: `post-stale-with-exemption` with `no auto close`).
- **Prescription & Core-Idiom Pre-Flight (`src/Neo.mjs`, `src/core/Base.mjs`):**
  - `Prescription checked: src/grid/plugin/AnimateRows.mjs` and `src/grid/Body.mjs — own the concern`.
  - In `src/grid/plugin/AnimateRows.mjs:93-102`, `construct()` caches `me.#bodyHandlers = {filter: owner.onStoreFilter, load: owner.onStoreLoad}` and rebinds `owner.onStoreFilter` / `owner.onStoreLoad` through `owner.store = null; ... owner.store = store`, but `destroy()` (`lines 146-164`) leaves the destroyed plugin's bound handlers on `owner` and `owner.store` and leaves `'neo-animate-rows'` on `owner.cls`.
  - In `src/grid/Body.mjs:390-404`, `afterSetAnimatedRowSorting(value, oldValue)` only instantiates `AnimateRows` when `value` is truthy and does not remove/destroy the plugin when `animatedRowSorting` is disabled (`false`) at runtime.
  - Restoring `owner.onStoreFilter` and `owner.onStoreLoad`, rebinding `owner.store`, and removing `'neo-animate-rows'` in `AnimateRows#destroy()`, plus tearing down the plugin in `grid.Body#afterSetAnimatedRowSorting` when `value === false`, cleanly restores the grid body's store listeners at runtime.

🏛️ **Julia** (`@neo-gemini-julia` · Gemini 4 Argon · Antigravity)

### @neo-gemini-julia - 2026-11-05T12:53:01Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `tobiu`, `neo-gemini-julia`
**Reason:** Picking up #6564 from the #15000 backlog sweep alongside @tobiu per 7-day rule (created 2025-03-19; premise verified on 2026-11-05 in #issuecomment-6655865726).

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-05T12:59:58Z @neo-gemini-julia cross-referenced by PR #20319

