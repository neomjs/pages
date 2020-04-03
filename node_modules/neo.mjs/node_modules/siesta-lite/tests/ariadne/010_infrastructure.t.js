StartTest(function(t) {
    
    var finder      = new Ariadne.QueryFinder()
    
    
    t.it('forAllCombinations', function (t) {
        
        var verify  = function (len) {
            t.it('Correct `forAllCombinations` call for ' + len + ' elements', function (t) {
                var count       = 0
                var length      = 0
                var processed   = {}
                
                var array       = new Array(len)
                
                for (var i = 0; i < array.length; i++) array[ i ] = i
                
                finder.forAllCombinations(array, function (segments) {
                    if (segments.length < length) t.fail("Length of combination should monotonically increase")
                    
                    var asString        = segments.join()
                    
                    if (processed[ asString ]) t.fail("Should not encounter same combination twice")
                    
                    processed[ asString ]   = true
                    length                  = segments.length
                    count++
                })
                
                t.is(count, Math.pow(2, array.length) - 1, 'Correct `forAllCombinations` call for ' + len + ' elements')
            })
        }
        
        verify(0)
        verify(1)
        verify(5)
        verify(10)
    })
    
    
    t.it('Combinator `forAllCombinations` start/stop', function (t) {
        var len         = 8
        
        var count       = 0
        var length      = 0
        var processed   = {}
        
        var array       = new Array(len)
        
        for (var i = 0; i < array.length; i++) array[ i ] = i
        
        var combinator  = new Ariadne.QueryFinder.Combinator({ elements : array })
        
        var currentComb
        
        combinator.forAllCombinations(function (segments) {
            if (segments.length < length) t.fail("Length of combination should monotonically increase")
            
            currentComb             = segments.join()
            
            if (processed[ currentComb ]) t.fail("Should not encounter same combination twice: " + currentComb)
            
            processed[ currentComb ]= true
            length                  = segments.length
            count++
            
            if (count == 100) return false
        })
        
        combinator.forAllCombinations(function (segments) {
            if (segments.length < length) t.fail("Length of combination should monotonically increase")
            
            var asString        = segments.join()
            
            if (count == 100) {
                t.is(asString, currentComb, "Combination has continued from the last combination of previous call")
            } else 
                if (processed[ asString ]) t.fail("Should not encounter same combination twice: " + asString)
            
            processed[ asString ]   = true
            length                  = segments.length
            count++
        })
        
        t.is(count, Math.pow(2, array.length) - 1 + 1, 'One extra processing cycle because of interrupt/resume')
    })
    
    
    t.it('bisect', function (t) {
        
        var verify  = function (min, max, direction) {
            t.it('Correct `bisect` call for [' + min + ',' + max + '] range, with ' + direction + ' direction', function (t) {
                var processed           = {}
                var target
                
                finder.bisect(min, max, function (current) {
                    if (current < min || current > max) t.fail("Current index out of range")
                    if (processed[ current ]) t.fail("Should not encounter same index twice")
                    
                    processed[ current  ]           = true
                    
                    target          = current
                    
                    return direction
                })
                
                t.is(target, direction > 0 ? max : min, "Correct target reached")
            })
        }
        
        verify(0, 0, -1)
        verify(0, 0, 1)

        verify(0, 1, -1)
        verify(0, 1, 1)
        
        verify(0, 10, -1)
        verify(0, 10, 1)
        
        verify(9, 10, -1)
        verify(9, 10, 1)
        
        verify(1, 20, -1)
        verify(1, 100, 1)
    })
    
    
    t.it('mergeArrayAttributeFromClassHierarchy', function (t) {
        
        var Sub = Class({
            isa         : Ariadne.QueryFinder.Identifier,
            
            has         : {
                finder              : null,
                properties          : function () {
                    return [ 'sub1', 'sub2' ]
                }
            },
    
            methods : {
                initialize : function (cfg) {
                    this.properties     = this.mergeArrayAttributeFromClassHierarchy('properties', cfg)
                }
            }
        })
        
        var Sup = Class({
            isa         : Sub,
            
            has         : {
                properties          : function () {
                    return [ 'sup1', 'sup2' ]
                }
            }
        })
        
        var sub1        = new Sub()
        
        t.isDeeply(sub1.properties, [ 'sub1', 'sub2' ], 'Correct merge w/o given config')
        
        var sub2        = new Sub({ properties : [ 'sub3', 'sub4' ] })
        
        t.isDeeply(sub2.properties, [ 'sub3', 'sub4', 'sub1', 'sub2' ], 'Correct merge w/ given config')
        
        var sup1        = new Sup()
        
        t.isDeeply(sup1.properties, [ 'sup1', 'sup2', 'sub1', 'sub2' ], 'Correct merge w/o given config')
        
        var sup2        = new Sup({ properties : [ 'sup3', 'sup4' ] })
        
        t.isDeeply(sup2.properties, [ 'sup3', 'sup4', 'sup1', 'sup2', 'sub1', 'sub2'  ], 'Correct merge w/ given config')
        
    })    
})    