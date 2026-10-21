---
id: 8873
title: 'Refactor: Standardize VNodeUtil and VDomUtil getChildIds to include components'
state: OPEN
labels:
  - ai
  - refactoring
  - core
  - needs-re-triage
assignees: []
createdAt: '2026-01-23T23:23:16Z'
updatedAt: '2026-10-09T14:19:29Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8873'
author: tobiu
commentsCount: 3
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
---
# Refactor: Standardize VNodeUtil and VDomUtil getChildIds to include components

**Description:**
Currently, `VNodeUtil.getChildIds(vnode)` implicitly filters out component placeholders (nodes with `componentId`). `VDomUtil.getChildIds(vdom)` likely shares similar logic or intent. This behavior is unintuitive and forced complex workarounds in `VdomLifecycle.syncVnodeTree`.

**Goal:**
Make `getChildIds` consistent across both `VNodeUtil` and `VDomUtil`, ensuring they can return all children including components.

**Proposed Change:**
1.  Update `VNodeUtil.getChildIds` AND `VDomUtil.getChildIds` to accept an options object, e.g., `{includeComponents: true}`.
2.  Ensure both utilities behave symmetrically regarding component placeholders/references.
3.  Refactor `VdomLifecycle.syncVnodeTree` to use this new option.

**Benefits:**
*   Consistency between VDOM and VNode utilities.
*   Cleaner code in `VdomLifecycle`.
*   Less "magic" filtering.

## Timeline

- 2026-01-23T23:23:17Z @tobiu added the `ai` label
- 2026-01-23T23:23:17Z @tobiu added the `refactoring` label
- 2026-01-23T23:23:17Z @tobiu added the `core` label
### @github-actions - 2026-04-24T04:31:32Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-04-24T04:31:33Z @github-actions added the `stale` label
### @github-actions - 2026-05-09T04:41:11Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-05-09T04:41:12Z @github-actions closed this issue
- 2026-10-09T13:16:49Z @neo-opus-grace cross-referenced by #19489
### @neo-gpt-sophie - 2026-10-09T14:18:40Z

### Set-B triage: reopen for a bounded API-design re-triage, not a v13.2 defect

The observable asymmetry still exists on `f3b462e84f`: `VNode.getChildIds` explicitly excludes component references; `VDom.getChildIds` walks the resolved VDOM with a different inclusion rule. The issue's requested option was not delivered merely because the bot closed the ticket.

The old implementation prescription needs a fresh consumer read. `syncVnodeTree` calls `ComponentManager.getChildren`, which **still uses `VNode.getChildIds` indirectly**; the filter is not gone. It selects expanded child nodes for adoption, while reference branches retain their own component state. Removing that distinction by default would be a behavioral change, not just naming consistency. The removal pass now separately uses logical direct children.

[ARCH_ALIGNMENT] Keep the design question, but do not execute the stale prescription unchanged. Before implementation, define whether the desired API enumerates physically present nodes, logical descendants, or expanded component references; name its caller and preserve existing defaults. No failing runtime acceptance was established for this ticket in today's read. The current release defect is separately owned by #8890.

Triaged per `ticket-triage`: prescription requires re-triage; retain the existing domain labels and add `needs-re-triage`. Reopen unassigned, outside the v13.2 repair claim. Source: `src/util/VNode.mjs:getChildIds`, `src/util/VDom.mjs:getChildIds`, `src/manager/Component.mjs:getChildren`, `src/mixin/VdomLifecycle.mjs:syncVnodeTree`. Parent sweep: #19489.

- 2026-10-09T14:19:19Z @neo-gpt-sophie added the `needs-re-triage` label
- 2026-10-09T14:19:21Z @neo-gpt-sophie removed the `stale` label
- 2026-10-09T14:19:29Z @neo-gpt-sophie reopened this issue

