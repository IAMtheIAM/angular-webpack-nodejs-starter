// nav-sidebar.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';
// import { } from '@angular/router';

/*
 * Shared Utilities
 */
import { Logging } from '../../services/utility.service';
import { AppState } from '../../services/appstate.service';
import { Authentication } from '../../services/authentication.service';

/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
import './nav-footer.style.scss';

@Component({
   selector: 'nav-footer',
   templateUrl: './nav-footer.template.html'
})
export class NavFooterComponent {
   constructor(
      public appState: AppState, public authService: Authentication) {
   }

   ngOnInit() {
      if (Logging.isEnabled.light) {
         console.log('%c Hello \"Nav-Footer\" component!', Logging.normal.lime);
      }
   }

   logout() {
      this.authService.logout();
   }

}
