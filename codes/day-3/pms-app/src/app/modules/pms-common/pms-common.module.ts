import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashBoardComponent } from "./components/dashboard/dashboard.component";
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const commonRoutes: Routes = [{
    path: 'home',
    component: HomeComponent
}, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
}]
@NgModule({
    declarations: [DashBoardComponent, HomeComponent],
    imports: [RouterModule.forRoot(commonRoutes)],
    bootstrap: [],
    //to mention the name of assets of this module, which you think should be exposed publicly
    //it is subset of the assests of this module
    exports: [DashBoardComponent]
})
export class PmsCommonModule {

}