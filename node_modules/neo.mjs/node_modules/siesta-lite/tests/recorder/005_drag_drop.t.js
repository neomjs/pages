describe('Drag tests', function (t) {


    t.it('Dragging < 3px should not count as drag, if mouseup el is or is within mousedown el', function (t) {
        document.body.innerHTML = '<div id="foo" style="width:10px;height:10px;position:absolute;top:0;left:0">bar</div>'
        var rec = new Siesta.Recorder.ExtJS({
            window          : t.global,
            ignoreSynthetic : false,
            recordOffsets   : false
        })

        rec.start();

        t.chain(
            { drag : [1, 1], to : [4, 4] },

            function () {
                var actions = rec.getRecordedActions();

                t.is(actions.length, 1);
                t.is(actions[0].action, 'click');
                t.isDeeply(actions[0].getTarget(), { type : 'css', target : '#foo' });

                rec.stop();
            }
        )
    })

    // https://app.assembla.com/spaces/bryntum/tickets/3353---39-click--39--event-incorrectly-recorded-after-complex-drag-scenario/details#
    t.it('Drag action should not produce drag+click', function (t) {
        document.body.innerHTML = '<div id="foo" style="width:10px;height:10px;position:absolute;top:0;left:0;border:1px solid">bar</div>'

        var rec = new Siesta.Recorder.ExtJS({
            window          : t.global,
            ignoreSynthetic : false,
            recordOffsets   : false
        })

        rec.start();

        t.chain(
            { drag : [3, 3], to : [20, 20], dragOnly : true },

            { waitForEvent : [rec, 'actionadd'] },

            { mouseUp : null },

            function () {
                var actions = rec.getRecordedActions();

                t.is(actions.length, 3);
                t.is(actions[0].action, 'mousedown');
                t.is(actions[1].action, 'moveCursorTo');
                t.is(actions[2].action, 'mouseup');

                rec.stop();
            }
        )
    })


    t.it('Drag action should produce mousedown + mouseup', function (t) {
        document.body.innerHTML = '<div id="foo" style="width:50px;height:50px;position:absolute;top:0;left:0;border:1px solid">bar</div>'

        var rec = new Siesta.Recorder.ExtJS({
            window          : t.global,
            ignoreSynthetic : false,
            recordOffsets   : false
        })

        rec.start();

        t.chain(
            { drag : [ 3, 3 ], to : [ 20, 20 ] },

            function () {
                var actions = rec.getRecordedActions();

                t.is(actions.length, 2);
                t.is(actions[ 0 ].action, 'mousedown');
                t.isDeeply(actions[ 0 ].getTarget(), { type : 'css', target : '#foo', offset : [ 3, 3 ] });

                t.is(actions[ 1 ].action, 'mouseup');
                t.isDeeply(actions[ 1 ].getTarget(), { type : 'xy', target : [ 20, 20 ] });

                rec.stop();
            }
        )
    })

    t.it('Drag action should produce mousedown + mouseup if 1px diff', function (t) {
        document.body.innerHTML = '<div id="foo" style="width:50px;height:50px;position:absolute;top:0;left:0;border:1px solid">bar</div>'

        var rec = new Siesta.Recorder.ExtJS({
            window             : t.global,
            ignoreSynthetic    : false,
            recordOffsets      : false,
            dragPixelThreshold : 0
        })

        rec.start();

        t.chain(
            { drag : [ 3, 3 ], to : [ 3, 4 ] },

            function () {
                var actions = rec.getRecordedActions();

                t.is(actions.length, 2);
                t.is(actions[ 0 ].action, 'mousedown');
                t.isDeeply(actions[ 0 ].getTarget(), { type : 'css', target : '#foo', offset : [ 3, 3 ] });

                t.is(actions[ 1 ].action, 'mouseup');
                t.isDeeply(actions[ 1 ].getTarget(), { type : 'xy', target : [ 3, 4 ] });

                rec.stop();
            }
        )
    })

})
