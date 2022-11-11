import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductFilterPipe } from "./pipes/product-filter/product-filter.pipe";

@NgModule({
    imports: [CommonModule],
    declarations: [ProductListComponent, ProductDetailComponent, ProductFilterPipe],
    exports: [ProductListComponent, ProductDetailComponent],
    bootstrap: [],
    providers: []
})
export class ProductsModule {

}