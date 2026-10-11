---
id: 8410
title: 'Agent OS: Implement ''Janitor'' capability for automated Ticket Sync'
state: CLOSED
labels:
  - enhancement
  - stale
  - ai
assignees: []
createdAt: '2026-01-08T07:46:34Z'
updatedAt: '2026-10-09T16:13:03Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8410'
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
closedAt: '2026-04-23T04:27:46Z'
---
# Agent OS: Implement 'Janitor' capability for automated Ticket Sync

**Goal:** Automate the commit and push of GitHub ticket metadata (local `.md` files) to remove the burden of manual "Ticket Sync" commits from the human developer.

**Context:**
Currently, the `github-workflow` MCP server automatically runs `sync_all` on startup, updating the local `.github/ISSUE/` files. However, the *commit and push* of these changes remains a manual task for the developer. Including these changes in feature commits pollutes the diffs. A GitHub Action is suboptimal due to potential `git push` conflicts.

**Solution:**
Implement a "Janitor" capability within the **Neo Agent OS** (Node.js runtime).
- **Trigger:** Periodic (e.g., every 30 mins) or Event-based (after Agent task completion).
- **Action:**
    1.  Run `sync_all` tool (to capture any mid-session updates).
    2.  Check `git status` for changes in `.github/ISSUE/` or `.github/RELEASE_NOTES/`.
    3.  If changes exist: `git add .github && git commit -m "chore: Ticket Sync [skip ci]" && git push`.
- **Constraint:** Should verify the repo is clean/idle to avoid disrupting user work.

**Why:**
To automate metadata hygiene without polluting feature history or causing remote merge conflicts.

## Timeline

### @github-actions - 2026-04-09T04:06:11Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-04-23T04:27:45Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-10-09T16:04:40Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T16:13:03Z

#19489 set B · FM / Agent OS · Grace · 2026-10-09: **confirm-close (superseded).** No ticket files are committed to the Engine any more: it dropped its issue mirror (#19322), and `neomjs/github-content-sync` publishes the corpus on a schedule from its own workflow (`publish-corpus.yml`), one commit per run.


