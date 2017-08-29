import { NgModule } from '@angular/core';
import { Logging } from '../services/utility.service';

// Import all shared custom directives here
// import { UnderlineDirective } from './underline.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomMdModule } from '../common/material-design.module';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
   imports: [HttpModule, FormsModule, ReactiveFormsModule, CustomMdModule, NgxTypeaheadModule, NgbModule],
   declarations: [// Declare all custom directives
      // myCustomModule
   ],
   exports: [// Export all custom directives
      HttpModule, FormsModule, ReactiveFormsModule, CustomMdModule, NgxTypeaheadModule, NgbModule
      // myCustomModule
   ]
})

export class SharedModule {
   constructor() {
      if (Logging.isEnabled.light) {
         console.log('%c Hello \"Shared\" Module!', Logging.normal.orange);
      }
   }
}

