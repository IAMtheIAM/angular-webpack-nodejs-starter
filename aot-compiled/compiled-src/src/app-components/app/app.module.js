"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = require('./environment');
var app_routes_1 = require('./app.routes');
var app_resolver_1 = require('./app.resolver');
// AppComponent is our top level component
var app_component_1 = require('./app.component');
/**
 * Imported Components
 */
var home_component_1 = require('../home/home.component');
var about_component_ts_1 = require('../about/about.component.ts');
var login_component_1 = require('../login/login.component');
var subscriber_component_ts_1 = require('../subscriber/subscriber.component.ts');
var notfound404_component_1 = require('../404/notfound404.component');
var nav_header_component_1 = require('../nav/header/nav-header.component');
var nav_sidebar_component_1 = require('../nav/sidebar/nav-sidebar.component');
var nav_footer_component_1 = require('../nav/footer/nav-footer.component');
/*
 * AppComponent Wide Services & Utilities
 */
__export(require('../services/utility.service'));
__export(require('../services/appstate.service'));
__export(require('../services/authentication.service'));
__export(require('../services/data.service'));
__export(require('../services/utility.service'));
__export(require('../services/route-protection.service'));
var utility_service_3 = require('../services/utility.service');
var appstate_service_2 = require('../services/appstate.service');
var authentication_service_2 = require('../services/authentication.service');
var data_service_2 = require('../services/data.service');
var utility_service_4 = require('../services/utility.service');
var route_protection_service_2 = require('../services/route-protection.service');
// Declare Services & Utilities as AppComponent Providers
// Application wide providers
var APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.concat([appstate_service_2.AppState, utility_service_3.Logging, authentication_service_2.Authentication, data_service_2.DataService, utility_service_4.UtilityService, route_protection_service_2.RouteProtection]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    // hmrOnInit(store: StoreType) {
    //    if (!store || !store.state) {
    //       return;
    //    }
    //    console.log('HMR store', store);
    //    // this.appState.set('state', store.state);
    //    this.appState._state = store.state;
    //    this.appRef.tick();
    //    delete store.state;
    // }
    //
    // hmrOnDestroy(store: StoreType) {
    //    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    //    // recreate elements
    //    const state = this.appState._state;
    //    store.state = state;
    //    store.disposeOldHosts = createNewHosts(cmpLocation);
    //    // remove styles
    //    removeNgStyles();
    // }
    //
    // hmrAfterDestroy(store: StoreType) {
    //    // display new elements
    //    store.disposeOldHosts();
    //    delete store.disposeOldHosts;
    // }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    bootstrap: [app_component_1.AppComponent],
                    declarations: [
                        // Components
                        app_component_1.AppComponent, home_component_1.HomeComponent, about_component_ts_1.AboutComponent, login_component_1.LoginComponent, subscriber_component_ts_1.SubscriberComponent, notfound404_component_1.NotFound404Component,
                        // Directives
                        nav_sidebar_component_1.NavSidebarComponent, nav_header_component_1.NavHeaderComponent, nav_footer_component_1.NavFooterComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true }) // true = http://app.com/#/about, false = http://app.com/about
                    ],
                    providers: [
                        environment_1.ENV_PROVIDERS, APP_PROVIDERS, authentication_service_2.Authentication, appstate_service_2.AppState, utility_service_3.Logging]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [
        { type: core_1.ApplicationRef, },
        { type: appstate_service_2.AppState, },
    ];
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map