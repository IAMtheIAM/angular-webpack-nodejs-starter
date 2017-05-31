// home.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
import * as jwt_decode from 'jwt-decode';

/*
 * Shared Utilities
 */
import { Logging } from '../../services/utility.service';
import { AppState } from '../../services/appstate.service';
import { Authentication } from '../../services/authentication.service';

/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
import './grid-editing.style.scss';

@Component({
   // The selector is what angular internally uses
   // for `document.querySelectorAll(selector)` in our index.html
   // where, in this case, selector is the string 'home'
    selector: 'grid-editing', // <home></home>

   // We need to tell Angular's Dependency Injection which providers are in our app.
   providers: [Authentication],

   // Every Angular template is first compiled by the browser before Angular runs it's compiler
   templateUrl: './grid-editing.template.html'
})

export class GridEditingComponent {

   // Here we define this component's instance variables
   // They're accessible from the template
    response: string;
    progress: number = 0;
    isAuthenticated: boolean;
    jwt: string;
    decodedJwt: { username: '' };
    api: string;
    localState = { value: '' };

   // TypeScript public modifiers
   constructor(
       private _ngZone: NgZone,
       public appState: AppState,
       public router: Router,
       public http: Http,
       public authService: Authentication,
       public authHttp: AuthHttp) {

       this.isAuthenticated = authService.isLoggedIn();

       // We get the JWT from localStorage

       this.jwt = localStorage.getItem('jwt');
       this.decodedJwt = this.jwt && jwt_decode(this.jwt);
   }

   ngOnInit() {
      if (Logging.isEnabled.light) { console.log('%c Hello \"Grid Editing\" component!', Logging.normal.lime); }
      if (Logging.isEnabled.verbose) { console.log('isLoggedIn(): ' + this.authService.isLoggedIn()); }

      // Async load KendoUI for jQuery, with webpack require.ensure
      require.ensure(['jquery'], function(require) {

         /** These are for the jQuery version of Kendo UI */
         // require('lib/kendoui/styles/kendo.material.min.css');
         require('../../../lib/kendoui/styles/kendo.common.min.css');
         require('../../../lib/kendoui/styles/kendo.default.min.css');
         require('../../../lib/kendoui/js/kendo.web.min.js');
         require('../../../lib/kendoui/js/kendo.core.min.js');
         require('script!../../../lib/kendoui/js/kendo.grid.min.js'); // must pass through "script-loader"

         // Must call the prototype function, because 'this' is undefined inside the require.ensure during runtime
         GridEditingComponent.prototype.loadKendoUIGrid();

      }, "kendo.for.jquery"); // 3rd parameter is the name of the chunk during compilation output - chunk.name.js

      this.authService.redirectIfNotLoggedIn();
   }

   ngAfterViewInit() {
      // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
      // This is where you put all your "$(document).ready(function() { });" code

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
            parameterMap: function(
               options,
               operation) {
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
