"use strict";
/**
 * Imported Components
 */
var webpage_1_component_1 = require('./webpage-1/webpage-1.component');
var webpage_2_component_1 = require('./webpage-2/webpage-2.component');
/*
 * Shared Utilities & Other Services
 */
var route_protection_service_1 = require('../services/route-protection.service');
// async components must be named detailRoutes for WebpackAsyncRoute
exports.iframeRoutes = [{
        path: '',
        component: webpage_1_component_1.Webpage1,
    }, {
        path: 'webpage1',
        component: webpage_1_component_1.Webpage1,
        canActivate: [route_protection_service_1.RouteProtection]
    }, {
        path: 'webpage2',
        component: webpage_2_component_1.Webpage2,
        canActivate: [route_protection_service_1.RouteProtection]
    }];
//# sourceMappingURL=iframe.routes.js.map