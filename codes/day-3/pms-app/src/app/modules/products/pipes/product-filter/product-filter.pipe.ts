import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Pipe({
    name: 'productfilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]): Product[] {
        if (value && value !== null && value.length > 0 && args && args !== null && args.length > 0 && args[0] !== '') {
            const filteredArray = value.filter(
                (p: Product) => {
                    const searchText = args[0].toLocaleLowerCase()
                    const productName = p.productName.toLocaleLowerCase()
                    if (productName.indexOf(searchText) !== -1) {
                        return true
                    } else
                        return false
                }
            )
            return filteredArray
        } else {
            return value
        }
    }

}