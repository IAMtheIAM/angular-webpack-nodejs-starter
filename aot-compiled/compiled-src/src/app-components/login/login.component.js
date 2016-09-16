"use strict";
// login.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
/*
 * Shared Utilities
 */
var utility_service_1 = require('../services/utility.service');
var appstate_service_1 = require('../services/appstate.service');
var authentication_service_1 = require('../services/authentication.service');
var utility_service_2 = require('../services/utility.service');
var forceChangeDetection_1 = require('../common/forceChangeDetection');
/*
 * Imported Components
 */
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
require('./login.style.scss');
var LoginComponent = (function () {
    function LoginComponent(
        /** This is where we setup/construct all the constants and variables as well as inject
         *  Angular dependenciesto be called in the class methods
         *  NOTE: Injected Dependencies must be called using "this". Example: this.depencencyName.someMethod
         */
        //public isAuthenticated,
        appState, authService, utilityService, router) {
        this.appState = appState;
        this.authService = authService;
        this.utilityService = utilityService;
        this.router = router;
        this.isAuthenticated = this.authService.isLoggedIn();
        this.appState.set('isAuthenticated', this.isAuthenticated);
        // TODO: This is a hack. Find a better solution for getting change detection to work when the final Angular2 RTM
        // gets released
        forceChangeDetection_1.constructorForceChangeDetection();
    }
    LoginComponent.prototype.ngOnInit = function () {
        // If user is already logged in, skip the login page
        if (this.isAuthenticated) {
            if (utility_service_1.Logging.isEnabled.light) {
                console.log('%c Already logged in! Navigating to Home Component', utility_service_1.Logging.normal.orange);
            }
            this.utilityService.navigate('/home');
        }
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Login\" component!', utility_service_1.Logging.normal.lime);
        }
    };
    LoginComponent.prototype.login = function (event, username, password) {
        var _this = this;
        this.authService.login(event, username, password)
            .subscribe(function (response) {
            // On response
            if (utility_service_1.Logging.isEnabled.verbose) {
                console.log("Response: ", response);
            }
            // True or false
            _this.authService.validAuth = response.Success;
            // Update the appState with the response
            _this.appState.set('isAuthenticated', _this.authService.validAuth);
            if (_this.authService.validAuth) {
                var token = response.Token;
                // const splitToken = token.split('.');
                // const responseHeaders = JSON.parse(atob(splitToken[0]));
                // const responseBody = JSON.parse(atob(splitToken[1]));
                //console.log(responseHeaders);
                //console.log(responseBody);
                // Set the JWT
                localStorage.setItem('jwt', token);
            }
            if (utility_service_1.Logging.isEnabled.verbose) {
                console.log("Login Component: login(response): ", response);
                console.log("%c Logged In: " + _this.authService.isLoggedIn(), utility_service_1.Logging.normal.white);
            }
            // Get the redirect URL from our appState. If no redirect has been set, use the default
            var redirect = _this.appState.state.redirectUrl ? _this.appState.state.redirectUrl : '/home';
            // Clear redirect URL after initial redirect
            _this.appState.set('redirectUrl', '');
            // Navigate the view
            _this.utilityService.navigate(redirect);
            return _this.authService.isLoggedIn();
        }, function (error) {
            if (error.status === 401 || error.status === 404) {
                // this.notificationService.printErrorMessage('Authentication required');
                if (utility_service_1.Logging.isEnabled.verbose) {
                    console.log("Login Component: login(error): ", error);
                }
            }
            alert(error);
            // return Observable.of(this.isLoggedIn());
        }, function () {
            // Always
            if (utility_service_1.Logging.isEnabled.verbose) {
                console.log('%c API Call Complete', utility_service_1.Logging.normal.orange);
            }
            return _this.authService.isLoggedIn();
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    LoginComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'login',
                    templateUrl: './login.template.html'
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = [
        { type: appstate_service_1.AppState, },
        { type: authentication_service_1.Authentication, },
        { type: utility_service_2.UtilityService, },
        { type: router_1.Router, },
    ];
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map