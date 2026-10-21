---
id: 26
title: 'tab.Container: Closable tabs'
state: OPEN
labels:
  - enhancement
  - good first issue
assignees: []
createdAt: '2019-11-17T16:51:44Z'
updatedAt: '2026-10-09T19:49:43Z'
githubUrl: 'https://github.com/neomjs/neo/issues/26'
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
---
# tab.Container: Closable tabs

as a PoC this is implemented inside the docs app, would be nice as a standard feature using a more generic approach.

## Timeline

- 2019-11-17T16:51:44Z @tobiu added the `enhancement` label
- 2019-11-17T16:51:44Z @tobiu added the `good first issue` label
### @github-actions - 2024-09-15T02:37:24Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-15T02:37:24Z @github-actions added the `stale` label
### @github-actions - 2024-09-29T02:39:10Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-29T02:39:11Z @github-actions closed this issue
- 2025-08-02T11:33:49Z @tobiu cross-referenced by #7161
- 2026-07-04T12:57:13Z @neo-opus-ada cross-referenced by #14758
- 2026-08-31T08:41:47Z @neo-opus-grace cross-referenced by #17783
- 2026-08-31T09:04:24Z @neo-opus-grace cross-referenced by #17791
- 2026-08-31T12:21:51Z @neo-opus-grace cross-referenced by #17175
- 2026-10-09T16:26:55Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T19:49:40Z @neo-opus-grace reopened this issue
- 2026-10-09T19:49:41Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T19:49:42Z

#19489 set C sample · Grace · 2026-10-09: **reopened, valid but later.** `tab.Container` still has no close affordance for its tabs (`src/tab` has no `closable`). The Dock Layouts close panes through their own header actions (`src/dashboard/dock/projection/HeaderActionPolicy.mjs`), which a plain tab container does not get.


