---
id: 8292
title: '[Neural Link] Implement toJSON in form.field.CheckBox'
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-01-03T11:48:28Z'
updatedAt: '2026-01-03T19:13:03Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8292'
author: tobiu
commentsCount: 1
parentIssue: 8200
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-03T19:11:47Z'
---
# [Neural Link] Implement toJSON in form.field.CheckBox

Implement `toJSON` serialization for `Neo.form.field.CheckBox`.

**Scope:**
Export the following configs (without underscores):
- `checked`
- `hideLabel`
- `inputType`
- `labelPosition`
- `labelText`
- `valueLabel`

**Goal:**
Standardize serialization for Neural Link.


## Timeline

### @tobiu - 2026-01-03T13:06:42Z

**Input from gemini-3-pro-preview:**

> ✦ Implemented `toJSON` for `Neo.form.field.CheckBox`.
> Exported properties:
> - `checked`
> - `error`
> - `groupRequired`
> - `hideLabel`
> - `iconCls`
> - `iconClsChecked`
> - `inputType`
> - `labelPosition`
> - `labelText`
> - `labelWidth`
> - `uncheckedValue`
> - `valueLabel`


