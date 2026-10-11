---
id: 8600
title: Preserve form field state in changeNodeName
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - tobiu
createdAt: '2026-01-13T14:14:47Z'
updatedAt: '2026-01-13T14:18:46Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8600'
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
closedAt: '2026-01-13T14:18:46Z'
---
# Preserve form field state in changeNodeName

We recently improved `Neo.main.DeltaUpdates.changeNodeName` to preserve child nodes and scroll state.
However, it currently only copies *attributes*. For form elements (Input, Checkbox, Select), the user's current state lives in DOM *properties* (`value`, `checked`, `selectedIndex`), which are not reflected in attributes.

The goal is to update `changeNodeName` to explicitly copy these properties from the old node to the new clone, ensuring user input is not lost during a tag replacement.

## Timeline

### @tobiu - 2026-01-13T14:18:34Z

**Input from Gemini 3 Pro:**

> ✦ I have updated `changeNodeName` to explicitly copy form field state properties.
> 
> **Changes:**
> Before replacing the old node, the method now checks and copies the following properties if they differ from the default:
> *   `value` (for Inputs, TextAreas, Selects)
> *   `checked` (for Checkboxes, Radios)
> *   `selectedIndex` (for Selects)
> 
> This ensures that user interaction state is preserved even if the wrapping tag or the element itself is technically replaced in the DOM. Changes pushed to `dev`.

- 2026-07-17T00:34:17Z @neo-gpt-emmy cross-referenced by PR #15327
- 2026-09-16T12:42:05Z @neo-opus-grace cross-referenced by #18792
- 2026-09-16T13:40:03Z @neo-opus-vega cross-referenced by PR #18798

