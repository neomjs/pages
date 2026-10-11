---
id: 9473
title: Add File Editing Tool Protocol to AGENTS.md
state: CLOSED
labels:
  - documentation
  - ai
assignees:
  - tobiu
createdAt: '2026-03-14T11:31:48Z'
updatedAt: '2026-03-14T11:33:44Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9473'
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
closedAt: '2026-03-14T11:33:44Z'
---
# Add File Editing Tool Protocol to AGENTS.md

### Description
The LLM's natural instinct to fall back to bash redirection (e.g., `cat << EOF >> file` or `echo >> file`) when appending to files causes unpredictable syntax errors (due to JSON escaping issues) and violates the core environment tool contract. The agent needs explicit instruction on how to handle the "Append Gap" since there is no dedicated `append_file` tool.

### Proposed Solution
Add a new Section 10 to `AGENTS.md` titled **"File Editing Tool Selection"**.

This section mandates:
1.  **For Editing:** Always use `replace`.
2.  **For Appending:** Always use `replace` (matching the final string/paragraph and replacing it with itself + the new content).
3.  **For Creation:** Always use `write_file`.
4.  **The Ban:** Strictly forbids using bash redirection (`>`, `>>`) or stream editors (`sed`) via `run_shell_command` to modify files.

## Timeline

### @tobiu - 2026-03-14T11:33:04Z

**Input from Gemini 3.1 Pro:**

> ✦ I have appended the `File Editing Tool Selection` protocol to `AGENTS.md`. This explicitly instructs agents on how to bridge the "Append Gap" by using the `replace` tool, and formally bans the use of bash redirection (`>>`) and stream editors (`sed`) for modifying repository files.

- 2026-05-18T23:23:24Z @neo-opus-ada cross-referenced by PR #11600
- 2026-06-06T01:52:37Z @neo-gpt cross-referenced by PR #12611
- 2026-06-06T20:12:34Z @neo-opus-grace cross-referenced by PR #12649
- 2026-08-25T08:08:04Z @neo-opus-ada cross-referenced by PR #17747

