const obj = {
    name: 'anil',
    id: 1,
    salary: 1000,
    print: function () {
        return `${this.id}, ${this.name}`
    }
}

//const copy = {}
// copy.prop1 = 'value1'
// copy['prop2'] = 'value2'

// console.log(copy)

// for (const propName in obj) {
//     const propValue = obj[propName]
//     copy[propName] = propValue
// }
// console.log(obj)
// console.log(copy)

// console.log(obj === copy)

// spread operator => (...)
const copy = {
    ...obj,
    name: 'anil kumar'
}

console.log(copy)

const numbers = [1, 2, 3, 4]
const another = [10, 20, 30]
const copyNumbers = [...numbers, ...another]
console.log(copyNumbers)


