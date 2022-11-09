/*
var res = add(10, 20)
console.log(res)
//declaration
function add(a, b) {
    return a + b
}


// var subRes = subtract(10, 2)
// console.log(subRes)
//expression
var subtract = function (a, b) {
    return a - b
}
*/
var x = 100
function test() {
    console.log(m) //10 -> undefined
    var m
    m = 10
    console.log(m) //10

    for (var i = 0; i < 1; i++) {
        var m
        m = 20
        console.log(m) //20
    }
    console.log(m) //10 -> 20

    var res
    res = add(10, 20)
    console.log(res)
    function add(a, b) {
        var r
        r = a + b
        return r
    }



    var subtract
    subtract = function (a, b) {
        return a - b
    }
    var subRes
    subRes = subtract(10, 2)
    console.log(subRes)
}
test()