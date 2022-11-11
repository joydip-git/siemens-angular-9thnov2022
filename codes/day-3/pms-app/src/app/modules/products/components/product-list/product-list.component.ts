import { Component } from "@angular/core";
import { ApiResponse } from "src/app/models/api-response.model";
import { Product } from "src/app/models/product.model";
import { ProductService } from "../../services/product.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
    //providers: [ProductService]
})
export class ProductListComponent {
    // productName = 'Leaf Rake'
    // width = 300
    // changeProductName(newName: string) {
    //     this.productName = newName
    // }
    searchText = '';
    products?: Product[] | null;

    constructor(private _ps: ProductService) {
        const obs = this._ps.getProducts()
        obs
            .subscribe({
                next: (resp: ApiResponse<Product[]>) => {
                    if (resp.data !== null) {
                        this.products = resp.data
                    }
                },
                error: (err) => {
                    console.log(err)
                }
            })
    }

    updateSearchText(newText: string) {
        this.searchText = newText
    }
}