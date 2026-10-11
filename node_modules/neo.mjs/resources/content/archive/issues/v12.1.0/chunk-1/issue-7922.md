---
id: 7922
title: 'Feat: ''Derailment'' Intervention Interface'
state: CLOSED
labels:
  - enhancement
  - stale
  - ai
assignees: []
createdAt: '2025-11-29T15:19:23Z'
updatedAt: '2026-10-09T16:12:47Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7922'
author: tobiu
commentsCount: 3
parentIssue: 7918
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-03-14T03:37:23Z'
---
# Feat: 'Derailment' Intervention Interface

# Feat: 'Derailment' Intervention Interface

## Context
When an agent sets its status to `agent-task:blocked`, the system must alert the human operator. This ticket covers the UI for that intervention.

## Requirements
1.  **Alerting:** Visual notification in the Command Center when an agent blocks.
2.  **Context View:** Display the agent's last known state:
    *   The Issue it was working on.
    *   The last 5 "Thoughts" or log entries.
    *   The error message that caused the block.
3.  **Interaction:** A chat input where the human can provides new instructions.
4.  **Resolution:** A "Resume" button that updates the GitHub Issue with the human's feedback and clears the `blocked` label.

## Output
*   A functional "Intervention Panel" component in the Command Center app.


## Timeline

- 2025-11-29T15:19:25Z @tobiu added the `enhancement` label
- 2025-11-29T15:19:25Z @tobiu added the `ai` label
- 2025-11-29T15:22:17Z @tobiu added parent issue #7918
### @github-actions - 2026-02-28T03:22:09Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-03-14T03:37:22Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-10-09T16:04:40Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T16:12:47Z

#19489 set B · FM / Agent OS · Grace · 2026-10-09: **confirm-close (superseded).** A blocked agent reaches the operator through the A2A mailbox: tasks carry `Blocked` and `InputRequired` states, and Agent Institution's operator mailbox (`apps/agentos/view/fleet/mailbox/OperatorContainer.mjs`) is where the operator reads and answers. Wiring the operator's open questions into the cockpit is in flight (neomjs/neo-agent-institution#647). Read at `neomjs/neo-agent-brain` `dev@2445eb36` and `neomjs/neo-agent-institution` `dev@41068a4`.


