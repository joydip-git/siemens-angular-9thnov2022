//1. object literal syntax
const obj = {
    //value properties
    name: 'anil',
    id: 1,
    salary: 1000,
    //functional property
    print: function () {
        //this.location
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

obj.location = 'Bangalore'
// console.log(obj.name)
// console.log(obj['salary'])
// console.log(obj.print())
// console.log(obj.location)

for (const propName in obj) {
    const propValue = obj[propName]
    console.log(propName + ':' + propValue)
}