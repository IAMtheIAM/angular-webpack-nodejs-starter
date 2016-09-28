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
import { detailRoutes } from './detail.routes';

/*
 * Shared Utilities & Other Services
 */
import { Logging } from '../services/utility.service';

/**
 * Imported Components
 */
import { DetailComponent } from './detail.component';


@NgModule({
   declarations: [// Components / Directives/ Pipes
      DetailComponent],
   imports: [
      RouterModule.forChild(detailRoutes)
   ]
})


export class DetailModule {

   constructor() {
      if (Logging.isEnabled.light) { console.log('%c Hello \"Detail\" component!', Logging.normal.lime); }
   }
}
