/**
 * Angular 2 decorators and services
 */
// import { BrowserModule } from '@angular/platform-browser'
"use strict";
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
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
            console.log('%c Hello \"Detail\" Module!', utility_service_1.Logging.normal.orange);
        }
    }
    DetailModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        // SharedModule,
                        router_1.RouterModule.forChild(detail_routes_1.detailRoutes)
                    ],
                    declarations: [
                        detail_component_1.DetailComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    DetailModule.ctorParameters = [];
    return DetailModule;
}());
exports.DetailModule = DetailModule;
//# sourceMappingURL=detail.module.js.map