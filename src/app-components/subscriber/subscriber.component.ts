// home.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
// import { AuthHttp } from 'angular2-jwt';

/*
 * Shared Utilities
 */
import { Logging, $ } from '../services/utility.service';
import { AppState } from '../services/appstate.service';
import { Authentication } from '../services/authentication.service';
// import { isLoggedIn } from '../common/isloggedIn';
import { constructorForceChangeDetection } from '../common/forceChangeDetection';

/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
import './subscriber.style.scss';

@Component({
   // The selector is what angular internally uses
   // for `document.querySelectorAll(selector)` in our index.html
   // where, in this case, selector is the string 'home'
   selector: 'subscriber', // <home></home>

   // We need to tell Angular's Dependency Injection which providers are in our app.
   providers: [Authentication],

   // Every Angular template is first compiled by the browser before Angular runs it's compiler
   templateUrl: './subscriber.template.html'
})

export class SubscriberComponent {

   // Here we define this component's instance variables
   // They're accessible from the template
   response: string;
   progress: number = 0;
   isAuthenticated: boolean;

   // TypeScript public modifiers
   constructor(
      public appState: AppState, public router: Router, public http: Http, public authService: Authentication, public ngZone: NgZone) {

      // TODO: This is a hack. Find a better solution for getting change detection to work when the final Angular2 RTM
      // gets released
      constructorForceChangeDetection();
      this.isAuthenticated = authService.isLoggedIn();
   }

   ngOnInit() {
      if (Logging.isEnabled.light) { console.log('%c Hello \"Subscriber\" component!', Logging.normal.lime); }
      if (Logging.isEnabled.verbose) { console.log('isLoggedIn(): ' + this.authService.isLoggedIn()); }
      this.authService.redirectIfNotLoggedIn();
   }

   ngAfterViewInit() {
      // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
      // This is where you put all your "$(document).ready() {}" code
      // this.loadJqxGrid();

      this.loadKendoUIGrid();

   }

   loadKendoUIGrid() {

      ///
      // Grid Detail / Nested Table
      ///

      $("#kendoUI-nested").kendoGrid({
         dataSource: {
            type: "odata",
            transport: {
               read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
            },
            pageSize: 6,
            serverPaging: false,
            serverSorting: false
         },
         sortable: true,
         pageable: true,
         detailInit: this.detailInit,
         dataBound: function() {
            this.expandRow(this.tbody.find("tr.k-master-row").first());
         },
         columns: [{
            field: "FirstName",
            title: "First Name",
            width: "110px"
         }, {
            field: "LastName",
            title: "Last Name",
            width: "110px"
         }, {
            field: "Country",
            width: "110px"
         }, {
            field: "City",
            width: "110px"
         }, {
            field: "Title"
         }]
      });
   }

   detailInit(e) {
      $("<div/>").appendTo(e.detailCell)
                 // .html('hello~!');
                 .kendoGrid({
                    dataSource: {
                       type: "odata",
                       transport: {
                          read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
                       },
                       serverPaging: false,
                       serverSorting: false,
                       serverFiltering: false,
                       pageSize: 6,
                       filter: {
                          field: "EmployeeID",
                          operator: "eq",
                          value: e.data.EmployeeID
                       }
                    },
                    scrollable: false,
                    sortable: true,
                    pageable: true,
                    columns: [{
                       field: "OrderID",
                       width: "110px"
                    }, {
                       field: "ShipCountry",
                       title: "Ship Country",
                       width: "110px"
                    }, {
                       field: "ShipAddress",
                       title: "Ship Address"
                    }, {
                       field: "ShipName",
                       title: "Ship Name",
                       width: "300px"
                    }]
                 });
   }

}
