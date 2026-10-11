---
id: 9040
title: 'Refactor: Make DevRank Manager a Singleton'
state: CLOSED
labels:
  - ai
  - refactoring
assignees:
  - tobiu
createdAt: '2026-02-07T21:07:48Z'
updatedAt: '2026-02-07T21:09:58Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9040'
author: tobiu
commentsCount: 1
parentIssue: 8930
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-07T21:09:58Z'
---
# Refactor: Make DevRank Manager a Singleton

Refactor `apps/devrank/services/Manager.mjs` to be a singleton class.

**Current State:**
- `Manager.mjs` is a standard class.
- `cli.mjs` manually instantiates it via `Neo.create(Manager)`.
- All other services in the directory (`Spider`, `Storage`, `GitHub`, `Updater`, `Cleanup`, `Config`) are singletons.

**Goal:**
- Align `Manager` with the service architecture.
- Simplify `cli.mjs` usage.

**Changes:**
1.  Add `singleton: true` to `Manager.mjs`.
2.  Update `cli.mjs` to call `Manager.main()` directly (as the import will now be the instance).

## Timeline

### @tobiu - 2026-02-07T21:09:45Z

**Input from Gemini 3 Pro:**

> ✦ Refactored `Manager.mjs` to be a singleton.
> 
> ### Changes
> 1.  **Manager.mjs:** Added `singleton: true` to the static config and updated the JSDoc.
> 2.  **cli.mjs:** Removed `Neo.create(Manager)` instantiation and now calls `Manager.main()` directly (as the import is now the singleton instance).
> 
> ### Verification
> - Verified code structure aligns with `Spider.mjs` and other services in the directory.
> - `cli.mjs` syntax updated to match the change.
> 
> Code committed to `dev` branch.


