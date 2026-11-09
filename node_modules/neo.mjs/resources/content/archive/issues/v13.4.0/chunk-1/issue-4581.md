---
id: 4581
title: 'main.addon.ScrollSync: register() => add a data.constrainTo param'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2023-07-26T16:14:50Z'
updatedAt: '2026-11-05T14:13:25Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4581'
author: tobiu
commentsCount: 5
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
closedAt: '2026-11-05T14:12:44Z'
---
# main.addon.ScrollSync: register() => add a data.constrainTo param

type string. if set, scrolling must not move the overlay out of the constrainTo boundary.

## Timeline

- 2023-07-26T16:14:50Z @tobiu added the `enhancement` label
- 2023-07-26T16:14:50Z @tobiu assigned to @tobiu
### @github-actions - 2024-08-29T02:26:57Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:26:57Z @github-actions added the `stale` label
### @github-actions - 2024-09-13T02:29:29Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-13T02:29:30Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T20:38:22Z

#19489 set C · T6 · Grace · 2026-10-09: **reopened, valid but later.** `main.addon.ScrollSync` still has no `constrainTo` parameter.

- 2026-10-09T20:41:46Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:35:20Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `main.addon.ScrollSync` is unchanged since 10-09 and still has no `constrainTo` parameter.

**Verdict: holds.**

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-gemini-maryam - 2026-11-05T14:13:24Z

### Premise Read & Closure Receipt (`#15000` / `10k+ Commits Mental Model`, `origin/dev` `0091a91213`)

**Verdict: Resolved & superseded by `Neo.main.DomAccess#align` / `syncAligns` + `Neo.util.Rectangle#constrainTo` (`#4851`, `#4981`, `#4982`) — closing as completed.**

1. **Why `src/main/addon/ScrollSync.mjs` is a 2025 homonym, not the 2023 overlay addon:**
   - When `#4581` was filed on `2023-05-12` (*"`data.constrainTo`: type string. if set, scrolling must not move the overlay out of the constrainTo boundary"*), `src/main/addon/ScrollSync.mjs` was the 2023 overlay-positioning addon created in `#4321` (*"This addon keeps the position of overlays in sync with an anchor element, when scrolling inside any parent node. A prominent use case is `Neo.form.field.Picker`"*).
   - On `2023-10-06`, PR `#4851` (*"Floating component auto-aligning"*), PR `#4981` (`a7616e7331`, *"Remove usage of ScrollSync"* from `src/form/field/Picker.mjs`), and commit `4189569c41` (`#4982`, *"remove main.addon.ScrollSync — no longer required, since we have new logic to handle overlays in place"*) **deleted the 2023 `ScrollSync` addon entirely**.
   - Sixteen months later, commit `49c0bc0383` (`#6235`, `2025-02-07`) created a new `src/main/addon/ScrollSync.mjs` with the same filename for a completely different purpose: synchronizing `scrollTop` / `scrollLeft` between two scrollable DOM nodes (used by `Neo.grid.VerticalScrollbar` ↔ `Neo.grid.Body`).

2. **Where `#4581`'s `constrainTo` overlay scroll-boundary contract lives on `origin/dev`:**
   - `src/component/Base.mjs:77-86`: `align_` descriptor defaults to `{edgeAlign: 't-b', constrainTo: 'document.body'}` (and consumers like `src/grid/SearchToolbar.mjs:190` pass component ID strings such as `constrainTo: me.gridContainer?.id || 'document.body'`).
   - `src/main/DomAccess.mjs:237-288`: `align(data)` accepts `@param {String|HTMLElement} [data.constrainTo]`, resolves `data.constrainToElement = me.getElementOrBody(constrainTo)`, computes `align.constrainTo = me.getBoundingClientRect({id: data.constrainToElement})`, and clips/hides the overlay when `getClippedRect` returns null (`lines 271-276`).
   - `src/main/DomAccess.mjs:157,174-185,1435-1461`: `addAligned` installs the capture-phase `document` `'scroll'` listener (`syncAligns`) and observes `constrainToElement` via `ResizeObserver`; on scroll events where `evtTarget.contains(targetElement)` or `evtTarget.contains(align.constrainToElement)`, `syncAligns` re-runs `me.align(align)`.
   - `src/util/Rectangle.mjs:374-424,571`: `Rectangle#constrainTo(constrainRect)` clamps the overlay's `x`, `y`, `right`, and `bottom` inside the `constrainTo` boundary.

Closing as completed per the `#15000` backlog-sweep ruling.

— Maryam (`@neo-gemini-maryam`, Gemini 4 Argon · Antigravity) · session `70151411-91ec-4496-b8f0-ea3b31ddb60b` 🧭


