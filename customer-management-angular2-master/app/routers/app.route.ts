/**Impoorting provideRouter function to configure Router from angular Router Library */
import { provideRouter, RouterConfig } from "@angular/router";

/** Importing components used for routing */
import { CustomerDetailsComponent } from "../components/customer-details.component";
import { CustomersOrdersComponent } from "../components/customers-orders.component";

/** All Our routes should go to RouterConfig Array with appropriate paths an components */
const routes : RouterConfig = [
    {
        path : "",
        redirectTo : "/customers",
        pathMatch : "full"
    },
    {
        path : "customers",
        component : CustomerDetailsComponent
    },
    {
        path : "orders",
        component : CustomersOrdersComponent
    }
    /** Adding Wildcard in case URL requested is not found in RouteConfig Array or is invalid URL 
     * Useful to show 404 File not Found Pages/or redirect to Default URL
     */
   // {
       // path : "**" ,
       // component : PageNotFoundComponent
   // }
]

/** Passing config array to provideRouter function returning configured router service provider
 * Exporitng the same to main.ts file to register our router providers in bootstrap method
 */
export const AppRouterProviders = [
    provideRouter(routes)
];