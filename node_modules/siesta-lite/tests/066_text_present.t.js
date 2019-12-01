StartTest(function(t) {

    t.it('waitForTextPresent', function(t) {

        t.chain(
            function(next) {
                t.waitForTextPresent('foo', next)

                document.body.innerHTML = 'foo';
            },
            
            { waitFor : 100 },

            function(next) {
                t.waitForTextNotPresent('foo', next)

                document.body.innerHTML = 'bar';
            },

            function(next) {
                t.pass('All seems well')
            }
        )
    })
    
    
    t.it('Escaped dom queries', function (t) {
        var div         = document.createElement('div')
        
        var text        = '{"status":404,"url":"wrongurl.js?_dc=1478083889433","duration":689,"type":"ajaxerror","responseText":"&lt;!DOCTYPE HTML PUBLIC \"-//IETF//DTD HTML 2.0//EN\"&gt;'
        
        div.innerText   = text
        
        document.body.appendChild(div)
        
        t.chain(
            { click : 'div:contains(\{\"status\"\:404\,\"url\"\:\"wrongurl\.)' },
            
            { click : 'div:textEquals(' + text + ')' }
        )
    })
});
