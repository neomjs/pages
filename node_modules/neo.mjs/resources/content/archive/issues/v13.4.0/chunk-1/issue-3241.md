---
id: 3241
title: 'table.header.Toolbar: create support for resizing table columns via drag&drop'
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2022-07-01T08:17:41Z'
updatedAt: '2026-11-05T22:41:43Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3241'
author: tobiu
commentsCount: 6
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
closedAt: '2026-11-05T22:41:43Z'
---
# table.header.Toolbar: create support for resizing table columns via drag&drop

Implement drag-and-drop column resizing for `Neo.table.header.Toolbar` and `Neo.table.header.Button` via `Neo.table.header.plugin.Resizable`.

## Contract Ledger

| Surface | Type | Contract / Invariant | Verification |
|---|---|---|---|
| `Neo.table.header.plugin.Resizable` (`src/table/header/plugin/Resizable.mjs`) | New Class (`ntype: 'plugin-table-header-resizable'`) | Extends `Neo.plugin.Resizable` with `delegationCls: 'neo-table-header-button'`, `directions: ['r']`, `minWidth: 100`. Updates `owner.width` and `owner.wrapperStyle` (`width`, `minWidth`, `maxWidth`) live in `onDragMove`, cleans proxy absolute styles in `onDragEnd`, and toggles `.neo-is-resizing` + `dragResortable` on the parent toolbar. | Unit test (`test/playwright/unit/table/header/Resizable.spec.mjs`) |
| `Neo.table.header.Button#resizable_` (`src/table/header/Button.mjs`) | Reactive Config (`Boolean`, default `true`) | Lazy-loads `src/table/header/plugin/Resizable.mjs` when `true` (guarded by `!isDestroyed && !isDestroying && resizable`); removes active resize handle nodes when set to `false`; suppresses column sort in `onClick` when event target is `.neo-resizable`; included in `toJSON()`. | Unit test (`test/playwright/unit/table/header/Resizable.spec.mjs`) |
| `Neo.table.header.Toolbar#resizable_` (`src/table/header/Toolbar.mjs`) | Reactive Config (`Boolean`, default `true`) | Convenience config forwarding `resizable` to child `table-header-button` items in `createItems()` and `afterSetResizable()`; configures `ignoreDragSelector: '.neo-resizable'` in `createSortZone()`; recalculates sticky `dock` offsets in `passSizeToBody()`. | Unit test (`test/playwright/unit/table/header/Resizable.spec.mjs`) |
| `resources/scss/src/table/header/Button.scss`, `Toolbar.scss`, `Container.scss` | SCSS Styling | Adds `position: relative` to `.neo-table-header-button`, `.neo-is-resizing` opacity dimming to `.neo-table-header-toolbar`, and scopes default `min-width: 200px` to `th` so resized `<th>` inline `minWidth`/`width` governs column width down to `100px`. | Unit test & build check |

## Timeline

- 2022-07-01T08:17:41Z @tobiu added the `enhancement` label
- 2022-07-01T08:17:41Z @tobiu assigned to @tobiu
### @github-actions - 2024-08-30T02:28:06Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:28:06Z @github-actions added the `stale` label
### @github-actions - 2024-09-13T02:30:18Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-13T02:30:18Z @github-actions closed this issue
- 2026-10-09T20:23:30Z @neo-opus-grace reopened this issue
- 2026-10-09T20:23:31Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:23:32Z

#19489 set C · T4 · Grace · 2026-10-09: **reopened, valid but later.** The grid's header resizes columns (`header/plugin/Resizable.mjs`); the table's header (`src/table/header`) still cannot.

- 2026-10-09T20:26:18Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T10:38:32Z

### Backlog Premise-Read (`neomjs/neo#15000`, `2026-11-05`)

- **Current Code Reality:**
  - `src/grid/header/Toolbar.mjs:184-205` implements `afterSetResizable(value, oldValue)`, lazy-loading `src/grid/header/plugin/Resizable.mjs`.
  - `src/table/header/Toolbar.mjs` (`lines 1–212`) has no `resizable_` config and no `plugin/Resizable.mjs` counterpart under `src/table/header/`.
- **Verdict (`op`):** **Holds** (valid premise at `src/table/header/Toolbar.mjs:1-212`, low priority relative to `Neo.grid.*`; or operator close candidate if `Neo.table.*` feature parity is superseded by `Neo.grid.*`).

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭

### @neo-gemini-maryam - 2026-11-05T21:07:52Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `@me`
**Reason:** Picking up per 7-day rule; previous assignee @tobiu; last qualifying activity 2022-03-31T14:52:47Z. Triaged per ticket-triage skill (applied ai, architecture, core; Stage 1 retrospective 6-stage challenge passed).

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

### @neo-gemini-maryam - 2026-11-05T21:11:27Z

### Ticket Triage & Intake Evaluation (`#3241`)

> *"Picking up per 7-day rule; previous assignee @tobiu; last qualifying activity 2022-03-31T14:52:47Z. Triaged per `ticket-triage` skill. Applied: `ai`, `architecture`, `core` (alongside existing `enhancement`). Stage retrospective passed. Self-assigned and proceeding to `ticket-intake`."*

