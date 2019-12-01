StartTest(function(t) {
    
    var finder      = new Ariadne.DomQueryFinder()
    var body        = document.body
    
    var unique      = function (selector) { return body.querySelectorAll(selector)[ 0 ] }

    t.it('Direct child', function (t) {
        body.innerHTML = 
            '<f target=true></f>' +
            '<f></f>' +
            '<f></f>' +
            '<e></e>' +
            '<e>' +
                '<f></f>' +
            '</e>' +
            '<e></e>'
            
        var queries     = finder.findQueries(unique('[target=true]'))
        
        t.isDeeply(queries, [ 'body > f:nth-of-type(1)' ])
    })
    
    
    t.it('Direct child', function (t) {
        body.innerHTML = 
            '<f>' +
                '<c>' +
                    '<d target=true></d>' +
                '</c>' +
            '</f>' +
            '<f></f>' +
            '<f></f>' +
            '<e></e>' +
            '<e>' +
                '<f></f>' +
            '</e>' +
            '<c>' +
                '<d></d>' +
            '</c>'
            
        var queries     = finder.findQueries(unique('[target=true]'))
        
        t.isDeeply(queries, [ 'body > f:nth-of-type(1) d' ])
    })
    
    
    t.it('Direct child', function (t) {
        body.innerHTML = 
            '<f>' +
                '<c>' +
                    '<d target=true></d>' +
                    '<d></d>' +
                    '<c>' +
                        '<d></d>' +
                    '</c>' +
                '</c>' +
                '<c>' +
                    '<d></d>' +
                    '<c></c>' +
                '</c>' +
                '<f></f>' +
            '</f>' +
            '<f></f>' +
            '<f></f>' +
            '<e></e>' +
            '<e>' +
                '<f></f>' +
            '</e>' +
            '<c>' +
                '<d></d>' +
            '</c>'
            
        var queries     = finder.findQueries(unique('[target=true]'))
        
        t.isDeeply(queries, [ 'body > f:nth-of-type(1) > c:nth-of-type(1) > d:nth-of-type(1)' ])
    })
    
    
    t.it('Should not throw exception from DirectChild identifier', function (t) {
        body.innerHTML = 
            '<f target=true></f>' +
            '<f></f>' +
            '<f></f>' +
            '<e></e>' +
            '<e>' +
                '<f></f>' +
            '</e>' +
            '<e></e>'
            
        var queries     = finder.findQueries(unique('[target=true]'), body)
        
        t.isDeeply(queries, [])
    })    
})    