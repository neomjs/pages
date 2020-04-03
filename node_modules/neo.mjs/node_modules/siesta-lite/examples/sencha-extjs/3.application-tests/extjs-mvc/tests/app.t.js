StartTest(function(t) {
    // declare a variable, that will be "shared" across all steps in the chain
    var userGrid
    
    t.chain(
        { waitForCQ : 'gridpanel' },

        function(next, grids) {
            // set the variable in the 2nd step
            userGrid    = grids[0];

            next();
        },

        { waitForRowsVisible : 'gridpanel' },

        { doubleclick : 'gridpanel => .x-grid-cell' },

        // waiting for popup window to appear
        { waitForCQ : 'useredit' },

        // When using target, >> specifies a Component Query
        { click : '>>field[name=firstname]'},

        function(next) {
            // Manually clear text field
            t.cq1('field[name=firstname]').setValue();
            next();
        },

        { type : 'foo', target : '>>field[name=firstname]' },
        
        {
            // using function, returning the array with the arguments, instead of just:
            //     waitForEvent    : [ userGrid.store, 'write' ],
            // this is because the `userGrid` variable will be set only in the 2nd step of the chain
            // but the arguments for this step will be evaluated at the time of the `t.chain()` call
            // (at which the variable is not yet set)
            waitForEvent    : function () { return [ userGrid.store, 'write' ] },
            trigger         : { click : '>>useredit button[text=Save]' }
        },
        
        function(next) {
            t.matchGridCellContent(t.cq1('gridpanel'), 0, 0, 'foo Spencer', 'Updated name found in grid');
        }
    );
})    
