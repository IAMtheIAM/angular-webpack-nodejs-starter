/**
 * AOT Build
 * MAIN ANGULAR2 APP ENTRY POINT
 * This is where we bootstrap the Angular2 application
 */
/**
 * reflect-metadata needs to be imported here, in the app bundle, or app throws errors during bootstrapping
 */
import 'reflect-metadata';

import {platformBrowser} from '@angular/platform-browser';
import {decorateModuleRef} from './environment';
import {Logging} from '../services/utility.service';

/**
 * App Module
 * our top level module that holds all of our components.
 */
import {AppModuleNgFactory} from '../../../compiled/src/app-components/app/app.module.ngfactory';

/**
 * zone.js MUST be imported AFTER AppModule/AppModuleNgFactory, otherwise it will throw
 * error * "ZoneAware promise has been overriden" during bootstrapping
 */
import 'zone.js/dist/zone';

/**
 * Bootstrap our Angular app with a top level NgModule.
 */
export function main(): Promise<any> {
   return platformBrowser()
      .bootstrapModuleFactory(AppModuleNgFactory)
      .then(decorateModuleRef)
      .catch((err) => {
         console.log('%c ERROR Bootstrapping Angular! \n', Logging.bold.teal);
         console.error(err);
      });
}

switch (document.readyState) {
   case 'loading':
      document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
      break;
   case 'interactive':
   case 'complete':
   default:
      main();
}

function _domReadyHandler() {
   document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
   main();
}


console.log('%c Welcome Angular. AOT Mode Enabled! \n', Logging.normal.yellow);
