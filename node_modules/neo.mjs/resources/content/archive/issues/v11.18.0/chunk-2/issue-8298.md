---
id: 8298
title: '[Neural Link] Implement toJSON in form.field.Picker'
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-01-03T13:21:33Z'
updatedAt: '2026-01-03T19:11:31Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8298'
author: tobiu
commentsCount: 0
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
closedAt: '2026-01-03T19:11:31Z'
---
# [Neural Link] Implement toJSON in form.field.Picker

# [Neural Link] Implement toJSON in form.field.Picker

Implement `toJSON` serialization for `Neo.form.field.Picker`.

**Scope:**
Export the following configs and properties:
- `clientRects`
- `picker`: Serialized picker instance (`me.picker?.toJSON()`)
- `pickerConfig`: Serialized picker config (`me.serializeConfig(me.pickerConfig)`)
- `pickerHeight`
- `pickerIsMounted`
- `pickerMaxHeight`
- `pickerWidth`
- `showPickerOnFocus`

**Implementation Details:**
- Ensure `pickerConfig` uses `serializeConfig` to handle class references properly.
- Ensure `picker` instance is optionally serialized (only if it exists).
- Include `...super.toJSON()` to inherit `Text` field properties.

**Goal:**
Standardize serialization for Neural Link.

