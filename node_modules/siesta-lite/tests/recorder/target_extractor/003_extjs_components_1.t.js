// tests with typing should use sequential run core in general
StartTest({ runCore : 'sequential' }, function (t) {

    t.it('Should produce expected output for a simple mouse scenario', function (t) {
        var win = new Ext.window.Window({
            x           : 0,
            y           : 0,
            height      : 200,
            width       : 100,
            html        : 'foo',
            buttons     : [
                {
                    text    : 'OK'
                }
            ]
        }).show();

        var recorder            = new Siesta.Recorder.ExtJS({ ignoreSynthetic : false });

        recorder.attach(window);
        recorder.start();

        t.chain(
            { click : win.down('button')},

            function (next) {
                var recordedActions     = recorder.getRecordedActions();

                t.is(recordedActions.length, 1);
                t.is(recordedActions[ 0 ].action, 'click', 'action ok');
                t.is(recordedActions[ 0 ].target.activeTarget, 'csq', 'target type ok');

                recorder.stop();
                win.destroy();
            }
        );
    })

    t.it('Should produce expected output for a simple mouse scenario', function (t) {
        var win = new Ext.window.Window({
            itemId      : 'win',
            x           : 0,
            y           : 0,
            height      : 200,
            width       : 100,
            html        : 'foo',
            title       : 'title',
            buttons     : [
                {
                    id      : 'btn',
                    text    : 'hit me'
                }
            ]
        }).show();

        var recorder            = new Siesta.Recorder.ExtJS({ ignoreSynthetic : false });

        recorder.attach(window);
        recorder.start();

        t.chain(
            { drag : '>>#win header', by : [ 50, 20 ] },

            function (next) {
                var recordedActions     = recorder.getRecordedActions();

                t.is(recordedActions.length, 2);
                t.is(recordedActions[ 0 ].action, 'mousedown');
                t.is(recordedActions[ 1 ].action, 'mouseup');

                next()
            },

            { click : '#btn' },

            function(next) {
                var recordedActions     = recorder.getRecordedActions();

                t.is(recordedActions.length, 3);
                t.is(recordedActions[ 0 ].action, 'mousedown');
                t.is(recordedActions[ 1 ].action, 'mouseup');
                t.is(recordedActions[ 2 ].action, 'click', 'click coalesced ok');

                next()
            },

            { drag : '>>#win header', by : [ -40, -10 ] },

            function () {
                recorder.stop();
                
                var recordedActions     = recorder.getRecordedActions();

                t.is(recordedActions.length, 5);
                t.is(recordedActions[ 0 ].action, 'mousedown');
                t.is(recordedActions[ 1 ].action, 'mouseup');
                t.is(recordedActions[ 2 ].action, 'click', 'click coalesced ok');
                t.is(recordedActions[ 3 ].action, 'mousedown');
                t.is(recordedActions[ 4 ].action, 'mouseup');
                
                var steps           = recorder.getRecordedActionsAsSteps()

                t.subTest('Generated steps', function (t) {

                    var step0           = steps[ 0 ]
                    var step1           = steps[ 1 ]
                    var step5           = steps[ 4 ]

                    t.is(step0.action, 'mousedown', 'mousedown');
                    t.is(step1.action, 'mouseup', 'mouseup');
                    t.isApprox(step1.target[0], 100, 'mouseup target x');
                    t.isApprox(step1.target[1], 40, 10, 'mouseup target y');

                    t.is(step0.target, "#win title[text=title] => .x-title-text", 'drag target');

                    t.is(steps[ 2 ].action, 'click');

                    t.is(steps[ 4 ].action, 'mouseup', 'mouseup #2');
                    t.isApprox(step5.target[0], 60, 5, 'mouseup target x');
                    t.isApprox(step5.target[1], 30, 10, 'mouseup target y');
                });

                //t.contentLike(recorderPanel.down('gridview').getCell(0, recorderPanel.down('targetcolumn')), 'by: [50,20]')

//                // Reset window position
//                win.setPosition(0, 0);
//
//                t.chain(
//                    steps,
//
//                    function() {
//                        t.hasPosition(win, 10, 10);
//                        t.is(recorderPanel.store.getCount(), 3);
//
//                        if (t.getFailCount() === 0) {
//                            recorderPanel.destroy();
//                            win.destroy();
//                        }
//                    }
//                );
            }
        );
    })

    t.it('Should produce expected output when typing', function (t) {
        var txt         = new Ext.form.TextField({
            renderTo    : document.body,
            id          : 'txt'
        });
        
        txt.focus(true);

        var recorder            = new Siesta.Recorder.ExtJS({ ignoreSynthetic : false });

        recorder.attach(window);
        recorder.start();

        t.chain(
            { waitFor : 500 },

            { type : 'foo[BACKSPACE]123,.', target : '>>#txt' },

            function (next) {
                recorder.stop();
                
                var recordedActions     = recorder.getRecordedActionsAsSteps();

                t.is(recordedActions.length, 1, '1 type operation')
                t.is(recordedActions[ 0 ].action, 'type', '1 type operation')
                t.is(recordedActions[ 0 ].text, 'foo[BACKSPACE]123,.')

                t.is(txt.getValue(), 'fo123,.');

                txt.setValue('');

                t.diag('Playback');

                t.chain(
                    recordedActions,

                    function () {
                        var record = recordedActions[0];

                        t.is(txt.getValue(), 'fo123,.');

                        recorder.stop();
                    }
                )
            }
        )
    })
})