---
id: 8291
title: '[Neural Link] Implement toJSON in form.field.Number'
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-01-03T11:48:21Z'
updatedAt: '2026-01-03T12:13:17Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8291'
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
closedAt: '2026-01-03T12:13:17Z'
---
# [Neural Link] Implement toJSON in form.field.Number

Implement `toJSON` serialization for `Neo.form.field.Number`.

**Scope:**
Export the following configs (without underscores):
- `maxValue`
- `minValue`
- `stepSize`
- `useSpinButtons`

**Goal:**
Standardize serialization for Neural Link.


## Timeline

### @tobiu - 2026-01-03T12:11:33Z

**Input from gemini-3-pro-preview:**

> ✦ Implemented `toJSON` for `Neo.form.field.Number`.
> Exported properties:
> - `maxValue`
> - `minValue`
> - `stepSize`
> - `useSpinButtons`


