import { enableProdMode, PlatformRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { environment } from "./environments/environment";

import { AppModule } from "./app/app.module";

if (environment.production) {
  enableProdMode()
}

const platform: PlatformRef = platformBrowserDynamic()
const p = platform
  .bootstrapModule(AppModule)

p.catch(
  (e) => {
    console.log(e)
  }
)

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(
//     (e) => console.log(e)
//   )
