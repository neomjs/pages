StartTest(function (t) {

    t.it('When clicking on empty space in BODY just an offset should be used', function (t) {
        document.body.style.padding = '50px';

        var recorder            = new Siesta.Recorder.ExtJS({ ignoreSynthetic : false });

        recorder.attach(window);
        recorder.start();

        t.chain(
            { click : [ 10, 10 ] },

            function () {
                var actions = recorder.getRecordedActions();
                
                t.is(actions.length, 1, "One action recorded")
                
                var action  = actions[ 0 ]

                t.is(action.action, 'click');
                
                t.isDeeply(
                    action.getTarget(true).targets, 
                    [
                        {
                            type        : 'xy',
                            target      : [ 10, 10 ]
                        }
                    ],
                    'Correct target extracted'
                );

                t.isDeeply(action.asCode(), "{ click : [10,10] }" );
            }
        )
    });

    t.it('When clicking on a target we should always use target context from mousedown event', function (t) {
        document.body.style.width      = '50px';

        document.body.innerHTML = '<div id="foo" style="background:#999">' +
            '<div class="outer" style="width:40px;height:40px">' +
                '<div class="inner" style="width:20px;height:20px">Bar</div>' +
            '</div>' +
            '<div class="outer" style="width:40px;height:40px">' +
                '<div class="inner" style="width:20px;height:20px">Bar</div>' +
            '</div>' +

            '</div>'
        ;

        var inner = document.getElementsByClassName('inner')[ 0 ];

        inner.addEventListener('mousedown', function () {
            inner.parentNode.className = 'active';
        })

        var recorder = new Siesta.Recorder.ExtJS({ ignoreSynthetic : false });

        recorder.attach(window);
        recorder.start();

        t.chain(
            { click : '.inner' },

            function () {
                var actions = recorder.getRecordedActions();

                t.is(actions.length, 1, "One action recorded")

                var action = actions[ 0 ]

                t.is(action.action, 'click');

                t.isDeeply(
                    action.getTarget(true).targets,
                    [
                        {
                            "type"   : "css",
                            "target" : "#foo .outer:nth-of-type(1) .inner"
                        },
                        {
                            "type"   : "xy",
                            "target" : [ 60, 60 ]
                        }
                    ],
                    'Correct target extracted'
                );
            }
        )
    });

})