---
id: 8297
title: '[Neural Link] Implement toJSON in component.Base (add keys)'
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-01-03T11:51:37Z'
updatedAt: '2026-01-03T20:01:31Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8297'
author: tobiu
commentsCount: 0
parentIssue: 8200
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-03T20:01:31Z'
---
# [Neural Link] Implement toJSON in component.Base (add keys)

Update `Neo.component.Base.toJSON` to include the `keys` configuration.

**Implementation:**
- `keys`: Return `me.keys?.toJSON()`.

**Goal:**
Standardize serialization for Neural Link.


