"use strict";
// home.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
// import { AuthHttp } from 'angular2-jwt';
/*
 * Shared Utilities
 */
var utility_service_1 = require('../services/utility.service');
var appstate_service_1 = require('../services/appstate.service');
var authentication_service_1 = require('../services/authentication.service');
// import { isLoggedIn } from '../common/isloggedIn';
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
require('./subscriber.style.scss');
var SubscriberComponent = (function () {
    // TypeScript public modifiers
    function SubscriberComponent(appState, router, http, authService) {
        this.appState = appState;
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.progress = 0;
        this.isAuthenticated = authService.isLoggedIn();
    }
    SubscriberComponent.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Subscriber\" component!', utility_service_1.Logging.normal.lime);
        }
        if (utility_service_1.Logging.isEnabled.verbose) {
            console.log('isLoggedIn(): ' + this.authService.isLoggedIn());
        }
        // Async load KendoUI for jQeury, with webpack require.ensure
        require.ensure(['jquery'], function (require) {
            /** These are for the jQuery version of Kendo UI */
            // require('lib/kendoui/styles/kendo.material.min.css');
            require('../../lib/kendoui/styles/kendo.common.min.css');
            require('../../lib/kendoui/styles/kendo.default.min.css');
            require('../../lib/kendoui/js/kendo.web.min.js');
            require('../../lib/kendoui/js/kendo.core.min.js');
            require('script!../../lib/kendoui/js/kendo.grid.min.js'); // must pass through "script-loader"
            // Must call the prototype function, because 'this' is undefined inside the require.ensure during runtime
            SubscriberComponent.prototype.loadKendoUIGrid();
        }, "kendo.for.jquery"); // 3rd parameter is the name of the chunk during compilation output - chunk.name.js
        // this.authService.redirectIfNotLoggedIn();
    };
    SubscriberComponent.prototype.ngAfterViewInit = function () {
        // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
        // This is where you put all your "$(document).ready() {}" code
        // this.loadJqxGrid();
    };
    SubscriberComponent.prototype.loadKendoUIGrid = function () {
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
            dataBound: function () {
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
    };
    SubscriberComponent.prototype.detailInit = function (e) {
        $("<div/>").appendTo(e.detailCell)
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
    };
    SubscriberComponent.decorators = [
        { type: core_1.Component, args: [{
                    // The selector is what angular internally uses
                    // for `document.querySelectorAll(selector)` in our index.html
                    // where, in this case, selector is the string 'home'
                    selector: 'subscriber',
                    // We need to tell Angular's Dependency Injection which providers are in our app.
                    providers: [authentication_service_1.Authentication],
                    // Every Angular template is first compiled by the browser before Angular runs it's compiler
                    templateUrl: './subscriber.template.html'
                },] },
    ];
    /** @nocollapse */
    SubscriberComponent.ctorParameters = [
        { type: appstate_service_1.AppState, },
        { type: router_1.Router, },
        { type: http_1.Http, },
        { type: authentication_service_1.Authentication, },
    ];
    return SubscriberComponent;
}());
exports.SubscriberComponent = SubscriberComponent;
//# sourceMappingURL=subscriber.component.js.map