// app.routes.ts
/**
 * Angular 2 decorators and services
 */
"use strict";
/**
 * Other services
 */
var route_protection_service_1 = require('../services/route-protection.service');
/**
 * Imported Components
 */
var home_component_1 = require('../home/home.component');
var about_component_1 = require('../about/about.component');
var login_component_1 = require('../login/login.component');
var subscriber_component_ts_1 = require('../subscriber/subscriber.component.ts');
var notfound404_component_1 = require('../404/notfound404.component');
exports.ROUTES = [{
        path: '',
        component: login_component_1.LoginComponent
    }, {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [route_protection_service_1.RouteProtection]
    }, {
        path: 'subscriber',
        component: subscriber_component_ts_1.SubscriberComponent,
        canActivate: [route_protection_service_1.RouteProtection]
    }, {
        path: 'login',
        component: login_component_1.LoginComponent
    }, {
        path: 'about',
        component: about_component_1.AboutComponent,
        canActivate: [route_protection_service_1.RouteProtection],
    }, {
        path: 'detail',
        loadChildren: './+detail/index'
    }, {
        path: '**',
        component: notfound404_component_1.NotFound404Component
    }, {
        path: '404',
        component: notfound404_component_1.NotFound404Component
    }];
//# sourceMappingURL=app.routes.js.map