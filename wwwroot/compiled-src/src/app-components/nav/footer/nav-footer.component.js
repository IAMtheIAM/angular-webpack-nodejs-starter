"use strict";
// nav-sidebar.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
// import { } from '@angular/router';
/*
 * Shared Utilities
 */
var utility_service_1 = require('../../services/utility.service');
var appstate_service_1 = require('../../services/appstate.service');
var authentication_service_1 = require('../../services/authentication.service');
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
require('./nav-footer.style.scss');
var NavFooterComponent = (function () {
    function NavFooterComponent(appState, authService) {
        this.appState = appState;
        this.authService = authService;
    }
    NavFooterComponent.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Nav-Footer\" component!', utility_service_1.Logging.normal.lime);
        }
    };
    NavFooterComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavFooterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'nav-footer',
                    templateUrl: './nav-footer.template.html'
                },] },
    ];
    /** @nocollapse */
    NavFooterComponent.ctorParameters = [
        { type: appstate_service_1.AppState, },
        { type: authentication_service_1.Authentication, },
    ];
    return NavFooterComponent;
}());
exports.NavFooterComponent = NavFooterComponent;
//# sourceMappingURL=nav-footer.component.js.map