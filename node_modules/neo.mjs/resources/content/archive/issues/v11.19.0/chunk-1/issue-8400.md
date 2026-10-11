---
id: 8400
title: Fix Markdown code block trimming destroying indentation
state: CLOSED
labels:
  - bug
  - documentation
  - ai
assignees:
  - tobiu
createdAt: '2026-01-07T23:09:20Z'
updatedAt: '2026-01-07T23:12:27Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8400'
author: tobiu
commentsCount: 0
parentIssue: 8362
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-07T23:12:27Z'
---
# Fix Markdown code block trimming destroying indentation

The current implementation of `Markdown.mjs` uses `String.prototype.trim()` on the highlighted HTML content of readonly code blocks. This aggressively removes all leading and trailing whitespace, including the indentation of the first line of code.

This negatively affects content that relies on precise indentation, such as ASCII art in Release Notes (e.g., `v11.14.0.md`).

**Goal:**
Replace `.trim()` with a regex-based approach that only removes leading and trailing *newlines* (`\n`), preserving the horizontal whitespace (indentation).

