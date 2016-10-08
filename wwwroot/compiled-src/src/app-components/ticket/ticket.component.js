"use strict";
// ticket.component.ts
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
var data_service_1 = require('../services/data.service');
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
require('./ticket.style.scss');
var TicketComponent = (function () {
    // TypeScript public modifiers
    function TicketComponent(appState, 
        // public http: Http,
        // public authHttp: AuthHttp,
        dataService, authService, route) {
        this.appState = appState;
        this.dataService = dataService;
        this.authService = authService;
        this.route = route;
        this.progress = 0;
        this.ticketID = '';
    }
    TicketComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Ticket\" component!', utility_service_1.Logging.normal.lime);
        }
        if (utility_service_1.Logging.isEnabled.verbose) {
            console.log('isLoggedIn(): ' + this.authService.isLoggedIn());
        }
        this.authService.redirectIfNotLoggedIn();
        // Subscriber to the Angular2 route parameters object
        this.ticketInstance = this.route.params.subscribe(function (params) {
            // If theres no route paramters, don't do anything, which leaves ticketID = '' instead of 'undefined'
            if (!_.isEmpty(params)) {
                _this.ticketID = params['ticketID']; // use +param to convert string 'ticketID' to a number
                // Execute the subscriber search on ticket load
                _this.searchSubscriberByID(_this.ticketID);
            }
        });
    };
    TicketComponent.prototype.ngAfterViewInit = function () {
        // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
        // This is where you put all your "$(document).ready(function() { });" code
        // Init Material select dropdowns
        $('select').material_select();
    };
    TicketComponent.prototype.ngOnDestroy = function () {
        this.ticketInstance.unsubscribe();
    };
    TicketComponent.prototype.searchSubscriberByID = function (subscriberID) {
        this.appState.set('searchSubscriberByID', subscriberID);
        this._callApi('DataService', '/api/subscriber/' + subscriberID);
        // this._callApi('DataService', 'https://jsonplaceholder.typicode.com/users');
    };
    TicketComponent.prototype._callApi = function (type, url) {
        var _this = this;
        // this.response = null;
        this.response = undefined;
        if (type === 'DataService') {
            // For non-protected detailRoutes, just use Http
            this.dataService.get(url)
                .subscribe(function (response) { return _this.subscriberFoundByID = response.json(); }, 
            // response => {
            //    for (var i = 0; i < 3; i++) {
            //       var thisName = response.json()[i].name;
            //       if (!namesArray) {
            //          var namesArray = [];
            //       }
            //       namesArray.push(thisName);
            //    }
            //    //namesArray;
            //    this.subscriberFoundByID = namesArray;
            //},
            function (error) { return _this.response = error.text(); }, function () {
                if (utility_service_1.Logging.isEnabled.light) {
                    console.log('%c API Call Complete', utility_service_1.Logging.normal.orange);
                }
            });
        }
        // if (type === 'Secured') {
        //    // For protected detailRoutes, use AuthHttp
        //    this.authHttp.get(url)
        //        .subscribe(
        //           response => this.response = response.text(),
        //           error => this.response = error.text(), () => {
        //              if (Logging.isEnabled) {
        //                 console.log('%c API Call Complete', Logging.normal.orange);
        //              }
        //           });
        // }
    };
    TicketComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ticket',
                    templateUrl: './ticket.template.html'
                },] },
    ];
    /** @nocollapse */
    TicketComponent.ctorParameters = [
        { type: appstate_service_1.AppState, },
        { type: data_service_1.DataService, },
        { type: authentication_service_1.Authentication, },
        { type: router_1.ActivatedRoute, },
    ];
    return TicketComponent;
}());
exports.TicketComponent = TicketComponent;
//# sourceMappingURL=ticket.component.js.map