

// import { NgModule } from "@angular/core";
// import { BrowserModule } from "@angular/platform-browser";
// import { ProductComponent } from "./component";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
// // import { PaAttrDirective } from "./attr.directive";

// @NgModule({
//  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
//  declarations: [ProductComponent],
//  bootstrap: [ProductComponent]
// })

// export class AppModule { }




// Listing 15-5. Configuring the Component in the app.module.ts File
// import { PaAttrDirective } from "./attr.directive";
//  declarations: [ProductComponent, PaAttrDirective],

// import { NgModule } from "@angular/core";
// import { BrowserModule } from "@angular/platform-browser";
// import { ProductComponent } from "./component";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { PaAttrDirective } from "./attr.directive";

// @NgModule({
//  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
//  declarations: [ProductComponent, PaAttrDirective],
//  bootstrap: [ProductComponent]
// })

// export class AppModule { }





// Listing 15-18. Registering the two way Directive in the app.module.ts File
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";
@NgModule({
 imports: [BrowserModule, FormsModule, ReactiveFormsModule],
 declarations: [ProductComponent, PaAttrDirective, PaModel],
 bootstrap: [ProductComponent]
})
export class AppModule { }


























// fnl
/*import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { PaAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ProductComponent, PaAttrDirective, PaModel],
    bootstrap: [ProductComponent]
})
export class AppModule { }
*/