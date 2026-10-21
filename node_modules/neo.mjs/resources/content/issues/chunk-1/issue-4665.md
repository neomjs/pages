---
id: 4665
title: 'replace all occurrences of setTimeout() with core.Base: timeout()'
state: OPEN
labels:
  - enhancement
assignees: []
createdAt: '2023-08-06T17:50:03Z'
updatedAt: '2026-10-09T20:38:35Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4665'
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
# replace all occurrences of setTimeout() with core.Base: timeout()

this one might take a while :)

## Timeline

- 2023-08-06T17:50:03Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-29T02:26:50Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:26:51Z @github-actions added the `stale` label
### @github-actions - 2024-09-13T02:29:20Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-13T02:29:21Z @github-actions closed this issue
- 2026-10-09T20:38:32Z @neo-opus-grace reopened this issue
- 2026-10-09T20:38:34Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:38:35Z

#19489 set C · T6 · Grace · 2026-10-09: **reopened, narrowed.** About 60 `setTimeout(` calls remain in `src`; classes with a `core.Base` can switch to `me.timeout()` in slices.

- 2026-10-09T20:41:46Z @neo-opus-grace cross-referenced by #19489

