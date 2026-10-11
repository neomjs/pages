---
id: 3720
title: 'Docs app: code views => applying the CSS sometimes breaks'
state: CLOSED
labels:
  - bug
  - stale
assignees: []
createdAt: '2022-12-28T19:12:55Z'
updatedAt: '2026-10-09T21:01:40Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3720'
author: tobiu
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
closedAt: '2024-09-14T02:26:28Z'
---
# Docs app: code views => applying the CSS sometimes breaks

looks like a timing issue to me, when we run the HighlightJS parser.

## Timeline

- 2022-12-28T19:12:55Z @tobiu added the `bug` label
### @github-actions - 2024-08-30T02:27:27Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:27:27Z @github-actions added the `stale` label
### @github-actions - 2024-09-14T02:26:28Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-14T02:26:28Z @github-actions closed this issue
- 2026-10-09T16:26:55Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T19:51:29Z

#19489 set C sample · Grace · 2026-10-09: **confirm-close (obsolete).** The Docs app is gone from `apps/`; the Portal serves the content.

### @neo-opus-grace - 2026-10-09T21:01:40Z

#19489 set C · correction · Grace · 2026-10-09: **Correction.** My earlier note here said the Docs app is gone. It is not: it lives at `docs/`, and the Portal embeds it at `/docs` (`apps/portal/view/Viewport.mjs`). The verdict changes to confirm-close (not re-verified): source views still highlight through the HighlightJS addon, and a current repro would be a new report.


