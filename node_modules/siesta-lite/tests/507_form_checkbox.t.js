StartTest(function (t) {

    t.it('native checkbox', function (t) {
        document.body.innerHTML = '<input id="native1" type="checkbox" />';
        
        t.firesOnce(Ext.get('native1'), 'change')
        
        t.todo('IE does not bubble the `change` event', function (t) {
            t.firesOnce(Ext.getBody(), 'change')
        })
        
        t.click('#native1', function () {
            t.selectorExists('#native1:checked', 'Checkbox should be checked after clicking it');
        });
    })

    t.it('native checkbox', function (t) {
    
        t.todo('native checkbox with label', function (t) {
            document.body.innerHTML = '<label id="label2"><input id="native2" type="checkbox"/>Very Long Label text</label>';
            
            t.firesOnce(Ext.get('native2'), 'change')
            t.firesOnce(Ext.getBody(), 'change')
    
            t.click('#label2', function () {
                t.selectorExists('#native2:checked', 'Checkbox should be checked after clicking it');
            });
        })
    })
        
    t.it('Ext checkbox', function (t) {
        var cb = new Ext.form.Checkbox({
            fieldLabel : 'Label',
            boxLabel   : 'Search Both',
            anchor     : '100%'
        });

        var simple = new Ext.form.FormPanel({
            layout   : 'form',
            renderTo : Ext.getBody(),
            width    : 150,
            items    : cb
        });

        t.chain(
            { click : cb },

            function () {
                t.ok(cb.getValue(), 'Ext Form checkbox should be checked after clicking it');
            }
        );
    });

    t.it('Ext checkbox standalone', function (t) {

        var cb2 = new Ext.form.Checkbox({
            renderTo : document.body
        });

        var radio = new Ext.form.Radio({
            renderTo : document.body
        });

        t.chain(
            { click : cb2 },
            { click : radio },

            function () {
                t.ok(cb2.getValue(), 'Checkbox 2 should be checked after clicking it');
                t.ok(radio.getValue(), 'Radio should be checked after clicking it');
            }
        );
    });

    t.it('Ext radiogroup', function (t) {

        var form = Ext.create('Ext.form.Panel', {
            width    : 300,
            height   : 125,
            renderTo : Ext.getBody(),
            items    : [{
                xtype      : 'radiogroup',
                fieldLabel : 'Two Columns',
                // Arrange radio buttons into two columns, distributed vertically
                columns    : 2,
                vertical   : true,
                items      : [
                    { boxLabel : 'Item1', name : 'rb', inputValue : '1' },
                    { boxLabel : 'Item2', name : 'rb', inputValue : '2', checked : true }
                ]
            }]
        });

        t.chain(
            { click : '>>[boxLabel=Item1]' },

            function () {
                t.ok(t.cq1('[boxLabel=Item1]').getValue(), 'Checkbox 2 should be checked after clicking it');
            }
        );
    });
});
