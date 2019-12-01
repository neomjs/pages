StartTest(function(t) {
    
    var finder      = new Ariadne.DomQueryFinder()
    var body        = document.body
    
    var unique      = function (selector) { return body.querySelectorAll(selector)[ 0 ] }

    t.it('Just position', function (t) {
        body.innerHTML = 
            '<f></f>' +
            '<f target=true></f>' +
            '<f></f>'
            
        var queries     = finder.findQueries(unique('[target=true]'), body)
        
        t.isDeeply(queries, [ ':nth-of-type(2)' ])
    })

    
    t.it('Position with another segment', function (t) {
        body.innerHTML = 
            '<f></f>' +
            '<f target=true></f>' +
            '<f></f>' +
            '<e></e>' +
            '<e></e>' +
            '<e></e>'
            
        var queries     = finder.findQueries(unique('[target=true]'), body)
        
        t.isDeeply(queries, [ 'f:nth-of-type(2)' ])
    })
    

    t.it('Position with another segment', function (t) {
        body.innerHTML = 
            '<f target=true></f>' +
            '<f></f>' +
            '<f></f>' +
            '<e></e>' +
            '<e></e>' +
            '<e></e>'
            
        var queries     = finder.findQueries(unique('[target=true]'), body)
        
        t.isDeeply(queries, [ 'f:nth-of-type(1)' ])
    })    
})    