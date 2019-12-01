describe('Mouse down/up timing', function (t) {

    t.it('Should not merge events to click action if there is a substantial delay between mousedown/up', function (t) {

        var rec = new Siesta.Recorder.ExtJS({
            window              : t.global,
            ignoreSynthetic     : false,
            clickMergeThreshold : 200
        })

        rec.start();

        t.chain(
            { mousedown : [ 10, 10 ] },
            { waitFor : 1000 },
            { mouseup : null },

            {
                waitFor : function () {
                    return rec.getRecordedActions().length === 2;
                }
            },

            function () {
                var actions = rec.getRecordedActions();

                t.expect(actions.length).toBe(2);
                t.expect(actions[ 0 ].action).toBe('mousedown');
                t.expect(actions[ 1 ].action).toBe('mouseup');

                rec.stop();
            }
        )
    })
})