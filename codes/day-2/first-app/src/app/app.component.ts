import { Component } from "@angular/core";

//app.component => appcomponent => AppComponent
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular'
  constructor() {
    console.log('[App] component created')
  }
}
