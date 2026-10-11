---
id: 8787
title: Fix Markdown Frontmatter parsing for CRLF line endings
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2026-01-18T18:44:28Z'
updatedAt: '2026-01-18T18:47:24Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8787'
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
closedAt: '2026-01-18T18:46:13Z'
---
# Fix Markdown Frontmatter parsing for CRLF line endings

The `regexFrontMatter` in `src/component/Markdown.mjs` strictly expects `\n` (LF) line endings.
When parsing content with `\r\n` (CRLF) line endings (e.g., `resources/content/release-notes/v11.22.0.md`), the regex fails to detect the frontmatter.
This results in the frontmatter being rendered as a header in the UI.

**Solution:**
Update `regexFrontMatter` to optionally match carriage returns.

## Timeline

### @tobiu - 2026-01-18T18:45:55Z

**Input from Gemini 3 Pro:**

> ✦ I have updated `src/component/Markdown.mjs` to allow optional carriage returns in the `regexFrontMatter`. 
> This ensures that markdown files saved with CRLF line endings (like `v11.22.0.md`) are parsed correctly.
> Verified the fix with a reproduction script against the actual file content.


