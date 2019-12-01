StartTest(function (t) {

    t.it('Rotated element 90 deg', function (t) {
        document.body.innerHTML = 
            "<div style='width: 400px;height: 20px;transform: rotate(90deg);transform-origin:left bottom'>" +
                "<p id='p1'>Some long text</p>" +
            "</div>"
                
        t.firesOnce('#p1', 'click')
                
        t.chain(
            { click : '#p1' }
        )
    })
    
    
    t.it('Rotated element 45 deg', function (t) {
        document.body.innerHTML = 
            "<div style='width: 400px;height: 20px;transform: rotate(45deg);transform-origin:left bottom'>" +
                "<p id='p2'>Some long text</p>" +
            "</div>"
                
        t.firesOnce('#p2', 'click')
                
        t.chain(
            { click : '#p2' }
        )
    })
    
    
    t.it('Rotated element 30 deg', function (t) {
        document.body.innerHTML = 
            "<div style='width: 400px;height: 20px;transform: rotate(15deg);transform-origin:left bottom'>" +
                "<p id='p3'>Some very very very long text, yes, very long</p>" +
            "</div>"
                
        t.firesOnce('#p3', 'click')
                
        t.chain(
            { click : '#p3' }
        )
    })
    
});
