StartTest(function(t) {
    
    var finder      = new Ariadne.DomQueryFinder()
    
    var body
    
    t.beforeEach(function () {
        body                        = document.body
        
        body.className              = ''
        body.parentNode.clasName    = ''
    })
    
    var unique      = function (selector) { return body.querySelectorAll(selector)[ 0 ] }

    t.it('basic query', function (t) {
        t.isDeeply(finder.findQueries(body), [ 'body' ])
        t.isDeeply(finder.findQueries(body.parentNode), [ 'html' ])
        
        body.innerHTML = 
            '<a>' +
                '<b>' +
                    '<c></c>' +
                '</b>' +
            '</a>'
        
        t.isDeeply(finder.findQueries(unique('c')), [ 'c' ])
        t.isDeeply(finder.findQueries(unique('b')), [ 'b' ])
        t.isDeeply(finder.findQueries(unique('a')), [ 'a' ])
        
        t.isDeeply(finder.findQueries(unique('b'), unique('a')), [ 'b' ])
    })
    
    
    t.it('basic query', function (t) {
        
        body.innerHTML = 
            '<a>' +
                '<b>' +
                    '<c></c>' +
                '</b>' +
            '</a>' +
            '<b>' +
                '<c></c>' +
            '</b>'
        
        t.isDeeply(finder.findQueries(unique('a c')), [ 'a c' ])
        
        t.isDeeply(finder.findQueries(unique('a c'), unique('a')), [ 'c' ])
        

        body.innerHTML = 
            '<a>' +
                '<b>' +
                    '<c>' +
                        '<d></d>' +
                    '</c>' +
                    '<d></d>' +
                '</b>' +
                '<b></b>' +
            '</a>' +
            '<c>' +
                '<d></d>' +
            '</c>' +
            '<b>' +
                '<d></d>' +
            '</b>'
        
        t.isDeeply(finder.findQueries(unique('a c d')), [ 'a c d' ])

        
        body.innerHTML = 
            '<a>' +
                '<b>' +
                    '<c id="c1"></c>' +
                '</b>' +
            '</a>' +
            '<b>' +
                '<c></c>' +
            '</b>'
        
        t.isDeeply(finder.findQueries(unique('#c1')), [ '#c1' ])
    })
    
    
    t.it('Mandatory Id', function (t) {
        body.innerHTML = 
            '<a>' +
                '<b id="b1">' +
                    '<c></c>' +
                '</b>' +
            '</a>'
        
        t.isDeeply(finder.findQueries(unique('c')), [ '#b1 c' ])
        
        var finder2 = new Ariadne.DomQueryFinder({ enableMandatoryId : false })
        
        t.isDeeply(finder2.findQueries(unique('c')), [ 'c' ])
    })
    
    
    t.it('Correct path weight even if some segment is re-used in the query because of the partial match', function (t) {
        
        body.innerHTML = 
            '<a>' +
                '<b>' +
                    '<c>' +
                        '<d></d>' +
                    '</c>' +
                    '<d></d>' +
                '</b>' +
                '<c></c>' +
            '</a>' +
            '<a></a>' +
            '<b></b>' +
            '<c></c>'
            
        var queries     = finder.findQueries(unique('c d'), null, { detailed : true })
        
        t.isDeeply(queries, [ t.any() ], "One query")
        
        t.isDeeply(queries[ 0 ].query, 'c d', "Correct query found")
        
        t.isDeeply(queries[ 0 ].weight, 2000, "Correct path weight")
    })    
    
    
    t.it('Non-unique results filtering', function (t) {
        
        body.innerHTML = 
            '<c class="z">' +
                '<d>' +
                    '<e class="z">' +
                        '<f target=true></f>' +
                    '</e>' +
                    '<e>' +
                        '<f></f>' +
                    '</e>' +
                    '<e>' +
                        '<f></f>' +
                    '</e>' +
                '</d>' +
            '</c>' +
            '<d></d>' +
            '<c></c>'
            
        var queries     = finder.findQueries(unique('[target=true]'))
        
        // should not find naive ".z f" query
        t.isDeeply(queries, [ 'e.z f' ], 'Correct queries found')
    })    
    
    
    t.it('Non-unique results filtering', function (t) {
        body.innerHTML = 
            '<e>' +
                '<e>' +
                    '<f target=true></f>' +
                '</e>' +
                '<e>' +
                    '<f></f>' +
                '</e>' +
                '<e>' +
                    '<f></f>' +
                '</e>' +
            '</e>'
            
        var queries     = finder.findQueries(unique('[target=true]'))
        
        t.isDeeply(queries, [ 'e e:nth-of-type(1) f' ], 'Correct queries found')
    })

    
    t.it('Non-unique results filtering', function (t) {
        body.innerHTML = 
            '<e class="z">' +
                '<e class="z">' +
                    '<f target=true></f>' +
                '</e>' +
                '<e>' +
                    '<f></f>' +
                '</e>' +
                '<e>' +
                    '<f></f>' +
                '</e>' +
            '</e>'
            
        var queries     = finder.findQueries(unique('[target=true]'))
        
        t.isDeeply(queries, [ '.z .z f', 'e .z f' ], 'Correct queries found')
    })        
    
    
    t.it('Should prefer just a tag name for <body> and <html>', function (t) {
        body.innerHTML  = ''
        body.className  = 'z'
            
        var queries     = finder.findQueries(document.body)
        
        t.isDeeply(queries, [ 'body' ], 'Correct queries found')
    })
    
    
    t.it('Should prefer just a tag name for <body> and <html>', function (t) {
        body.innerHTML              = ''
        body.parentNode.className   = 'z'
            
        var queries     = finder.findQueries(document.documentElement)
        
        t.isDeeply(queries, [ 'html' ], 'Correct queries found')
    })    
})    