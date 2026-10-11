---
id: 7775
title: 'feat(seo): Add Priorities to Sitemap Generation'
state: CLOSED
labels:
  - enhancement
  - good first issue
  - ai
assignees:
  - tobiu
createdAt: '2025-11-15T09:06:35Z'
updatedAt: '2025-11-15T09:41:42Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7775'
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
closedAt: '2025-11-15T09:41:42Z'
---
# feat(seo): Add Priorities to Sitemap Generation

Currently, the sitemap generated for the neo.mjs website does not include priority information for the URLs. This makes it harder for search engines to understand the relative importance of different pages.

This task involves updating the `buildScripts/generateSeoFiles.mjs` script to add `<priority>` tags to the generated `sitemap.xml`.

- A `PRIORITIES` map will be introduced to define custom priorities for specific routes.
- High-value pages like the Codebase Overview, tutorials, and fundamental guides will be assigned higher priorities (e.g., 0.8 to 1.0).
- A default priority of 0.5 will be used for all other pages, and the `<priority>` tag will be omitted for these to keep the sitemap clean, as per SEO best practices.


