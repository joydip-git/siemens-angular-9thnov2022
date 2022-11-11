import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductFilterPipe } from "./pipes/product-filter/product-filter.pipe";
import { ProductService } from "./services/product.service";

const productRoutes: Routes = [{
    path: 'products',
    component: ProductListComponent
}, {
    path: 'products/:id',
    component: ProductDetailComponent
}]

@NgModule({
    imports: [CommonModule, HttpClientModule, RouterModule.forRoot(productRoutes)],
    declarations: [ProductListComponent, ProductDetailComponent, ProductFilterPipe],
    exports: [ProductListComponent, ProductDetailComponent],
    bootstrap: [],
    providers: [ProductService]
})
export class ProductsModule {

}