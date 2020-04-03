StartTest(function(t) {
    
    var finder      = new Ariadne.ExtJSDomQueryFinder()
    var body        = document.body
    
    var unique      = function (selector) { return body.querySelectorAll(selector)[ 0 ] }
    
    t.it('Should not include auto-generated css class of grid column', function (t) {
        var store       = new Ext.data.Store({
            fields      : [ "id", "name" ],
            
            data        : [
                { id : 1, name : "Name" },
                { id : 2, name : "Name" },
                { id : 3, name : "Name" },
                { id : 4, name : "Name" }
            ]
        })
        
        var grid        = new Ext.grid.Panel({
            store       : store,
            
            columns: [
                { text: 'Id', dataIndex: 'id', width: 120 },
                { text: 'Name',  dataIndex: 'name', width: 200 }
            ],
            
            width       : 300,
            height      : 200,
            
            renderTo    : document.body
        })
        
        var queries     = finder.findQueries(t.getCell(grid, 1, 1).dom)
        
        var noAutoCls   = queries.every(function (query) {
            return !/gridcolumn-\d+/.test(query)
        })
        
        t.ok(noAutoCls, "No generated css class found")
    })
})    