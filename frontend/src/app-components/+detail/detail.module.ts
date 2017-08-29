/**
 * Angular 2 decorators and services
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../common/shared.module';


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
   imports: [
      SharedModule,
      CommonModule,
      RouterModule.forChild(detailRoutes)
   ],
   declarations: [ // Components / Directives/ Pipes
      DetailComponent
   ]
})


export class DetailModule {

   constructor() {
      if (Logging.isEnabled.light) {
         console.log('%c Hello \"Detail\" Module!', Logging.normal.orange);
      }   }
}
