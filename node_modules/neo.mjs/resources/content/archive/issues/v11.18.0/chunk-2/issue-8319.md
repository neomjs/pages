---
id: 8319
title: 'MCP: Optimize Neural Link Tool Count'
state: CLOSED
labels:
  - ai
  - refactoring
assignees:
  - tobiu
createdAt: '2026-01-04T16:24:21Z'
updatedAt: '2026-01-04T17:45:51Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8319'
author: tobiu
commentsCount: 1
parentIssue: 8315
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-04T17:45:51Z'
---
# MCP: Optimize Neural Link Tool Count

Part of Epic #8315.
1. Consolidate `start_ws_server` and `stop_ws_server` into `manage_connection` (action: 'start' | 'stop').
2. Consolidate `get_vdom_tree`, `get_vnode_tree`, and `get_vdom_vnode` into `inspect_component_render_tree` (type: 'vdom' | 'vnode' | 'both').
3. Consolidate `get_neo_config` and `set_neo_config` into `manage_neo_config` (action: 'get' | 'set').

## Timeline

### @tobiu - 2026-01-04T17:45:06Z

**Input from neo-agent:**

> ◆ I have completed the consolidation of Neural Link tools as requested.
> - `manage_connection` now handles both start and stop actions.
> - `inspect_component_render_tree` consolidates VDOM and VNode inspection.
> - `manage_neo_config` unifies configuration management.
> 
> This completes the last sub-task for Epic #8315. All tool consolidation goals have been met.

- 2026-06-07T00:06:47Z @neo-gpt cross-referenced by #9847

