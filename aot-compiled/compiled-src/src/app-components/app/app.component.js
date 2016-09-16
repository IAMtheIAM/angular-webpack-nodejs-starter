"use strict";
// app.component.ts
/**
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
// import { RouteConfig, RouterLink, Router } from '@angular/router';
// import { ROUTER_DIRECTIVES } from '@angular/router';
// import { CORE_DIRECTIVES } from "@angular/common"
// import { RouterActive } from '../directives/router-active.directive';
/*
 * Shared Utilities
 */
var utility_service_1 = require('../services/utility.service');
var appstate_service_1 = require('../services/appstate.service');
var authentication_service_1 = require('../services/authentication.service');
var forceChangeDetection_1 = require('../common/forceChangeDetection');
/**
 * THIS IS WHERE WE REQUIRE/IMPORT CSS/SCSS FILES THAT THIS COMPONENT NEEDS
 *
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
require('./app.style.scss');
/**
 * AppComponent Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(appState, authService) {
        this.appState = appState;
        this.authService = authService;
        this.loading = false;
        this.isAuthenticated = authService.isLoggedIn();
        this.appState.set('isAuthenticated', this.isAuthenticated);
    }
    AppComponent.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"AppComponent\" component!', utility_service_1.Logging.normal.lime);
        }
        if (utility_service_1.Logging.isEnabled.verbose) {
            console.log('Initial AppComponent State', this.appState.state);
            console.log("%c Logged In: " + this.isAuthenticated, utility_service_1.Logging.normal.white);
            //==== AppComponent Wide Initializations ====//
            // Materialize Select
            utility_service_1.$('select').material_select();
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
        // This is where you put all your "$(document).ready() {}" code
        // this.loadJqxGrid();
    };
    AppComponent.prototype.manualDetectChanges = function () {
        forceChangeDetection_1.manualForceChangeDetection();
    };
    AppComponent.prototype.autoDetectChanges = function () {
        forceChangeDetection_1.autoForceChangeDetection();
    };
    AppComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'body',
                    encapsulation: core_1.ViewEncapsulation.None,
                    host: { '[class.authenticated]': 'appState.state.isAuthenticated' },
                    templateUrl: './app.template.html'
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [
        { type: appstate_service_1.AppState, },
        { type: authentication_service_1.Authentication, },
    ];
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map