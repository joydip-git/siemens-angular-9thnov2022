import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PmsCommonModule } from './modules/pms-common/pms-common.module';
import { ProductsModule } from './modules/products/products.module';

@NgModule({
  //register components, directives, pipes here
  declarations: [
    AppComponent
  ],
  //register application child modules and angular built-in modules
  imports: [
    BrowserModule, PmsCommonModule, ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [AppComponent, AnotherComponent]
})
export class AppModule {
  constructor() {
    console.log('App module created')
  }
}
