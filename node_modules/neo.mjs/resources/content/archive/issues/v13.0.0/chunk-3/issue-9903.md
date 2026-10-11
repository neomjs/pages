---
id: 9903
title: RLAIF Trajectory Curation & Whitebox E2E Pre-Flight
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-12T10:10:04Z'
updatedAt: '2026-04-14T05:49:55Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9903'
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
blockedBy:
  - '[x] 9913 fix(ai): Implement JSON recovery/repair in DreamService Tri-Vector Synthesis'
blocking: []
closedAt: '2026-04-13T22:25:23Z'
---
# RLAIF Trajectory Curation & Whitebox E2E Pre-Flight

# RLAIF Trajectory Curation & Whitebox E2E Pre-Flight (formerly `executeNLActionDigest`)

> [!CAUTION]
> **ARCHITECTURAL PIVOT**: This ticket was originally scoped to implement `executeNLActionDigest` inside the `DreamService.mjs` daemon to autonomously generate `.spec.mjs` Playwright scaffolding. That approach was identified as a critical anti-pattern producing fragile, low-ROI test noise. 
> 
> The architecture has officially pivoted from **"Test Generation"** to **"RLAIF Trajectory Curation"**.

### Context & Motivation

The `nl_action_log` captured during Frontier agent (e.g., Gemini 3.1 Pro / Claude Opus 4.6) interactions via the Neural Link represents highly valuable "Demonstrations of Intelligence". Instead of stuffing these sequences blindly into Playwright test scaffolding, we will stockpile these successful component state interactions as synthetic training data to feed future SLM fine-tuning pipelines (SFT/DPO for Gemma 4).

### Architectural Requirements

1. **The Telemetry Script (No MCP Bloat)**: Instead of a daemon, the telemetry must be queried interactively via `node ai/scripts/analyzeNlTelemetry.mjs <sessionId>`. This protects the 100-tool MCP limit while allowing Frontier models to compress their own Action Logs.
2. **RLAIF Data Persistence**: Synthesized interaction sequences must be formatted functionally into `.jsonl` and permanently stockpiled into `.neo-ai-data/datasets/rlaif/trajectories.jsonl`.
3. **Whitebox E2E Pre-Flight**: Establish the `.agent/skills/whitebox-e2e` Progressive Disclosure skill to mandate that Frontier agents *always* introspect the Neural Link VDOM state *before* writing Playwright selectors.

### References
- **Origin Session ID (Pivot)**: `f191cbb2-133b-43ac-bd7a-a2e85ea1fd95` (Agents: use `get_session_memories` to pull context on why test generation was abandoned).
- **Related PR**: #9902

## Timeline

- 2026-04-13T22:13:55Z @tobiu cross-referenced by PR #9990
- 2026-04-20T19:14:36Z @tobiu cross-referenced by #10132
- 2026-04-20T19:21:41Z @tobiu cross-referenced by PR #10133
- 2026-05-19T11:55:20Z @neo-opus-ada cross-referenced by #11634

