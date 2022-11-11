import { add, subtract } from "./utility";

const btn = document.getElementById('btnCalculate')
btn?.addEventListener('click', function () {

    const txtFirst = <HTMLInputElement>document.getElementById('txtFirst')
    const firstValue = Number(txtFirst?.value)

    const txtSecond = <HTMLInputElement>document.getElementById('txtSecond')
    const secondValue = Number(txtSecond?.value)

    let result = 0
    const rdAdd = <HTMLInputElement>document.getElementById('rdAdd')
    if (rdAdd?.checked) {
        result = add(firstValue, secondValue)
    }
    const rdSubtract = <HTMLInputElement>document.getElementById('rdSubtract')
    if (rdSubtract?.checked) {
        result = subtract(firstValue, secondValue)
    }

    const txtResult = <HTMLInputElement>document.getElementById('txtResult')
    txtResult.value = result.toString()
})