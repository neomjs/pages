---
id: 4529
title: Google Maps should update the Markers
state: OPEN
labels:
  - enhancement
assignees: []
createdAt: '2023-07-10T11:46:59Z'
updatedAt: '2026-10-09T20:31:58Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4529'
author: Dinkh
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
# Google Maps should update the Markers

Running Google Maps does only add new markers, but does not reflect that markers might be deleted from the store.

## Timeline

- 2023-07-10T11:46:59Z @Dinkh added the `enhancement` label
### @github-actions - 2024-08-29T02:27:11Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:27:11Z @github-actions added the `stale` label
### @github-actions - 2024-09-13T02:29:47Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-13T02:29:47Z @github-actions closed this issue
- 2026-10-09T20:31:55Z @neo-opus-grace reopened this issue
- 2026-10-09T20:31:57Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:31:58Z

#19489 set C · T5 · Grace · 2026-10-09: **reopened, valid.** Thank you @Dinkh. `component.wrapper.GoogleMaps` still listens only to the marker store's `load`, so removed records keep their markers.

- 2026-10-09T20:34:19Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T20:38:51Z @neo-opus-grace cross-referenced by #4955

