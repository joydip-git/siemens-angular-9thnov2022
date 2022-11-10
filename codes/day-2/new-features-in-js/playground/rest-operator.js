//rest operator is used to declare an array as an argument of a function, which will accept variable number of parameters, followed by the fixed by the fixed number of arguments
//using this operator you cam declare ONLY one array as part of the argument list
//this should be the last one in the argument list after all the fixed arguments
function calculateAverage(pName, ...marks) {
    let sum = 0
    for (const value of marks) {
        sum += value
    }
    console.log(sum / marks.length)
}

calculateAverage('anil', 10, 20, 30)
calculateAverage('sunil', 10, 20, 30, 40)
calculateAverage('mahesh', 10, 20)
