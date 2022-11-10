const divide = (a, b, callbackFnRef) => {
    setTimeout(
        () => {
            const res = a / b
            if (res === Infinity) {
                const err = new Error('can not divide by zero')
                callbackFnRef(undefined, err)
            }
            callbackFnRef(res, undefined)
        },
        2000
    )
}

const add = (a, b) => {
    return a + b
}

divide(12, 3, (data, err) => {
    if (data)
        console.log(data)

    if (err)
        console.log(err.message)
})
//console.log(divRes)

const addRes = add(102, 20)
console.log(addRes)