"use strict";
// home.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt');
var jwt_decode = require('jwt-decode');
/*
 * Shared Utilities
 */
var utility_service_1 = require('../services/utility.service');
var appstate_service_1 = require('../services/appstate.service');
var authentication_service_1 = require('../services/authentication.service');
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
require('./home.style.scss');
var HomeComponent = (function () {
    // TypeScript public modifiers
    function HomeComponent(_ngZone, appState, router, http, authService, authHttp) {
        this._ngZone = _ngZone;
        this.appState = appState;
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.authHttp = authHttp;
        this.progress = 0;
        this.localState = { value: '' };
        this.isAuthenticated = authService.isLoggedIn();
        // We get the JWT from localStorage
        this.jwt = localStorage.getItem('jwt');
        this.decodedJwt = this.jwt && jwt_decode(this.jwt);
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Home\" component!', utility_service_1.Logging.normal.lime);
        }
        if (utility_service_1.Logging.isEnabled.verbose) {
            console.log('isLoggedIn(): ' + this.authService.isLoggedIn());
        }
        this.authService.redirectIfNotLoggedIn();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
        // This is where you put all your "$(document).ready(function() { });" code
    };
    HomeComponent.prototype.submitState = function (value) {
        console.log('submitState', value);
        this.appState.set('value', value);
        this.localState.value = '';
    };
    /**
     * JWT Methods - Calls local api server.
     * Path to API server: /config/api-backend
     * Start API server with: npm run apiserver
     * Username: admin
     * Password: admin
   */
    HomeComponent.prototype.callAnonymousApi = function () {
        this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
    };
    HomeComponent.prototype.callSecuredApi = function () {
        this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
    };
    HomeComponent.prototype._callApi = function (type, url) {
        var _this = this;
        // this.response = null;
        this.response = undefined;
        if (type === 'Anonymous') {
            // For non-protected routes, just use Http
            this.http.get(url)
                .subscribe(function (response) { return _this.response = response.text(); }, function (error) { return _this.response = error; });
        }
        if (type === 'Secured') {
            // For protected routes, use AuthHttp
            this.authHttp.get(url)
                .subscribe(function (response) { return _this.response = response.text(); }, function (error) { return _this.response = error; });
        }
    };
    /**
     * ngZone.js examples
     * This shows how to process your function inside of angular zones
     * and outside of angular zones.
     */
    HomeComponent.prototype.processInsideAngularZone = function () {
        this.progress = 0;
        this._increaseProgress(function () {
            if (utility_service_1.Logging.isEnabled) {
                console.log('Done!');
            }
        });
    };
    HomeComponent.prototype.processOutsideAngularZone = function () {
        var _this = this;
        this.progress = 0;
        this._ngZone.runOutsideAngular(function () {
            _this._increaseProgress(function () {
                _this._ngZone.run(function () {
                    if (utility_service_1.Logging.isEnabled) {
                        console.log('Outside Done!');
                    }
                });
            });
        });
    };
    HomeComponent.prototype._increaseProgress = function (doneCallback) {
        var _this = this;
        this.progress += 1;
        if (utility_service_1.Logging.isEnabled) {
            console.log("Current progress: " + this.progress + "%");
        }
        if (this.progress < 100) {
            window.setTimeout(function () {
                _this._increaseProgress(doneCallback);
            }, 10);
        }
        else {
            doneCallback();
            console.log("Resetting counter to 0 in 3 seconds");
            window.setTimeout(function () {
                // Reset counter
                _this.progress = 0;
            }, 3000);
        }
    };
    HomeComponent.decorators = [
        { type: core_1.Component, args: [{
                    // The selector is what angular internally uses
                    // for `document.querySelectorAll(selector)` in our index.html
                    // where, in this case, selector is the string 'home'
                    selector: 'home',
                    // We need to tell Angular's Dependency Injection which providers are in our app.
                    providers: [authentication_service_1.Authentication],
                    // Every Angular template is first compiled by the browser before Angular runs it's compiler
                    templateUrl: './home.template.html'
                },] },
    ];
    /** @nocollapse */
    HomeComponent.ctorParameters = [
        { type: core_1.NgZone, },
        { type: appstate_service_1.AppState, },
        { type: router_1.Router, },
        { type: http_1.Http, },
        { type: authentication_service_1.Authentication, },
        { type: angular2_jwt_1.AuthHttp, },
    ];
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map