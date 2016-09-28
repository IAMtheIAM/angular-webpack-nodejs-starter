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
var ticket_component_ts_1 = require('../ticket/ticket.component.ts');
var notfound404_component_1 = require('../404/notfound404.component');
function loadLazy(pathToFile, componentClassName) {
    // return System.import(pathToFile).then((res: any) => res[componentClassName])
    // .error();
    // return System.import('../+detail/detail.detailRoutes').then((r: any) => r.DetailComponent)
    // return require('es6-promise!../+detail/detail.detailRoutes')('DetailComponent');
    // return require('es6-promise!' + pathToFile)(componentClassName);
}
exports.loadLazy = loadLazy;
exports.ROUTES = [{
        path: '',
        component: login_component_1.LoginComponent
    }, {
        path: 'ticket',
        component: ticket_component_ts_1.TicketComponent,
        canActivate: [route_protection_service_1.RouteProtection]
    }, {
        path: 'home',
        // loadChildren: loadLazy('../home/home.component', HomeComponent)
        component: home_component_1.HomeComponent,
        canActivate: [route_protection_service_1.RouteProtection]
    }, {
        path: 'subscriber',
        // SubscriberComponent),
        component: subscriber_component_ts_1.SubscriberComponent,
        canActivate: [route_protection_service_1.RouteProtection]
    }, {
        path: 'login',
        component: login_component_1.LoginComponent
    }, {
        path: 'about',
        component: about_component_1.AboutComponent,
        canActivate: [route_protection_service_1.RouteProtection],
    },
    //    {
    //    path: 'detail',
    //    // loadChildren: () => System.import('../+detail/detail.module'),
    //    // loadChildren: '../+detail/detail.module#DetailModule',
    //    loadChildren: 'es6-promise?,[name]!../+detail/detail.module#DetailModule',
    //    // loadChildren: loadLazy('../+detail/detail.detailRoutes', DetailComponent)
    //    // loadChildren: () => System.import('../+detail/detail.module.ts')
    // },
    {
        path: '**',
        component: notfound404_component_1.NotFound404Component
    }, {
        path: '404',
        component: notfound404_component_1.NotFound404Component
    }];
//# sourceMappingURL=app.routes.js.map