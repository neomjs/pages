Ext.onReady(function () {
    
    var viewport = new Ext.Viewport({
        
        items      : [
            {
                id      : 'loginPanel',
                title   : 'Please enter your credentials',
                
                width   : 300,
                height  : 200,
                
                layout  : {
                    type    : 'vbox'
                },
                
                defaults    : {
                    labelWidth  : 100
                },
                
                items   : [
                    {
                        xtype       : 'textfield',
                        
                        fieldLabel  : 'Login'
                    },
                    
                    {
                        xtype       : 'textfield',
                        
                        fieldLabel  : 'Password'
                    }
                ],
                
                buttons : [
                    {
                        text        : 'Login',
                        
                        handler     : function () {
                            // need to construct full absolute URL for Safari, otherwise it fails to resolve
                            // simple relative url like "redirect_to.html"
                            location.href   = location.protocol + '//' + location.host + location.pathname.replace(/source_page/, 'redirect_to')
                        }
                    }
                ]
            }  
        ]
    })
})
