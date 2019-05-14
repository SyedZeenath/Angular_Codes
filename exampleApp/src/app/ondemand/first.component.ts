
// import { Component } from "@angular/core";
// @Component({
//  selector: "first",
//  template: `<div class="bg-primary p-a-1">First Component</div>`
// })

// export class FirstComponent { }



// L 29-11. Adding a Service Dependency in the first.component.ts File

// import { Component } from "@angular/core";
// import { Product } from "../model/product.model";
// import { Model } from "../model/repository.model";

// @Component({
//  selector: "first",
//  template: `<div class="bg-primary p-a-1">
//  There are
//  <span class="strong"> {{getProducts().length}} </span>
//  products
//  </div>`
// })

// export class FirstComponent {
//  constructor(private repository: Model) {}
//  category: string = "Soccer";
//  getProducts(): Product[] {
//  return this.repository.getProducts()
//  .filter(p => p.category == this.category);
//  }
// }



// Useful DebugElement Properties and Methods
// Name Description
// nativeElement This property returns the object that represents the HTML
// element in the DOM.
// children This property returns an array of DebugElement objects
// representing the children of this element.
// query(selectorFunction) The selectorFunction is passed a DebugElement object for each
// HTML element in the component’s template, and this method
// returns the first DebugElement for which the function returns
// true.
// queryAll(selectorFunction) Similar to the query method, except the result is all the
// DebugElement objects for which the function returns true.
// triggerEventHandler(name, event) This method triggers an event. See the “Testing Component
// Events” section for details.



// L 29-14. Specifying an External Template in the first.component.ts File
// import { Component } from "@angular/core";
// import { Product } from "../model/product.model";
// import { Model } from "../model/repository.model";

// @Component({
//  selector: "first",
//  // moduleId: module.id,
//  templateUrl: "first.component.html"
// })

// export class FirstComponent {
//  constructor(private repository: Model) {}
//  category: string = "Soccer";
//  getProducts(): Product[] {
//  return this.repository.getProducts()
//  .filter(p => p.category == this.category);
//  }
// }






// Testing Component Events
// To demonstrate how to test for a component’s response to events, I defined a new property in the
// FirstComponent class and added a method to which the @HostBinding decorator has been applied, as
// shown in L 29-17.
// L 29-17. Adding Event Handling in the first.component.ts File

// import { Component, HostListener} from "@angular/core"; 
// import { Product } from "../model/product.model";
// import { Model } from "../model/repository.model";

// @Component({
//  selector: "first",
//  //moduleId: module.id,
//  templateUrl: "first.component.html"
// })

// export class FirstComponent {
//  constructor(private repository: Model) {}
//  category: string = "Soccer";
//  highlighted: boolean = false;
//  getProducts(): Product[] {
//  return this.repository.getProducts()
//  .filter(p => p.category == this.category);
//  }
//  @HostListener("mouseenter", ["$event.type"])
//  @HostListener("mouseleave", ["$event.type"])
//  setHighlight(type: string) {
//  this.highlighted = type == "mouseenter";
//  }
// }

// The setHighlight method has configured so that it will be invoked when the host element’s
// mouseenter and mouseleave events are triggered. L 29-18 updates the component’s template so that it
// uses the new property in a data binding










// Testing Output Properties
// Testing output properties is a simple process because the EventEmitter objects used to implement them
// are Observable objects that can be subscribed to in unit tests. L 29-20 adds an output property to the
// component under test.
// L 29-20. Adding an Output Property in the first.component.ts File

import { Component, HostListener, Output, EventEmitter} from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
@Component({
 selector: "first",
 // moduleId: module.id,
 templateUrl: "first.component.html" 
})
export class FirstComponent {
 constructor(private repository: Model) {}
 category: string = "Soccer";
 highlighted: boolean = false;
 @Output("pa-highlight")
 change = new EventEmitter<boolean>();
 getProducts(): Product[] {
 return this.repository.getProducts()
 .filter(p => p.category == this.category);
 }
 @HostListener("mouseenter", ["$event.type"])
 @HostListener("mouseleave", ["$event.type"])
 setHighlight(type: string) {
 this.highlighted = type == "mouseenter";
 this.change.emit(this.highlighted);
 }
}

// The component defines an output property called change, which is used to emit an event when the
// setHighlight method is called. L 29-21 shows a unit test that targets the output property.





