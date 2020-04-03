StartTest(function (t) {
    
    var panel
    var finder      = new Ariadne.ExtJSComponentQueryFinder()
    
    finder.setExt(Ext)
    
    t.beforeEach(function () {
        panel && panel.destroy()
    })
    
    t.it('Should find basic xtype query', function (t) {
        panel   = new Ext.panel.Panel({
            title       : 'Title,with,commas',
            
            width       : 300,
            height      : 200,
            
            renderTo    : document.body
        })
        
        var queries     = finder.findQueries(panel)
        
        t.isDeeply(queries, [ 'panel[title=Title\\,with\\,commas]' ], "Correct queries found")
    })

})