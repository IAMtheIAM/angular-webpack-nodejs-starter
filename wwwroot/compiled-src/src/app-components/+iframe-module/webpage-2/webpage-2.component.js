"use strict";
// tax-summary.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
/*
 * Shared Utilities
 */
var utility_service_1 = require('../../services/utility.service');
var authentication_service_1 = require('../../services/authentication.service');
var appstate_service_1 = require('../../services/appstate.service');
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
require('./webpage-2.style.scss');
var Webpage2 = (function () {
    function Webpage2(appState, Authentication, sanitizer) {
        this.appState = appState;
        this.Authentication = Authentication;
        this.isAuthenticated = Authentication.isAuthenticated;
        this.appState.set('isAuthenticated', this.isAuthenticated);
        this.someUrl = sanitizer.bypassSecurityTrustResourceUrl('http://www.bing.com');
    }
    Webpage2.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Webpage2\" component!', utility_service_1.Logging.normal.lime);
        }
    };
    Webpage2.prototype.ngAfterViewInit = function () {
        // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
        // This is where you put all your "$(document).ready() {}" code
        // this.loadDataTables();
    };
    Webpage2.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'webpage2',
                    templateUrl: './webpage-2.template.html'
                },] },
    ];
    /** @nocollapse */
    Webpage2.ctorParameters = [
        { type: appstate_service_1.AppState, },
        { type: authentication_service_1.Authentication, },
        { type: platform_browser_1.DomSanitizer, },
    ];
    return Webpage2;
}());
exports.Webpage2 = Webpage2;
//# sourceMappingURL=webpage-2.component.js.map