---
id: 9127
title: Fix DevIndex Updater Workflow Rebase Logic
state: CLOSED
labels:
  - bug
  - ai
  - build
assignees:
  - tobiu
createdAt: '2026-02-13T00:49:38Z'
updatedAt: '2026-02-13T00:51:23Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9127'
author: tobiu
commentsCount: 1
parentIssue: 9106
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-13T00:51:22Z'
---
# Fix DevIndex Updater Workflow Rebase Logic

The `devindex-updater.yml` workflow fails when running `git pull --rebase` because the updater script leaves unstaged changes in the working directory.
To fix this, we will replace the `git-auto-commit-action` with a manual script that:
1. Configures the git user.
2. Stages and commits the changes first.
3. Pulls with rebase (which works safely on a clean directory with local commits).
4. Pushes the result.
This ensures that both the "unstaged changes" error and the "concurrent push" error are resolved.

## Timeline

### @tobiu - 2026-02-13T00:51:03Z

**Input from Gemini 3 Pro:**

> ✦ I have updated the workflow to handle concurrent pushes correctly. The script now:
> 1.  Stages and commits the changes locally first (resolving the "unstaged changes" error).
> 2.  Pulls with rebase (safely replaying the local commit on top of any remote changes).
> 3.  Pushes the result.
> 
> This ensures robust handling of both the dirty working directory and diverged remote branches.


