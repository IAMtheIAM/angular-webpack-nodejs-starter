/**
 * MAIN ANGULAR2 APP ENTRY POINT
 * This is where we bootstrap the Angular2 application
 */
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var environment_1 = require('./app-components/app/environment');
var hmr_1 = require('@angularclass/hmr');
/**
 * AppComponent and AppComponent Services
 */
var app_module_1 = require('./app-components/app/app.module');
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main(initialHmrState) {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_module_1.AppModule)
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
hmr_1.bootloader(main);
//# sourceMappingURL=app.bootstrap.js.map