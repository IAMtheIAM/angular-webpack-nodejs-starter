// ticket.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';
// import { Http } from '@angular/http';
// import { AuthHttp } from 'angular2-jwt';

/*
 * Shared Utilities
 */
import { Logging } from '../services/utility.service';
import { AppState } from '../services/appstate.service';
import { Authentication } from '../services/authentication.service';
import { DataService } from '../services/data.service';

/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
import './ticket.style.scss';

@Component({
   selector: 'ticket', // <ticket></ticket>
   templateUrl: './ticket.template.html'
})

export class TicketComponent {
   // Here we define this component's instance variables
   // They're accessible from the template
   response: string;
   subscriberFoundByID: string;
   progress: number = 0;
   isAuthenticated: boolean;
   // Set our default values
   localState = {
      subscriberID: "dh048"
   };

   // TypeScript public modifiers
   constructor(
      public appState: AppState,
      // public http: Http,
      // public authHttp: AuthHttp,
      public dataService: DataService,
      public authService: Authentication) {


   }

   ngOnInit() {
      if (Logging.isEnabled.light) { console.log('%c Hello \"Ticket\" component!', Logging.normal.lime); }
      if (Logging.isEnabled.verbose) { console.log('isLoggedIn(): ' + this.authService.isLoggedIn()); }
      this.authService.redirectIfNotLoggedIn();
   }

   ngAfterViewInit() {
      // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
      // This is where you put all your "$(document).ready(function() { });" code
   }

   searchSubscriberByID() {
      this.appState.set('searchSubscriberByID', this.localState.subscriberID);
      this._callApi('DataService', '/api/subscriber/' + this.localState.subscriberID);
   }

   _callApi(
      type,
      url) {
      // this.response = null;
      this.response = undefined;

      if (type === 'DataService') {
         // For non-protected detailRoutes, just use Http
         this.dataService.get(url)
             .subscribe(
                response =>this.subscriberFoundByID = response.json(),
                error => this.response = error.text(),
                () => {
                   if (Logging.isEnabled.light) {
                      console.log('%c API Call Complete', Logging.normal.orange);
                   }
                });
      }
      // if (type === 'Secured') {
      //    // For protected detailRoutes, use AuthHttp
      //    this.authHttp.get(url)
      //        .subscribe(
      //           response => this.response = response.text(),
      //           error => this.response = error.text(), () => {
      //              if (Logging.isEnabled) {
      //                 console.log('%c API Call Complete', Logging.normal.orange);
      //              }
      //           });
      // }
   }

}
