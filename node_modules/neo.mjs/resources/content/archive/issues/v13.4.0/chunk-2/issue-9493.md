---
id: 9493
title: 'Grid Multi-Body: Enable Cross-Window SubGrid Detachment (Pop-out)'
state: CLOSED
labels:
  - epic
  - no auto close
  - ai
  - grid
assignees:
  - tobiu
createdAt: '2026-03-16T21:39:53Z'
updatedAt: '2026-11-08T03:12:52Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9493'
author: tobiu
commentsCount: 3
parentIssue: 9486
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-11-08T03:12:52Z'
---
# Grid Multi-Body: Enable Cross-Window SubGrid Detachment (Pop-out)

As part of the Multi-Body Grid architecture, we need to ensure that the Left (`locked: 'start'`) and Right (`locked: 'end'`) SubGrids can be detached from the main window and rendered in separate popup windows, similar to the `LivePreview` component.

**Requirements:**
1. **Encapsulation:** SubGrids must be fully functional even when not physically adjacent in the same DOM tree.
2. **Window Connect/Disconnect Logic:** Implement logic (likely on the Grid Container) to handle moving a SubGrid instance into a newly spawned window and recovering it when the window closes.
3. **Data Continuity:** Ensure the App Worker maintains the single source of truth for the `Store` and `SelectionModel` regardless of which window the VDOM is projected into.
4. **Keyboard navigation across windows** *(carried from #9496 on 2026-11-06, when that epic closed with its single-window requirements delivered)*: arrow navigation must keep working when the `locked: 'start'` SubGrid has been ripped out into its own window. The worker side already holds: `CellModel#onNavKeyColumn` steps through the logical `dataFields` of every region and selects by `View#getLogicalCellId`. What remains is routing the detached window's key events into the same `SelectionModel` once detachment exists.


## Timeline

- 2026-03-16T21:39:54Z @tobiu added the `epic` label
- 2026-03-16T21:39:54Z @tobiu added the `ai` label
- 2026-03-16T21:39:54Z @tobiu added the `grid` label
- 2026-03-16T21:41:23Z @tobiu cross-referenced by #9486
- 2026-03-16T21:41:26Z @tobiu added parent issue #9486
- 2026-03-16T21:51:31Z @tobiu cross-referenced by #9496
- 2026-03-16T22:23:09Z @tobiu cross-referenced by #9498
- 2026-03-17T18:59:23Z @tobiu assigned to @tobiu
### @github-actions - 2026-06-16T06:53:48Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-06-16T06:53:48Z @github-actions added the `stale` label
- 2026-06-16T17:03:34Z @tobiu removed the `stale` label
- 2026-06-16T17:03:34Z @tobiu added the `no auto close` label
- 2026-10-09T13:03:57Z @neo-fable-mnemosyne cross-referenced by #19489
- 2026-10-12T10:14:06Z @neo-opus-ada cross-referenced by PR #19644
- 2026-10-12T14:03:20Z @neo-gpt-euclid cross-referenced by #19658
- 2026-10-31T14:39:14Z @neo-opus-grace cross-referenced by #20187
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T10:41:37Z

### Backlog Premise-Read (`neomjs/neo#15000`, `2026-11-05`)

- **Current Code Reality:**
  - The Multi-Body split (`bodyStart`, `body`, `bodyEnd` under `src/grid/View.mjs` and `headerStart`, `headerToolbar`, `headerEnd` under `src/grid/header/Wrapper.mjs`, plus `SelectionModel` SSOT on `src/grid/View.mjs:39-45`) is shipped on `dev`.
  - Cross-window detachment/pop-out of `bodyStart` / `bodyEnd` (`headerStart` / `headerEnd`) into a separate browser window has not been implemented yet (`src/grid/Container.mjs` and `src/grid/View.mjs` currently assume all active sub-bodies share `me.windowId`).
- **Verdict (`op`):** **Holds (deferred Distributed Grid / Multi-Window R&D sub-issue of `#9486`).**

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭

### @neo-opus-vega - 2026-11-08T03:12:51Z

Moved to Discussion #20579 together with its sibling, on the operator's go (2026-11-08). It is a valid idea with no owner and no near-term plan, now that its parent #9486 closed with the single-window scope delivered. The requirements are carried over in full, and the history stays here. — Vega (Opus 5.5, Claude Code) 🌿

- 2026-11-08T03:12:52Z @neo-opus-vega closed this issue

