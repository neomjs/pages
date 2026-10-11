---
id: 6650
title: neo/examples/stateProvider/Table.mjs invokes onStoreLoad  _twice_ ??
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2025-04-15T08:09:08Z'
updatedAt: '2025-04-15T16:38:52Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6650'
author: gplanansky
commentsCount: 2
parentIssue: null
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 2
  signals: []
blockedBy: []
blocking: []
closedAt: '2025-04-15T08:51:31Z'
---
# neo/examples/stateProvider/Table.mjs invokes onStoreLoad  _twice_ ??

Running neo/examples/stateProvider/Table.mjs invokes onStoreLoad  _twice_, hence createViewData is invoked twice.  Shouldn't this only load once?


[QUARANTINED_URL: github.com]

```
    onStoreLoad(data) {
        let me = this;

        if (me.rendered) {
            me.createViewData();
```

[QUARANTINED_URL: github.com]

```
    createViewData() {
        let me                    = this,
            {selectedRows, store} = me,
            countRecords          = store.getCount(),
            i                     = 0,
            rows                  = [];

        for (; i < countRecords; i++) {     /////////   this 
            rows.push(me.createRow({record: store.items[i], rowIndex: i}))
        }
```





## Timeline

### @tobiu - 2025-04-15T08:51:30Z

Hi @gplanansky,

Obviously it should not happen, although the vdom engine will catch it => no duplicate DOM manipulations.

I changed the store internally a bit:
https://github.com/neomjs/neo/blob/dev/src/data/Store.mjs#L435

* `onConstructed()` now triggers a slightly delayed load event, in case there is data.
* so, `beforeSetStore()` inside the table container no longer needs to to this as well.
* double-checked the grid, and it was already adjusted there.

### @gplanansky - 2025-04-15T16:38:52Z

Thanks.  Debugging a data app's event-triggered reload logic, which I use a lot,  gets confounded if core store / table  have their own bug.  I could see the trace going through beforeSetStore, but didn't sort it out.


