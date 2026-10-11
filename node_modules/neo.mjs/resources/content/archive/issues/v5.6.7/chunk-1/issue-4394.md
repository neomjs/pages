---
id: 4394
title: 'form.field.ZipCode: countryKeyProperty'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2023-05-08T17:03:34Z'
updatedAt: '2023-05-08T17:04:12Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4394'
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
closedAt: '2023-05-08T17:04:12Z'
---
# form.field.ZipCode: countryKeyProperty

it is not sufficient to rely on the valueField of a country SelectField to contain the data for a given country code. custom data.Models can have different fields for the id and the code.

