import { allProducts } from "./data/products";
document.getElementById('btnLoad')?.addEventListener(
    'click',
    function () {
        allProducts.forEach(
            (p) => {
                console.log(p.name)
            }
        )
    }
)
