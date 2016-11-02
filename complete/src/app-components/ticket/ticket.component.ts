// ticket.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
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
   //subscriberFoundByID: string;
   subscriberFoundByID: any;
   progress: number = 0;
   isAuthenticated: boolean;
   // Set our default values
   subscriberID: "dh048"

   ticketID: string = '';
   ticketInstance: any;

   // TypeScript public modifiers
   constructor(
      public appState: AppState,
      // public http: Http,
      // public authHttp: AuthHttp,
      public dataService: DataService,
      public authService: Authentication,
      private route: ActivatedRoute) {

   }

   ngOnInit() {
      if (Logging.isEnabled.light) { console.log('%c Hello \"Ticket\" component!', Logging.normal.lime); }
      if (Logging.isEnabled.verbose) { console.log('isLoggedIn(): ' + this.authService.isLoggedIn()); }
      this.authService.redirectIfNotLoggedIn();

      // Subscriber to the Angular2 route parameters object
      this.ticketInstance = this.route.params.subscribe(
         params => {
            // If theres no route paramters, don't do anything, which leaves ticketID = '' instead of 'undefined'
            if (!_.isEmpty(params)) {
               this.ticketID = params['ticketID']; // use +param to convert string 'ticketID' to a number

               // Execute the subscriber search on ticket load
               this.searchSubscriberByID(this.ticketID);
            }
         });
   }

   ngAfterViewInit() {
      // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
      // This is where you put all your "$(document).ready(function() { });" code

      // Init Material select dropdowns
      $('select').material_select();

   }

   ngOnDestroy() {
      this.ticketInstance.unsubscribe();
   }

   searchSubscriberByID(subscriberID) {
      this.appState.set('searchSubscriberByID', subscriberID);
      this._callApi('DataService', '/api/subscriber/' + subscriberID); // C# API controller
      // this._callApi('DataService', 'http://localhost:52222/subscriber/v1/' + subscriberID) // Node API Controller
      // this._callApi('DataService', 'https://jsonplaceholder.typicode.com/users');
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

                // response => {
                //    for (var i = 0; i < 3; i++) {
                //       var thisName = response.json()[i].name;
                //       if (!namesArray) {
                //          var namesArray = [];
                //       }
                //       namesArray.push(thisName);
                //    }
                //    //namesArray;
                //    this.subscriberFoundByID = namesArray;
                //},
                error => this.response = error.text(), () => {
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
