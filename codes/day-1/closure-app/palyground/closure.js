const m = 100
function outer() {
    const a = 10
    function inner() {
        const b = 20
        const res = a + b + m
        console.log(res)
    }
    return inner
}

const innerFnRef = outer()
innerFnRef()