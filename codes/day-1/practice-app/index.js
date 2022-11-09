function employee(name, id, basic, da, hra) {
    this.name = name
    this.id = id
    this.daPay = da
    this.basicPay = basic
    this.hraPay = hra
    // this.calculateSalary = function () {
    //     return this.basicPay + this.daPay + this.hraPay
    // }
}
employee.prototype.calculateSalary = function () {
    return this.basicPay + this.daPay + this.hraPay
}


function developer(name, id, basic, da, hra, incentive) {
    // this.name = name
    // this.id = id
    // this.daPay = da
    // this.basicPay = basic
    // this.hraPay = hra
    employee.call(this, name, id, basic, da, hra)
    this.incentivePay = incentive
    this.calculateSalary = function () {
        // return employee.prototype.calculateSalary.apply(this) + this.incentivePay
        return this.__proto__.calculateSalary.apply(this) + this.incentivePay
    }
}

Object.setPrototypeOf(developer.prototype, employee.prototype)

const anilObj = new developer('anil', 1, 1000, 2000, 3000, 4000)
console.log(anilObj.calculateSalary())