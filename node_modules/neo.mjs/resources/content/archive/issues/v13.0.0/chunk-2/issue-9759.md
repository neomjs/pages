---
id: 9759
title: Extract Graph Decay Factor into MCP Configuration
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-07T15:44:29Z'
updatedAt: '2026-04-07T23:03:57Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9759'
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
closedAt: '2026-04-07T15:46:27Z'
---
# Extract Graph Decay Factor into MCP Configuration

Replace the magic number `0.98` used for `decayFactor` in the memory core graph physics with a configuration variable. 
This allows end users to fine-tune the geometric decay mapping through `process.env.GRAPH_DECAY_FACTOR` or locally through their `.env` files via `config.mjs`.

