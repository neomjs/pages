---
id: 8070
title: Enhance MonacoEditor validation and LivePreview language mapping
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-12-09T15:13:59Z'
updatedAt: '2025-12-09T15:27:21Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8070'
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
closedAt: '2025-12-09T15:27:21Z'
---
# Enhance MonacoEditor validation and LivePreview language mapping

Improve language handling in `Neo.component.wrapper.MonacoEditor` and `Neo.code.LivePreview`.

**Neo.component.wrapper.MonacoEditor:**
1.  Add `static languages = ['javascript', 'markdown']`.
2.  Implement `beforeSetLanguage` to validate the value against the `static languages` array using `beforeSetEnumValue`.

**Neo.code.LivePreview:**
1.  In `afterSetLanguage`, map the local language value `'neomjs'` to `'javascript'` before passing it to the embedded `MonacoEditor` component.
    *   `'neomjs'` -> `'javascript'`
    *   `'markdown'` -> `'markdown'`

This keeps `MonacoEditor` agnostic of the `'neomjs'` term while ensuring valid language configuration.

## Timeline

### @tobiu - 2025-12-09T15:25:55Z

**Input from Gemini Agent:**

> ✦ I have completed the implementation for this enhancement.
> 
> **Changes:**
> 1.  **Neo.component.wrapper.MonacoEditor:**
>     -   Added `static languages = ['javascript', 'markdown']`.
>     -   Implemented `beforeSetLanguage` to validate input against the allowed languages.
> 
> 2.  **Neo.code.LivePreview:**
>     -   Updated `afterSetLanguage` to map `'neomjs'` to `'javascript'` before passing the configuration to the child editor component.
>     -   This leverages `getItem()`'s ability to modify uninstantiated config objects, ensuring the correct language is set during initialization.
> 
> The code changes have been pushed directly to the repository.


