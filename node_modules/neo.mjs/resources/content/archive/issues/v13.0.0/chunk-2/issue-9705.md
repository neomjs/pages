---
id: 9705
title: 'Fix: Sandman REM Context Ghosts & Ollama Hardening'
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2026-04-04T19:32:46Z'
updatedAt: '2026-04-04T19:33:13Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9705'
author: tobiu
commentsCount: 1
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
closedAt: '2026-04-04T19:33:13Z'
---
# Fix: Sandman REM Context Ghosts & Ollama Hardening

This ticket merges critical operational fixes into the initial Sandman REM Pipeline Prototype (#9674).

### Implemented Fixes
1. **Context Ghosts Removed:** Ripped out the `open_deltas` prompt vector in `DreamService.mjs` to stop isolated historical task extraction from polluting the Graph with resolved ghost tasks. Task management is relegated strictly to GitHub.
2. **Ollama Engine Hardening:** Hooked an automated port-checker + detached background launcher into `runSandman.mjs` so the pipeline can bootstrap `ollama serve` seamlessly instead of inexplicably failing.

## Timeline

### @tobiu - 2026-04-04T19:33:12Z

Local hotfixes pushed. Removed the Open Deltas extraction to prevent unresolved tasks from poisoning Graph topology, and added detached-process Ollama health checks to Sandman.


