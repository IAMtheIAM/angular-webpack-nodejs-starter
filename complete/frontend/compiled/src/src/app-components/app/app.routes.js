// app.routes.ts
/**
 * Angular 2 decorators and services
 */
"use strict";
/**
 * Other services
 */
var route_protection_service_1 = require('../services/route-protection.service');
var app_resolver_1 = require('./app.resolver');
/**
 * Imported Components
 */
var home_component_1 = require('../home/home.component');
var grid_editing_component_1 = require('../grid/grid-editing/grid-editing.component');
var grid_nested_component_1 = require('../grid/grid-nested/grid-nested.component');
var about_component_1 = require('../about/about.component');
var login_component_1 = require('../login/login.component');
var ticket_component_ts_1 = require('../ticket/ticket.component.ts');
var notfound404_component_1 = require('../404/notfound404.component');
exports.ROUTES = [{
        path: '',
        component: login_component_1.LoginComponent
    }, {
        path: 'detail',
        loadChildren: 'es6-promise?,[name]!../+detail/detail.module#DetailModule',
        canActivate: [route_protection_service_1.RouteProtection]
    }, {
        path: 'iframe',
        loadChildren: 'es6-promise?,[name]!../+iframe-module/iframe.module#IframeModule',
        canActivate: [route_protection_service_1.RouteProtection]
    }, {
        path: 'ticket',
        component: ticket_component_ts_1.TicketComponent,
        canActivate: [route_protection_service_1.RouteProtection]
    }, {
        path: 'ticket/:ticketID',
        component: ticket_component_ts_1.TicketComponent,
        canActivate: [route_protection_service_1.RouteProtection]
    }, {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [route_protection_service_1.RouteProtection]
    }, {
        path: 'gridEditing',
        component: grid_editing_component_1.GridEditingComponent,
        canActivate: [route_protection_service_1.RouteProtection]
    },
    {
        path: 'gridNested',
        component: grid_nested_component_1.GridNestedComponent,
        canActivate: [route_protection_service_1.RouteProtection]
    }, {
        path: 'login',
        component: login_component_1.LoginComponent
    }, {
        path: 'about',
        component: about_component_1.AboutComponent,
        canActivate: [route_protection_service_1.RouteProtection],
        resolve: {
            'dataBroughtToComponent': app_resolver_1.DataResolver
        }
    }, {
        path: '**',
        component: notfound404_component_1.NotFound404Component
    }, {
        path: '404',
        component: notfound404_component_1.NotFound404Component
    }];
//# sourceMappingURL=app.routes.js.map