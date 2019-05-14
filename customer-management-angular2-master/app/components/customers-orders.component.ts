import { Component,OnInit } from "@angular/core";
import { CustomerService } from "../services/customers.service";
import { Customer } from "../customers";

@Component({
    selector : '<customers-orders>',
    templateUrl : 'app/partials/customers-orders.component.html',
    styleUrls : ['app/styles/customers-orders.style.css'],
    providers : [CustomerService]
})

export /**
 * CustomersOrdersComponent
 */
class CustomersOrdersComponent implements OnInit {
    title = "All Customers Orders";
    customers : Customer[] = [];
    constructor(private custService : CustomerService){ };
    getCustDetails(){
        this.custService.getCustomers().then(customers => this.customers = customers);
    }
    ngOnInit(){
        this.getCustDetails();
    }
}