---
id: 4723
title: 'component.Splitter: DD should honor potential minHeight or minWidth on their sibblings'
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2023-08-15T13:53:18Z'
updatedAt: '2026-11-04T17:57:41Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4723'
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
closedAt: '2026-11-04T17:57:41Z'
---
# component.Splitter: DD should honor potential minHeight or minWidth on their sibblings

*(No description provided)*

## Timeline

- 2023-08-15T13:53:18Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-29T02:26:46Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:26:46Z @github-actions added the `stale` label
### @github-actions - 2024-09-13T02:29:15Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-13T02:29:15Z @github-actions closed this issue
- 2026-08-28T07:12:26Z @neo-opus-vega cross-referenced by PR #17822
- 2026-10-09T20:38:36Z @neo-opus-grace reopened this issue
- 2026-10-09T20:38:38Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:38:39Z

#19489 set C · T6 · Grace · 2026-10-09: **reopened, valid (from the code, not run).** `component.Splitter` sets its own min sizes but does not respect its siblings' `minWidth` / `minHeight` while dragging.

- 2026-10-09T20:41:46Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T13:39:22Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T13:39:22Z @neo-gemini-maryam added the `core` label
- 2026-11-03T13:39:27Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T13:39:31Z

Triaged per `ticket-triage` skill. Applied: `ai`, `core` (alongside existing `enhancement`). Stage retrospective passed. Self-assigning and proceeding to `ticket-intake`.

### Ticket Intake & Sharpened Scope (`#4723`)

- **Verdict:** `valid-as-written`
- **Prescription checked:** `src/component/Splitter.mjs`, `src/main/draggable/Resize.mjs`, and `src/main/addon/DragDrop.mjs` — own the sibling resize descriptor, main-thread clamp window, and drag-proxy clamping.
- **Core-Idiom Pre-Flight (§9.6):** Read `src/core/Base.mjs` and `src/Neo.mjs`.
- **Architectural Reality:**
  1. `Neo.component.Splitter#getResizeConfig()` currently emits `{axis, parentId, preview, resizeNext, splitterSize, targetId}` without forwarding the resized sibling's configured `minSize` (`minWidth` / `minHeight` on the component, `wrapperStyle`, or `style` — which for wrapped components with a custom `getVdomRoot()` is applied to the inner root rather than the outer layout wrapper) or the opposite sibling's identity and floor (`oppositeId`, `oppositeMinSize`).
  2. `Neo.main.draggable.Resize#createState()` clamps `minSize` against `target`'s CSS `min-${axis}` and `config.minSize`, but does not cap `maxSize` against the opposite sibling's `min-${axis}` / `config.oppositeMinSize` when `counterTargetId` (conserved-pair mode) is not active, allowing a drag to grow `target` past the point where the opposite sibling shrinks below its minimum size.
  3. In deferred proxy mode (`liveResize: false`, `useProxy: true`), `Neo.main.addon.DragDrop#onDragMove()` positions `dragProxyElement` from raw `event.detail.clientX` / `clientY` bounded only by `boundaryContainerRect`, allowing the proxy to visually drag past the `[minSize, maxSize]` clamp window computed by `dragResize.apply()`.

### Acceptance Criteria
- [ ] **AC-1:** `Neo.component.Splitter` resolves configured pixel `minWidth` / `minHeight` floors on both the resized sibling (`minSize`) and the opposite sibling (`oppositeId`, `oppositeMinSize`) in `getResizeConfig()`, and clamps terminal commits in `applyResize()`.
- [ ] **AC-2:** `Neo.main.draggable.Resize#createState()` caps `maxSize` using the opposite sibling's computed `min-${axis}` (including `%` bounds against `parentRect`) and `config.oppositeMinSize` without mutating the opposite sibling's inline `flex` style in standard splitter mode.
- [ ] **AC-3:** `Neo.main.addon.DragDrop#onDragMove()` clamps `dragProxyElement` position along the active resize axis to the `[minSize, maxSize]` window returned by `dragResize.apply()`.
- [ ] **AC-4:** Unit tests in `test/playwright/unit/component/Splitter.spec.mjs` and `test/playwright/unit/main/addon/DragDrop.spec.mjs` verify both target and opposite sibling `minWidth` / `minHeight` bounds across live and proxy modes.

— Maryam 🧭

- 2026-11-03T13:45:33Z @neo-gemini-maryam cross-referenced by PR #20252
- 2026-11-03T13:53:57Z @neo-gemini-maryam referenced in commit `5963a7e` - "fix(component): emit oppositeId in Splitter resizeConfig only when opposite sibling has a min bound (#4723)"
- 2026-11-04T17:57:41Z @tobiu referenced in commit `e530972` - "feat(component): honor sibling minWidth and minHeight during Splitter drag (#4723) (#20252)

* feat(component): honor sibling minWidth and minHeight during Splitter drag (#4723)

* fix(component): emit oppositeId in Splitter resizeConfig only when opposite sibling has a min bound (#4723)"
- 2026-11-04T17:57:42Z @tobiu closed this issue
- 2026-11-04T19:11:45Z @neo-gemini-maryam cross-referenced by PR #20283

