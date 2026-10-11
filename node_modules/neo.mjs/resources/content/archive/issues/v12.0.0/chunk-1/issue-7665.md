---
id: 7665
title: 'Epic: Enhance Knowledge Base MCP with Class Query Tools'
state: CLOSED
labels:
  - enhancement
  - epic
  - stale
  - ai
assignees: []
createdAt: '2025-10-26T13:53:16Z'
updatedAt: '2026-10-09T16:12:41Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7665'
author: tobiu
commentsCount: 3
parentIssue: null
subIssues:
  - '[x] 7664 Docs: Create Codebase Overview Guide'
  - '[x] 7666 Docs: Update AGENTS.md to use new Codebase Overview Guide'
subIssuesCompleted: 2
subIssuesTotal: 2
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-08T04:12:12Z'
---
# Epic: Enhance Knowledge Base MCP with Class Query Tools

To allow for more efficient and precise exploration of the codebase, the knowledge base MCP server should be enhanced with tools for structured queries against the class hierarchy.

This will enable an agent (or other tools) to get specific information about classes without parsing source files or the `class-hierarchy.yaml` file.

**Key Features:**
- An endpoint to retrieve details for a specific class (e.g., `getClass(className)`), returning its parent class, mixins, and configs.
- An endpoint to query for class relationships (e.g., `findClasses({extends: 'Neo.form.field.Base'})`).
- An endpoint to list all classes within a given namespace.

## Timeline

- 2025-10-26T13:53:17Z @tobiu added the `enhancement` label
- 2025-10-26T13:53:17Z @tobiu added the `epic` label
- 2025-10-26T13:53:17Z @tobiu added the `ai` label
- 2025-10-26T13:54:16Z @tobiu added sub-issue #7664
- 2025-10-26T13:54:38Z @tobiu added sub-issue #7666
### @github-actions - 2026-01-25T03:23:25Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-02-08T04:12:11Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-10-09T16:04:40Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T16:12:41Z

#19489 set B · FM / Agent OS · Grace · 2026-10-09: **confirm-close (superseded).** All three asks exist, across two servers. The Knowledge Base's `get_class_hierarchy` returns the engine's inheritance map, and its `root` parameter narrows it to a subtree (the `findClasses({extends})` ask). The Neural Link's `inspect_class` describes one class's configs and reactivity, and `get_namespace_tree` lists a namespace's classes. Read at `neomjs/neo-agent-brain` `dev@2445eb36` and `neomjs/neo-agent-institution` `dev@41068a4`.


