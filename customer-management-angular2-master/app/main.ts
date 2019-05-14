import { bootstrap } from "@angular/platform-browser-dynamic";

import { AppRouterProviders } from "./routes/app.route"

import { AppComponent } from "./components/app.component";

bootstrap(AppComponent,[
    AppRouterProviders
]).catch(err => console.log(err));