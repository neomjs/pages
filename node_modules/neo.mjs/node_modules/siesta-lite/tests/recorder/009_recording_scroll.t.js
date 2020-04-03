describe('Recording scroll activity', function (t) {

    var recorder;

    t.beforeEach(function () {
        recorder && recorder.stop();

        recorder = new Siesta.Recorder.ExtJS({
            window          : window,
            ignoreSynthetic : false,
            
            recordScroll    : true
        })
    })

    t.it('scrolling as the first action', function (t) {
        document.body.innerHTML =
            '<div id="scrollDiv" style="height:200px;background:red;overflow: scroll">' +
                 '<div style="height:4000px;background:red">tall div</div>' +
            '</div>'

        t.chain(
            // test has failed sporadically once, could be because "scrollTop" assignment
            // been done synchronously with "innerHTML" assignment
            { waitFor : 1 },
            
            function (next) {
                recorder.start();
        
                t.query('#scrollDiv')[ 0 ].scrollTop = 100;
                
                next()
            },
        
            {
                waitFor    : function () {
                    return recorder.getRecordedActions().length > 0;
                }
            },

            function () {
                var actions      = recorder.getRecordedActions();
                var scrollParams = actions[ 0 ].value;

                t.expect(actions.length).toBe(1)
                
                t.is(actions[ 0 ].action, 'scrollTo', "Correct name for action")

                t.expect(actions[0].getTarget().target).toBe('#scrollDiv')
                t.expect(typeof scrollParams[ 0 ]).toBe('number')
                t.expect(scrollParams[ 0 ]).toBe(0);
                t.expect(scrollParams[ 1 ]).toBeGreaterThan(0);

                document.body.scrollTop = 0;
            }
        )
    });


    t.it('Should ignore scrolling happening on elements as a side effect', function (t) {
        document.body.innerHTML =
            '<button>Foo</button>' +
            '<div id="outer" style="height:100px;width:200px;overflow:auto">' +
                '<div id="inner" style="width:4000px;background:red">tall div</div>' +
            '</div>'
        
        var button = document.body.querySelector('button');

        button.addEventListener('click', function () {
            document.getElementById('outer').scrollLeft = 50;
        });

        recorder.start();

        t.chain(
            { click : 'button' },

            { waitFor : 1000 },

            function () {
                var actions = recorder.getRecordedActions();

                t.expect(actions.length).toBe(1)
                t.expect(actions[ 0 ].action).toBe('click') // no "scroll" should be recorded
            }
        )
    });
});


