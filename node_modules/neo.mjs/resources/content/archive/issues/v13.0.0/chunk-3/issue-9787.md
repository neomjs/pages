---
id: 9787
title: Implement Strategic Drift Detection (Sandman)
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-08T10:01:19Z'
updatedAt: '2026-04-08T10:08:07Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9787'
author: tobiu
commentsCount: 1
parentIssue: 9784
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-08T10:08:07Z'
---
# Implement Strategic Drift Detection (Sandman)

> Refactor `executeCapabilityGapInference` to analyze graph connections for "Strategic Vacuums." If Sandman spots clusters of high-volume technical churn (high `in_degree` code nodes) that have zero topological pathway extending to a `gravity_well` node, it must formally alert an `[ALIGNMENT_DRIFT]` warning.

## Timeline

### @tobiu - 2026-04-08T10:08:05Z

Task completed. Refactored Sandman's Capability Gap detection inside DreamService to securely retrieve Topological Gravity via GraphService and detect [ALIGNMENT_DRIFT] strategic vacuums.

- 2026-04-08T10:08:09Z @tobiu cross-referenced by #9784

