StartTest(function(t) {
    t.needDone      = true
    
    var field       = new Ext.form.TextField({
        emptyText       : 'please enter some text',
        
        renderTo        : Ext.getBody()
    });
    
    t.chain(
        { action : 'click', target : field },
        {
            action      : 'type',
            text        : 'foo'
        },
        function (next) {
            t.fieldHasValue(field, 'foo', 'Correct value typed in the field')
            
            field.setValue('')
            
            next()
        },
        // should not crash during this "type" and reach the "t.done()"
        { type : 'username[TAB]foo', target : field, options : { shiftKey : true } },
        function (next) {
            t.done()
        }
    )
});