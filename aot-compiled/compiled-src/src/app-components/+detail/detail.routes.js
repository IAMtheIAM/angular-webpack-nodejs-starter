"use strict";
/**
 * Imported Components
 */
var detail_component_1 = require('./detail.component');
/*
 * Shared Utilities & Other Services
 */
var route_protection_service_1 = require('../services/route-protection.service');
// async components must be named routes for WebpackAsyncRoute
exports.routes = [{
        path: '',
        component: detail_component_1.DetailComponent,
        canActivate: [route_protection_service_1.RouteProtection],
        pathMatch: 'full'
    }];
//# sourceMappingURL=detail.routes.js.map