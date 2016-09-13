// home.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

/*
 * Shared Utilities
 */
import { Logging, $ } from '../services/utility.service';
import { AppState } from '../services/appstate.service';
import { Authentication } from '../services/authentication.service';
import { constructorForceChangeDetection } from '../common/forceChangeDetection';


/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
import './home.style.scss';

@Component({
   // The selector is what angular internally uses
   // for `document.querySelectorAll(selector)` in our index.html
   // where, in this case, selector is the string 'home'
   selector: 'home', // <home></home>

   // We need to tell Angular's Dependency Injection which providers are in our app.
   providers: [Authentication],

   // Every Angular template is first compiled by the browser before Angular runs it's compiler
   templateUrl: './home.template.html'
})

// @CanActivate(() => isLoggedIn())

// @CanActivate(() => {
//   return isLoggedIn(); // navigate to protected route after logging in
// })

export class HomeComponent {

   // Here we define this component's instance variables
   // They're accessible from the template
   response: string;
   progress: number = 0;
   isAuthenticated: boolean;

   // TypeScript public modifiers
   constructor(
      public appState: AppState, public router: Router, public http: Http, public authService: Authentication,
      public ngZone: NgZone) {

      // TODO: This is a hack. Find a better solution for getting change detection to work when the final Angular2 RTM
      // gets released
      constructorForceChangeDetection();

      // if (Logging.isEnabled.light) {
      //   console.log('%c Home Constructor Instantiated', Logging.normal.teal);
      // }
      this.isAuthenticated = authService.isLoggedIn();
   }

   ngOnInit() {
      if (Logging.isEnabled.light) { console.log('%c Hello \"Home\" component!', Logging.normal.lime); }
      if (Logging.isEnabled.verbose) { console.log('isLoggedIn(): ' + this.authService.isLoggedIn()); }
      this.authService.redirectIfNotLoggedIn();
   }

   ngAfterViewInit() {
      // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
      // This is where you put all your "$(document).ready(function() { });" code
      this.loadKendoUIGrid();
   }

   loadKendoUIGrid() {

      ///
      // Grid Detail / Nested Table
      ///

      /////
      // Editable Table
      /////
      var crudServiceBaseUrl = "//demos.telerik.com/kendo-ui/service", dataSource = new kendo.data.DataSource({
         // serverPaging: true,
         // serverSorting: true,
         transport: {
            read: {
               url: crudServiceBaseUrl + "/Products",
               dataType: "jsonp"
            },
            update: {
               url: crudServiceBaseUrl + "/Products/Update",
               dataType: "jsonp"
            },
            destroy: {
               url: crudServiceBaseUrl + "/Products/Destroy",
               dataType: "jsonp"
            },
            create: {
               url: crudServiceBaseUrl + "/Products/Create",
               dataType: "jsonp"
            },
            parameterMap: function(options, operation) {
               if (operation !== "read" && options.models) {
                  return { models: kendo.stringify(options.models) };
               }
            }
         },
         batch: true,
         pageSize: 20,
         schema: {
            model: {
               id: "ProductID",
               fields: {
                  ProductID: {
                     editable: false,
                     nullable: true
                  },
                  ProductName: { validation: { required: true } },
                  UnitPrice: {
                     type: "number",
                     validation: {
                        required: true,
                        min: 1
                     }
                  },
                  Discontinued: { type: "boolean" },
                  UnitsInStock: {
                     type: "number",
                     validation: {
                        min: 0,
                        required: true
                     }
                  }
               }
            }
         }
      });

      $("#kendoUI").kendoGrid({
         dataSource: dataSource,
         sortable: true,
         groupable: true,
         pageable: true,
         height: 550,
         toolbar: ["create"],
         columns: ["ProductName", {
            field: "UnitPrice",
            title: "Unit Price",
            format: "{0:c}",
            width: "120px"
         }, {
            field: "UnitsInStock",
            title: "Units In Stock",
            width: "120px"
         }, {
            field: "Discontinued",
            width: "120px"
         }, {
            command: ["edit", "destroy"],
            title: "&nbsp;",
            width: "250px"
         }],
         editable: "inline"
      });

   }
}
