/**
 * Angular 2 decorators and services
 */
// import { BrowserModule } from '@angular/platform-browser'
"use strict";
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
//
var detail_routes_1 = require('./detail.routes');
/*
 * Shared Utilities & Other Services
 */
var utility_service_1 = require('../services/utility.service');
/**
 * Imported Components
 */
var detail_component_1 = require('./detail.component');
var DetailModule = (function () {
    function DetailModule() {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Detail\" component!', utility_service_1.Logging.normal.lime);
        }
    }
    DetailModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        detail_component_1.DetailComponent],
                    imports: [common_1.CommonModule, platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forChild(detail_routes_1.routes)]
                },] },
    ];
    /** @nocollapse */
    DetailModule.ctorParameters = [];
    return DetailModule;
}());
exports.DetailModule = DetailModule;
//# sourceMappingURL=index.js.map