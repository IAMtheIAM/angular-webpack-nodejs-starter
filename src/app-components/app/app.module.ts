import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Kendo UI For Angular 2 Components
 */
// import { ButtonsModule } from '@progress/kendo-angular-buttons';
// import { GridModule } from '@progress/kendo-angular-grid';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

// AppComponent is our top level component
import { AppComponent } from './app.component';

/**
 * Imported Components
 */
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component.ts';
import { LoginComponent } from '../login/login.component';
import { SubscriberComponent } from '../subscriber/subscriber.component.ts';
import { TicketComponent } from '../ticket/ticket.component.ts';
import { NotFound404Component } from '../404/notfound404.component';
import { NavHeaderComponent } from '../nav/header/nav-header.component';
import { NavSidebarComponent } from '../nav/sidebar/nav-sidebar.component';
import { NavFooterComponent } from '../nav/footer/nav-footer.component';
// import { DetailComponent } from '../+detail/detail.component';
/*
 * AppComponent Wide Services & Utilities
 */

export * from '../services/utility.service';
export * from '../services/appstate.service';
export * from '../services/authentication.service';
export * from '../services/data.service';
export * from '../services/utility.service';
export * from '../services/route-protection.service';

import { Logging } from '../services/utility.service';
import { AppState, InteralStateType } from '../services/appstate.service';
import { Authentication } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { UtilityService } from '../services/utility.service';
import { RouteProtection } from '../services/route-protection.service';
// import { AuthHttp } from "angular2-jwt";

// Declare Services & Utilities as AppComponent Providers
// Application wide providers
const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS, AppState, Logging, Authentication, DataService, UtilityService, RouteProtection//, AuthHttp
];


/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
   bootstrap: [AppComponent],
   declarations: [ // declarations contains: components, directives and pipes

      // Components
      AppComponent, HomeComponent, AboutComponent, LoginComponent, SubscriberComponent, NotFound404Component, TicketComponent,// DetailComponent,

      // Directives
      NavSidebarComponent, NavHeaderComponent, NavFooterComponent

      // Pipes

   ],
   imports: [ // import other modules
      /** ButtonsModule, GridModule,*/ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(ROUTES, { useHash: true }), // true = http://app.com/#/about,
      // false = http://app.com/about

   ],
   providers: [ // expose our Services and Providers into Angular's dependency injection
      ENV_PROVIDERS, APP_PROVIDERS]
})

export class AppModule {
   constructor(
      public appRef: ApplicationRef,
      public appState: AppState) {
      if (Logging.isEnabled.light) {
         console.log('%c Hello \"App\" Module!', Logging.normal.orange);
      }
   }

   hmrOnInit(store: StoreType) {
      if (!store || !store.state) return;
      console.log('HMR store', JSON.stringify(store, null, 2));
      // set state
      this.appState._state = store.state;
      // set input values
      if ('restoreInputValues' in store) {
         let restoreInputValues = store.restoreInputValues;
         setTimeout(restoreInputValues);
      }

      this.appRef.tick();
      delete store.state;
      delete store.restoreInputValues;
   }

   hmrOnDestroy(store: StoreType) {
      const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
      // save state
      const state = this.appState._state;
      store.state = state;
      // recreate root elements
      store.disposeOldHosts = createNewHosts(cmpLocation);
      // save input values
      store.restoreInputValues  = createInputTransfer();
      // remove styles
      removeNgStyles();
   }

   hmrAfterDestroy(store: StoreType) {
      // display new elements
      store.disposeOldHosts();
      delete store.disposeOldHosts;
   }
}


type StoreType = {
   state: InteralStateType,
   restoreInputValues: () => void,
   disposeOldHosts: () => void
};
