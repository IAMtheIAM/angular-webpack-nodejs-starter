"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_2 = require('@angular/http');
var router_1 = require('@angular/router');
var hmr_1 = require('@angularclass/hmr');
/*
 * Angular2 Material Components
 */
//import { MaterialModule } from '@angular/material';
//import '@angular/material/core/theming/prebuilt/deeppurple-amber.css';
var md_module_1 = require('./md.module');
//import { MdCard } from '@angular2-material/card';
//import { MdButton } from '@angular2-material/button';
/*
 * Kendo UI For Angular 2 Components
 */
// import { ButtonsModule } from '@progress/kendo-angular-buttons';
// import { GridModule } from '@progress/kendo-angular-grid';
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
var grid_editing_component_1 = require('../grid/grid-editing/grid-editing.component');
var grid_nested_component_1 = require('../grid/grid-nested/grid-nested.component');
var ticket_component_ts_1 = require('../ticket/ticket.component.ts');
var notfound404_component_1 = require('../404/notfound404.component');
var nav_header_component_1 = require('../nav/header/nav-header.component');
var nav_sidebar_component_1 = require('../nav/sidebar/nav-sidebar.component');
var nav_footer_component_1 = require('../nav/footer/nav-footer.component');
var ckeditor_component_1 = require('../directives/ckeditor/ckeditor.component');
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
/**
 * Angular2-JWT workaround, until AUTH_PROVIDERS definition works in NPM package.
 * See issue: https://github.com/auth0/angular2-jwt/issues/158
 */
// import { AUTH_PROVIDERS  } from "angular2-jwt";
var angular2_jwt_1 = require("angular2-jwt");
function authFactory(http, options) {
    return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({}), http, options);
}
exports.authFactory = authFactory;
;
// Include this in your ngModule providers
exports.AUTH_PROVIDERS = {
    provide: angular2_jwt_1.AuthHttp,
    deps: [http_1.Http, http_1.RequestOptions],
    useFactory: authFactory
};
// Declare Services & Utilities as AppComponent Providers
// Application wide providers
var APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.concat([appstate_service_2.AppState, utility_service_3.Logging, authentication_service_2.Authentication, data_service_2.DataService, utility_service_4.UtilityService, route_protection_service_2.RouteProtection //, AuthHttp
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
        if (utility_service_3.Logging.isEnabled.light) {
            console.log('%c Hello \"App\" Module!', utility_service_3.Logging.normal.orange);
        }
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = hmr_1.createInputTransfer();
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    bootstrap: [app_component_1.AppComponent],
                    declarations: [
                        // Components
                        app_component_1.AppComponent, home_component_1.HomeComponent, about_component_ts_1.AboutComponent, login_component_1.LoginComponent, grid_editing_component_1.GridEditingComponent, grid_nested_component_1.GridNestedComponent, notfound404_component_1.NotFound404Component, ticket_component_ts_1.TicketComponent,
                        // Directives
                        nav_sidebar_component_1.NavSidebarComponent, nav_header_component_1.NavHeaderComponent, nav_footer_component_1.NavFooterComponent, ckeditor_component_1.CKEditor
                    ],
                    imports: [
                        /** ButtonsModule, GridModule,*/ platform_browser_1.BrowserModule, forms_1.FormsModule, http_2.HttpModule, router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true }), md_module_1.MdModule.forRoot()
                    ],
                    providers: [
                        environment_1.ENV_PROVIDERS, APP_PROVIDERS, exports.AUTH_PROVIDERS]
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