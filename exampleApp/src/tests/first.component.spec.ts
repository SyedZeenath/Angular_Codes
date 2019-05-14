
// import { TestBed } from "@angular/core/testing";
// import { FirstComponent } from "../app/ondemand/first.component";
// describe("FirstComponent", () => {
//     beforeEach(() => {
//  TestBed.configureTestingModule({    //smilar to angular-mocks
//  declarations: [FirstComponent]
//  });
//  });
// });



// // L 29-10. Creating an Instance of the Component in the first.component.spec.ts File

// import { TestBed, ComponentFixture} from "@angular/core/testing";
// import { FirstComponent } from "../app/ondemand/first.component";

// describe("FirstComponent", () => {
//  let fixture: ComponentFixture<FirstComponent>;
//  let component: FirstComponent;
//  beforeEach(() => {
//  TestBed.configureTestingModule({
//  declarations: [FirstComponent]
//  });
//  fixture = TestBed.createComponent(FirstComponent);
//  component = fixture.componentInstance;
//  });
//  it("is defined", () => {
//  expect(component).toBeDefined()
//  });
// });





// // Useful ComponentFixture Methods and Properties
// // Name Description
// // componentInstance This property returns the component object.
// // debugElement This property returns the test host element for the component.
// // nativeElement This property returns the DOM object representing the host element for the
// // component.
// // detectChanges() This method causes the test bed to detect state changes and reflect them in the
// // component’s template.
// // whenStable() This method returns a Promise that is resolved when the effect of an operation
// // has been fully applied. See the “Testing with Asynchronous Operations” section
// // for details.











// import { TestBed, ComponentFixture, async } from "@angular/core/testing";
// import { FirstComponent } from "../app/ondemand/first.component";
// import { Product } from "../app/model/product.model";
// import { Model } from "../app/model/repository.model";
// import { DebugElement } from "@angular/core";
// import { By } from "@angular/platform-browser";
// import { Component, ViewChild } from "@angular/core";
// import { RestDataSource } from "../app/model/rest.datasource";
// import { Observable } from "rxjs/Observable";
// import "rxjs/add/observable/from";
// import { Injectable } from "@angular/core";

// @Injectable()
// class MockDataSource {
//     public data = [
//         new Product(1, "test1", "Soccer", 100),
//         new Product(2, "test2", "Chess", 100),
//         new Product(3, "test3", "Soccer", 100),
//     ];

//     getData(): Observable<Product[]> {
//         return new Observable<Product[]>(obs => {
//             setTimeout(() => obs.next(this.data), 1000);
//         })
//     }
// }

// describe("FirstComponent", () => {

//     let fixture: ComponentFixture<FirstComponent>;
//     let component: FirstComponent;
//     let dataSource = new MockDataSource();

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [FirstComponent],
//             providers: [
//                 { provide: RestDataSource, useValue: dataSource }
//             ]
//         });
//         TestBed.compileComponents().then(() => {
//             fixture = TestBed.createComponent(FirstComponent);
//             component = fixture.componentInstance;
//         });
//     }));

//     it("performs async op", () => {
//         dataSource.data.push(new Product(100, "test100", "Soccer", 100));
//         fixture.detectChanges();

//         fixture.whenStable().then(() => {
//             expect(component.getProducts().length).toBe(3);
//         });
//     });
// });



// //_____start_________________________________________________________________________

// // import { TestBed } from "@angular/core/testing";
// // import { FirstComponent } from "../app/ondemand/first.component";
// // describe("FirstComponent", () => {
// //     beforeEach(() => {
// //  TestBed.configureTestingModule({
// //  declarations: [FirstComponent]
// //  });
// //  });
// // });



