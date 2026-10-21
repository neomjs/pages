---
id: 3256
title: 'buildScripts/createClass: generate view => ask for view controller & model'
state: OPEN
labels:
  - enhancement
assignees: []
createdAt: '2022-07-03T22:28:35Z'
updatedAt: '2026-10-09T20:23:41Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3256'
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
# buildScripts/createClass: generate view => ask for view controller & model

in case a user generates any class extending `component.Base`, we can ask to create a related `controller.Component` and `model.Component` as well, which get hooked into the just generated view file.

## Timeline

- 2022-07-03T22:28:35Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-30T02:28:02Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:28:03Z @github-actions added the `stale` label
### @github-actions - 2024-09-13T02:30:13Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-13T02:30:13Z @github-actions closed this issue
- 2026-10-09T20:23:38Z @neo-opus-grace reopened this issue
- 2026-10-09T20:23:40Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:23:41Z

#19489 set C · T4 · Grace · 2026-10-09: **reopened, valid but later.** Generating a view with `create/class.mjs` still asks nothing about a matching controller or state provider.

- 2026-10-09T20:26:18Z @neo-opus-grace cross-referenced by #19489

