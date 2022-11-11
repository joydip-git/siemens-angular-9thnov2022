import { Component } from "@angular/core";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
    product = {
        productId: 1,
        productName: "Leaf Rake",
        productCode: "GDN-0011",
        releaseDate: "March 19, 2016", description: "Leaf rake with 48-inch wooden handle.",
        price: 19.95,
        starRating: 2,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
}