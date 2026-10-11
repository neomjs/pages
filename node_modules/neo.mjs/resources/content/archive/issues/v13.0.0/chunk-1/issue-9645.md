---
id: 9645
title: Configure Agent.mjs to orchestrate mixed providers
state: CLOSED
labels:
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-04-03T10:47:01Z'
updatedAt: '2026-04-03T10:53:26Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9645'
author: tobiu
commentsCount: 1
parentIssue: 9639
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-03T10:53:26Z'
---
# Configure Agent.mjs to orchestrate mixed providers

Parent Epic: #9639

## Problem
`Neo.ai.Agent` currently hardcodes or defaults to the Gemini API cloud provider. The swarm architecture requires agents to instantiate with varying local/cloud backends.

## Solution
* Update `Agent.mjs` configuration to accept a `provider` string (`gemini` or `ollama`).
* Dynamically instantiate the correct `Neo.ai.provider.*` class upon agent boot.

## Timeline

### @tobiu - 2026-04-03T10:50:13Z

Implementation Complete: Agent.mjs configurator updated for mixed providers.


