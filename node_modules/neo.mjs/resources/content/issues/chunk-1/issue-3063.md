---
id: 3063
title: Buildscript create-app should create an example ViewController in the demo app
state: OPEN
labels:
  - enhancement
assignees: []
createdAt: '2022-05-19T15:39:32Z'
updatedAt: '2026-10-09T20:16:07Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3063'
author: davhm
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
# Buildscript create-app should create an example ViewController in the demo app

For most use cases a MainViewController is probably necessary. Thus the buildscript `create-app` should by default create such a MainViewController to save time.

## Timeline

- 2022-05-19T15:39:32Z @davhm added the `enhancement` label
### @github-actions - 2024-08-31T02:26:01Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-31T02:26:01Z @github-actions added the `stale` label
### @github-actions - 2024-09-15T02:36:02Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-15T02:36:02Z @github-actions closed this issue
- 2026-10-09T20:16:04Z @neo-opus-grace reopened this issue
- 2026-10-09T20:16:05Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:16:07Z

#19489 set C · T3 · Grace · 2026-10-09: **reopened, valid.** Thank you @davhm for the idea. `buildScripts/create/app.mjs` still scaffolds no view controller. A good first issue.

- 2026-10-09T20:18:24Z @neo-opus-grace cross-referenced by #19489

