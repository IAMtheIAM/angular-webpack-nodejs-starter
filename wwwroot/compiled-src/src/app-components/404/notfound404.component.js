"use strict";
// notfound404.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
/*
 * Shared Utilities
 */
var utility_service_1 = require('../services/utility.service');
var authentication_service_1 = require('../services/authentication.service');
var appstate_service_1 = require('../services/appstate.service');
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
require('./NotFound404.style.scss');
var NotFound404Component = (function () {
    function NotFound404Component(appState, Authentication) {
        this.appState = appState;
        this.Authentication = Authentication;
        this.isAuthenticated = Authentication.isAuthenticated;
        this.appState.set('isAuthenticated', this.isAuthenticated);
    }
    NotFound404Component.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"404 Not Found\" component!', utility_service_1.Logging.normal.lime);
        }
    };
    NotFound404Component.prototype.ngAfterViewInit = function () {
        // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
        // This is where you put all your "$(document).ready() {}" code
        // this.loadDataTables();
    };
    NotFound404Component.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'NotFound404',
                    templateUrl: './NotFound404.template.html'
                },] },
    ];
    /** @nocollapse */
    NotFound404Component.ctorParameters = [
        { type: appstate_service_1.AppState, },
        { type: authentication_service_1.Authentication, },
    ];
    return NotFound404Component;
}());
exports.NotFound404Component = NotFound404Component;
//# sourceMappingURL=notfound404.component.js.map