// // L 29-10. Creating an Instance of the Component in the first.component.spec.ts File
// // import { TestBed, ComponentFixture} from "@angular/core/testing";
// // import { FirstComponent } from "../app/ondemand/first.component";
// // describe("FirstComponent", () => {
// //  let fixture: ComponentFixture<FirstComponent>;
// //  let component: FirstComponent;
// //  beforeEach(() => {
// //  TestBed.configureTestingModule({
// //  declarations: [FirstComponent]
// //  });
// //  fixture = TestBed.createComponent(FirstComponent);
// //  component = fixture.componentInstance;
// //  });
// //  it("is defined", () => {
// //  expect(component).toBeDefined()
// //  });
// // });




// // L 29-12. Providing a Service in the first.component.spec.ts File
// import { TestBed, ComponentFixture} from "@angular/core/testing";
// import { FirstComponent } from "../app/ondemand/first.component";
// import { Product } from "../app/model/product.model";
// import { Model } from "../app/model/repository.model";
// describe("FirstComponent", () => {
//  let fixture: ComponentFixture<FirstComponent>;
//  let component: FirstComponent;
//  let mockRepository = {
//  getProducts: function () {
//  return [
//  new Product(1, "test1", "Soccer", 100),
//  new Product(2, "test2", "Chess", 100),
//  new Product(3, "test3", "Soccer", 100),
//  ]
//  }
//  }
//  beforeEach(() => {
//  TestBed.configureTestingModule({
//  declarations: [FirstComponent],
//  providers: [
//  { provide: Model, useValue: mockRepository }
//  ]
//  });
//  fixture = TestBed.createComponent(FirstComponent);
//  component = fixture.componentInstance;
//  });
//  it("filters categories", () => {
//  component.category = "Chess"
//  expect(component.getProducts().length).toBe(1);
//  component.category = "Soccer";
//  expect(component.getProducts().length).toBe(2);
//  component.category = "Running";
//  expect(component.getProducts().length).toBe(0);
//  });
// });





// // Testing Data Bindings
// // The previous example showed how a component’s properties and methods can be used in a unit test. This
// // is a good start, but many components will also include small fragments of functionality in the data binding
// // expressions contained in their templates, and these should be tested as well. L 29-13 checks that the
// // data binding in the component’s template correctly displays the number of products in the mock data
// // model.
// // L 29-13. Unit Testing a Data Binding in the first.component.spec.ts File

// import { TestBed, ComponentFixture } from "@angular/core/testing";
// import { FirstComponent } from "../app/ondemand/first.component";
// import { Product } from "../app/model/product.model";
// import { Model } from "../app/model/repository.model";
// import { DebugElement } from "@angular/core";
// import { By } from "@angular/platform-browser";
// describe("FirstComponent", () => {
//     let fixture: ComponentFixture<FirstComponent>;
//     let component: FirstComponent;
//     let debugElement: DebugElement;
//     let bindingElement: HTMLSpanElement;
//     let mockRepository = {
//         getProducts: function () {
//             return [
//                 new Product(1, "test1", "Soccer", 100),
//                 new Product(2, "test2", "Chess", 100),
//                 new Product(3, "test3", "Soccer", 100),
//             ]
//         }
//     }
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             declarations: [FirstComponent],
//             providers: [
//                 { provide: Model, useValue: mockRepository }
//             ]
//         });
//         fixture = TestBed.createComponent(FirstComponent);
//         component = fixture.componentInstance;
//         debugElement = fixture.debugElement;
//         bindingElement = debugElement.query(By.css("span")).nativeElement;
//     });
//     it("filters categories", () => {
//         component.category = "Chess"
//         fixture.detectChanges();
//         expect(component.getProducts().length).toBe(1);
//         expect(bindingElement.textContent).toContain("1");
//         component.category = "Soccer";
//         fixture.detectChanges();
//         expect(component.getProducts().length).toBe(2);
//         expect(bindingElement.textContent).toContain("2");
//         component.category = "Running";
//         fixture.detectChanges();
//         expect(component.getProducts().length).toBe(0);
//         expect(bindingElement.textContent).toContain("0");
//     });
// });




