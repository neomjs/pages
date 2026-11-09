---
id: 8165
title: Implement Configurable Theme Inheritance for Dragged Items
state: CLOSED
labels:
  - enhancement
  - no auto close
  - ai
  - needs-re-triage
assignees: []
createdAt: '2025-12-27T21:33:10Z'
updatedAt: '2026-11-05T11:41:51Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8165'
author: tobiu
commentsCount: 2
parentIssue: 8163
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-11-05T11:41:51Z'
---
# Implement Configurable Theme Inheritance for Dragged Items

When dragging items between different browser windows (apps) that may have different themes (e.g., Dark Mode vs Light Mode), we need a configurable strategy for how the dragged item appears.

**Goal:**
Implement a `themeMode` config (e.g., `'adapt' | 'retain'`) on the Draggable/SortZone definition.
*   **Adapt:** The item temporarily or permanently adopts the CSS variables/theme of the target window context.
*   **Retain:** The item enforces its original theme (useful for "stickers" or branding).

**Current Behavior:**
The proxy clones the DOM/VDOM, likely carrying over classes, but if CSS variables are missing in the target, it may look broken.

## Timeline

- 2025-12-27T21:33:11Z @tobiu added the `enhancement` label
- 2025-12-27T21:33:11Z @tobiu added the `ai` label
- 2025-12-27T21:33:48Z @tobiu added parent issue #8163
### @github-actions - 2026-03-28T03:54:36Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-03-28T03:54:37Z @github-actions added the `stale` label
- 2026-03-28T05:57:14Z @tobiu removed the `stale` label
- 2026-03-28T05:57:14Z @tobiu added the `no auto close` label
- 2026-06-23T03:53:38Z @neo-gpt-euclid added the `not-code-ready` label
- 2026-06-23T03:53:38Z @neo-gpt-euclid added the `needs-design` label
- 2026-06-23T03:53:38Z @neo-gpt-euclid added the `needs-re-triage` label
- 2026-06-23T03:56:38Z @neo-gpt-euclid cross-referenced by #8163
- 2026-07-04T04:05:08Z @neo-fable-clio cross-referenced by #14681
- 2026-07-06T13:21:50Z @tobiu removed the `not-code-ready` label
- 2026-07-06T13:22:28Z @tobiu removed the `needs-design` label
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T11:00:06Z

### 2026-11-05 Premise Read (`#15000` backlog sweep) — **Verdict: `op: close as resolved`**

Verified against current `dev`: both `adapt` and `retain` behaviors are now handled natively by Neo's component `theme` inheritance model (landed in `#18672` / PR `#18679`, commit `197ec194c5`):
- **Adapt (inherited theme):** In `src/container/Base.mjs:418-448` (`createItem` `NeoInstance` branch), `const inheritsTheme = !item.theme || item.theme === parent?.theme` is evaluated before re-parenting, and `item.set(inheritsTheme ? {theme: me.theme, ...config} : config)` adapts the moved instance to the target container/window's theme in a single reactive batch.
- **Retain (explicit theme):** When an item carries an explicit `theme` of its own (`item.theme !== parent?.theme`), both `createItem` (`src/container/Base.mjs:419, 447`) and `afterSetTheme` (`src/container/Base.mjs:309-313`) preserve the item's explicit theme across cross-container/cross-window moves and theme cascades (verified in `test/playwright/unit/container/ItemTheme.spec.mjs`).
- **Drag Proxy:** `src/draggable/DragZone.mjs:372-379` and `src/dashboard/dock/interaction/TabSortZone.mjs` resolve the nearest-ancestor theme onto the drag proxy during the gesture.

**Recommendation for @tobiu:** Close as resolved by `#18672` / PR `#18679` (`197ec194c5`).

— Maryam 🧭


