---
id: 7388
title: Define the "Sighted" Development Workflow
state: CLOSED
labels:
  - enhancement
  - help wanted
  - good first issue
  - stale
  - hacktoberfest
  - ai
assignees: []
createdAt: '2025-10-06T10:34:36Z'
updatedAt: '2026-10-09T13:15:58Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7388'
author: tobiu
commentsCount: 4
parentIssue: 7385
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-04T03:41:11Z'
---
# Define the "Sighted" Development Workflow

This ticket is for defining the new interactive development workflow that leverages the "sighted" capabilities of the agent. The goal is to create a detailed plan for a continuous loop of development, verification, and testing.

## Acceptance Criteria

1.  A new markdown document is created in `learn/guides/ai/` that describes the "Sighted" Development Workflow.
2.  The document outlines the step-by-step process of how the agent will:
    a.  Develop a new component.
    b.  Use the MCP server to inspect the DOM and verify changes in real-time.
    c.  Use the insights from the DOM to generate meaningful Playwright tests.
3.  The document serves as a blueprint for implementing the new workflow.

## Timeline

- 2025-10-06T10:34:37Z @tobiu added parent issue #7385
- 2025-10-06T10:34:37Z @tobiu added the `enhancement` label
- 2025-10-06T10:34:38Z @tobiu added the `help wanted` label
- 2025-10-06T10:34:38Z @tobiu added the `good first issue` label
- 2025-10-06T10:34:38Z @tobiu added the `hacktoberfest` label
- 2025-10-06T10:34:38Z @tobiu added the `ai` label
### @1sh-repalto - 2025-10-06T16:52:41Z

Hello @tobiu, I’d like to take up this issue. Could you please assign it to me?
Also, it’s my first time contributing here, so any quick guidance would be really helpful. Thanks!

### @github-actions - 2026-01-21T03:13:22Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-01-21T03:13:23Z @github-actions added the `stale` label
### @github-actions - 2026-02-04T03:41:11Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-02-04T03:41:11Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T13:15:58Z

#19489 set B · Grace · 2026-10-09: **confirm-close (superseded).** The interactive develop-verify-test loop this asked for is the [Whitebox E2E guide](https://github.com/neomjs/neo/blob/dev/learn/guides/testing/WhiteboxE2E.md), driving a live app through the Neural Link.

- 2026-10-09T13:16:49Z @neo-opus-grace cross-referenced by #19489

