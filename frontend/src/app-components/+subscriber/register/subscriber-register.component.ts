// about.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';

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
import './subscriber-register.style.scss';

@Component({
   selector   : 'subscriber-register',
   templateUrl: './subscriber-register.template.html'
})
export class SubscriberRegisterComponent {
   // isAuthenticated: boolean;
   localState: any;
   licenseNumber: string;
   licenseNumber2: any;
   subscriberData: any;

   constructor(public appState: AppState, public route: ActivatedRoute, private titleService: Title) {
      // this.isAuthenticated = authService.isLoggedIn();
      // this.appState.set('isAuthenticated', this.isAuthenticated);
   }

   ngOnInit() {
      if (Logging.isEnabled.light) { console.log('%c Hello \"Subscriber-Register\" component!', Logging.normal.lime); }

      this.titleService.setTitle('Subscriber Register | IAMtheIAM');
      // this.appInsightsService.trackPageView('Subscriber-Lookup Component');

      // the no-observable method
      this.licenseNumber = this.route.snapshot.paramMap.get('licenseNumber');
      // console.debug(this.licenseNumber);

      // // the observable method
      // this.route.paramMap
      //    .subscribe((params: ParamMap) => {
      //       // console.log(params);
      //       this.licenseNumber2 = params.get('licenseNumber');
      //       return params.get('licenseNumber');
      //       // return null
      //    });
      // console.debug(this.licenseNumber2);

      this.route.data.subscribe((data: any) => {
         // your resolved data from route
         this.appState.set('resolvedData', data.subscriberData);
         this.localState = data.subscriberData;
         console.debug(data.subscriberData);
         this.subscriberData = data.subscriberData;
      });

      // static data that is bundled
      // var mockData = require('assets/mock-data/mock-data.json');
      // console.log('mockData', mockData);
      // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')

      // this.asyncDataWithWebpackSystemJS ();

   }

   ngAfterViewInit() {
      /**
       * The ngAfterViewInit lifecycle hook makes sure the view is rendered, useful so
       * jQuery can know when to do it's thing
       *
       * This is where you put all your "$(document).ready()" code
       * Example: this.loadDataTables();
       **/

      //==== SubscriberRegisterComponent Initializations ====//

      // Materialize DatePicker
      $('.datepicker').pickadate({
         selectMonths : true, // Creates a dropdown to control month
         selectYears  : 15, // Creates a dropdown of 15 years to control year,
         today        : 'Today',
         clear        : 'Clear',
         close        : 'Ok',
         closeOnSelect: true, // Close upon selecting a date,
         format: 'mmmm d, yyyy'

      });

      // Materialize Select
      $('select').material_select();

      // Materialize Prefilled Text Inputs
      // This prevents labels overlapping prefilled input content. You can also add class="active" to the label.
      Materialize.updateTextFields();

      //==== End SubscriberRegisterComponent Initializations ====//

   }

   ngOnDestroy() {
   }

   asyncDataWithWebpack() {
      // you can also async load mock data with 'es6-promise-loader'
      // you would do this if you don't want the mock-data bundled
      // remember that 'es6-promise-loader' is a promise

      // let asyncMockDataPromiseFactory = require('es6-promise?,[name]!../../../assets/mock-data/mock-data.json');
      // setTimeout(() => {
      //
      //    // let asyncDataPromise = asyncMockDataPromiseFactory();
      //    asyncMockDataPromiseFactory()
      //       .then(json => {
      //          console.log('async mockData', json);
      //       });
      //
      // });
   }

   asyncDataWithWebpackSystemJS() {
      // you can also async load mock data with 'es6-promise-loader'
      // you would do this if you don't want the mock-data bundled
      // remember that 'es6-promise-loader' is a promise

      // setTimeout(() => {
      //
      //    System.import('../../../assets/mock-data/mock-data.json')
      //          .then(json => {
      //             console.log('async mockData', json);
      //             this.localState = json;
      //          });
      //
      // });
   }

}
