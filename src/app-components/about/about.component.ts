// about.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
import './about.style.scss';

@Component({
   selector: 'about',
   templateUrl: './about.template.html'
})
export class AboutComponent {
   isAuthenticated: boolean;
   localState: any;

   constructor(
      public appState: AppState, public authService: Authentication, public route: ActivatedRoute) {

      this.isAuthenticated = authService.isLoggedIn();
      this.appState.set('isAuthenticated', this.isAuthenticated);
   }


   ngOnInit() {
      this.route.data.subscribe((data: any) => {
         // your resolved data from route
         this.appState.set('resolvedData', data.dataBroughtToComponent);
         this.localState = data.dataBroughtToComponent;
      });
      if (Logging.isEnabled.light) { console.log('%c Hello \"About\" component!', Logging.normal.lime); }

      // static data that is bundled
      // var mockData = require('assets/mock-data/mock-data.json');
      // console.log('mockData', mockData);
      // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
      this.asyncDataWithWebpackSystemJS ();

   }

   ngAfterViewInit() {
      // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
      // This is where you put all your "$(document).ready() {}" code
      // this.loadDataTables();
   }

   asyncDataWithWebpack() {
      // you can also async load mock data with 'es6-promise-loader'
      // you would do this if you don't want the mock-data bundled
      // remember that 'es6-promise-loader' is a promise
      let asyncMockDataPromiseFactory = require('es6-promise!../../assets/mock-data/mock-data.json');
      setTimeout(() => {

         // let asyncDataPromise = asyncMockDataPromiseFactory();
         asyncMockDataPromiseFactory()
            .then(json => {
               console.log('async mockData', json);
            });

      });
   }

   asyncDataWithWebpackSystemJS() {
      // you can also async load mock data with 'es6-promise-loader'
      // you would do this if you don't want the mock-data bundled
      // remember that 'es6-promise-loader' is a promise
      setTimeout(() => {

         System.import('../../assets/mock-data/mock-data.json')
               .then(json => {
                  console.log('async mockData', json);
                  this.localState = json;
               });

      });
   }
}
