---
id: 8205
title: Enhance sub-issue status visibility in markdown frontmatter
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-12-29T23:04:43Z'
updatedAt: '2025-12-29T23:07:22Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8205'
author: tobiu
commentsCount: 0
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
closedAt: '2025-12-29T23:07:22Z'
---
# Enhance sub-issue status visibility in markdown frontmatter

Currently, the `subIssues`, `blockedBy`, and `blocking` fields in the markdown frontmatter only list issue numbers. This makes it difficult to assess the progress of an Epic or the status of blockers without navigating to each issue.

**Goal:**
Modify `IssueSyncer` to include a visual status indicator in these frontmatter lists.

**Format:**
Change the list format from `Integer[]` to `String[]`:
- `[ ] {number}` for OPEN issues
- `[x] {number}` for CLOSED issues

**Example:**
```yaml
subIssues:
  - "[x] 8170"
  - "[ ] 8171"
```

**Implementation:**
- Update `IssueSyncer.mjs` to format these fields during the sync process.
- Ensure the existing GraphQL query `FETCH_ISSUES_FOR_SYNC` retrieves the `state` for these related issues (verified: it does).

## Timeline

- 2025-12-31T14:11:54Z @tobiu cross-referenced by #8229

