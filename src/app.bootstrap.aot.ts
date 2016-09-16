/**
 * MAIN ANGULAR2 APP ENTRY POINT
 * This is where we bootstrap the Angular2 application
 */
// These 2 imports are needed here first, or typescript @annotations don't work in the app
import 'zone.js/dist/zone';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { decorateModuleRef } from './app-components/app/environment';
import { bootloader } from '@angularclass/hmr';


/**
 * AppComponent and AppComponent Services
 */
import { AppModuleNgFactory } from '../aot-compiled/src/app-components/app/app.module.ngfactory';

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
      .catch(err => console.error(err));

   return null; // this line doesn't make sense, but makes TS compiler happy
}

// export function bootstrapDomReady() {
//    document.addEventListener('DOMContentLoaded', main);
// }
//
// bootstrapDomReady();

bootloader(main);
