import { Injectable } from "@angular/core";
import { CUSTOMERS } from "../customer-data";

@Injectable()

export /**
 * CustomerService
 */
class CustomerService {
    getCustomers(){
        let arr = CUSTOMERS.map((v,i) => CUSTOMERS[i].orders.map((v,j)=>CUSTOMERS[i].orders[j].quantity * CUSTOMERS[i].orders[j].unitPrice));
        let totalArr = arr.map((v,i) => arr[i].reduce((p,c) => p+c)); 
        (CUSTOMERS.map((v,i) => CUSTOMERS[i].orders.map((v,j)=>CUSTOMERS[i].orderTotal = totalArr[i])));
        return Promise.resolve(CUSTOMERS);
    }
}