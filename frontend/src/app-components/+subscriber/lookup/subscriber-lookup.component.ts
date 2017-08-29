import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'; // just the base functionality, add the rest below
import { FormControl } from '@angular/forms';
// import { AppInsightsService } from '@markpieszak/ng-application-insights';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router'

/*
 * Shared UtilityService
 */
import { Logging } from '../../services';
import { UtilityService } from '../../services/';
import { AppState } from '../../services/appstate.service';
import { DataService } from '../../services/data.service';

/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 * external stylesheets. Do NOT add styles the "Angular2 Way" in the
 * @Component decorator ("styles" and "styleUrls" properties)
 */
import './subscriber-lookup.style.scss';

@Component({
   selector: 'subscriber-lookup',
   templateUrl: './subscriber-lookup.template.html',
   providers: []
})

export class SubscriberLookupComponent {
   localState: any;
   lookupSubscriberApiUrl: string = '//addams-asoc-signup-api.azurewebsites.net/api/associationsignup/v1/searchsubscribersnamelicense/'; // + searchParameter'
   model: any;
   licenseNumber: string;
   response: Object[] | undefined | null;
   searching: boolean = false;
   searchFailed: boolean = false;
   lookupSubscriberControl = new FormControl();
   lookupSubscriberControl2 = new FormControl();
   associationData: any;

   constructor(
      public appState: AppState, public utilities: UtilityService, public dataService: DataService, public route: ActivatedRoute, private titleService: Title
      /*private appInsightsService: AppInsightsService*/) { }

   ngOnInit() {
      if (Logging.isEnabled.light) {
         console.log('%c Hello \"Subscriber-Lookup\" component!', Logging.normal.lime);
      }

      this.titleService.setTitle('Subscriber Lookup | IAMtheIAM');
      // this.appInsightsService.trackPageView('Subscriber-Lookup Component');

      this.route.data.subscribe((data: any) => {
         // your resolved data from route
         this.appState.set('resolvedData', data);
         this.localState = data;
         console.debug(data);
         this.associationData = data;
      });
   }

   lookupSubscriber = (text$: Observable<string>) => {

      return text$
         .debounceTime(500)
         .distinctUntilChanged()
         .do(() => this.searching = true)
         .switchMap(term => {
            var data = this._callApi(this.lookupSubscriberApiUrl, term)
               .map(response => this._transformResponse(response))
               .do((response) => {
                  this.response = response;
                  this.searchFailed = false;
                  this.searching = false;
                  if (Logging.isEnabled.light) {
                     console.log('%c API Call Complete', Logging.normal.orange);
                  }
               })
               .catch((err) => {
                  console.log(err);
                  this.searchFailed = true;
                  this.searching = false;
                  return Observable.of([]);
               })
            return data;
         })
         .do(() => this.searching = false);
   }

   responseFormatter = (response: SubscriberResponse): string => {
      // takes the response object and runs this function for each item on the object.
      // grabs just the name and license number
      var fullName = `${response.firstName} ${response.lastName}` || '';
      return `${fullName} ${response.licenseNumber}`;

   }

   getSelectedSubscriberData = (result) => {
      console.log(result);
      this.licenseNumber = result.licenseNumber;
   }

   // goToRegisterView = () => {
   //    // this uses route params as a path
   //    this.utilities.navigate(['../register', this.licenseNumber], { relativeTo: this.route });
   //
   //    // // this uses route params as a querystring
   //    // this.utilities.navigate(['../register', { license: this.licenseNumber}], { relativeTo: this.route });
   // }

   _callApi = (url: string, term: string) => {
      this.response = undefined;
      // Trim whitespaces at both ends of string
      term = term.trim();

      // Don't call api if input is blank / deleted
      if (term === '' || term.length === 0) {
         this.searching = false;
         return Observable.of([]);

      } else {
         console.log('%c API Call Begin', Logging.normal.orange);
         return this.dataService.get(url + term);
      }
   }

   _transformResponse = (response: Array<Object>) => {

      // console.log(response);
      response = response.slice(0, 10);
      // console.log("sliced: ", response);
      return response;

      // Old method manually transforming the object to a string
      // var newSubscriberInfo = [];
      // apply this function to each object in the response array. Limit to 15 items displayed
      // response.slice(0, 15).map((obj) => {
      //    var concatValuesFromObj = "";
      //    for (var key in obj) {
      //       // skip subscriberId
      //       if (key !== "subscriberId") {
      //          concatValuesFromObj += obj[key] + " ";
      //          console.log(concatValuesFromObj);
      //       }
      //    }
      //    concatValuesFromObj = concatValuesFromObj.slice(0, -1);
      //    newSubscriberInfo.push(concatValuesFromObj);
      //    // console.log("concatValuesFromObj: ", concatValuesFromObj);
      // })
      //
      // // console.log("newSubscriberInfo: ", newSubscriberInfo);
      // this.subscribersFound = newSubscriberInfo;
      // return this.subscribersFound;

   }

}
