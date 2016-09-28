"use strict";
// authentication.service.ts
/*
 * Angular 2 decorators and services
 */
// import { Router, RouterLink} from '@angular/router';
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
/*
 * Shared Utilities
 */
var utility_service_1 = require('./utility.service');
var appstate_service_1 = require('./appstate.service');
var headers_1 = require('../common/headers');
var jwt_decode = require('jwt-decode');
var Authentication = (function () {
    function Authentication(appState, router, http, // public authHttp: AuthHttp,
        utilityService) {
        this.appState = appState;
        this.router = router;
        this.http = http;
        this.utilityService = utilityService;
        this.isAuthenticated = false;
        // this.apiURL = 'http://maul:8889/authentication/loginviaactivedirectory';
        this.apiURL = 'http://maul:8181/api/login';
        this.jwt = localStorage.getItem('jwt');
        this.decodedJwt = this.jwt && jwt_decode(this.jwt);
        this.isAuthenticated = this.isLoggedIn();
        this.appState.set('isAuthenticated', this.isAuthenticated);
    }
    Authentication.prototype.login = function (event, username, password) {
        event.preventDefault();
        var body = JSON.stringify({
            username: username,
            password: password
        });
        return this.http.post(this.apiURL, body, { headers: headers_1.contentHeaders })
            .map(function (response) { return response.json(); }); // map the response body to JSON
    };
    Authentication.prototype.logout = function () {
        // Must delete JWT first
        localStorage.removeItem('jwt');
        this.appState.set('isAuthenticated', this.isLoggedIn());
        this.utilityService.navigate('/');
        if (utility_service_1.Logging.isEnabled.verbose) {
            console.log("%c Logged In: " + this.isLoggedIn(), utility_service_1.Logging.normal.white);
            console.log("%c this.appState.isAuthenticated: " + this.appState.state.isAuthenticated, utility_service_1.Logging.normal.white);
        }
    };
    Authentication.prototype.checkAuth = function () {
        // return an observable of the logged in value
        return rxjs_1.Observable.of(this.isLoggedIn());
    };
    Authentication.prototype.isLoggedIn = function () {
        return !!localStorage.getItem('jwt');
    };
    Authentication.prototype.redirectIfNotLoggedIn = function () {
        if (!this.isLoggedIn) {
            if (utility_service_1.Logging.isEnabled.verbose) {
                console.log("%c redirectIfNotLoggedIn()", utility_service_1.Logging.normal.white);
            }
            this.utilityService.navigate('/login');
        }
    };
    Authentication.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Authentication.ctorParameters = [
        { type: appstate_service_1.AppState, },
        { type: router_1.Router, },
        { type: http_1.Http, },
        { type: utility_service_1.UtilityService, },
    ];
    return Authentication;
}());
exports.Authentication = Authentication;
//# sourceMappingURL=authentication.service.js.map