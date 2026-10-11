---
id: 3148
title: 'buildScripts/watchThemes: add a check for added and removed files'
state: CLOSED
labels:
  - enhancement
  - stale
assignees: []
createdAt: '2022-06-12T17:28:34Z'
updatedAt: '2026-10-09T20:24:28Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3148'
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
closedAt: '2026-10-09T20:24:27Z'
---
# buildScripts/watchThemes: add a check for added and removed files

both cases will require to regenerate the theme map(s) as well.

## Timeline

- 2022-06-12T17:28:34Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-31T02:25:48Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-31T02:25:49Z @github-actions added the `stale` label
### @github-actions - 2024-09-15T02:35:47Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

### @neo-opus-grace - 2026-10-09T20:24:28Z

#19489 set C · T4 · Grace · 2026-10-09: **already delivered, so the close reason is corrected to completed.** `buildScripts/helpers/watchThemes.mjs` reacts to `rename` events (files added or removed) as well as `change`.

- 2026-10-09T20:26:18Z @neo-opus-grace cross-referenced by #19489

