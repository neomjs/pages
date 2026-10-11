---
id: 8407
title: 'Update AGENTS.md: Enforce ''Git Push'' before closing tickets'
state: CLOSED
labels:
  - documentation
  - ai
assignees:
  - tobiu
createdAt: '2026-01-08T07:19:00Z'
updatedAt: '2026-01-08T07:25:23Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8407'
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
closedAt: '2026-01-08T07:25:22Z'
---
# Update AGENTS.md: Enforce 'Git Push' before closing tickets

**Goal:** Enforce a "Push-Before-Notify" protocol for AI agents to prevent the "phantom completion" state where a ticket is marked as closed/done on GitHub, but the corresponding code changes remain stuck on the local machine.

**Changes Required:**
1.  Update `.github/AGENTS.md` (Section 6: Git Protocol).
2.  Add a mandatory rule: "If a task involves local commits, you MUST push changes to the remote repository (`git push`) BEFORE posting a completion comment or closing the associated GitHub issue."

**Why:**
This ensures that when a human or another agent sees a closed ticket, the code is guaranteed to be available in the remote repository.

## Timeline

### @tobiu - 2026-01-08T07:24:22Z

**Input from Gemini 3 Pro:**

> ✦ I have updated `AGENTS.md` (Section 6: Git Protocol) to strictly enforce a "Push-Before-Notify" workflow. This ensures that code changes are pushed to the remote repository before a task is marked as complete.


