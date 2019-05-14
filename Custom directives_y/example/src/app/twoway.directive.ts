

// Listing 15-17. The Contents of the twoway.directive.ts File in the app Folder

import { Input, Output, EventEmitter, Directive,
 HostBinding, HostListener, SimpleChange } from "@angular/core";
@Directive({
 selector: "input[paModel]"
})
export class PaModel {

 @Input("paModel")
 modelProperty: string;

 @HostBinding("value")
 fieldValue: string = "";

 ngOnChanges(changes: { [property: string]: SimpleChange }) {
 let change = changes["modelProperty"];
 if (change.currentValue != this.fieldValue) {
 this.fieldValue = changes["modelProperty"].currentValue || "";
 }
 }

 @Output("paModelChange")
 update = new EventEmitter<string>();

 @HostListener("input", ["$event.target.value"])
 updateValue(newValue: string) {
 this.fieldValue = newValue;
 this.update.emit(newValue);
 }
}







// Listing 15-20. Exporting a Directive in the twoway.directive.ts File
// Exporting a Directive for Use in a Template Variable
// In earlier chapters, I used template variables to access functionality provided by built-in directives, such as
// ngForm. As an example, here is an element from Chapter 14:
// ...
// <form novalidate #form="ngForm" (ngSubmit)="submitForm(form)">
// ...
// The form template variable is assigned ngForm, which is then used to access validation information for
// the HTML form. This is an example of how a directive can provide access to its properties and methods so
// they can be used in data bindings and expressions.
// Listing 15-20 modifies the directive from the previous section so that it provides details of whether it has
// expanded the text in its host element.

// The exportAs property of the @Directive decorator specifies a name that will be used to refer to the
// directive in template variables. This example uses paModel as the value for the exportAs property, and you
// should try to use names that make it clear which directive is providing the functionality.
// The listing adds a property called direction to the directive, which used to indicate when data is
// flowing from the model to the element or from the element to the model.

// When you use the exportAs decorator, you are providing access to all the methods and properties
// defined by the directive to be used in template expressions and data bindings. Some developers prefix the
// names of the methods and properties that are not for use outside of the directive with an underscore
// (the _ character) or to apply the private keyword. This is an indication to other developers that some
// methods and properties should not be used but isn’t enforced by Angular.

// Listing 15-21 creates a template variable for the directive’s exported functionality and uses it in a style
// binding


// import { Input, Output, EventEmitter, Directive,
//  HostBinding, HostListener, SimpleChange } from "@angular/core";

// @Directive({
//  selector: "input[paModel]",
//  exportAs: "paModel"
// })

// export class PaModel {

//  direction: string = "None";

//  @Input("paModel")
//  modelProperty: string;

//  @HostBinding("value")
//  fieldValue: string = "";

//  ngOnChanges(changes: { [property: string]: SimpleChange }) {
//  let change = changes["modelProperty"];
//  if (change.currentValue != this.fieldValue) {
//  this.fieldValue = changes["modelProperty"].currentValue || "";
//  this.direction = "Model";
//  }
//  }
//  @Output("paModelChange")
//  update = new EventEmitter<string>();

//  @HostListener("input", ["$event.target.value"])
//  updateValue(newValue: string) {
//  this.fieldValue = newValue;
//  this.update.emit(newValue);
//  this.direction = "Element";
//  }
// }



































































































// fnl
// import { Input, Output, EventEmitter, Directive,
//     HostBinding, HostListener, SimpleChange } from "@angular/core";

// @Directive({
//     selector: "input[paModel]",
//     exportAs: "paModel"
// })
// export class PaModel {

//     direction: string = "None";

//     @Input("paModel")
//     modelProperty: string;

//     @HostBinding("value")
//     fieldValue: string = "";

//     ngOnChanges(changes: { [property: string]: SimpleChange }) {
//         let change = changes["modelProperty"];
//         if (change.currentValue != this.fieldValue) {
//             this.fieldValue = changes["modelProperty"].currentValue || "";
//             this.direction = "Model";
//         }
//     }

//     @Output("paModelChange")
//     update = new EventEmitter<string>();

//     @HostListener("input", ["$event.target.value"])
//     updateValue(newValue: string) {
//         this.fieldValue = newValue;
//         this.update.emit(newValue);
//         this.direction = "Element";
//     }
// }
