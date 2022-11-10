const divide = async (a, b) => {
    const res = a / b
    if (res === Infinity) {
        const err = new Error('can not divide by zero')
        throw err
    }
    return res
}

// const divPromise = divide(12, 3)
// divPromise.then(
//     (data) => {
//         console.log(data)
//     },
//     (e) => {
//         console.log(e.message)
//     }
// )

async function call() {
    try {
        const data = await divide(12, 3)
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

call()