// // L 29-16. Compiling a Component in the first.component.spec.ts File
// import { TestBed, ComponentFixture, async } from "@angular/core/testing";
// import { FirstComponent } from "../app/ondemand/first.component";
// import { Product } from "../app/model/product.model";
// import { Model } from "../app/model/repository.model";
// import { DebugElement } from "@angular/core";
// import { By } from "@angular/platform-browser";
// describe("FirstComponent", () => {
//  let fixture: ComponentFixture<FirstComponent>;
//  let component: FirstComponent;
//  let debugElement: DebugElement;
//  let spanElement: HTMLSpanElement;
//  let mockRepository = {
//  getProducts: function () {
//  return [
//  new Product(1, "test1", "Soccer", 100),
//  new Product(2, "test2", "Chess", 100),
//  new Product(3, "test3", "Soccer", 100),
//  ]
//  }
//  }
//  beforeEach(async(() => {
//  TestBed.configureTestingModule({
//  declarations: [FirstComponent],
//  providers: [
//  { provide: Model, useValue: mockRepository }
//  ]
//  });
//  TestBed.compileComponents().then(() => {
//  fixture = TestBed.createComponent(FirstComponent);
//  component = fixture.componentInstance;
//  debugElement = fixture.debugElement;
//  spanElement = debugElement.query(By.css("span")).nativeElement;
//  });
//  }));
//  it("filters categories", () => {
//  component.category = "Chess"
//  fixture.detectChanges();
//  expect(component.getProducts().length).toBe(1);
//  expect(spanElement.textContent).toContain("1");
//  });
// });




// // L 29-19. Triggering Events in the first.component.spec.ts File
// import { TestBed, ComponentFixture, async } from "@angular/core/testing";
// import { FirstComponent } from "../app/ondemand/first.component";
// import { Product } from "../app/model/product.model";
// import { Model } from "../app/model/repository.model";
// import { DebugElement } from "@angular/core";
// import { By } from "@angular/platform-browser";

// describe("FirstComponent", () => {
//     let fixture: ComponentFixture<FirstComponent>;
//     let component: FirstComponent;
//     let debugElement: DebugElement;
//     let divElement: HTMLDivElement;
//     let mockRepository = {
//         getProducts: function () {
//             return [
//                 new Product(1, "test1", "Soccer", 100),
//                 new Product(2, "test2", "Chess", 100),
//                 new Product(3, "test3", "Soccer", 100),
//             ]
//         }
//     }
//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [FirstComponent],
//             providers: [
//                 { provide: Model, useValue: mockRepository }
//             ]
//         });
//         TestBed.compileComponents().then(() => {
//             fixture = TestBed.createComponent(FirstComponent);
//             component = fixture.componentInstance;
//             debugElement = fixture.debugElement;
//             divElement = debugElement.children[0].nativeElement;
//         });
//     }));
//     it("handles mouse events", () => {
//         expect(component.highlighted).toBeFalsy();
//         expect(divElement.classList.contains("bg-success")).toBeFalsy();
//         debugElement.triggerEventHandler("mouseenter", new Event("mouseenter"));
//         fixture.detectChanges();
//         expect(component.highlighted).toBeTruthy();
//         expect(divElement.classList.contains("bg-success")).toBeTruthy();
//         debugElement.triggerEventHandler("mouseleave", new Event("mouseleave"));
//         fixture.detectChanges();
//         expect(component.highlighted).toBeFalsy();
//         expect(divElement.classList.contains("bg-success")).toBeFalsy();
//     });
// });

// The test in this L checks the initial state of the component and the template
// and then triggers the
// mouseenter and mouseleave events, checking the effect that each has.



