---
id: 7959
title: 'Epic: Agent Security & Capabilities'
state: CLOSED
labels:
  - epic
  - stale
  - ai
  - architecture
assignees: []
createdAt: '2025-11-30T21:52:09Z'
updatedAt: '2026-10-09T16:12:59Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7959'
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
closedAt: '2026-03-15T04:08:04Z'
---
# Epic: Agent Security & Capabilities

Define and implement the security model for Agent-initiated browser actions.

**Scope:**
1.  **Capability Taxonomy:** Define granular permissions (e.g., `component:read`, `component:write`, `code:load`).
2.  **Policy Enforcement Point (PEP):** Implement middleware in `Neo.ai.server.WebSocket` to validate RPC calls against the Agent's capability token.
3.  **Sandboxing:** Ensure Agents cannot execute arbitrary JavaScript (e.g., `eval`) in the browser context unless explicitly authorized.
4.  **Audit Logging:** Record all Agent-initiated actions for security review.
5.  **Default Deny:** All capabilities require explicit grant.
6.  **Emergency Kill Switch:** Ability to revoke agent access immediately.

Reference: `.github/AGENT_ARCHITECTURE.md`

## Timeline

- 2025-11-30T21:52:11Z @tobiu added the `epic` label
- 2025-11-30T21:52:11Z @tobiu added the `ai` label
- 2025-11-30T21:52:11Z @tobiu added the `architecture` label
### @github-actions - 2026-03-01T03:59:09Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-03-15T04:08:04Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-10-09T16:04:40Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T16:12:59Z

#19489 set B · FM / Agent OS · Grace · 2026-10-09: **confirm-close (moved).** The enforcement point exists: the Engine admits or denies every Neural Link write in one fail-closed step (`src/ai/admitWrite.mjs`), against the leases `src/ai/WriteGuard.mjs` holds. The open part, a trust-tier model for what an agent may create or import, is tracked in neomjs/neo-agent-brain#141, with identity and locking in neomjs/neo-agent-brain#143.


