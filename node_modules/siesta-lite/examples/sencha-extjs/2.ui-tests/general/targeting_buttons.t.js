StartTest(function (t) {
    var container = new Ext.Container({
        renderTo : document.body,
        layout   : 'vbox'
    })

    function createButton(config) {
        config = Ext.apply({
            text   : 'Click me',
            scale  : 'large',
            margin : 10
        }, config);

        var btn = new Ext.Button(config);

        t.willFireNTimes(btn, 'click', 1);

        container.add(btn);

        return btn;
    }

    createButton();
    createButton({ id : 'myButton'});

    var btn3 = createButton({ cls : 'foo'});
    var btn4 = createButton();
    var btn5 = createButton({ id : 'otherBtn'});
    var btn6 = createButton();
    var btn7 = createButton({ some : 'value' });
    var btn7 = createButton({ iconCls : 'cool-icon' });

    t.chain(
        { action : 'click', target : [20, 20] },
        { action : 'click', target : '#myButton' },
        { action : 'click', target : '.foo' },
        { action : 'click', target : btn4 },
        { action : 'click', target : document.getElementById('otherBtn') },
        { action : 'click', target : btn6.getEl() },
        { action : 'click', target : '>> [some=value]' },
        { action : 'click', target : 'button[iconCls=cool-icon] => .cool-icon' },

        { click : function() { return createButton(); } }
    )
});