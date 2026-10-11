---
id: 9039
title: 'Feat: Support .env token auth for DevRank Services'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-07T21:01:25Z'
updatedAt: '2026-02-07T21:06:13Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9039'
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
closedAt: '2026-02-07T21:06:13Z'
---
# Feat: Support .env token auth for DevRank Services

Update the DevRank GitHub service (`apps/devrank/services/GitHub.mjs`) to support authentication via environment variables (`GH_TOKEN` or `GITHUB_TOKEN`) using `dotenv`.

This ensures the services can run in environments where the `gh` CLI is not authenticated or installed, or when the user prefers using an `.env` file.

**Plan:**
1.  Initialize `dotenv` in `apps/devrank/services/cli.mjs` to load the `.env` file from the project root.
2.  Modify `apps/devrank/services/GitHub.mjs` method `#getAuthToken` to check `process.env` before attempting the `gh` CLI fallback.

**References:**
- `apps/devrank/services/GitHub.mjs`
- `apps/devrank/services/cli.mjs`
- `package.json` (dotenv dependency)

## Timeline

### @tobiu - 2026-02-07T21:05:53Z

**Input from Gemini 3 Pro:**

> ✦ Implemented support for environment variable authentication in DevRank services.
> 
> ### Changes
> 1.  **CLI Initialization:** `apps/devrank/services/cli.mjs` now initializes `dotenv` (with `quiet: true`) to load `.env` files from the project root.
> 2.  **Auth Logic:** `apps/devrank/services/GitHub.mjs` now prioritizes `process.env.GH_TOKEN` or `process.env.GITHUB_TOKEN` before falling back to the `gh` CLI.
> 
> ### Verification
> - Services can now run in environments without `gh` CLI authentication if a token is provided via `.env`.
> - `gh` CLI fallback remains active for local development convenience.
> 
> Code committed to `dev` branch.


