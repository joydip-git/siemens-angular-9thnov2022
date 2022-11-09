// function person(name, id, salary) {
//     this.personName = name
//     this.personId = id
//     this.personSalary = salary
//     this.print = function () {
//         return this.name + ' ' + this.id + ' ' + this.salary
//     }
// }
'use strict'
function test() {
    var a = 10
    this.x = 20
    console.log(this)
}
//without any preceding reference variable
//test()

const current = new test()
console.log(current.x)
