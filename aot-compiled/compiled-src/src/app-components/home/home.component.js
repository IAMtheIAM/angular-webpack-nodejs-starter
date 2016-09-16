"use strict";
// home.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
/*
 * Shared Utilities
 */
var utility_service_1 = require('../services/utility.service');
var appstate_service_1 = require('../services/appstate.service');
var authentication_service_1 = require('../services/authentication.service');
var forceChangeDetection_1 = require('../common/forceChangeDetection');
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
require('./home.style.scss');
// @CanActivate(() => isLoggedIn())
// @CanActivate(() => {
//   return isLoggedIn(); // navigate to protected route after logging in
// })
var HomeComponent = (function () {
    // TypeScript public modifiers
    function HomeComponent(appState, router, http, authService, ngZone) {
        this.appState = appState;
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.ngZone = ngZone;
        this.progress = 0;
        // TODO: This is a hack. Find a better solution for getting change detection to work when the final Angular2 RTM
        // gets released
        forceChangeDetection_1.constructorForceChangeDetection();
        // if (Logging.isEnabled.light) {
        //   console.log('%c Home Constructor Instantiated', Logging.normal.teal);
        // }
        this.isAuthenticated = authService.isLoggedIn();
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Home\" component!', utility_service_1.Logging.normal.lime);
        }
        if (utility_service_1.Logging.isEnabled.verbose) {
            console.log('isLoggedIn(): ' + this.authService.isLoggedIn());
        }
        this.authService.redirectIfNotLoggedIn();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
        // This is where you put all your "$(document).ready(function() { });" code
        this.loadKendoUIGrid();
    };
    HomeComponent.prototype.loadKendoUIGrid = function () {
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
                parameterMap: function (options, operation) {
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
        utility_service_1.$("#kendoUI").kendoGrid({
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
    };
    HomeComponent.decorators = [
        { type: core_1.Component, args: [{
                    // The selector is what angular internally uses
                    // for `document.querySelectorAll(selector)` in our index.html
                    // where, in this case, selector is the string 'home'
                    selector: 'home',
                    // We need to tell Angular's Dependency Injection which providers are in our app.
                    providers: [authentication_service_1.Authentication],
                    // Every Angular template is first compiled by the browser before Angular runs it's compiler
                    templateUrl: './home.template.html'
                },] },
    ];
    /** @nocollapse */
    HomeComponent.ctorParameters = [
        { type: appstate_service_1.AppState, },
        { type: router_1.Router, },
        { type: http_1.Http, },
        { type: authentication_service_1.Authentication, },
        { type: core_1.NgZone, },
    ];
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map