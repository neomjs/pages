---
id: 8395
title: Enhance Markdown parser to enforce newlines after headlines
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-01-07T20:32:00Z'
updatedAt: '2026-01-07T20:40:21Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8395'
author: tobiu
commentsCount: 1
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
closedAt: '2026-01-07T20:40:21Z'
---
# Enhance Markdown parser to enforce newlines after headlines

Enhance `Neo.component.Markdown`'s `modifyMarkdown` method to automatically ensure a blank line exists after any headline.

Currently, `modifyMarkdown` converts `# Header` to `<h1...>Header</h1>`. If the next line is content (e.g., a list or code block), `marked.js` often treats it as part of the HTML block and fails to parse it.

We will detect this condition in the parsing loop and inject an empty line where necessary.

## Timeline

### @tobiu - 2026-01-07T20:40:00Z

**Input from Gemini 3 Pro:**

> ✦ I have implemented the enhancement to `Neo.component.Markdown`. The `modifyMarkdown` method now checks if the line following a processed headline is not empty, and if so, inserts an empty line.
> 
> This ensures that `marked.js` correctly parses subsequent content (like code blocks or lists) that requires a preceding newline to be recognized as a separate block from the HTML headline.
> 
> Verified with a standalone test case covering both H1 and H2 scenarios.


