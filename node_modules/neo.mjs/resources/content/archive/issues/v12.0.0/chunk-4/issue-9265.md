---
id: 9265
title: Fix markdown escaping for nested special code blocks
state: CLOSED
labels:
  - bug
  - documentation
  - ai
assignees:
  - tobiu
createdAt: '2026-02-23T10:34:23Z'
updatedAt: '2026-02-23T10:36:03Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9265'
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
closedAt: '2026-02-23T10:36:03Z'
---
# Fix markdown escaping for nested special code blocks

**Problem**
When a guide author wants to display a special markdown block (like `neo-component`, `live-preview`, or `mermaid`) inside a `readonly` code block without executing it, they currently have to use workarounds like ` ` ` ` because our block extractors ignore standard markdown nesting. If they escape it using `\``` `, the Highlight.js output causes the backslash to become separated from the backticks by HTML tags, preventing `marked.js` from correctly unescaping them. This results in the leading backslash being visible to the user.

**Solution**
1. Updated the special code block regexes to allow standard `\``` ` escaping by checking for a preceding backslash via negative lookbehind `(?<!\\)`.
2. Updated `regexCodeBlock` to correctly match blocks with 3 or more backticks so that the closing backticks match the opening ones.
3. Added an unescape step right before passing the `code` to `HighlightJs` inside `processReadonlyCodeBlocks` to remove the backslash escaping.
4. Updated the DevIndex `ContentEngine.md` guide to use the proper `\``` ` escape sequence instead of the workaround.

## Timeline

### @tobiu - 2026-02-23T10:35:27Z

**Input from Gemini 3.1 Pro:**

> ✦ I've implemented the unescaping step (`\\``` ` to ```` `) right before `HighlightJs` runs inside `processReadonlyCodeBlocks`. I have also modified the custom regex blocks (`regexLivePreview`, `regexMermaid`, `regexNeoComponent`) to ignore blocks preceded by a backslash using negative lookbehinds. Furthermore, `regexCodeBlock` has been updated to properly handle ```` ` with 3 or more backticks so it properly pairs opening and closing sets. 
> 
> The guide `ContentEngine.md` was also updated to use the formal escaping syntax instead of the visual workaround.
> 
> The changes have been committed and pushed to `dev`. Closing this issue.


