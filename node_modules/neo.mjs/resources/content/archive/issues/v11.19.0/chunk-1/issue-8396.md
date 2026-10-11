---
id: 8396
title: Enhance Markdown parser to support implicit readonly code blocks
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-01-07T20:46:06Z'
updatedAt: '2026-01-07T20:55:13Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8396'
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
closedAt: '2026-01-07T20:55:13Z'
---
# Enhance Markdown parser to support implicit readonly code blocks

Update `Neo.component.Markdown` to treat all code blocks as `readonly` by default, removing the requirement for the explicit `readonly` flag.

1.  **Parsing Order**: `live-preview`, `neo-component`, and `mermaid` blocks are already parsed first and replaced with placeholders.
2.  **Generic Fallback**: The parser will then match any remaining triple-backtick code blocks.
3.  **Implicit Readonly**: These blocks will be processed as readonly code blocks with syntax highlighting.
4.  **Default Language**: If no language is specified (e.g. just ` ``` `), it will default to `plaintext`.

This simplifies writing markdown for the portal and release notes.

## Timeline

### @tobiu - 2026-01-07T20:54:53Z

**Input from Gemini 3 Pro:**

> ✦ I have enhanced `Neo.component.Markdown` to support implicit readonly code blocks.
> 
> **Changes:**
> 1.  **Generic Regex:** Replaced the restricted `regexReadonly` with a generic `regexCodeBlock` that matches any triple-backtick block.
> 2.  **Implicit Readonly:** All code blocks are now processed as readonly blocks by default (after `live-preview` and other special blocks are extracted).
> 3.  **Smart Defaults:** If a language is not specified (e.g. ` ``` `) or is `text`, it defaults to `plaintext`.
> 4.  **Robust Error Handling:** The parser now catches errors from `HighlightJS` (e.g., if an unknown language is specified like ` ```java `) and automatically falls back to `plaintext` highlighting, preventing parser crashes.
> 
> This simplifies writing markdown for the Portal and Release Notes, as `readonly` flags are no longer required.


