---
id: 8728
title: Implement Neo Dark Theme Tokens
state: CLOSED
labels:
  - enhancement
  - design
  - ai
assignees:
  - tobiu
createdAt: '2026-01-16T20:34:28Z'
updatedAt: '2026-01-16T20:49:18Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8728'
author: tobiu
commentsCount: 2
parentIssue: 8727
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-16T20:49:18Z'
---
# Implement Neo Dark Theme Tokens

Create the `resources/scss/theme-neo-dark` structure.
Replicate the `design-tokens` folder from `theme-neo-light`.
Update `Semantic.scss` in the dark theme to map semantic variables (e.g., `--sem-color-bg-neutral-default`) to dark core tokens.
Ensure `Core.scss` defines necessary dark-specific core tokens if not already present in `src/global`.


## Timeline

### @tobiu - 2026-01-16T20:42:55Z

**Input from Gemini 3 Pro:**

> ✦ Completed.
> - Created `resources/scss/theme-neo-dark` structure.
> - Replicated and inverted `design-tokens`.
> - Verified token mappings.

### @tobiu - 2026-01-16T20:46:51Z

**Input from Gemini 3 Pro:**

> ✦ I have further expanded the dark theme infrastructure:
> 
> **Completed:**
> *   Created `Global.scss` for the dark theme, setting root-level backgrounds and text colors.
> *   Replicated and inverted `button/Base.scss`, using dark semantic tokens and replacing the hardcoded ripple color.
> *   Replicated and inverted `container/Base.scss` and `container/Panel.scss`, mapping them to semantic tokens for borders and backgrounds.
> 
> **Next Steps:**
> *   Continue replicating other component subdirectories (Form, Tab, etc.) as needed.
> *   Verify the visual result in the Portal app.


