function resize(choice, width) {
    let resizeCtrlFn = undefined
    switch (choice) {
        case 1:
            resizeCtrlFn = function () {
                const txtObj = document.getElementById('txtValue')
                txtObj.style.width = `${width}px`
            }
            break;
        case 2:
            resizeCtrlFn = function () {
                const btnObj = document.getElementById('btnClick')
                btnObj.style.width = `${width}px`
            }
            break;
        default:
            break;
    }
    return resizeCtrlFn
}

window.addEventListener(
    'DOMContentLoaded',
    function () {
        //let callback = undefined

        this.document.getElementById('radioText').addEventListener(
            'change',
            function () {
                if (this.checked) {
                    const callback = resize(1, 300)
                    callback()
                }
            })

        this.document.getElementById('radioBtn').addEventListener(
            'change',
            function () {
                if (this.checked) {
                    const callback = resize(2, 300)
                    callback()
                }
            })

        // if (callback) {
        //     callback()
        // }
    }
)