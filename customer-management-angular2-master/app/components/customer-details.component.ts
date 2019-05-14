import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../services/customers.service";
import { Customer } from "../customers";

@Component({
    selector : 'customer-details',
    templateUrl : 'app/partials/customer-details.component.html',
    styleUrls : ['app/styles/customer-details.style.css'],
    providers : [CustomerService]
})

export /**
 * CustomerDetailsComponent
 */
class CustomerDetailsComponent implements OnInit {
    customers : Customer[] = [];
    custorders = [];
    constructor(private customerService : CustomerService){}
    getCustomers(){
         this.customerService.getCustomers().then(customers => this.customers = customers);
    }
    ngOnInit(){
        this.getCustomers();
    }
}