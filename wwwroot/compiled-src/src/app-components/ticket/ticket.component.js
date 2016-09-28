"use strict";
// ticket.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
// import { Http } from '@angular/http';
// import { AuthHttp } from 'angular2-jwt';
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
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
require('./ticket.style.scss');
var TicketComponent = (function () {
    // TypeScript public modifiers
    function TicketComponent(appState, 
        // public http: Http,
        // public authHttp: AuthHttp,
        dataService, authService) {
        this.appState = appState;
        this.dataService = dataService;
        this.authService = authService;
        this.progress = 0;
        // Set our default values
        this.localState = {
            subscriberID: "dh048"
        };
    }
    TicketComponent.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Ticket\" component!', utility_service_1.Logging.normal.lime);
        }
        if (utility_service_1.Logging.isEnabled.verbose) {
            console.log('isLoggedIn(): ' + this.authService.isLoggedIn());
        }
        this.authService.redirectIfNotLoggedIn();
    };
    TicketComponent.prototype.ngAfterViewInit = function () {
        // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
        // This is where you put all your "$(document).ready(function() { });" code
    };
    TicketComponent.prototype.searchSubscriberByID = function (subscriberID) {
        // this.appState.set('searchSubscriberByID', this.localState.subscriberID);
        this.appState.set('searchSubscriberByID', subscriberID);
        this._callApi('DataService', '/api/subscriber/' + this.localState.subscriberID);
    };
    TicketComponent.prototype._callApi = function (type, url) {
        var _this = this;
        // this.response = null;
        this.response = undefined;
        if (type === 'DataService') {
            // For non-protected detailRoutes, just use Http
            this.dataService.get(url)
                .subscribe(function (response) { return _this.subscriberFoundByID = response.json(); }, function (error) { return _this.response = error.text(); }, function () {
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
    ];
    return TicketComponent;
}());
exports.TicketComponent = TicketComponent;
//# sourceMappingURL=ticket.component.js.map