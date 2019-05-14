

// Listing 15-3. The Contents of the attr.directive.ts File in the app Folder
// Directives are classes to which the @Directive decorator has been applied. The decorator requires
// the selector property, which is used to specify how the directive is applied to elements, expressed using
// a standard CSS style selector. The selector I used is [pa-attr], which will match any element that has an
// attribute called pa-attr, regardless of the element type or the value assigned to the attribute.

// Custom directives are given a distinctive prefix so they can be easily recognized. The prefix can be
// anything that is meaningful to your application. I have chosen the prefix Pa for my directive, reflecting the
// title of this guide, and this prefix is used in the attribute specified by the selector decorator property and
// the name of the attribute class. The case of the prefix is changed to reflect its use so that an initial lowercase
// character is used for the selector attribute name (pa-attr) and an initial uppercase character is used in the
// name of the directive class (PaAttrDirective).

// import { Directive, ElementRef } from "@angular/core";

// @Directive({
//  selector: "[pa-attr]",
// })

// export class PaAttrDirective 
// {
//      constructor(element: ElementRef)
//       {
//             element.nativeElement.classList.add("bg-success");
//       }
// }












// ______________________________________________________________________________________
// Listing 15-7. Reading an Attribute in the attr.directive.ts File
//support attributes eg in DOM API specify. 


// To receive the value of the pa-attr-class attribute, I added a new constructor parameter called
// bgClass, to which the @Attribute decorator has been applied. This decorator is defined in the @angular/
// core module, and it specifies the name of the attribute that should be used to provide a value for the
// constructor parameter when a new instance of the directive class is created. Angular creates a new instance
// of the decorator for each element that matches the selector and uses that element’s attributes to provide the
// values for the directive constructor arguments that have been decorated with @Attribute.
// Within the constructor, the value of the attribute is passed to the classList.add method, with a default
// value that allows the directive to be applied to elements that have the pa-attr attribute but not the pa-attrclass
// attribute.

// The result is that the class to which elements are added can now be specified using an attribute,
// producing the result shown in Figure 15-3.


// import { Directive, ElementRef, Attribute } from "@angular/core";

// @Directive({
//  selector: "[pa-attr]",
// })

// export class PaAttrDirective {

//  constructor(element: ElementRef, @Attribute("pa-attr-class") bgClass: string) {

//          element.nativeElement.classList.add(bgClass || "bg-success");

//  }
// }

























// Listing 15-8. Reusing an Attribute in the attr.directive.ts File
// Using a Single Host Element Attribute
// Using one attribute to apply a directive and another to configure it is redundant, and it makes more sense to
// make a single attribute do double duty, as shown in Listing 15-8.
// The @Attribute decorator now specifies the pa-attr attribute as the source of the bgClass parameter
// value. In Listing 15-9, I have updated the template to reflect the dual-purpose attribute.


// import { Directive, ElementRef, Attribute } from "@angular/core";

// @Directive({
//  selector: "[pa-attr]",
// })

// export class PaAttrDirective {
//  constructor(element: ElementRef, @Attribute("pa-attr") bgClass: string) {
//  element.nativeElement.classList.add(bgClass || "bg-success");
//  }
// }











// Listing 15-11. Defining an Input Property in the attr.directive.ts File
// Input properties are defined by applying the @Input decorator to a property and using it to specify the
// name of the attribute that contains the expression. This listing defines a single input property, which tells
// Angular to set the value of the directive’s bgClass property to the value of the expression contained in the
// pa-attr attribute.


//import { Directive, ElementRef, Input } from "@angular/core";
// @Directive({
//  selector: "[pa-attr]"
// })
// export class PaAttrDirective {
//  constructor(private element: ElementRef) {}
//  @Input("pa-attr")
//  bgClass: string;
//  ngOnInit() { 
//  this.element.nativeElement.classList.add(this.bgClass || "bg-success");
//  }
// }






