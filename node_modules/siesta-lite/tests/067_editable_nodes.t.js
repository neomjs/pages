StartTest(function(t) {
    t.expectGlobal('0')

    t.it('Should support having "contentEditable" attribute with value "true"', function(t) {

        document.body.innerHTML = '<div contentEditable="true" style="background:#ccc" class="foo"></div>';

        t.chain(
            { type : 'foot[BACKSPACE]', target : '.foo' },

            function (next) {
                t.is($('.foo')[ 0 ].innerHTML, 'foo');
                next()
            }
        )
    })

    // see https://code.google.com/p/selenium/issues/detail?id=4801
    // also https://support.saucelabs.com/customer/en/portal/private/cases/31771
    !(t.browser.safari && t.harness.isAutomated) && t.it('Should support just having "contentEditable" attribute', function(t) {

        document.body.innerHTML = '<pre style="background:#aaa;height:30px;width:150px" contentEditable> foo bar baz</pre>';

        t.chain(
            { click : 'pre' },
            { waitForSelector : 'pre:focus' },

            function (next) {
                t.pass('pre was focused');
            }
        )
    })



    t.it('Should support designMode', function(t) {
        var doc
        
        t.chain(
            { waitFor : 1000 },

            function (next) {
                t.expectGlobal('iframe1')
                
                var iframe      = document.createElement('iframe')
                
                iframe.id       = 'iframe1'
                iframe.src      = 'about:blank'
                iframe.setAttribute('width', 300)
                iframe.setAttribute('height', 400)
                
                var cont        = function () {
                    if (iframe.detachEvent) 
                        iframe.detachEvent('onload', cont)
                    else
                        iframe.onload   = null
                        
                    next()
                }
                
                if (iframe.attachEvent) 
                    iframe.attachEvent('onload', cont)
                else
                    iframe.onload   = cont
                
                document.body.innerHTML = '';
                document.body.appendChild(iframe)
            },
            function (next) {
                doc             = document.getElementById('iframe1').contentWindow.document
                
                doc.designMode  = 'on';

                next();
            },

            { click : '#iframe1' },

            { type : 'bart[BACKSPACE]', target : '#iframe1 -> body' },

            function (next) {
                t.todo('Enable when native events are supported', function(t) {
                    t.is(doc.body.innerHTML, 'bar');
                })
            }
        )
    })
});
