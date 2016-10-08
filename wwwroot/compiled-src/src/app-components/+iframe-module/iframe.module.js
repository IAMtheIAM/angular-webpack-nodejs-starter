/**
 * Angular 2 decorators and services
 */
// import { BrowserModule } from '@angular/platform-browser'
"use strict";
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
//
var iframe_routes_1 = require('./iframe.routes');
/*
 * Shared Utilities & Other Services
 */
var utility_service_1 = require('../services/utility.service');
/**
 * Imported Components
 */
var webpage_1_component_1 = require('./webpage-1/webpage-1.component');
var webpage_2_component_1 = require('./webpage-2/webpage-2.component');
var IframeModule = (function () {
    function IframeModule() {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Iframe\" Module!', utility_service_1.Logging.normal.orange);
        }
    }
    IframeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        // SharedModule,
                        router_1.RouterModule.forChild(iframe_routes_1.iframeRoutes)
                    ],
                    declarations: [
                        webpage_1_component_1.Webpage1, webpage_2_component_1.Webpage2
                    ]
                },] },
    ];
    /** @nocollapse */
    IframeModule.ctorParameters = [];
    return IframeModule;
}());
exports.IframeModule = IframeModule;
//# sourceMappingURL=iframe.module.js.map