// // L 29-21. Testing an Output Property in the first.component.spec.ts File
import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { FirstComponent } from "../app/ondemand/first.component";
import { Product } from "../app/model/product.model";
import { Model } from "../app/model/repository.model";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
describe("FirstComponent", () => {
    let fixture: ComponentFixture<FirstComponent>;
    let component: FirstComponent;
    let debugElement: DebugElement;
    let mockRepository = {
        getProducts: function () {
            return [
                new Product(1, "test1", "Soccer", 100),
                new Product(2, "test2", "Chess", 100),
                new Product(3, "test3", "Soccer", 100),
            ]
        }
    }
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FirstComponent],
            providers: [
                { provide: Model, useValue: mockRepository }
            ]
        });
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(FirstComponent);
            component = fixture.componentInstance;
            debugElement = fixture.debugElement;
        });
    }));
    it("implements output property", () => {
        let highlighted: boolean;
        component.change.subscribe(value => highlighted = value);
        debugElement.triggerEventHandler("mouseenter", new Event("mouseenter"));
        expect(highlighted).toBeTruthy();
        debugElement.triggerEventHandler("mouseleave", new Event("mouseleave"));
        expect(highlighted).toBeFalsy();
    });
});

// // I could have invoked the component’s setHighlight method directly in the unit test, but instead I have
// // chosen to trigger the mouseenter and mouseleave events, which will activate the output property indirectly.
// // Before triggering the events, I use the subscribe method to receive the event from the output property,
// // which is then used to check for the expected outcomes.




// // L 29-23. Testing an Input Property in the first.component.spec.ts File
// // import { TestBed, ComponentFixture, async } from "@angular/core/testing";
// // import { FirstComponent } from "../app/ondemand/first.component";
// // import { Product } from "../app/model/product.model";
// // import { Model } from "../app/model/repository.model";
// // import { DebugElement } from "@angular/core";
// // import { By } from "@angular/platform-browser";
// // import { Component, ViewChild } from "@angular/core";
// // @Component({
// //  template: `<first [pa-model]="model"></first>`
// // })
// // class TestComponent {
// //  constructor(public model: Model) { }
// //  @ViewChild(FirstComponent)
// //  firstComponent: FirstComponent;
// // }
// // describe("FirstComponent", () => {
// //  let fixture: ComponentFixture<TestComponent>;
// //  let component: FirstComponent;
// //  let debugElement: DebugElement;
// //  let mockRepository = {
// //  getProducts: function () {
// //  return [
// //  new Product(1, "test1", "Soccer", 100),
// //  new Product(2, "test2", "Chess", 100),
// //  new Product(3, "test3", "Soccer", 100),
// //  ]
// //  }
// //  }
// //  beforeEach(async(() => {
// //  TestBed.configureTestingModule({
// //  declarations: [FirstComponent, TestComponent],
// //  providers: [
// //  { provide: Model, useValue: mockRepository }
// //  ]
// //  });
// //  TestBed.compileComponents().then(() => {
// //  fixture = TestBed.createComponent(TestComponent);
// //  component = fixture.componentInstance.firstComponent;
// //  debugElement = fixture.debugElement.query(By.directive(FirstComponent));
// //  });
// //  }));
// //  it("receives the model through an input property", () => {
// //  component.category = "Chess";
// //  fixture.detectChanges();
// //  let products = mockRepository.getProducts()
// //  .filter(p => p.category == component.category);
// //  let componentProducts = component.getProducts();
// //  for (let i = 0; i < componentProducts.length; i++) {
// //  expect(componentProducts[i]).toEqual(products[i]);
// //  }
// //  expect(debugElement.query(By.css("span")).nativeElement.textContent)
// //  .toContain(products.length);
// //  });
// // });





