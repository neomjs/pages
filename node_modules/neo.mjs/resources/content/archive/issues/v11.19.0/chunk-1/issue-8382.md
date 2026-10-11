---
id: 8382
title: Fix Markdown code block styling to apply universally
state: CLOSED
labels:
  - bug
  - design
  - ai
assignees:
  - tobiu
createdAt: '2026-01-07T14:11:20Z'
updatedAt: '2026-01-07T14:14:07Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8382'
author: tobiu
commentsCount: 0
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
closedAt: '2026-01-07T14:14:07Z'
---
# Fix Markdown code block styling to apply universally

The current CSS selector `pre[data-javascript]` in `resources/scss/src/component/Markdown.scss` is too specific, applying styles only to JavaScript code blocks.

It should be generalized to `pre.hljs` to ensure consistent border, radius, and padding for all supported languages (json, html, css, etc.) rendered by `Neo.component.Markdown`.

