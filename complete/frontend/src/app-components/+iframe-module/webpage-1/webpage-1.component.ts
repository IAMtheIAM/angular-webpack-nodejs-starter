// tax-detail.component.ts
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
import './webpage-1.style.scss';

@Component({
   selector: 'webpage1',
   templateUrl: './webpage-1.template.html'
})
export class Webpage1 {
   isAuthenticated: boolean;
   someUrl: SafeResourceUrl;

   constructor(
      public appState: AppState,
      public Authentication: Authentication,
      sanitizer: DomSanitizer) {
      this.isAuthenticated = Authentication.isAuthenticated;
      this.appState.set('isAuthenticated', this.isAuthenticated);
      this.someUrl = sanitizer.bypassSecurityTrustResourceUrl('http://www.bing.com/images');
   }

   ngOnInit() {
      if (Logging.isEnabled.light) {
         console.log('%c Hello \"Webpage1\" component!', Logging.normal.lime);
      }
   }

   ngAfterViewInit() {
      // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
      // This is where you put all your "$(document).ready() {}" code
      // this.loadDataTables();
   }

}
