---
id: 9494
title: 'Grid Multi-Body: Implement Direct Main-Thread Scroll Sync via MessageChannel'
state: CLOSED
labels:
  - epic
  - no auto close
  - ai
  - grid
assignees:
  - tobiu
createdAt: '2026-03-16T21:40:51Z'
updatedAt: '2026-11-08T03:12:54Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9494'
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
closedAt: '2026-11-08T03:12:54Z'
---
# Grid Multi-Body: Implement Direct Main-Thread Scroll Sync via MessageChannel

When SubGrids are split across different browser windows, routing high-frequency scroll events through the App Worker (`Main A -> App Worker -> Main B`) introduces unacceptable latency. 

**Requirements:**
1. **MessageChannel Setup:** Create a mechanism where a Main Thread Addon in Window A creates a `MessageChannel`.
2. **Port Delegation:** Pass `port2` of the channel through the App Worker to the corresponding Main Thread Addon in Window B.
3. **Direct Sync:** Use the direct channel to synchronize vertical `scrollTop` events between the windows. A slight delay is acceptable given the physical separation of monitors.

## Timeline

- 2026-03-16T21:40:52Z @tobiu added the `epic` label
- 2026-03-16T21:40:52Z @tobiu added the `ai` label
- 2026-03-16T21:40:53Z @tobiu added the `grid` label
- 2026-03-16T21:41:23Z @tobiu cross-referenced by #9486
- 2026-03-16T21:41:29Z @tobiu added parent issue #9486
- 2026-03-17T18:59:29Z @tobiu assigned to @tobiu
### @github-actions - 2026-06-16T06:53:46Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-06-16T06:53:47Z @github-actions added the `stale` label
- 2026-06-16T17:03:14Z @tobiu removed the `stale` label
- 2026-06-16T17:03:14Z @tobiu added the `no auto close` label
- 2026-08-28T07:30:52Z @neo-opus-vega cross-referenced by #17823
- 2026-10-12T10:14:06Z @neo-opus-ada cross-referenced by PR #19644
- 2026-10-12T14:03:20Z @neo-gpt-euclid cross-referenced by #19658
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T10:41:40Z

### Backlog Premise-Read (`neomjs/neo#15000`, `2026-11-05`)

- **Current Code Reality:**
  - Single-window horizontal scroll sync is shipped via `src/main/addon/GridHorizontalScrollSync.mjs` and `src/grid/HorizontalScrollbar.mjs`, and vertical scroll sync within a single window runs natively via the shared `Neo.grid.View` container (`src/grid/View.mjs:159-185`, `syncBodies`).
  - Cross-window `MessageChannel` vertical `scrollTop` sync in this ticket depends on `#9493` (Cross-Window SubGrid Detachment / Pop-out), which is not yet implemented.
- **Verdict (`op`):** **Holds (blocked on `#9493`; deferred Distributed Grid / Multi-Window R&D sub-issue of `#9486`).**

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭

### @neo-opus-vega - 2026-11-08T03:12:54Z

Moved to Discussion #20579 together with its sibling, on the operator's go (2026-11-08). It is a valid idea with no owner and no near-term plan, now that its parent #9486 closed with the single-window scope delivered. The requirements are carried over in full, and the history stays here. — Vega (Opus 5.5, Claude Code) 🌿

- 2026-11-08T03:12:54Z @neo-opus-vega closed this issue

