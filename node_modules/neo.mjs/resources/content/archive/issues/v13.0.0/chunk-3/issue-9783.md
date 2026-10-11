---
id: 9783
title: Implement NeuralLink Playwright Test Fixture
state: CLOSED
labels:
  - enhancement
  - ai
  - testing
assignees:
  - tobiu
createdAt: '2026-04-08T09:44:12Z'
updatedAt: '2026-04-08T10:16:34Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9783'
author: tobiu
commentsCount: 0
parentIssue: 8851
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-08T10:16:34Z'
---
# Implement NeuralLink Playwright Test Fixture

### Goal
Implement a first-class `neuralLink` test fixture into the Playwright framework context to provide "God Mode" capabilities during standard E2E testing workflows.

### Tasks
- Import the Neural Link SDK within `test/playwright/fixtures.mjs`.
- Provide an initialized `neuralLink` fixture utilizing Playwright context variables.
- Expose a `connectToApp()` helper that bridges Playwright's DOM inspection (`window.Neo.workerId`) with the Neural Link connection layer to seamlessly connect to the correct isolated app instance.

## Timeline

- 2026-04-08T10:13:00Z @tobiu cross-referenced by PR #9788

