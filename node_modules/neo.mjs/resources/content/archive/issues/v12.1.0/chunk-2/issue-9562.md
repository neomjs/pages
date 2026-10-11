---
id: 9562
title: Implement Generic OIDC Discovery and Google OAuth Hands-on Guide
state: CLOSED
labels:
  - documentation
  - enhancement
  - developer-experience
  - ai
assignees:
  - tobiu
createdAt: '2026-03-26T14:39:03Z'
updatedAt: '2026-03-26T14:55:16Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9562'
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
closedAt: '2026-03-26T14:55:03Z'
---
# Implement Generic OIDC Discovery and Google OAuth Hands-on Guide

Enhance the MCP server authorization to support generic OIDC providers and provide a concrete \"hands-on\" guide for Google OAuth integration.

**Goal:** 
Enable developers to secure Neo.mjs MCP servers using public identity providers without needing to understand the underlying URL structures.

**Scope:**
1.  **Code Enhancement:** 
    -   Update `aiConfig.mjs` to support `AUTH_ISSUER_URL`.
    -   In `Server.mjs`, implement OIDC Discovery: fetch `{issuer}/.well-known/openid-configuration` to dynamically resolve `token_endpoint`, `introspection_endpoint`, etc.
    -   Retain the existing Keycloak-path logic as a fallback for `AUTH_REALM` based configs.
2.  **Hands-on Guide:**
    -   Create `learn/guides/mcp/GoogleAuthDemo.md`.
    -   Provide step-by-step setup for Google Cloud Console (Client ID/Secret, Authorized Redirect URIs).
    -   Show the exact `.env` configuration needed.
    -   Explain the \"Audience\" mapping for Google (which can be tricky).

## Timeline

### @tobiu - 2026-03-26T14:55:15Z

Implemented dynamic OIDC discovery via AUTH_ISSUER_URL. Created Google OAuth hands-on guide and updated navigation. Verified with functional tests.


