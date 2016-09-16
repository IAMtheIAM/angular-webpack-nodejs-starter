"use strict";
/**
 * MAIN ANGULAR2 APP ENTRY POINT
 * This is where we bootstrap the Angular2 application
 */
// These 2 imports are needed here first, or typescript @annotations don't work in the app
require('zone.js/dist/zone');
require('reflect-metadata');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var environment_1 = require('./app-components/app/environment');
/**
 * AppComponent and AppComponent Services
 */
var app_module_ngfactory_1 = require('../aot-compiled/src/app-components/app/app.module.ngfactory');
if ('production' === ENV) {
    core_1.enableProdMode();
}
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main(initialHmrState) {
    platform_browser_1.platformBrowser()
        .bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory)
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
    return null; // this line doesn't make sense, but makes TS compiler happy
}
exports.main = main;
function bootstrapDomReady() {
    document.addEventListener('DOMContentLoaded', main);
}
exports.bootstrapDomReady = bootstrapDomReady;
bootstrapDomReady();
//# sourceMappingURL=app.bootstrap.aot.js.map