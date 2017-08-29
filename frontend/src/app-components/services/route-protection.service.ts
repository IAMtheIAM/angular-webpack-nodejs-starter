import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { CanActivate }    from '@angular/router';

import { Logging } from '../services/utility.service';
import { Authentication } from './authentication.service';
import { AppState } from '../services/appstate.service';
import { UtilityService } from './utility.service';

@Injectable()
export class RouteProtection implements CanActivate {
   redirectUrl: string;

   constructor(
      public appState: AppState, private utilityService: UtilityService,
      private location: Location, private authService: Authentication) {}


   canActivate(): Observable<boolean> {
      this.authService.checkAuth()
          .subscribe(response => {
             if (Logging.isEnabled.verbose) { console.log("CanActivate: checkAuth(): ", response); }

             // Logged in
             if (response === true) {
                // Store the last screen
                this.appState.set('lastScreen', this.location.path());
                return Observable.of(response);

                // Not logged in
             }
             else if (response === false) {
                // Store the last screen
                this.appState.set('lastScreen', this.location.path());

                // Store the attempted URL for redirecting
                this.appState.set('redirectUrl', this.location.path());

                //Redirect the user before denying them access to this route
                this.utilityService.navigate(['/login']);
                return Observable.of(response);
             }
          }, error => {
             console.log("CanActivate: Error:", error);
             return Observable.of(error);
          });

      return Observable.of(true);
   }

   //
   // canActivate(): Observable<boolean> {
   //    if (this.authService.isLoggedIn()) {
   //       return Observable.of(true);
   //    } else {
   //       //Redirect the user before denying them access to this route
   //       this.utilityService.navigate(['/login']);
   //       return Observable.of(false);
   //    }
   // }


   // canActivate(): Observable<boolean> {
   //    return this.authService.checkAuth()
   //               .map((result) => {
   //                  if (result) {
   //                     return true;
   //                  } else {
   //                     this.utilityService.navigate(['/login']);
   //                     return false;
   //                  }
   //               });
   // }


   // canActivate(): Observable<boolean> {
   //    return this.authService.checkAuth()
   //               .map(e=> {
   //                  if (e) {
   //                     return true;
   //                  }
   //               })
   //               .catch(()=> {
   //                  this.utilityService.navigate(['/login']);
   //                  return Observable.of(false);
   //               })
   // }
}
