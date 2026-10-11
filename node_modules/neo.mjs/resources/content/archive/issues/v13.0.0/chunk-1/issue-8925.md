---
id: 8925
title: 'Epic: Implement Specialized Agent Workflows (.agent/workflows/)'
state: CLOSED
labels:
  - documentation
  - epic
  - developer-experience
  - stale
  - ai
assignees: []
createdAt: '2026-01-31T15:39:28Z'
updatedAt: '2026-10-09T16:13:04Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8925'
author: tobiu
commentsCount: 3
parentIssue: null
subIssues:
  - '[x] 8929 Feat: Implement Unit Test Agent Workflow (.agent/workflows/unit-test.md)'
subIssuesCompleted: 1
subIssuesTotal: 1
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-05-16T04:46:07Z'
---
# Epic: Implement Specialized Agent Workflows (.agent/workflows/)

Create a system of specialized "Startup Profiles" for AI agents to optimize context usage and focus.

**Directory Structure:**
`/.agent/workflows/`

**Planned Profiles:**
1.  **`unit-test.md`**: Loads `Neo.mjs`, `Base.mjs`, and `UnitTesting.md`. Focuses on logic verification.
2.  **`component-test.md`**: Loads `ComponentTesting.md` and Browser-specific context. Focuses on interaction.
3.  **`architect.md`**: Loads `VISION.md`, `ROADMAP.md`. Focuses on high-level planning.
4.  **`doc-gardener.md`**: Focuses on finding and fixing missing JSDoc.

**Action:**
- Create the folder structure.
- Draft the initial MD files for each profile.
- Document how to invoke them (e.g., "Initialize as [Profile Name]").

## Timeline

### @github-actions - 2026-05-02T04:34:22Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-05-16T04:46:06Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-10-09T16:04:40Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T16:13:04Z

#19489 set B · FM / Agent OS · Grace · 2026-10-09: **confirm-close (superseded).** The startup profiles became skills. `neo-agent-skills` ships them to every repository, among them `unit-test`, `whitebox-e2e`, `architecture-pre-flight` and `release-notes`.


