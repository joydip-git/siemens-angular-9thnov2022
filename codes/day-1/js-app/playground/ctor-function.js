function person(name, id, salary) {
    let info = ''
    this.personName = name
    this.personId = id
    this.personSalary = salary
    this.print = function () {
        info = this.personName + ' ' + this.personId + ' ' + this.personSalary
        return info
    }
}

//console.log(person.prototype)
//person.prototype.sayHi = function () {
Object.prototype.sayHi = function () {
    console.log('Hi...' + this.personName)
}

const anilObj = new person('anil', 1, 1000)
//
console.log(anilObj.print())
const sunilObj = new person('sunil', 2, 2000)

anilObj.sayHi()
sunilObj.sayHi()

// console.log(anilObj.hasOwnProperty('sayHi'))
// console.log(person.prototype.hasOwnProperty('sayHi'))
// console.log(Object.prototype.hasOwnProperty('sayHi'))

//sayHi()
//new sayHi()
//anilobj.sayHi()