// Testing Input Properties
// The process for testing input properties requires a little extra work. To get started, I added an input property
// to the FirstComponent class that is used to receive the data model repository, replacing the service that was
// received by the constructor, as shown in L 29-22. I have also removed the host event bindings and the
// output property in order to keep the example simple.
// L 29-22. Adding an Input Property in the first.component.ts File
// import { Component, HostListener, Input } from "@angular/core";
// import { Product } from "../model/product.model";
// import { Model } from "../model/repository.model";
// @Component({
//  selector: "first",
//  moduleId: module.id,
//  templateUrl: "first.component.html"
// })
// export class FirstComponent {
//  category: string = "Soccer";
//  highlighted: boolean = false;
//  getProducts(): Product[] {
//  return this.model == null ? [] : this.model.getProducts()
//  .filter(p => p.category == this.category);
//  }
//  @Input("pa-model")
//  model: Model;
// }

// The input property is set using an attribute called pa-model and is used within the getProducts
// method. L 29-23 shows how to write a unit test that targets the input property.


// Testing with Asynchronous Operations
// Another area that requires special measures is dealing with asynchronous operations. To demonstrate how
// this is done, L 29-24 modifies the component under test so that it uses the RestDataSource class,
// defined in Chapter 24, to get its data. This isn’t a class that was intended for use outside of the model feature
// module, but it provides a useful set of asynchronous methods that return Observable objects, so I have
// broken through the intended structure of the application so that I can demonstrate the test technique.
// L 29-24. Performing an Asynchronous Operation in the first.component.ts File

// import { Component, HostListener, Input } from "@angular/core"; 
// import { Product } from "../model/product.model";
// import { Model } from "../model/repository.model";
// import { RestDataSource } from "../model/rest.datasource";
// import { Observable } from "rxjs/Observable";
// @Component({
//  selector: "first",
//  moduleId: module.id,
//  templateUrl: "first.component.html"
// })
// export class FirstComponent {
//  _category: string = "Soccer";
//  _products: Product[] = [];
//  highlighted: boolean = false;
//  constructor(public datasource: RestDataSource) {}
//  ngOnInit() {
//  this.updateData();
//  }
//  getProducts(): Product[] {
//  return this._products;
//  }
//  set category(newValue: string) {
//  this._category;
//  this.updateData();
//  }
//   updateData() {
//  this.datasource.getData()
//  .subscribe(data => this._products = data
//  .filter(p => p.category == this._category));
//  }
// }


// The component gets its data through the data source’s getData method, which returns an Observable
// object. The component subscribes to the Observable and updates its _product property with the data
// objects, which is exposed to the template through the getProducts method.
// L 29-25 shows how this kind of component can be tested using the tools Angular provides for
// working with asynchronous operations in unit tests.





////misc ...

// Useful TestBed Methods
// Name Description
// configureTestingModule This method is used to configure the Angular testing module.
// createComponent This method is used to create an instance of the component.
// compileComponents This method is used to compile components, as described in the “Testing a
// Component with an External Template” section.


// Useful ComponentFixture Methods and Properties
// Name Description
// componentInstance This property returns the component object.
// debugElement This property returns the test host element for the component.
// nativeElement This property returns the DOM object representing the host element for the
// component.
// detectChanges() This method causes the test bed to detect state changes and reflect them in the
// component’s template.
// whenStable() This method returns a Promise that is resolved when the effect of an operation
// has been fully applied. See the “Testing with Asynchronous Operations” section
// for details.






// fnl

// import { Component, HostListener, Input } from "@angular/core";
// import { Product } from "../model/product.model";
// import { Model } from "../model/repository.model";
// import { RestDataSource } from "../model/rest.datasource";
// import { Observable } from "rxjs/Observable";

// @Component({
//     selector: "first",
//     moduleId: module.id,
//     templateUrl: "first.component.html"
// })
// export class FirstComponent {
//     _category: string = "Soccer";
//     _products: Product[] = [];
//     highlighted: boolean = false;

//     constructor(public datasource: RestDataSource) {}

//     ngOnInit() {
//         this.updateData();
//     }

//     getProducts(): Product[] {
//         return this._products;
//     }

//     set category(newValue: string) {
//         this._category;
//         this.updateData();
//     }

//     updateData() {
//         this.datasource.getData()
//             .subscribe(data => this._products = data
//                 .filter(p => p.category == this._category));
//     }
// }


