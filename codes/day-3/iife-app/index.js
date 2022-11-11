(
    function () {
        const add = (a, b) => a + b
        console.log(add(12, 3))
    }
)();

(
    function () {
        console.log(addModule.add(12, 3))
        const subtract = (a, b) => a - b
        console.log(subtract(12, 3))
    }
)();