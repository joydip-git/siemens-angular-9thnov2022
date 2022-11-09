//const numbers = new Array(1, 2, 3, 4)
function filterValues(arr, logicRef) {
    const result = []
    for (let index = 0; index < arr.length; index++) {
        const value = arr[index];
        //if (value % 2 === 0)
        if (logicRef(value))
            result.push(value)
    }
    return result
}
const numbers = [2, 1, 4, 3]
/*
const isEven = function (num) {
    return num % 2 === 0 ? true : false
}
const evenNumbers = filterValues(numbers, isEven)
console.log(evenNumbers)


const oddNumbers = filterValues(
    numbers,
    function (num) {
        return num % 2 !== 0
    }
)
console.log(oddNumbers)

const greaterNumbers = filterValues(
    numbers, (num) => num > 3)
console.log(greaterNumbers)
*/

// numbers.filter(
//     function (num) {
//         return num % 2 === 0
//     }
// )
//console.log(res)


numbers.sort(
    (a, b) => a - b
)
console.log(numbers)


