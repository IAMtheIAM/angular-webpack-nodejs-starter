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
/*
 * Imported Components
 */
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
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
        this.token = '';
        this.isAuthenticated = this.authService.isLoggedIn();
        this.appState.set('isAuthenticated', this.isAuthenticated);
    }
    LoginComponent.prototype.ngOnInit = function () {
        // If user is already logged in, skip the login page
        if (this.isAuthenticated) {
            if (utility_service_1.Logging.isEnabled.light) {
                console.log('%c Already logged in! Navigating to Home Component', utility_service_1.Logging.normal.purple);
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
            // Fire the loginSuccess function
            _this.loginSuccess(response);
        }, function (error) {
            // this.notificationService.printErrorMessage('Authentication required');
            // Manual override: Allow admin login even without Active Directory running
            if (username === 'superadmin' || username === 'Superadmin') {
                // True or false
                _this.authService.validAuth = true;
                // Update the appState with the response
                _this.appState.set('isAuthenticated', _this.authService.validAuth);
                // Fire the loginSuccess function
                return _this.loginSuccess(); // 'return' stops the function from continuing
            }
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
    LoginComponent.prototype.loginSuccess = function (response) {
        // if we're overriding with an admin login, fake a JWT
        if (!response) {
            response = {
                Token: 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNyc2Etc2hhMjU2Iiwia2lkIjoiNjY4QThCQjE5OENCOTFCNEJGREMzMDdCOEM3QTVFM0U2QzA1NzA4NSIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJucGFyc29uIiwibmJmIjoxNDc0NjYyMDQwLCJleHAiOjE0NzQ2NjU2NDAsImlzcyI6ImFybWxzX2lkX3NlcnZlciIsImF1ZCI6ImFybWxzX2lkX3NlcnZlciJ9.bVImq8ceJSQ_cjfA2_TbvAJcYk6qCgsHc6GEd1xby0RUdXIs7k-qvsFlDyGT9NSumiTY6B_eHkedBiaGwnMUBvMlUvjeMEYKffIB2odzg8pY4Z-2VGCA1HDJV1xis0odqIOtTr9n0uA_mD88NraM39HkxYFSNB4HbQyKc35QFgmnWVQaD0T6AG2nRHQLvkxtMVAumrV2XSDHeV_32E4p7evdZyCWbQ7seh7nvWeWXIOQlnHxfJrBfL25gBwyRytASMiuotIBCjdgRTHlVcOXJYpkwSzgAGUX_c2lodqmg6nZFkDfWdmTdU8bQkyetzx4hVLhMv8EENo6hCQL1fVBEA'
            };
        }
        if (this.authService.validAuth) {
            if (response.id_token) {
                this.token = response.id_token;
            }
            else if (response.Token) {
                this.token = response.Token;
            }
            var splitToken = this.token.split('.');
            var responseHeaders = JSON.parse(atob(splitToken[0]));
            var responseBody = JSON.parse(atob(splitToken[1]));
            console.log(responseHeaders);
            console.log(responseBody);
            // Set the JWT
            localStorage.setItem('jwt', this.token);
        }
        if (utility_service_1.Logging.isEnabled.verbose) {
            console.log("Login Component: login(response): ", response);
            console.log("%c Logged In: " + this.authService.isLoggedIn(), utility_service_1.Logging.normal.white);
        }
        // Get the redirect URL from our appState. If no redirect has been set, use the default
        var redirect = this.appState.state.redirectUrl
            ? this.appState.state.redirectUrl
            : '/home';
        // Clear redirect URL after initial redirect
        this.appState.set('redirectUrl', ''); // Index page
        // Navigate the view
        this.utilityService.navigate(redirect);
        return this.authService.isLoggedIn();
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