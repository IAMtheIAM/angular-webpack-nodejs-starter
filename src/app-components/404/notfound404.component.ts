// notfound404.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';

/*
 * Shared Utilities
 */
import { Logging } from '../services/utility.service';
import { Authentication } from '../services/authentication.service';
import { AppState } from '../services/appstate.service';


/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
import './NotFound404.style.scss';

@Component({
  selector: 'NotFound404',
   templateUrl: './NotFound404.template.html'
})
export class NotFound404Component {
  isAuthenticated: boolean;
  constructor(
    public appState: AppState,
    public Authentication: Authentication) {
    this.isAuthenticated = Authentication.isAuthenticated;
    this.appState.set('isAuthenticated', this.isAuthenticated);
  }


  ngOnInit() {
    if (Logging.isEnabled.light) {
      console.log('%c Hello \"404 Not Found\" component!', Logging.normal.lime);
    }
  }

}
