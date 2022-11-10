// export const add = (a, b) => a + b
// export const subtract = (a, b) => a - b
// export const arr = [1, 2, 3, 4]
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const arr = [1, 2, 3, 4]

const exportableObj = {
    // addFn: add,
    // subFn: subtract

    // add: add,
    // subtract: subtract
    add,
    subtract,
    arr
}

module.exports = exportableObj
