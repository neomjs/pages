StartTest(function(t) {
    
    var finder      = new Ariadne.DomQueryFinder()

    
    t.it('combineSegments', function (t) {
        
        var query   = finder.combineSegments([])
        
        t.is(query.query, '')
        
        
        var query   = finder.combineSegments([ 
            { index : 0, query : '.css_class1', id : 1, weight : 1000 }, 
            { index : 0, query : '.css_class2', id : 2, weight : 1000 }
        ])
        
        t.is(query.query, '.css_class1.css_class2')
        t.is(query.weight, 2000)

        
        var query   = finder.combineSegments([ 
            { index : 1, query : '.css_class2', id : 2, weight : 1000 },
            { index : 1, query : '.css_class2', id : 2, weight : 1000 }, // duplicate, should not be used
            { index : 0, query : '.css_class1', id : 1, weight : 1000 }
        ])
        
        t.is(query.query, '.css_class2 .css_class1')
        t.is(query.weight, 2000)
        
        
        var query   = finder.combineSegments([ 
            { index : 0, query : '.css_class1', id : 1 }, { index : 0, query : '.css_class2', id : 2, leading : true }
        ])
        
        t.is(query.query, '.css_class2.css_class1')

        
        var query   = finder.combineSegments([ 
            { index : 0, query : '.css_class1', id : 1, leading : true }, { index : 0, query : '.css_class2', id : 2, leading : true }
        ])
        
        t.is(query, null, "No results for several `leading` segments in the same index")

        
        var query   = finder.combineSegments([ 
            { index : 0, query : '.css_class1', id : 1, child : true }, { index : 1, query : '.css_class2', id : 2 }
        ])
        
        t.is(query.query, '.css_class2 > .css_class1', "Correct combination for direct child segment")
    })
    
    
})    