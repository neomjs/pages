---
id: 9572
title: 'Draft Release Notes: ScrollSync & Performance'
state: CLOSED
labels:
  - documentation
  - ai
assignees:
  - tobiu
createdAt: '2026-03-27T10:39:45Z'
updatedAt: '2026-03-27T10:44:36Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9572'
author: tobiu
commentsCount: 1
parentIssue: 9569
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-03-27T10:44:36Z'
---
# Draft Release Notes: ScrollSync & Performance

Sub-task of Epic #9569.

This ticket tracks the drafting of the **ScrollSync & Performance** section for the v12.1 release notes.

**Scope:**
- `Neo.plugin.ScrollSync` loop-free 2-way binding upgrade.
- Optical pinning via Hybrid rAF Engine & CSS variables.
- O(1) Performance refactoring (eradicating O(N²) traversals in `syncVnodeTree`).
- Proxy Getter Hoisting to reduce GC pressure.

## Timeline

### @tobiu - 2026-03-27T10:44:34Z

Drafted the section and pushed to the repository.


