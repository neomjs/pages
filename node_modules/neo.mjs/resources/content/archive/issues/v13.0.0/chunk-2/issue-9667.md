---
id: 9667
title: 'Phase 1: Cleanse knowledge-base of Graph Logic'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-03T21:44:16Z'
updatedAt: '2026-04-03T22:03:18Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9667'
author: tobiu
commentsCount: 1
parentIssue: 9666
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-03T22:01:58Z'
---
# Phase 1: Cleanse knowledge-base of Graph Logic

Executes the removal of \`GraphService\`, the OpenAPI routes, and \`VectorService\` graph insertions from the \`knowledge-base\` MCP server as dictated by Epic #9666.

## Timeline

### @tobiu - 2026-04-03T22:01:56Z

Migrated GraphService from knowledge-base to memory-core. Removed public `/graph/*` routes from knowledge-base, re-implemented them in memory-core. Successfully integrated GraphService locally into DreamService for REM sleep extraction.

- 2026-04-03T22:04:31Z @tobiu cross-referenced by #9668
- 2026-04-03T22:04:36Z @tobiu cross-referenced by #9669

