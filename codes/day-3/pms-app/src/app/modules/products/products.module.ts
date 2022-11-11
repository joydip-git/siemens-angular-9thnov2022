import { NgModule } from "@angular/core";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

@NgModule({
    imports: [],
    declarations: [ProductListComponent, ProductDetailComponent],
    exports: [ProductListComponent, ProductDetailComponent],
    bootstrap: [],
    providers: []
})
export class ProductsModule {

}