// Listing 15-12. Receiving Change Notifications in the attr.directive.ts File 
// Responding to Input Property Changes
// Something odd happened in the previous example: adding a new item affected the appearance of the new
// elements only and not the existing elements. Behind the scenes, Angular has updated the value of the bgClass
// property for each of the directives that it created—one for each td element in the table column—but the
// directives didn’t notice because changing a property value doesn’t automatically cause directives to respond.
// To handle changes, a directive must implement the ngOnChanges method to receive notifications when
// the value of an input property changes, as shown in Listing 15-12.


// import { Directive, ElementRef, Attribute, Input,
//  SimpleChange } from "@angular/core";
// @Directive({
//  selector: "[pa-attr]"
// })
// export class PaAttrDirective {
//  constructor(private element: ElementRef) {}
//  @Input("pa-attr")
//  bgClass: string;

//  ngOnChanges(changes: {[property: string]: SimpleChange }) {   //properties will change as per SimpleChange
//  let change = changes["bgClass"];
//  let classList = this.element.nativeElement.classList;
//  if (!change.isFirstChange() && classList.contains(change.previousValue)) {
//  classList.remove(change.previousValue);
//  }
//  if (!classList.contains(change.currentValue)) {
//  classList.add(change.currentValue);
//  }
//  }
// }























// Listing 15-13. Defining an Output Property in the attr.directive.ts File
// Creating Custom Events
// Output properties are the Angular feature that allows directives to add custom events to their host elements,
// through which details of important changes can be sent to the rest of the application. Output properties are
// defined using the @Output decorator, which is defined in the @angular/core module, as shown in Listing 15-13.


// import { Directive, ElementRef, Attribute, Input,
//  SimpleChange, Output, EventEmitter } from "@angular/core";
// import { Product } from "./product.model";

// @Directive({
//  selector: "[pa-attr]"
// })

// export class PaAttrDirective {

//  constructor(private element: ElementRef) {

//  this.element.nativeElement.addEventListener("click", e => {
//  if (this.product != null) {
//  this.click.emit(this.product.category);
//  }
//  });
//  }


// @Input("pa-attr")
//  bgClass: string;

//  @Input("pa-product")
//  product: Product;

//  @Output("pa-category")    //tells who is the subscriber
//  click = new EventEmitter<string>();

//  ngOnChanges(changes: {[property: string]: SimpleChange }) {
//  let change = changes["bgClass"];
//  let classList = this.element.nativeElement.classList;
//  if (!change.isFirstChange() && classList.contains(change.previousValue)) {
//  classList.remove(change.previousValue);
//  }
//  if (!classList.contains(change.currentValue)) {
//  classList.add(change.currentValue);
//  }
//  }
// }













// Listing 15-15. Creating Host Bindings in the attr.directive.ts File 
import { Directive, ElementRef, Attribute, Input,
 SimpleChange, Output, EventEmitter, HostListener, HostBinding }
 from "@angular/core";
import { Product } from "./product.model";
@Directive({
 selector: "[pa-attr]"
})
export class PaAttrDirective {
 @Input("pa-attr")

 @HostBinding("class")
 bgClass: string;

 @Input("pa-product")
 product: Product;

 @Output("pa-category")
 click = new EventEmitter<string>(); 

 @HostListener("click")
 triggerCustomEvent() {
 if (this.product != null) {
 this.click.emit(this.product.category);
 }
 }
}



























































































// fnl
// import { Directive, ElementRef, Attribute, Input,
//          SimpleChange, Output, EventEmitter, HostListener, HostBinding }
//             from "@angular/core";
//  import { Product } from "./product.model";

// @Directive({
//     selector: "[pa-attr]"
// })
// export class PaAttrDirective {

//     @Input("pa-attr")
//     @HostBinding("class")
//     bgClass: string;

//     @Input("pa-product")
//     product: Product;

//     @Output("pa-category")
//     click = new EventEmitter<string>();

//     @HostListener("click")
//     triggerCustomEvent() {
//         if (this.product != null) {
//             this.click.emit(this.product.category);
//         }
//     }
// }
