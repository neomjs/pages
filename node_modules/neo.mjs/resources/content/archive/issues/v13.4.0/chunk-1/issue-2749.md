---
id: 2749
title: 'list.plugin.Animate: orderByRow_ config'
state: CLOSED
labels:
  - enhancement
  - ai
  - testing
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2021-10-03T17:26:39Z'
updatedAt: '2026-11-03T02:02:16Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2749'
author: tobiu
commentsCount: 4
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
closedAt: '2026-11-03T02:02:16Z'
---
# list.plugin.Animate: orderByRow_ config

dynamically switch from sorting by column or row (similar to `component.Gallery`)

## Contract Ledger

| Surface | Owner | Consumer | Format / Contract |
|---|---|---|---|
| `Neo.list.plugin.Animate#orderByRow_` | `src/list/plugin/Animate.mjs` | `Neo.list.Base` / `Neo.list.Component` instances using `list.plugin.Animate`, `examples/list/animate` | Reactive `Boolean` config (default `true`). When `true`, `getItemPosition(record, index)` places items row-by-row (`column = index % columns`, `row = Math.floor(index / columns)`); when `false`, places items column-by-column (`column = Math.floor(index / rows)`, `row = index % rows` with `rows >= 1`). Toggling at runtime invokes `repositionItems()` to animate existing item nodes in place. |

## Timeline

- 2021-10-03T17:26:39Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-31T02:26:21Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-31T02:26:21Z @github-actions added the `stale` label
### @github-actions - 2024-09-15T02:36:24Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-15T02:36:25Z @github-actions closed this issue
- 2026-10-09T20:15:55Z @neo-opus-grace reopened this issue
- 2026-10-09T20:15:57Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:15:58Z

#19489 set C · T3 · Grace · 2026-10-09: **reopened, valid but later.** `component.Gallery` has `orderByRow_`; `list.plugin.Animate` still does not.

- 2026-10-09T20:18:24Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T01:26:49Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T01:26:49Z @neo-gemini-maryam added the `core` label
- 2026-11-03T01:26:49Z @neo-gemini-maryam added the `testing` label
- 2026-11-03T01:26:56Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T01:27:02Z

Triaged per `ticket-triage` skill. Applied: `ai`, `core`, `testing` (alongside existing `enhancement`). Stage retrospective passed. Self-assigned and proceeding to `ticket-intake`.

### Ticket Intake Classification (`ticket-intake` §0 / §1.8 / §9.6)

- **Ticket age:** `createdAt: 2021-10-03T17:26:39Z`, `updatedAt: 2026-10-09T20:15:59Z` (reopened and validated by `@neo-opus-grace` in `#19489 set C · T3`).
- **Bot stale-band:** `pre-stale` since 2026-10-09 re-triage (`stale: false`, `no auto close: false`).
- **Currency / successor-risk evidence:** Verified live `src/list/plugin/Animate.mjs` and `src/component/Gallery.mjs`. `Gallery` has `orderByRow_`, whereas `list.plugin.Animate` still hardcodes row-major (`column = index % me.columns`, `row = Math.floor(index / me.columns)`) in `getItemPosition`. No successor PR/ticket implements `orderByRow_` on `list.plugin.Animate`.
- **ADR successor-risk:** `none`.
- **Core-Idiom Pre-Flight (`§9.6`):** Read `src/core/Base.mjs`, `src/Neo.mjs`, and `src/state/Provider.mjs`.
- **Prescription check (`§0`):** `Prescription checked: src/list/plugin/Animate.mjs — owns the concern`.
  1. Add reactive `orderByRow_: true` config to `Neo.list.plugin.Animate` (defaulting to `true` to preserve existing row-major vertical list behavior).
  2. In `applyGeometry(rect)`, clamp `me.rows` to `Math.max(1, Math.floor(rect.height / me.rowHeight))` when `me.rowHeight` is positive so column-major index math (`index % rows`, `Math.floor(index / rows)`) never divides by `0` when the container height is smaller than one row.
  3. In `getItemPosition(record, index)`, compute `{ column: index % me.columns, row: Math.floor(index / me.columns) }` when `me.orderByRow` is `true`, and `{ column: Math.floor(index / rows), row: index % rows }` (with `rows = Math.max(1, me.rows || 1)`) when `me.orderByRow` is `false`.
  4. Add `afterSetOrderByRow(value, oldValue)` that calls `me.repositionItems()` whenever `oldValue !== undefined && me.ownerRect`, dynamically animating rendered items between row-major and column-major layout without rebuilding the DOM.
- **Verdict:** `valid-as-written` (sharpened with the Contract Ledger below).

### Contract Ledger

| Surface | Owner | Consumer | Format / Contract |
|---|---|---|---|
| `Neo.list.plugin.Animate#orderByRow_` | `src/list/plugin/Animate.mjs` | `Neo.list.Base` / `Neo.list.Component` instances using `list.plugin.Animate`, `examples/list/animate` | Reactive `Boolean` config (default `true`). When `true`, `getItemPosition(record, index)` places items row-by-row (`column = index % columns`, `row = Math.floor(index / columns)`); when `false`, places items column-by-column (`column = Math.floor(index / rows)`, `row = index % rows` with `rows >= 1`). Toggling at runtime invokes `repositionItems()` to animate existing item nodes in place. |

Authored by Maryam (Gemini 4 Argon, Antigravity). Session `dadd700f-6b16-47b5-b22c-2f57073f86f3`. 🧭

- 2026-11-03T01:31:39Z @neo-gemini-maryam cross-referenced by PR #20205
- 2026-11-03T02:02:15Z @tobiu referenced in commit `5dcacbe` - "feat(list): add orderByRow_ config to list.plugin.Animate (#2749) (#20205)"
- 2026-11-03T02:02:16Z @tobiu closed this issue

