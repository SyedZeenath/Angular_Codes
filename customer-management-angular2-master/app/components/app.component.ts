/**Prefer component classes lean. Components don't fetch data from the server, 
 * they don't validate user input, and they don't log directly to the console. 
 * They delegate such tasks to services. */

/** importing component from angular core Library having collection of modules */
import { Component } from "@angular/core";
/**Importing Routing Directives from Angular Router Libray */
import { ROUTER_DIRECTIVES } from "@angular/router";


/**Declariing Root Decorator with different metadata which will be attached to the class declared below for App component*/
@Component({
    selector : 'customer-app', //Selector for HTML
    templateUrl : 'app/partials/nav.component.html',
    styleUrls : ['app/styles/nav.style.css'],
    directives : [ROUTER_DIRECTIVES]
})


/** Exporting Public Class/Component so that other components can use this */
export /**
 * AppComponent
 */
class AppComponent {
    title = "Customer Management App";
}