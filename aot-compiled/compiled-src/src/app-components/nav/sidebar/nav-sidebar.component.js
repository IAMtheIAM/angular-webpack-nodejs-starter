"use strict";
// nav-sidebar.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
// import { RouterLink } from '@angular/router/src/directives/router_link';
/*
 * Shared Utilities
 */
var utility_service_1 = require('../../services/utility.service'); // don't import jQuery's '$' alias in this component, or it
// breaks the javascript, not sure why
var appstate_service_1 = require('../../services/appstate.service');
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
require('./nav-sidebar.style.scss');
var NavSidebarComponent = (function () {
    function NavSidebarComponent(appState) {
        this.appState = appState;
    }
    NavSidebarComponent.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Nav-Sidebar\" component!', utility_service_1.Logging.normal.lime);
        }
        // // Initialize collapse button
        // $(".button-collapse").sideNav();
        // // Initialize collapsible (uncomment the line below if you use the dropdown variation)
        // $('.collapsible').collapsible();
    };
    NavSidebarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'nav-sidebar',
                    templateUrl: './nav-sidebar.template.html'
                },] },
    ];
    /** @nocollapse */
    NavSidebarComponent.ctorParameters = [
        { type: appstate_service_1.AppState, },
    ];
    return NavSidebarComponent;
}());
exports.NavSidebarComponent = NavSidebarComponent;
//# sourceMappingURL=nav-sidebar.component.js.map