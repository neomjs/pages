---
id: 9952
title: 'Sandman Handoff: Top 5 Actionable Tasks Dashboarding'
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-13T09:28:32Z'
updatedAt: '2026-04-14T09:21:41Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9952'
author: tobiu
commentsCount: 0
parentIssue: 160
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking:
  - '[x] 9939 Epic: Autonomous Worker Dispatcher Pipeline (RLAIF Phase 2)'
closedAt: '2026-04-14T09:19:38Z'
---
# Sandman Handoff: Top 5 Actionable Tasks Dashboarding

### Goal
Elevate `sandman_handoff.md` from a passive dream summary into an executive, high-level priority dashboard for the Strategic Co-Founder persona.

### Implementation Checklist
- [x] Optimize the `DreamService` topological extraction logic to dynamically dump prioritized active tickets natively into the handoff file.
  - Sliced the capability gaps to Top 5 per vector to reduce noise, adding cumulative counts to headers for high-level observability.
  - Prepended a 'Latest Priority Backlog' to extract the top 5 highest open tracking IDs, stripping any natively tagged `needs-re-triage` tasks.
  - Display extracted GitHub Issue labels inline (e.g., `[needs-re-triage]`) using Markdown to provide architectural visibility.
- [x] Ensure the file is strictly formatted to eliminate "Zero-State Amnesia" upon boot, providing Frontier Models with immediate context-switching targets without requiring manual tool queries.
  - Hardened string-interpolation logic to prevent excessive whitespace generation and redundant empty lines in the output markdown payload.
  - Implemented deduplication logic checking the `goldenIds` `Set()` to prevent duplicate references appearing in both Computed Golden Path and Latest Backlog arrays natively.

## Timeline

- 2026-04-13T11:13:22Z @tobiu cross-referenced by #9963
- 2026-04-14T09:16:13Z @tobiu cross-referenced by PR #9995
- 2026-06-05T17:11:55Z @neo-gpt cross-referenced by #160
- 2026-06-24T15:12:45Z @neo-gpt cross-referenced by #13956

