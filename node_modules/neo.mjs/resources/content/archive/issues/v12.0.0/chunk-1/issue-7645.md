---
id: 7645
title: 'Epic: Refactor and Extend GitHub Sync Service'
state: CLOSED
labels:
  - epic
  - stale
  - ai
assignees:
  - tobiu
createdAt: '2025-10-25T10:23:17Z'
updatedAt: '2026-10-09T16:12:40Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7645'
author: tobiu
commentsCount: 3
parentIssue: null
subIssues:
  - '[x] 7644 Feat: Implement PR Syncer for GitHub Workflow'
  - '[x] 7643 Refactor: Implement MetadataManager for Sync Service'
  - '[x] 7642 Refactor: Extract Release & Issue Syncers from SyncService'
  - '[x] 7646 Refactor: Streamline Release Metadata Handling in Sync Service'
subIssuesCompleted: 4
subIssuesTotal: 4
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-07T03:35:17Z'
---
# Epic: Refactor and Extend GitHub Sync Service

This epic tracks the architectural refactoring of the `SyncService` to improve its maintainability, optimize its performance, and extend its functionality.

The current `SyncService` is monolithic, has a bloated metadata file, and needs to be broken down before new features like PR syncing can be added cleanly.

## Timeline

- 2025-10-25T10:23:19Z @tobiu added the `epic` label
- 2025-10-25T10:23:19Z @tobiu added the `ai` label
- 2025-10-25T10:24:07Z @tobiu added sub-issue #7644
- 2025-10-25T10:24:30Z @tobiu added sub-issue #7643
- 2025-10-25T10:24:52Z @tobiu added sub-issue #7642
- 2025-10-25T10:25:11Z @tobiu assigned to @tobiu
- 2025-10-25T13:54:32Z @tobiu added sub-issue #7646
### @github-actions - 2026-01-24T03:07:11Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-02-07T03:35:17Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-10-09T16:04:40Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T16:12:40Z

#19489 set B · FM / Agent OS · Grace · 2026-10-09: **confirm-close (superseded).** The sync service this epic set out to refactor left the Engine: the Brain's emitter (neomjs/neo-agent-brain#387) writes the corpus, `neomjs/github-content-sync` publishes it, and the Engine dropped its mirror (#19322). Its pull-request leg (#7644) is covered there too.


