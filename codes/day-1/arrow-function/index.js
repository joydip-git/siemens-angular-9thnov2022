const arr = [1, 2, 3, 4]
arr.filter(
    (num) => {
        return num % 2 === 0
    }
)

const add = (a, b) => a + b
const subtract = (a, b) => console.log(a - b)
// function outer() {
//     this.a = 100
//     console.log(this)
//     let inner = function () {
//         this.b = 200
//         console.log(this)
//         const res = this.a + this.b
//         console.log(res)

//     }
//     inner = inner.bind(this)
//     inner()
// }

// function outer() {
//     this.a = 100
//     console.log(this)
//     const ref = this
//     let inner = function () {
//         this.b = 200
//         console.log(this)
//         //const res = this.a + this.b
//         const res = ref.a + this.b
//         console.log(res)

//     }
//     inner()
// }

function outer() {
    this.a = 100
    console.log(this)
    let inner = () => {
        this.b = 200
        console.log(this)
        const res = this.a + this.b
        console.log(res)
    }
    inner()
}

new outer()

class Person {
    constructor(name) {
        this.pName = name
    }
    print = () => {
        console.log(this.pName)
    }
}

const anilObj = new Person('anil')
//const printFnRef = anilObj.print.bind(anilObj)
const printFnRef = anilObj.print
printFnRef()