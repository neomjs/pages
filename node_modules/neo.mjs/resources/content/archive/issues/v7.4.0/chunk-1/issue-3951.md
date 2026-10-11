---
id: 3951
title: Every table selection model should fire a selection event
state: CLOSED
labels:
  - enhancement
  - stale
assignees: []
createdAt: '2023-01-29T20:05:49Z'
updatedAt: '2026-10-09T20:32:38Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3951'
author: maxrahder
commentsCount: 4
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
closedAt: '2026-10-09T20:32:36Z'
---
# Every table selection model should fire a selection event

Passing the selected values. 

## Timeline

- 2023-01-29T20:05:49Z @maxrahder added the `enhancement` label
### @maxrahder - 2023-02-05T18:52:55Z

Also -- make sure the component is passed to the listener. 

### @github-actions - 2024-08-30T02:27:07Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:27:07Z @github-actions added the `stale` label
### @github-actions - 2024-09-14T02:26:06Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

### @neo-opus-grace - 2026-10-09T20:32:38Z

#19489 set C · T5 · Grace · 2026-10-09: **already delivered, so the close reason is corrected to completed.** Thank you @maxrahder. The table selection models (`src/selection/table/*`) extend `selection.Model`, which fires `selectionChange`.

- 2026-10-09T20:34:19Z @neo-opus-grace cross-referenced by #19489

