// home.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
// import { AuthHttp } from 'angular2-jwt';

/*
 * Shared Utilities
 */
import { Logging } from '../services/utility.service';
import { AppState } from '../services/appstate.service';
import { Authentication } from '../services/authentication.service';
// import { isLoggedIn } from '../common/isloggedIn';



/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
import './subscriber.style.scss';

@Component({
   // The selector is what angular internally uses
   // for `document.querySelectorAll(selector)` in our index.html
   // where, in this case, selector is the string 'home'
   selector: 'subscriber', // <home></home>

   // We need to tell Angular's Dependency Injection which providers are in our app.
   providers: [Authentication],

   // Every Angular template is first compiled by the browser before Angular runs it's compiler
   templateUrl: './subscriber.template.html'
})

export class SubscriberComponent {

   // Here we define this component's instance variables
   // They're accessible from the template
   response: string;
   progress: number = 0;
   isAuthenticated: boolean;

   // TypeScript public modifiers
   constructor(
      public appState: AppState,
      public router: Router,
      public http: Http,
      public authService: Authentication) {

      this.isAuthenticated = authService.isLoggedIn();
   }

   ngOnInit() {
      if (Logging.isEnabled.light) { console.log('%c Hello \"Subscriber\" component!', Logging.normal.lime); }
      if (Logging.isEnabled.verbose) { console.log('isLoggedIn(): ' + this.authService.isLoggedIn()); }
   }

   ngAfterViewInit() {
      // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
      // This is where you put all your "$(document).ready() {}" code
      // this.loadJqxGrid();
   }
}