#### §0 Intent & Prescription Check
- **Is the ticket still right?** Yes (`valid-as-written`). `Neo.grid.header.Button` (`src/grid/header/Button.mjs:110,240-258`) and `Neo.grid.header.plugin.Resizable` (`src/grid/header/plugin/Resizable.mjs`) provide drag-and-drop column resizing for `Neo.grid.*`, whereas `Neo.table.header.Toolbar` (`src/table/header/Toolbar.mjs`) and `Neo.table.header.Button` (`src/table/header/Button.mjs`) still lack `resizable_` configuration and a `src/table/header/plugin/Resizable.mjs` plugin.
- **Prescription checked:**
  - `src/table/header/plugin/Resizable.mjs` (`Neo.table.header.plugin.Resizable` extending `Neo.plugin.Resizable`) — owns the table header column resize gesture (`ntype: 'plugin-table-header-resizable'`, `delegationCls: 'neo-table-header-button'`, `directions: ['r']`, `minWidth: 100`).
  - `src/table/header/Button.mjs` — owns `resizable_: true`, `afterSetResizable(value, oldValue)` lazy-loading `./plugin/Resizable.mjs`, `.neo-resizable` click-sort suppression in `onClick(data)`, and `resizable` serialization in `toJSON()`.
  - `src/table/header/Toolbar.mjs` — owns convenience `resizable_: true` (`afterSetResizable` + `createItems` pass-through), `createSortZone(config)` with `ignoreDragSelector: '.neo-resizable'`, and `passSizeToBody()` to keep sticky `dock` (`left`/`right`) offsets synchronized after resize.
  - `resources/scss/src/table/header/Button.scss`, `resources/scss/src/table/header/Toolbar.scss`, and `resources/scss/src/table/Container.scss` — own `position: relative` on `.neo-table-header-button` for absolute `.neo-resizable-right` handle anchoring, `.neo-is-resizing` button dimming, and moving default `min-width: 200px` from `td, th` to `th` so inline `minWidth`/`width` on resized `<th>` elements can narrow columns down to `minWidth: 100`.
- **Core-Idiom Pre-Flight (§1.9.6):** Read `src/core/Base.mjs` (`set()` batching, `wrapperStyle` shallow merge, `isDestroyed`/`isDestroying` lifecycle guards) and `src/Neo.mjs` (`Neo.setupClass`).
- **Structural Pre-Flight (§1.9.5):**
  > *"Pre-Flight (structural fast-path): authoring `src/table/header/plugin/Resizable.mjs` matches sibling pattern of `src/grid/header/plugin/Resizable.mjs` in `src/grid/header/plugin/`; sibling-file-lift applies; no novel directory choice."*

#### Ticket Reality Classification (§1.8)
- **Ticket age:** `createdAt: 2022-03-31T14:52:47Z`, `updatedAt: 2026-11-05T10:38:32Z`
- **Bot stale-band:** `post-stale-with-exemption` (reopened by `@neo-opus-grace` in `#19489` set C on `2026-10-09`; verified open premise on `2026-11-05`).
- **Currency / successor-risk evidence:** Verified via `ask_knowledge_base` (`issue-3241.md`, `issue-17409.md`, `issue-1347.md`) and live repo grep (`grep -rn "table/header" src/ test/`). No duplicate or superseding PR exists for `Neo.table.header`.
- **Verdict:** `valid-as-written` (Positive ROI).

---

## Contract Ledger

| Surface | Type | Contract / Invariant | Verification |
|---|---|---|---|
| `Neo.table.header.plugin.Resizable` (`src/table/header/plugin/Resizable.mjs`) | New Class (`ntype: 'plugin-table-header-resizable'`) | Extends `Neo.plugin.Resizable` with `delegationCls: 'neo-table-header-button'`, `directions: ['r']`, `minWidth: 100`. Updates `owner.width` and `owner.wrapperStyle` (`width`, `minWidth`, `maxWidth`) live in `onDragMove`, cleans proxy absolute styles in `onDragEnd`, and toggles `.neo-is-resizing` + `dragResortable` on the parent toolbar. | Unit test (`test/playwright/unit/table/header/Resizable.spec.mjs`) |
| `Neo.table.header.Button#resizable_` (`src/table/header/Button.mjs`) | Reactive Config (`Boolean`, default `true`) | Lazy-loads `src/table/header/plugin/Resizable.mjs` when `true` (guarded by `!isDestroyed && !isDestroying && resizable`); removes active resize handle nodes when set to `false`; suppresses column sort in `onClick` when event target is `.neo-resizable`; included in `toJSON()`. | Unit test (`test/playwright/unit/table/header/Resizable.spec.mjs`) |
| `Neo.table.header.Toolbar#resizable_` (`src/table/header/Toolbar.mjs`) | Reactive Config (`Boolean`, default `true`) | Convenience config forwarding `resizable` to child `table-header-button` items in `createItems()` and `afterSetResizable()`; configures `ignoreDragSelector: '.neo-resizable'` in `createSortZone()`; recalculates sticky `dock` offsets in `passSizeToBody()`. | Unit test (`test/playwright/unit/table/header/Resizable.spec.mjs`) |
| `resources/scss/src/table/header/Button.scss`, `Toolbar.scss`, `Container.scss` | SCSS Styling | Adds `position: relative` to `.neo-table-header-button`, `.neo-is-resizing` opacity dimming to `.neo-table-header-toolbar`, and scopes default `min-width: 200px` to `th` so resized `<th>` inline `minWidth`/`width` governs column width down to `100px`. | Unit test & build check |

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭

- 2026-11-05T21:17:09Z @neo-gemini-maryam cross-referenced by PR #20388

