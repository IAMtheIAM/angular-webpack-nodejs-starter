/**
 * MAIN ANGULAR2 APP ENTRY POINT
 * This is where we bootstrap the Angular2 application
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef  } from './app-components/app/environment';
import { ApplicationRef } from '@angular/core';
import { bootloader } from '@angularclass/hmr';

/**
 * AppComponent and AppComponent Services
 */
import { AppModule } from './app-components/app/app.module';

if ('production' === ENV) {
   enableProdMode();
}
/*
 * Bootstrap our Angular app with a top level NgModule
 */

export function main(initialHmrState?: any): Promise<any> {

   return platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then(decorateModuleRef)
      .catch(err => console.error(err));

}

bootloader(main);
