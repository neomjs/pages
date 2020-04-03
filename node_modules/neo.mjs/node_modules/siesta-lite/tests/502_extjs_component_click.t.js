describe('Testing Ext5', function (t) {
    var cmp

    t.beforeEach(function() {
        cmp && cmp.destroy()
        
        document.body.innerHTML = '';
    })

    t.it('Should be possible to click a button', function(t) {
        var button      = cmp = new Ext.button.Button({
            text        : 'Button',
            renderTo    : document.body  
        })
        
        t.firesOk(button, 'click', 1, "1 click event is fired")
        
        t.chain(
            { moveCursorTo : [ 0, 50 ] },
            { moveCursorTo : button },
            function (next) {
                t.hasCls(button.getEl(), 'x-btn-over', "Button is hightlighted")
                
                next()
            },
            { click : button }
        )
    })

    
    t.it('Component click with offset', function (t) {
        cmp = new Ext.Component({
            foo      : 'bar',
            width    : 100,
            height   : 100,
            renderTo : document.body,
            style    : 'background:#777',
            html     : '<div style="background:#aaa;position:absolute;top:20px;left:20px;width:60px;height:60px;"></div>'
        })
        
        t.firesOk(cmp.getEl().dom, 'click', 4)

        t.chain(
            { click : '>>[foo=bar]', offset : [ 0, 0 ] },
            function (next) {
                t.isDeeply(t.currentPosition, [ 0, 0 ])
                next()
            },
            
            { click : '>>[foo=bar]', offset : [ '100%', 0 ] },
            function (next) {
                t.isDeeply(t.currentPosition, [ 99, 0 ])
                next()
            },
            
            { click : '>>[foo=bar]', offset : [ '100%', '100%' ] },
            function (next) {
                t.isDeeply(t.currentPosition, [ 99, 99 ])
                next()
            },
            
            { click : '>>[foo=bar]', offset : [ 0, '100%' ] },
            function (next) {
                t.isDeeply(t.currentPosition, [ 0, 99 ])
                next()
            }
        )
    })
    
    
    t.it('Dom element click with offset', function (t) {
        
        document.body.innerHTML = 
            '<div id="target" style="position: absolute; left: 50px; top: 50px; border-width: 10px; padding:10px; margin:10px;' +
                'border-style:solid; border-color: blue; background-color:green; box-sizing: border-box;">' +
                'YAH' +
            '</div>'
        
        t.firesOk('#target', 'click', 4)

        t.chain(
            { click : '#target', offset : [ 0, 0 ] },
            { click : '#target', offset : [ '100%', 0 ] },
            { click : '#target', offset : [ '100%', '100%' ] },
            { click : '#target', offset : [ 0, '100%' ] }
        )
    })
});