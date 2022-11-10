const divide = (a, b) => {
    const p = new Promise(
        //task => executor function
        (r1, r2) => {
            // setTimeout(
            //     () => {
            const res = a / b
            if (res === Infinity) {
                const err = new Error('can not divide by zero')
                //reject the promise
                r2(err)
            }
            //resolve the promise
            r1(res)
            //     },
            //     1000
            // )
        }
    )
    return p
}

const add = (a, b) => {
    const p = new Promise(
        (resolveFn, rejectFn) => {
            resolveFn(a + b)
        }
    )
    return p
}

// const divPromise = divide(12, 3)
// //console.log(divRes)
// divPromise
//     .then(
//         //will be called when promise is resolved
//         (divRes) => {
//             console.log(divRes)
//         },
//         //will be called when promise is rejected
//         (err) => {
//             console.log(err.message)
//         }
//     )

//const addRes = add(102, 20)
//console.log(addRes)
add(10, 2)
    .then(
        (data) => {
            //console.log(data)
            divide(data, 0)
                .then(
                    //will be called when promise is resolved
                    (divRes) => {
                        console.log(divRes)
                    },
                    //will be called when promise is rejected
                    (err) => {
                        console.log(err.message)
                    }
                )
        },
        (e) => {
            console.log(e)
        }
    )

