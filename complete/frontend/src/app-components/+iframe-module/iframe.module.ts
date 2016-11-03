/**
 * Angular 2 decorators and services
 */
// import { BrowserModule } from '@angular/platform-browser'

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import { iframeRoutes } from './iframe.routes';

/*
 * Shared Utilities & Other Services
 */
import { Logging } from '../services/utility.service';

/**
 * Imported Components
 */
import { Webpage1 } from './webpage-1/webpage-1.component';
import { Webpage2 } from './webpage-2/webpage-2.component';

@NgModule({
   imports: [
      CommonModule,
      // SharedModule,
      RouterModule.forChild(iframeRoutes)
   ],
   declarations: [ // Components / Directives/ Pipes
      Webpage1, Webpage2
   ]
})



export class IframeModule {

   constructor() {
      if (Logging.isEnabled.light) {
         console.log('%c Hello \"Iframe\" Module!', Logging.normal.orange);
      }   }
}
