import { NgModule } from "@angular/core";
import { DashBoardComponent } from "./components/dashboard/dashboard.component";


@NgModule({
    declarations: [DashBoardComponent],
    imports: [],
    bootstrap: [],
    //to mention the name of assets of this module, which you think should be exposed publicly
    //it is subset of the assests of this module
    exports: [DashBoardComponent]
})
export class PmsCommonModule {

}