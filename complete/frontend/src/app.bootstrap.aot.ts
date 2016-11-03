/**
 * AOT Build
 * MAIN ANGULAR2 APP ENTRY POINT
 * This is where we bootstrap the Angular2 application
 */

/**
 * reflect-metadata needs to be imported here, in the app bundle, or app throws errors during bootstrapping
 */
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { decorateModuleRef } from './app-components/app/environment';
import { bootloader } from '@angularclass/hmr';
import { Logging } from './app-components/services/utility.service';

/**
 * AppComponent and AppComponent Services
 */
import { AppModuleNgFactory } from '../aot-compiled/src/app-components/app/app.module.ngfactory';

/**
 * zone.js MUST be imported AFTER AppModule/AppModuleNgFactory, otherwise it will throw
 * error * "ZoneAware promise has been overriden" during bootstrapping
 */
import 'zone.js/dist/zone';

if ('production' === ENV) {
   enableProdMode();
}

/*
 * Bootstrap our Angular app with a top level NgModule
 */

export function main(initialHmrState?: any): Promise<any> {

   platformBrowser()
      .bootstrapModuleFactory(AppModuleNgFactory)
      .then(decorateModuleRef)
      .catch(function(err) {
         console.log('%c ERROR Bootstrapping Angular 2 AOT! \n', Logging.bold.teal);
         console.error(err);
      });

   return null; // this line doesn't make sense, but makes TS compiler happy
}

// export function bootstrapDomReady() {
//    document.addEventListener('DOMContentLoaded', main);
// }
//
// bootstrapDomReady();

bootloader(main);
