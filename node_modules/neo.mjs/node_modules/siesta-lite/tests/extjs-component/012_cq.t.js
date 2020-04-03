StartTest(function(t) {
    
    t.testExtJS(function (t) {

        t.it('should be able to do a CQ', function (t) {
            Ext.create('Ext.Component', {
                foo : 'bar'
            });

            t.cqExists('[foo=bar]')

            t.cqNotExists('[foo=bar2]')
        })
        
        t.it('should be able to click on widgets', function (t) {
            
            var treeStore = new Ext.data.TreeStore({
                fields      : [ 'id', 'text' ],
                
                root        : {
                    text        : 'root',
                    expanded    : true,
                    
                    children    : [
                        { id : 1, text : "1", leaf : true },
                        { 
                            id : 2, text : "2", expanded : true, children : [
                                { id : 3, text : "3", leaf : true },
                                { id : 4, text : "4", leaf : true }
                            ] 
                        },
                        { id : 5, text : "5", leaf : true }
                    ]
                }
            })
            
            var treeList    = new Ext.list.Tree({
                renderTo    : Ext.getBody(),
                store       : treeStore,
                
                width       : 400,
                height      : 300
            });
            
            t.firesOnce(t.cq1('>>treelistitem[text=1]').el, 'click')
            
            t.click('>>treelistitem[text=1]', function () {})
        })
    });
});
