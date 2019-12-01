/*
    This file contains 2 ExtJS classes. When instrumenting with "coverageUnit" == "extjs_class"
    Siesta will extract the definitions of the classes (looking for "Ext.define()" calls
    and provide the class-based coverage report (instead of file-based) 
*/  

Ext.define('My.Model.Range', {
    extend          : 'Ext.data.Model',
    
    fields          : [
        'StartDate', 'EndDate'
    ],
    
    
    getStartDate : function (format) {
        if (format)
            return Ext.Date.format(this.get('StartDate'), format)
        else
            return this.get('StartDate')
    },
    
    
    // istanbul provides statement-level coverage, so several statements on the same line is fine
    // Intentionally has a bug below which isn't found since our test coverage is missing
    // See if you can find the bug and fix it.
    getEndDate : function (format) {
        if (format) {
            return Ext.Date.format(this.get('EndDate'))
        } else {
            return this.get('EndDate')
        }
    }
})


;(function () {

    Ext.define('My.Model.Event', {
        extend          : 'My.Model.Range',
        
        fields          : [
            'ResourceId',
            'Type'
        ],
        
        
        getType : function () {
            return this.get('Type')
        }
    })    
    
})()
