"use strict";
// about.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
/*
 * Shared Utilities
 */
var utility_service_1 = require('../services/utility.service');
var authentication_service_1 = require('../services/authentication.service');
var appstate_service_1 = require('../services/appstate.service');
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
require('./about.style.scss');
var AboutComponent = (function () {
    function AboutComponent(appState, authService, route) {
        this.appState = appState;
        this.authService = authService;
        this.route = route;
        this.isAuthenticated = authService.isLoggedIn();
        this.appState.set('isAuthenticated', this.isAuthenticated);
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            // your resolved data from route
            _this.appState.set('resolvedData', data.dataBroughtToComponent);
            _this.localState = data.dataBroughtToComponent;
        });
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"About\" component!', utility_service_1.Logging.normal.lime);
        }
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        // this.asyncDataWithWebpackSystemJS ();
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
        // This is where you put all your "$(document).ready() {}" code
        // this.loadDataTables();
    };
    AboutComponent.prototype.asyncDataWithWebpack = function () {
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        var asyncMockDataPromiseFactory = require('es6-promise?,[name]!../../assets/mock-data/mock-data.json');
        setTimeout(function () {
            // let asyncDataPromise = asyncMockDataPromiseFactory();
            asyncMockDataPromiseFactory()
                .then(function (json) {
                console.log('async mockData', json);
            });
        });
    };
    AboutComponent.prototype.asyncDataWithWebpackSystemJS = function () {
        var _this = this;
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        setTimeout(function () {
            System.import('../../assets/mock-data/mock-data.json')
                .then(function (json) {
                console.log('async mockData', json);
                _this.localState = json;
            });
        });
    };
    AboutComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'about',
                    templateUrl: './about.template.html'
                },] },
    ];
    /** @nocollapse */
    AboutComponent.ctorParameters = [
        { type: appstate_service_1.AppState, },
        { type: authentication_service_1.Authentication, },
        { type: router_1.ActivatedRoute, },
    ];
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map