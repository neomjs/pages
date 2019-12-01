describe('Event view type column', function (t) {

    t.it('Integration test', function (t) {
        document.body.innerHTML = '<div id="div"></div>'

        var view = new Siesta.Recorder.UI.RecorderPanel({
            height   : 300,
            width    : 600,
            renderTo : Ext.getBody(),
            test     : t,
            root : {
                children: [
                    { action    : 'click',      target  : [ { type : 'css', target : '#div' } ]},
                    { action    : 'dblclick',   target  : [ { type : 'css', target : '#div' } ]},
                    { action    : 'type',       value   : 'text' }
                ]
            },
            domContainer : {
                highlightTarget : function() {},
                startInspection : function() {},
                clearHighlight  : function() {}
            }
        });

        var record = view.store.first();
        
        var editPlugin  = view.editing
        var editor      = function () { return editPlugin.getActiveEditor() }

        t.chain(
            { waitForRowsVisible : view },

            function (next) {
                editPlugin.startEdit(0, 1);
                
                editor().setValue('dblclick');
                // in IE the "startEdit/completeEdit" method contains some asynchronicity, and don't have callbacks
                // its not possible to call "startEdit" immediately after "completeEdit" need to wait in between
                editor().on('complete', next, null, { single : true, delay : Ext.isIE ? 100 : 0 })
                
                editPlugin.completeEdit();
            },
            function (next) {
                t.isDeeply(record.getTarget(), { type : 'css', target : '#div' }, 'Should keep actionTarget when switching the type to same kind of action')

                editPlugin.startEdit(0, 1);
                
                editor().setValue('type');
                // in IE the "startEdit/completeEdit" method contains some asynchronicity, and don't have callbacks
                // its not possible to call "startEdit" immediately after "completeEdit" need to wait in between
                editor().on('complete', next, null, { single : true, delay : Ext.isIE ? 100 : 0 })
                
                editPlugin.completeEdit();
            },
            function (next) {
                t.notOk(record.getTarget(), 'Should clear actionTarget when switching the type to a new kind')

                editPlugin.startEdit(1, 1);

                editor().setValue('fn');

                next();
            },
            
            { waitFor : function () { return t.elementIsTop(editor().field) }, desc : 'Wait for editor field top' },
            { type : '[TAB]', target : function () { return editor().field } },
            { waitFor : function() { return editor(); } },
            

            function (next) {
                t.isaOk(editor().field, Ext.ux.form.field.CodeMirror, 'Should switch to correct editor when using TAB')
                
                editor().on('complete', next, null, { single : true, delay : Ext.isIE ? 100 : 0 })
                editPlugin.completeEdit();
            },
            
            function (next) {
                editPlugin.startEdit(1, 1);
                editor().setValue('click');

                next();
            },
            
            { waitFor : function () { return t.elementIsTop(editor().field) } },
            { type : '[TAB]', target : function () { return editor().field } },
            { waitFor : function() { return editor(); }, desc : 'waiting for editor to exist'},

            function (next) {
                t.isaOk(editor().field, Siesta.Recorder.UI.Editor.Target, 'Should switch to correct editor when using TAB')
            }
        );
    })
})