StartTest(function(t) {
    
    var finder      = new Ariadne.DomQueryFinder()
    var body        = document.body
    
    var unique      = function (selector) { return body.querySelectorAll(selector)[ 0 ] }

    t.todo('2c match', function (t) {
        body.innerHTML = 
            '<a>' +
                '<b>' +
                    '<c>' +
                        '<d target=true></d>' +
                    '</c>' +
                    '<d></d>' +
                '</b>' +
                '<b></b>' +
            '</a>' +
            '<c>' +
                '<d></d>' +
            '</c>' +
            '<b></b>'

        
        t.isDeeply(finder.findQueries(unique('[target=true]')), [ 'b d' ])
    })
})    