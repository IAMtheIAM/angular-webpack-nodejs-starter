// home.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
import * as jwt_decode from 'jwt-decode';

/*
 * Shared Utilities
 */
import { Logging } from '../services/utility.service';
import { AppState } from '../services/appstate.service';
import { Authentication } from '../services/authentication.service';

/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
import './home.style.scss';

@Component({
   // The selector is what angular internally uses
   // for `document.querySelectorAll(selector)` in our index.html
   // where, in this case, selector is the string 'home'
   selector: 'home', // <home></home>

   // We need to tell Angular's Dependency Injection which providers are in our app.
   providers: [Authentication],

   // Every Angular template is first compiled by the browser before Angular runs it's compiler
   templateUrl: './home.template.html'
})

export class HomeComponent {

   // Here we define this component's instance variables
   // They're accessible from the template
    response: string;
    progress: number = 0;
    isAuthenticated: boolean;
    jwt: string;
    decodedJwt: { username: '' };
    api: string;
    localState = { value: '' };

   // TypeScript public modifiers
   constructor(
       private _ngZone: NgZone,
       public appState: AppState,
       public router: Router,
       public http: Http,
       public authService: Authentication,
       public authHttp: AuthHttp) {

       this.isAuthenticated = authService.isLoggedIn();

       // We get the JWT from localStorage

       this.jwt = localStorage.getItem('jwt');
       this.decodedJwt = this.jwt && jwt_decode(this.jwt);
   }

   ngOnInit() {
      if (Logging.isEnabled.light) { console.log('%c Hello \"Home\" component!', Logging.normal.lime); }
      if (Logging.isEnabled.verbose) { console.log('isLoggedIn(): ' + this.authService.isLoggedIn()); }

      this.authService.redirectIfNotLoggedIn();
   }

   ngAfterViewInit() {
      // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
      // This is where you put all your "$(document).ready(function() { });" code

   }



   submitState(value: string) {
       console.log('submitState', value);
       this.appState.set('value', value);
       this.localState.value = '';
   }

   /**
    * JWT Methods - Calls local api server.
    * Path to API server: /config/api-backend
    * Start API server with: npm run apiserver
    * Username: admin
    * Password: admin
  */

   callAnonymousApi() {
       this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
   }

   callSecuredApi() {
       this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
   }

   _callApi(type, url) {
       // this.response = null;
       this.response = undefined;
       if (type === 'Anonymous') {
           // For non-protected routes, just use Http
           this.http.get(url)
               .subscribe(
               response => this.response = response.text(),
               error => this.response = error
               );
       }
       if (type === 'Secured') {
           // For protected routes, use AuthHttp
           this.authHttp.get(url)
               .subscribe(
               response => this.response = response.text(),
               error => this.response = error
               );
       }
   }

   /**
    * ngZone.js examples
    * This shows how to process your function inside of angular zones
    * and outside of angular zones.
    */
   processInsideAngularZone() {
       this.progress = 0;
       this._increaseProgress(() => {
           if (Logging.isEnabled) {
               console.log('Done!');
           }
       });
   }

   processOutsideAngularZone() {
       this.progress = 0;
       this._ngZone.runOutsideAngular(() => {
           this._increaseProgress(() => {
               this._ngZone.run(() => {
                   if (Logging.isEnabled) {
                       console.log('Outside Done!');
                   }
               });
           });
       });
   }

   _increaseProgress(doneCallback: () => void) {
       this.progress += 1;
       if (Logging.isEnabled) {
           console.log(`Current progress: ${this.progress}%`);
       }

       if (this.progress < 100) {
           window.setTimeout(() => {
               this._increaseProgress(doneCallback);
           }, 10);
       } else {
           doneCallback();
           console.log(`Resetting counter to 0 in 3 seconds`);
           window.setTimeout(() => {
               // Reset counter
               this.progress = 0;
           }, 3000);
       }
   }
}
