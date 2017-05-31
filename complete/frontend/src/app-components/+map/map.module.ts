/**
 * Angular 2 decorators and services
 */
import { NguiMapModule } from '@ngui/map'; // https://github.com/ng2-ui/map

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import { mapRoutes } from './map.routes';

/*
 * Shared Utilities & Other Services
 */
import { Logging } from '../services/utility.service';

/**
 * Imported Components
 */
import { MapComponent } from './maps/map.component';

@NgModule({
   imports: [CommonModule, // SharedModule,
      RouterModule.forChild(mapRoutes), NguiMapModule
   ],
   declarations: [ // Components / Directives / Pipes
      MapComponent],
   exports: [
      // NguiMapModule
   ]
})

export class MapModule {

   constructor() {
      if (Logging.isEnabled.light) {
         console.log('%c Hello \"Map\" Module!', Logging.normal.orange);
      }
   }
}
