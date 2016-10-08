// Still testing this idea out
//
// /**
//  * AOT Build
//  * MAIN ANGULAR2 APP ENTRY POINT
//  * This is where we bootstrap the Angular2 application
//  */
// // These 2 imports are needed here first, or app throws errors during bootstrapping
// // import 'core-js/shim';
// import 'zone.js/dist/zone';
// import 'reflect-metadata';
//
// import { enableProdMode } from '@angular/core';
// import { decorateModuleRef } from './app-components/app/environment';
// import { bootloader } from '@angularclass/hmr';
// import { Logging } from './app-components/services/utility.service';
//
// if ('production' === ENV) {
//    enableProdMode();
// }
//
//
// /*
//  * Bootstrap our Angular app with a top level NgModule
//  */
//
// /*
//  * AOT compilation mode
//  */
// import { platformBrowser } from '@angular/platform-browser';
// import { AppModuleNgFactory } from '../aot-compiled/src/app-components/app/app.module.ngfactory';
//
// export function bootstrapAOT(initialHmrState?: any): Promise<any> {
//
//    platformBrowser()
//       .bootstrapModuleFactory(AppModuleNgFactory)
//       .then(decorateModuleRef)
//       .catch(function(err) {
//          console.log('%c ERROR Bootstrapping Angular 2 AOT! \n', Logging.bold.teal);
//          console.error(err);
//       });
//
//    return null; // this line doesn't make sense, but makes TS compiler happy
// }
//
// if (AOT) {
//    bootloader(bootstrapAOT);
//    console.log('%c Running in AOT mode! \n', Logging.bold.teal);
// }
//
// /*
//  * JIT compilation mode
//  */
//
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app-components/app/app.module';
//
// export function bootstrapJIT(initialHmrState?: any): Promise<any> {
//
//    return platformBrowserDynamic()
//       .bootstrapModule(AppModule)
//       .then(decorateModuleRef)
//       .catch(function(err) {
//          console.log('%c ERROR Bootstrapping Angular 2 JIT! \n', Logging.bold.teal);
//          console.error(err);
//       });
// }
//
// if (JIT) {
//    bootloader(bootstrapJIT);
//    console.log('%c Running in JIT mode! \n', Logging.bold.teal);
//
// }
