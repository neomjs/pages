StartTest({
    viewportWidth   : 800,
    viewportHeight  : 500

}, function (t) {

    document.body.innerHTML = 
        '<div id="foo" style="width:100px;height:1200px;background:#777">foo</div>' +
        '<div id="bar" style="width:100px;height:100px;background: #F00;">bar</div>'

    var rec                 = new Siesta.Recorder.ExtJS({
        window          : t.global,
        ignoreSynthetic : false
    })

    rec.start();

    document.body.scrollTop = 300;

    t.chain(
        { click : '#bar' },

        function () {
            var actions = rec.getRecordedActions();

            t.is(actions.length, 1);
            t.is(actions[0].action, 'click');
            t.isDeeply(actions[0].getTarget(), { type : 'css', target : '#bar' });

            rec.stop();
        }
    )
})
