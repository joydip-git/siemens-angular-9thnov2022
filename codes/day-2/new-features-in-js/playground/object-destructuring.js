const obj = {
    name: 'anil',
    id: 1,
    salary: 1000,
    print: function () {
        return `${this.id}, ${this.name}`
    }
}

// const name = obj.name
// const id = obj.id
// const salary = obj.salary

//const { name: name, id: id, salary: salary } = obj

const { name: pName, id: pId, salary: Sal } = obj

console.log(pName, pId, Sal)

const numbers = [1, 2, 3, 4]
const [a, b, c, d] = numbers
const [x, y] = numbers
const [m, , n] = numbers
const [o, , , p] = numbers

//numbers[0]
//numbers[3]

console.log(a, b, c, d)
console.log(x, y)
console.log(m, n)
console.log(o, p)