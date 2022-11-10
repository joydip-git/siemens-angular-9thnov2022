const a: number = 10
const b = 20
const add = (a: number, b: number): number => {
    return a + b
}

function subtract(a: number, b: number): number {
    return a - b
}

const res = add(10, 12)
let x = 10

class Person {
    private name: string;
    private id: number;
    private salary: number;
    constructor(name: string, id: number, salary: number) {
        this.name = name
        this.id = id
        this.salary = salary
    }

    get Name(): string {
        return this.name
    }
    set Name(val: string) {
        this.name = val
    }
    get Id(): number {
        return this.id
    }
    set Id(val: number) {
        this.id = val
    }
    get Salary(): number {
        return this.salary
    }
    set Salary(val: number) {
        this.salary = val
    }
    public print(): string {
        return `${this.name}`
    }
}

class Employee {
    // name: string;
    // id: number;
    // salary: number;
    // constructor(name: string, id: number, salary: number) {
    //     this.name = name
    //     this.id = id
    //     this.salary = salary
    // }
    //or
    // constructor(public name: string, public id: number, public salary: number) {

    // }
    constructor(private name: string, private id: number, private salary: number) {

    }
    get Name(): string {
        return this.name
    }
    set Name(val: string) {
        this.name = val
    }
    get Id(): number {
        return this.id
    }
    set Id(val: number) {
        this.id = val
    }
    get Salary(): number {
        return this.salary
    }
    set Salary(val: number) {
        this.salary = val
    }
    public print(): string {
        return `${this.name}`
    }
}

const emp: Employee = new Employee('joy', 1, 100)
emp.Name = 'joydip'
console.log(emp.Salary)

//abstract
interface Shape {
    calculateArea(): number;
}

class Circle implements Shape {
    private _radius: number;
    constructor(radius: number) {
        this._radius = radius
    }
    calculateArea(): number {
        return Math.PI * this._radius * this._radius
    }
}

//custom type or user-defined type
interface Product {
    name: string;
    id: number;
    price: number;
    description: string;
}

const products: Product[] = [{
    id: 1,
    name: 'dell xps',
    price: 10000,
    description: 'new laptop from dell'
}]


abstract class DataOperations {
    // name: string;
    // id: number;
    // price: number;
    // description: string;

    constructor(public name: string) {

    }

    abstract fetchData(): string;
    addData(data: string): void {

    }
}

class FileDataOperation extends DataOperations {
    fetchData(): string {
        return 'data'
    }

}