var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 10;
var b = 20;
var add = function (a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
}
var res = add(10, 12);
var x = 10;
var Person = /** @class */ (function () {
    function Person(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (val) {
            this.name = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (val) {
            this.id = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Salary", {
        get: function () {
            return this.salary;
        },
        set: function (val) {
            this.salary = val;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.print = function () {
        return "".concat(this.name);
    };
    return Person;
}());
var Employee = /** @class */ (function () {
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
    function Employee(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    Object.defineProperty(Employee.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (val) {
            this.name = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (val) {
            this.id = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Salary", {
        get: function () {
            return this.salary;
        },
        set: function (val) {
            this.salary = val;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.print = function () {
        return "".concat(this.name);
    };
    return Employee;
}());
var emp = new Employee('joy', 1, 100);
emp.Name = 'joydip';
console.log(emp.Salary);
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this._radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this._radius * this._radius;
    };
    return Circle;
}());
var products = [{
        id: 1,
        name: 'dell xps',
        price: 10000,
        description: 'new laptop from dell'
    }];
var DataOperations = /** @class */ (function () {
    // name: string;
    // id: number;
    // price: number;
    // description: string;
    function DataOperations(name) {
        this.name = name;
    }
    DataOperations.prototype.addData = function (data) {
    };
    return DataOperations;
}());
var FileDataOperation = /** @class */ (function (_super) {
    __extends(FileDataOperation, _super);
    function FileDataOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileDataOperation.prototype.fetchData = function () {
        return 'data';
    };
    return FileDataOperation;
}(DataOperations));
