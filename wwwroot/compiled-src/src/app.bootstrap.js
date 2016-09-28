/**
 * JIT Build
 * MAIN ANGULAR2 APP ENTRY POINT
 * This is where we bootstrap the Angular2 application
 */
"use strict";
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var environment_1 = require('./app-components/app/environment');
var hmr_1 = require('@angularclass/hmr');
var utility_service_1 = require('./app-components/services/utility.service');
/**
 * AppComponent and AppComponent Services
 */
var app_module_1 = require('./app-components/app/app.module');
if ('production' === ENV) {
    core_1.enableProdMode();
}
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main(initialHmrState) {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_module_1.AppModule)
        .then(environment_1.decorateModuleRef)
        .catch(function (err) {
        console.log('%c ERROR Bootstrapping Angular 2 JIT! \n', utility_service_1.Logging.bold.teal);
        // console.error(err);
    });
}
exports.main = main;
hmr_1.bootloader(main);
//# sourceMappingURL=app.bootstrap.js.map