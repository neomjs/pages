---
id: 8302
title: '[Neural Link] Enhance core.Base.serializeConfig to handle Neo Instances'
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-01-03T19:46:36Z'
updatedAt: '2026-01-03T19:48:13Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8302'
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
closedAt: '2026-01-03T19:48:13Z'
---
# [Neural Link] Enhance core.Base.serializeConfig to handle Neo Instances

Current `serializeConfig` implementation handles classes (constructors) but does not detect Neo instances.
This creates circular dependency risks when serializing configs that contain instance references (e.g. `KeyNavigation` scopes).

**Task:**
Update `Neo.core.Base.prototype.serializeConfig` to check for Neo instances.

**Implementation:**
- Check if `value instanceof Neo.core.Base` (or uses `isInstance` symbol if accessible, or `value.isClass` check).
- If instance: return lightweight reference `{ className: value.className, id: value.id }`.
- Ensure it still handles Arrays and Objects recursively.

**Value:**
- Prevents circular dependencies in `toJSON` outputs.
- Standardizes instance references in serialized configs.

## Timeline

- 2026-01-03T19:51:35Z @tobiu cross-referenced by #8301