// // L 29-25. Testing an Asynchronous Operation in the first.component.spec.ts File
// import { TestBed, ComponentFixture, async } from "@angular/core/testing";
// import { FirstComponent } from "../app/ondemand/first.component";
// import { Product } from "../app/model/product.model";
// import { Model } from "../app/model/repository.model";
// import { DebugElement } from "@angular/core";
// import { By } from "@angular/platform-browser";
// import { Component, ViewChild } from "@angular/core";
// import { RestDataSource } from "../app/model/rest.datasource";
// import { Observable } from "rxjs/Observable";
// import "rxjs/add/observable/from";
// import { Injectable } from "@angular/core";
// @Injectable()
// class MockDataSource {
//  public data = [
//  new Product(1, "test1", "Soccer", 100),
//  new Product(2, "test2", "Chess", 100),
//  new Product(3, "test3", "Soccer", 100),
//  ];
// //  getData(): Observable<Product[]> {
// //  return new Observable<Product>(obs => {
// //  setTimeout(() => obs.next(this.data), 1000);
// //  })
// //  }
// }
// describe("FirstComponent", () => {
//  let fixture: ComponentFixture<FirstComponent>;
//  let component: FirstComponent;
//  let dataSource = new MockDataSource();
//  beforeEach(async(() => {
//  TestBed.configureTestingModule({
//  declarations: [FirstComponent],
//  providers: [
//  { provide: RestDataSource, useValue: dataSource }
//  ]
//  });
//  TestBed.compileComponents().then(() => {
//  fixture = TestBed.createComponent(FirstComponent);
//  component = fixture.componentInstance;
//  });
//  }));
//  it("performs async op", () => {
//  dataSource.data.push(new Product(100, "test100", "Soccer", 100));
//  fixture.detectChanges();
//  fixture.whenStable().then(() => {
//  expect(component.getProducts().length).toBe(3);
//  });
//  });
// });

// // The mock object in this example is more fully formed than the one I created previously, just to show
// // different ways of achieving the same goal. The important point to note is that the getData method it
// // implements introduces a one-second delay before it returns the sample data.
// // This delay is important because it means that the effect of calling the detectChanges method in the
// // unit test won’t affect the component immediately. To deal with this, I call the whenStable method defined
// // by the ComponentFixture class, which returns a Promise that resolves when all the changes have been fully
// // processed. This allows me to defer the assessment of the outcome of the test until the Observable returned
// // by the mock data source has delivered its data to the component














// // L 29-25. Testing an Asynchronous Operation in the first.component.spec.ts File
// // import { TestBed, ComponentFixture, async } from "@angular/core/testing";
// // import { FirstComponent } from "../app/ondemand/first.component";
// // import { Product } from "../app/model/product.model";
// // import { Model } from "../app/model/repository.model";
// // import { DebugElement } from "@angular/core";
// // import { By } from "@angular/platform-browser";
// // import { Component, ViewChild } from "@angular/core";
// // import { RestDataSource } from "../app/model/rest.datasource";
// // import { Observable } from "rxjs/Observable";
// // import "rxjs/add/observable/from";
// // import { Injectable } from "@angular/core";
// // @Injectable()
// // class MockDataSource {
// //  public data = [
// //  new Product(1, "test1", "Soccer", 100),
// //  new Product(2, "test2", "Chess", 100),
// //  new Product(3, "test3", "Soccer", 100),
// //  ];
// //  getData(): Observable<Product[]> {
// //  return new Observable<Product>(obs => {
// //  setTimeout(() => obs.next(this.data), 1000);
// //  })
// //  }
// // }
// // describe("FirstComponent", () => {
// //  let fixture: ComponentFixture<FirstComponent>;
// //  let component: FirstComponent;
// //  let dataSource = new MockDataSource();
// //  beforeEach(async(() => {
// //  TestBed.configureTestingModule({
// //  declarations: [FirstComponent],
// //  providers: [
// //  { provide: RestDataSource, useValue: dataSource }
// //  ]
// //  });
// //  TestBed.compileComponents().then(() => {
// //  fixture = TestBed.createComponent(FirstComponent);
// //  component = fixture.componentInstance;
// //  });
// //  }));
// //  it("performs async op", () => {
// //  dataSource.data.push(new Product(100, "test100", "Soccer", 100));
// //  fixture.detectChanges();
// //  fixture.whenStable().then(() => {
// //  expect(component.getProducts().length).toBe(3);
// //  });
// //  });
// // });

