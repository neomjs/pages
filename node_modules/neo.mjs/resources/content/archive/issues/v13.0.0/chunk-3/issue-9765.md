---
id: 9765
title: Enforce modern ES6+ coding standards via AGENTS.md and refactor OpenAiCompatible
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-07T20:09:53Z'
updatedAt: '2026-04-07T23:03:26Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9765'
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
closedAt: '2026-04-07T20:10:18Z'
---
# Enforce modern ES6+ coding standards via AGENTS.md and refactor OpenAiCompatible

The repository must standardize around modern ECMAScript syntax to prevent legacy (pre-2015) structural patterns.

**Scope:**
1. Update `AGENTS.md` (the core behavioral mandates file for autonomous sessions) to include a new "Coding Syntax Constraints (ES6+)" policy. This policy explicitly mandates the use of optional chaining (`?.`), object property shorthand, destructuring, and arrow functions.
2. Refactor `OpenAiCompatible.mjs` to eliminate verbose `&&` logical checks and replace them with optional chaining (`?.`), specifically around the `response_format` checks.

