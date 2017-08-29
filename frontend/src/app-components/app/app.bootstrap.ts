/**
 * JIT Build
 * MAIN ANGULAR2 APP ENTRY POINT
 * This is where we bootstrap the Angular2 application
 */
/**
 * reflect-metadata needs to be imported here, in the app bundle, or app throws errors during bootstrapping
 */
import 'reflect-metadata';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {decorateModuleRef} from './environment';
import {Logging} from '../services/utility.service';

/**
 * App Module
 * our top level module that holds all of our components
 */
import {AppModule} from './app.module';

/**
 * zone.js MUST be imported AFTER AppModule/AppModuleNgFactory, otherwise it will throw
 * error * "ZoneAware promise has been overriden" during bootstrapping
 */
import 'zone.js/dist/zone';

/**
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
   return platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then(decorateModuleRef)
      .catch((err) => console.error(err));
}

/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
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


console.log('%c Welcome Angular! JIT Mode! \n', Logging.normal.yellow);

