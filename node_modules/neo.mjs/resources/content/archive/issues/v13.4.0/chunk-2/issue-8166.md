---
id: 8166
title: Implement Cross-Window Drop Validation and Topology Rules
state: CLOSED
labels:
  - enhancement
  - no auto close
  - ai
  - needs-re-triage
assignees: []
createdAt: '2025-12-27T21:33:19Z'
updatedAt: '2026-11-06T13:41:01Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8166'
author: tobiu
commentsCount: 3
parentIssue: 8163
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-11-06T13:41:01Z'
---
# Implement Cross-Window Drop Validation and Topology Rules

For complex workspaces (like AgentOS), we need granular control over which dashboards can receive items from which sources.

**Current State:**
We use `sortGroup` string matching. This is binary (all-or-nothing).

**Goal:**
Implement a robust validation hook or Topology Manager.
*   **Validator Hook:** `allowDrop(draggedItem, sourceZone, targetZone) => boolean`.
*   **Use Cases:**
    *   Prevent dropping "System Widgets" into "User Content" areas.
    *   Allow Child -> Parent drops, but block Parent -> Child.
    *   Enforce "One instance only" rules.

## Timeline

- 2025-12-27T21:33:20Z @tobiu added the `enhancement` label
- 2025-12-27T21:33:20Z @tobiu added the `ai` label
- 2025-12-27T21:33:50Z @tobiu added parent issue #8163
### @github-actions - 2026-03-28T03:54:35Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-03-28T03:54:35Z @github-actions added the `stale` label
- 2026-03-28T05:57:38Z @tobiu removed the `stale` label
- 2026-03-28T05:57:38Z @tobiu added the `no auto close` label
- 2026-06-23T03:46:10Z @neo-gpt-euclid added the `not-code-ready` label
- 2026-06-23T03:46:11Z @neo-gpt-euclid added the `needs-design` label
- 2026-06-23T03:46:11Z @neo-gpt-euclid added the `needs-re-triage` label
- 2026-06-23T03:56:38Z @neo-gpt-euclid cross-referenced by #8163
- 2026-07-06T13:21:50Z @tobiu removed the `not-code-ready` label
- 2026-07-06T13:22:28Z @tobiu removed the `needs-design` label
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T11:00:46Z

### 2026-11-05 Premise Read (`#15000` backlog sweep) — **Verdict: `holds` (or `op: close` if ADR 0029 seams suffice)**

Verified against current `dev`:
- Since `2025-12-27`, cross-window drop validation in the dock stack shipped via ADR 0029: `src/manager/DragCoordinator.mjs:857-905, 972-1010` enforces `admitsOwnership(sourceOwnershipId, targetOwnershipId)` (`#18284` / PR `#18368` cross-root Group isolation) alongside `sortGroup` matching and `zone.acceptsRemoteDrag(localX, localY)`, while `src/dashboard/dock/window/Participation.mjs:40-52, 85-136` validates drops through `hitTest`, `previewFor`, `commitTransfer`, and `WorkspaceDocument#transferItem` (collision & root-transfer rejection).
- However, legacy `Neo.draggable.dashboard.SortZone#acceptsRemoteDrag` (`src/draggable/dashboard/SortZone.mjs:86-104`) still checks only `ownerRect` bounds, without a declarative `allowDrop(draggedItem, sourceSortZone, targetSortZone) => Boolean` predicate hook for asymmetric sender/receiver topology rules (e.g., Child → Parent allowed, Parent → Child blocked).

**Recommendation for @tobiu:** Either **close** as superseded by ADR 0029's `admitsOwnership` + `Participation` seams, or **keep open (`holds`)** narrowed to adding an optional `allowDrop(draggedItem, sourceZone, targetZone)` predicate on `DashboardSortZone` / `DragCoordinator`.

— Maryam 🧭

### @neo-opus-grace - 2026-11-06T13:40:49Z

**Closing as completed, delivered in a different shape** (backlog householding, #15000; Maryam's premise read above, re-checked against `dev` 28fc096649).

The intent was granular control over which surfaces may receive items from which sources, for complex workspaces like the Agent OS one. That workspace is now the dock stack, and ADR 0029 (`learn/agentos/decisions/0029-docking-design.md` §2.3, amended by #18284) gives it exactly this control as **topology Groups**:

- `Neo.manager.DragCoordinator#admitsOwnership(sourceOwnershipId, targetOwnershipId)` admits a drop target by declared ownership before hit-testing and claiming. `sortGroup` remains the separate protocol-compatibility check, and the target's commit re-checks ownership.
- `src/dashboard/dock/window/Participation.mjs` validates the transfer itself (`hitTest`, `previewFor`, `commitTransfer`), and `WorkspaceDocument#transferItem` rejects collisions and root transfers.

The body's asymmetric examples (child→parent allowed, parent→child blocked; system widgets kept out of user content) have no consumer: `allowDrop` appears nowhere in `src/` or `apps/`. If an app ever needs one, it is a predicate beside `admitsOwnership` in the same admission step, and that app's ticket should carry it, with the consumer named.

🖖 Grace (Opus 5.5, Claude Code) · session bc1d980b-3b06-4392-985e-dc05b2946e87


