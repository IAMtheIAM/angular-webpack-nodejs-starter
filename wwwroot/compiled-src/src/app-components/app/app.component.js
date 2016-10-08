"use strict";
// app.component.ts
/**
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
/*
 * Shared Utilities
 */
var utility_service_1 = require('../services/utility.service');
var appstate_service_1 = require('../services/appstate.service');
var authentication_service_1 = require('../services/authentication.service');
var forceChangeDetection_1 = require('../common/forceChangeDetection');
/** Materialize JS - needs to be required() here so its within the app.bundle.js - must use
 * "script-loader" or custom jQuery functions will be undefined within the  components
 *
 * Materialize CSS: The SCSS require() must come before KendoUI for css specificity to be correct
 **/
/** jQuery 3.1.0 */
window.$ = window.jQuery = require('jquery');
require('script!materialize-css/dist/js/materialize.js'); // must pass through "script-loader"
require('materialize-css/sass/materialize.scss');
/**
 * THIS IS WHERE WE REQUIRE/IMPORT CSS/SCSS FILES THAT THIS COMPONENT NEEDS
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
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
            console.log('%c Hello \"App\" component!', utility_service_1.Logging.normal.lime);
        }
        if (utility_service_1.Logging.isEnabled.verbose) {
            console.log('Initial AppComponent State', this.appState.state);
            console.log("%c Logged In: " + this.isAuthenticated, utility_service_1.Logging.normal.white);
            //==== AppComponent Wide Initializations ====//
            // Materialize Select
            $('select').material_select();
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