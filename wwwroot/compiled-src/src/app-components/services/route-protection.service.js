"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var Observable_1 = require('rxjs/Observable');
var utility_service_1 = require('../services/utility.service');
var authentication_service_1 = require('./authentication.service');
var appstate_service_1 = require('../services/appstate.service');
var utility_service_2 = require('./utility.service');
var RouteProtection = (function () {
    function RouteProtection(appState, utilityService, location, authService) {
        this.appState = appState;
        this.utilityService = utilityService;
        this.location = location;
        this.authService = authService;
    }
    RouteProtection.prototype.canActivate = function () {
        var _this = this;
        this.authService.checkAuth()
            .subscribe(function (response) {
            if (utility_service_1.Logging.isEnabled.verbose) {
                console.log("CanActivate: checkAuth(): ", response);
            }
            // Logged in
            if (response === true) {
                // Store the last screen
                _this.appState.set('lastScreen', _this.location.path());
                return Observable_1.Observable.of(response);
            }
            else if (response === false) {
                // Store the last screen
                _this.appState.set('lastScreen', _this.location.path());
                // Store the attempted URL for redirecting
                _this.appState.set('redirectUrl', _this.location.path());
                //Redirect the user before denying them access to this route
                _this.utilityService.navigate('/login');
                return Observable_1.Observable.of(response);
            }
        }, function (error) {
            console.log("CanActivate: Error:", error);
            return Observable_1.Observable.of(error);
        });
        return Observable_1.Observable.of(true);
    };
    //
    // canActivate(): Observable<boolean> {
    //    if (this.authService.isLoggedIn()) {
    //       return Observable.of(true);
    //    } else {
    //       //Redirect the user before denying them access to this route
    //       this.utilityService.navigate('/login');
    //       return Observable.of(false);
    //    }
    // }
    // canActivate(): Observable<boolean> {
    //    return this.authService.checkAuth()
    //               .map((result) => {
    //                  if (result) {
    //                     return true;
    //                  } else {
    //                     this.utilityService.navigate('/login');
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
    //                  this.utilityService.navigate('/login');
    //                  return Observable.of(false);
    //               })
    // }
    RouteProtection.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    RouteProtection.ctorParameters = [
        { type: appstate_service_1.AppState, },
        { type: utility_service_2.UtilityService, },
        { type: common_1.Location, },
        { type: authentication_service_1.Authentication, },
    ];
    return RouteProtection;
}());
exports.RouteProtection = RouteProtection;
//# sourceMappingURL=route-protection.service.js.map