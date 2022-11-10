
//
window.addEventListener(
    'DOMContentLoaded',
    function () {
        const button = this.document.getElementById('btnLoad')
        button.addEventListener(
            'click',
            async function () {
                try {
                    const httpResponseObj = await fetch('https://jsonplaceholder.typicode.com/users')
                    const data = await httpResponseObj.json()
                    console.log(data)
                } catch (error) {
                    console.log(error.message)
                }
            }
        )
    }
)

// function fetchData() {
//     const p = new Promise(
//         (resolve, reject) => {
//             const requestObj = new XMLHttpRequest()
//             console.log(requestObj.readyState)

//             try {
//                 requestObj.addEventListener(
//                     'readystatechange',
//                     function () {
//                         //console.log(requestObj.readyState)
//                         if (requestObj.readyState === 4 && requestObj.status === 200) {
//                             const jsonData = requestObj.responseText
//                             const jsData = JSON.parse(jsonData)
//                             resolve(jsData)
//                         }
//                     }
//                 )
//                 requestObj.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
//                 requestObj.send()
//             } catch (err) {
//                 reject(err)
//             }
//         }
//     )
//     return p
// }

// window.addEventListener(
//     'DOMContentLoaded',
//     function () {
//         const button = this.document.getElementById('btnLoad')
//         button.addEventListener(
//             'click',
//             async function () {
//                 try {
//                     const data = await fetchData()
//                     console.log(data)
//                 } catch (error) {
//                     console.log(error.message)
//                 }
//             }
//         )
//     }
// )

