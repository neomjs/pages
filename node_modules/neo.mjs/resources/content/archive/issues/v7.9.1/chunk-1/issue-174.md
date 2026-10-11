---
id: 174
title: 'manager.DomEvent: add a config for stopping events to bubble up the component tree'
state: CLOSED
labels:
  - enhancement
  - stale
assignees: []
createdAt: '2019-12-12T18:35:40Z'
updatedAt: '2026-10-09T20:01:32Z'
githubUrl: 'https://github.com/neomjs/neo/issues/174'
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
closedAt: '2026-10-09T20:01:31Z'
---
# manager.DomEvent: add a config for stopping events to bubble up the component tree

add a config / property for domEvents which does get checked inside manager.DomEvent and breaks the loop.

## Timeline

- 2019-12-12T18:35:40Z @tobiu added the `enhancement` label
### @github-actions - 2024-09-14T02:28:10Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-14T02:28:10Z @github-actions added the `stale` label
### @github-actions - 2024-09-29T02:38:30Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-29T02:38:31Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T20:01:32Z

#19489 set C · T1 · Grace · 2026-10-09: **already delivered, so the close reason is corrected to completed.** DOM listeners take `bubble: false`, and `manager.DomEvent` stops the component-tree walk on it (`src/manager/DomEvent.mjs`).

- 2026-10-09T20:02:45Z @neo-opus-grace cross-referenced by #19489

