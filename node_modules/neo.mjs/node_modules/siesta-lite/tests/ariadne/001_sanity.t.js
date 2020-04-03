StartTest(function(t) {
    
    t.it('Basic sanity', function(t) {
        t.ok(Ariadne, "Ariadne is here")
        
        t.ok(Ariadne.QueryFinder, "Ariadne.QueryFinder is here")
        
        var finder      = new Ariadne.DomQueryFinder()
        
        t.livesOk(function () {
            finder.findQuery(document.body)
        })
    })
    
    
    typeof SVGRect != 'undefined' && t.it('Should not crash processing SVG element', function(t) {
        document.body.innerHTML = '<svg id="svg"><circle id="circle" cx="50" cy="50" r="40" stroke="red" fill="blue" stroke-width="4"></circle></svg>';
        
        var circle      = document.getElementById('circle');
        
        var finder      = new Ariadne.DomQueryFinder()
        
        var queries     = finder.findQueries(circle)
    
        t.isDeeply(queries, [ '#circle' ], 'Correct queries found')
    })
    
})    