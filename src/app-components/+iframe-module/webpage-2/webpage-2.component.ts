// tax-summary.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/*
 * Shared Utilities
 */
import { Logging } from '../../services/utility.service';
import { Authentication } from '../../services/authentication.service';
import { AppState } from '../../services/appstate.service';

/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
import './webpage-2.style.scss';

@Component({
   selector: 'webpage2',
   templateUrl: './webpage-2.template.html'
})
export class Webpage2 {
   isAuthenticated: boolean;
   someUrl: SafeResourceUrl;

   constructor(
      public appState: AppState,
      public Authentication: Authentication,
      sanitizer: DomSanitizer) {
      this.isAuthenticated = Authentication.isAuthenticated;
      this.appState.set('isAuthenticated', this.isAuthenticated);
      this.someUrl = sanitizer.bypassSecurityTrustResourceUrl('http://www.bing.com')
   }

   ngOnInit() {
      if (Logging.isEnabled.light) {
         console.log('%c Hello \"Webpage2\" component!', Logging.normal.lime);
      }
   }

   ngAfterViewInit() {
      // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
      // This is where you put all your "$(document).ready() {}" code
      // this.loadDataTables();
   }

}
