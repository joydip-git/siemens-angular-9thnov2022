import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './modules/pms-common/components/page-not-found/page-not-found.component';
import { PmsCommonModule } from './modules/pms-common/pms-common.module';
import { ProductsModule } from './modules/products/products.module';
// import { ProductService } from './modules/products/services/product.service';
const appRoutes: Routes = [{
  path: '**',
  component: PageNotFoundComponent
}]
@NgModule({
  //register components, directives, pipes here
  declarations: [
    AppComponent, PageNotFoundComponent
  ],
  //register application child modules and angular built-in modules
  imports: [
    BrowserModule, PmsCommonModule, ProductsModule, RouterModule.forRoot(appRoutes)
  ],
  //providers: [ProductService],
  bootstrap: [AppComponent]
  //bootstrap: [AppComponent, AnotherComponent]
})
export class AppModule {
  constructor() {
    console.log('App module created')
  }
}
