class Employee {
    constructor(name, id, basic, da, hra) {
        this.name = name
        this.id = id
        this.daPay = da
        this.basicPay = basic
        this.hraPay = hra
    }
    calculateSalary() {
        return this.basicPay + this.daPay + this.hraPay
    }
}

class Developer extends Employee {
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra)
        this.incentivePay = incentive
    }
    calculateSalary() {
        return super.calculateSalary() + this.incentivePay
    }
}