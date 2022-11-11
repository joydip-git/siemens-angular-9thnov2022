import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiResponse } from "src/app/models/api-response.model";
import { Product } from "src/app/models/product.model";
import { ProductService } from "../../services/product.service";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    product?: Product | null;
    constructor(private _ps: ProductService, private _route: ActivatedRoute) {

    }
    ngOnInit(): void {
        const id = Number(this._route.snapshot.params['id'])
        this._ps
            .getProductById(id)
            .subscribe({
                next: (resp: ApiResponse<Product>) => {
                    if (resp.data !== null) {
                        this.product = resp.data
                    }
                },
                error: (e) => {
                    console.log(e)
                }
            })
    }

}