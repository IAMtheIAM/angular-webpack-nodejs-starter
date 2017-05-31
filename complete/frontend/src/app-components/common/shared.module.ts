import { NgModule } from '@angular/core';
import { Logging } from '../services/utility.service';

// Import all shared custom directives here
import { UnderlineDirective } from './underline.directive';

@NgModule({
   declarations: [
      // Declare all custom directives
      UnderlineDirective
   ],
   exports: [
      // Export all custom directives
      UnderlineDirective
   ]
})

export class SharedModule {
   constructor(){
      if (Logging.isEnabled.light) {
         console.log('%c Hello \"Shared\" Module!', Logging.normal.orange);
      }
   }
}

