describe('special keys, readOnly + disabled handling', function (t) {

    var keys = ",;.-'";

    t.testExtJS(function (t) {
        var box = new Ext.form.TextField({
            width           : 400,
            enableKeyEvents : true,
            emptyText       : 'foobar',
            renderTo        : Ext.getBody()
        });

        t.it('Should handle readOnly state', function (t) {

            t.firesOnce(box, 'keydown');
            t.firesOnce(box, 'keypress');
            t.firesOnce(box, 'keyup');

            box.setReadOnly(true);

            t.chain(
                {
                    target : box,
                    type   : "a"
                },
                function (next) {
                    t.isFieldEmpty(box);
                }
            )
        });

        t.it('Should handle disabled state', function (t) {
            box.setReadOnly(false);
            box.setDisabled(true);

            t.wontFire(box, 'keydown', '"keydown" was fired for each character');
            t.wontFire(box, 'keypress', '"keypress" was fired for each character');
            t.wontFire(box, 'keyup', '"keyup" was fired for each character');

            t.chain(
                {
                    target : box,
                    type   : "b"
                },
                function (next) {
                    t.isFieldEmpty(box, 'No value => disabled');
                }
            )
        });

        t.it('Should support typing ,;.-', function (t) {
            box.setDisabled(false);
            box.setReadOnly(false);

            t.willFireNTimes(box, 'keydown', 5, '"keydown" was fired for each character');
            t.willFireNTimes(box, 'keypress', 5, '"keypress" was fired for each character');
            t.willFireNTimes(box, 'keyup', 5, '"keyup" was fired for each character');

            t.chain(
                {
                    target : box,
                    type   : keys
                },
                function (next) {
                    t.is(box.getValue(), keys, "Correctly simulated keys");
                }
            );
        });
    });
});
