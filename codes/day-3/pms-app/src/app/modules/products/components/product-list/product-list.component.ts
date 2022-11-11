import { Component } from "@angular/core";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    productName = 'Leaf Rake'
    width = 300
    changeProductName(newName: string) {
        this.productName = newName
    }
}