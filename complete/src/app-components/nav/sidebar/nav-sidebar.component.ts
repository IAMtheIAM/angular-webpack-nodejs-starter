// nav-sidebar.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router/src/directives/router_link';

/*
 * Shared Utilities
 */

import { Logging } from '../../services/utility.service'; // don't import jQuery's '$' alias in this component, or it breaks the javascript, not sure why
import { AppState } from '../../services/appstate.service';


/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
import './nav-sidebar.style.scss';

@Component({
   selector: 'nav-sidebar',
   templateUrl: './nav-sidebar.template.html'
})
export class NavSidebarComponent {
   constructor(public appState: AppState) {
   }

   ngOnInit() {
      if (Logging.isEnabled.light) {
         console.log('%c Hello \"Nav-Sidebar\" component!', Logging.normal.lime);
      }
      // Initialize collapse button
      $(".button-collapse").sideNav();
      // Initialize collapsible (uncomment the line below if you use the dropdown variation)
      $('.collapsible').collapsible();
   }
}
