import { add, subtract } from "./utility";

document.getElementById('btnCalculate')
    .addEventListener('click', function () {

        const txtFirst = document.getElementById('txtFirst')
        const firstValue = Number(txtFirst.value)

        const secondValue = Number(document.getElementById('txtSecond').value)

        let result = 0
        if (document.getElementById('rdAdd').checked) {
            result = add(firstValue, secondValue)
        }

        if (document.getElementById('rdSubtract').checked) {
            result = subtract(firstValue, secondValue)
        }

        document.getElementById('txtResult').value = result.toString()
    })