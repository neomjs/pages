describe('HOME/END keys', function (t) {
    var isMac = Siesta.Recorder.Recorder.prototype.parseOS(navigator.platform) === 'MacOS';

    t.beforeEach(function () {
        document.body.innerHTML = '<input type="text" id="foo" value="rd"/>';
    })

    t.it('Should move caret position on HOME/END keys', function (t) {

        t.chain(
            { click : '#foo' },

            { type : '[HOME]ne[END]y' },

            function() {
                t.expect($('#foo').val()).toBe('nerdy');
            }
        )
    });

    t.it('Should select all on SHIFT/CMD + LEFT/RIGHT keys', function (t) {

        t.chain(
            { click : '#foo' },

            isMac ? { type : '[LEFT]', options : { shiftKey : true, metaKey : true }  } :
                    { type : '[LEFT]', options : { shiftKey : true, ctrlKey : true }  },

            function(next) {
                t.expect(t.getSelectedText('#foo')).toBe('rd');
                t.setCaretPosition($('#foo')[0], 1);

                next()
            },

            isMac ? { type : '[RIGHT]', options : { shiftKey : true, metaKey : true }  } :
                    { type : '[RIGHT]', options : { shiftKey : true, ctrlKey : true }  },

            function() {
                t.expect(t.getSelectedText($('#foo')[0])).toBe('d');
            }
        )
    });
});