webpackJsonp([2,5],{

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Angular 2 decorators and services
 */
// import { BrowserModule } from '@angular/platform-browser'
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var common_1 = __webpack_require__(46);
var router_1 = __webpack_require__(15);
var core_1 = __webpack_require__(3);
//
var iframe_routes_1 = __webpack_require__(430);
/*
 * Shared Utilities & Other Services
 */
var utility_service_1 = __webpack_require__(6);
/**
 * Imported Components
 */
var webpage_1_component_1 = __webpack_require__(427);
var webpage_2_component_1 = __webpack_require__(428);
var IframeModule = (function () {
    function IframeModule() {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Iframe\" Module!', utility_service_1.Logging.normal.orange);
        }
    }
    IframeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                // SharedModule,
                router_1.RouterModule.forChild(iframe_routes_1.iframeRoutes)
            ],
            declarations: [
                webpage_1_component_1.Webpage1, webpage_2_component_1.Webpage2
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], IframeModule);
    return IframeModule;
}());
exports.IframeModule = IframeModule;


/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tax-detail.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = __webpack_require__(3);
var platform_browser_1 = __webpack_require__(30);
/*
 * Shared Utilities
 */
var utility_service_1 = __webpack_require__(6);
var authentication_service_1 = __webpack_require__(12);
var appstate_service_1 = __webpack_require__(7);
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
__webpack_require__(432);
var Webpage1 = (function () {
    function Webpage1(appState, Authentication, sanitizer) {
        this.appState = appState;
        this.Authentication = Authentication;
        this.isAuthenticated = Authentication.isAuthenticated;
        this.appState.set('isAuthenticated', this.isAuthenticated);
        this.someUrl = sanitizer.bypassSecurityTrustResourceUrl('http://www.bing.com/images');
    }
    Webpage1.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Webpage1\" component!', utility_service_1.Logging.normal.lime);
        }
    };
    Webpage1.prototype.ngAfterViewInit = function () {
        // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
        // This is where you put all your "$(document).ready() {}" code
        // this.loadDataTables();
    };
    Webpage1 = __decorate([
        core_1.Component({
            selector: 'webpage1',
            template: __webpack_require__(435)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof appstate_service_1.AppState !== 'undefined' && appstate_service_1.AppState) === 'function' && _a) || Object, (typeof (_b = typeof authentication_service_1.Authentication !== 'undefined' && authentication_service_1.Authentication) === 'function' && _b) || Object, (typeof (_c = typeof platform_browser_1.DomSanitizer !== 'undefined' && platform_browser_1.DomSanitizer) === 'function' && _c) || Object])
    ], Webpage1);
    return Webpage1;
    var _a, _b, _c;
}());
exports.Webpage1 = Webpage1;


/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tax-summary.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = __webpack_require__(3);
var platform_browser_1 = __webpack_require__(30);
/*
 * Shared Utilities
 */
var utility_service_1 = __webpack_require__(6);
var authentication_service_1 = __webpack_require__(12);
var appstate_service_1 = __webpack_require__(7);
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
__webpack_require__(433);
var Webpage2 = (function () {
    function Webpage2(appState, Authentication, sanitizer) {
        this.appState = appState;
        this.Authentication = Authentication;
        this.isAuthenticated = Authentication.isAuthenticated;
        this.appState.set('isAuthenticated', this.isAuthenticated);
        this.someUrl = sanitizer.bypassSecurityTrustResourceUrl('http://www.bing.com');
    }
    Webpage2.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Webpage2\" component!', utility_service_1.Logging.normal.lime);
        }
    };
    Webpage2.prototype.ngAfterViewInit = function () {
        // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
        // This is where you put all your "$(document).ready() {}" code
        // this.loadDataTables();
    };
    Webpage2 = __decorate([
        core_1.Component({
            selector: 'webpage2',
            template: __webpack_require__(436)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof appstate_service_1.AppState !== 'undefined' && appstate_service_1.AppState) === 'function' && _a) || Object, (typeof (_b = typeof authentication_service_1.Authentication !== 'undefined' && authentication_service_1.Authentication) === 'function' && _b) || Object, (typeof (_c = typeof platform_browser_1.DomSanitizer !== 'undefined' && platform_browser_1.DomSanitizer) === 'function' && _c) || Object])
    ], Webpage2);
    return Webpage2;
    var _a, _b, _c;
}());
exports.Webpage2 = Webpage2;


/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/**
 * Imported Components
 */
var webpage_1_component_1 = __webpack_require__(427);
var webpage_2_component_1 = __webpack_require__(428);
/*
 * Shared Utilities & Other Services
 */
var route_protection_service_1 = __webpack_require__(31);
// async components must be named detailRoutes for WebpackAsyncRoute
exports.iframeRoutes = [{
        path: '',
        component: webpage_1_component_1.Webpage1,
    }, {
        path: 'webpage1',
        component: webpage_1_component_1.Webpage1,
        canActivate: [route_protection_service_1.RouteProtection]
    }, {
        path: 'webpage2',
        component: webpage_2_component_1.Webpage2,
        canActivate: [route_protection_service_1.RouteProtection]
    }];


/***/ },

/***/ 432:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 433:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 435:
/***/ function(module, exports) {

module.exports = "<h1>Webpage1 (sub module)</h1>\r\n<!--<div class=\"row\">-->\r\n   <!--<div class=\"col s3\">-->\r\n      <!--<div class=\"card-panel\">-->\r\n         <!--<span>I am a very simple card. I am good at containing small bits of information.-->\r\n          <!--I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.-->\r\n          <!--</span>-->\r\n      <!--</div>-->\r\n   <!--</div>-->\r\n<!--</div>-->\r\n<iframe width=\"100%\" height=\"100%\" [src]=\"someUrl\"></iframe>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ },

/***/ 436:
/***/ function(module, exports) {

module.exports = "<h1>Webpage2 (sub module)</h1>\r\n<!--<div class=\"row\">-->\r\n   <!--<div class=\"col s3\">-->\r\n      <!--<div class=\"card-panel\">-->\r\n         <!--<span>I am a very simple card. I am good at containing small bits of information.-->\r\n          <!--I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.-->\r\n          <!--</span>-->\r\n      <!--</div>-->\r\n   <!--</div>-->\r\n<!--</div>-->\r\n<iframe width=\"100%\" height=\"100%\" [src]=\"someUrl\"></iframe>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }

});
//# sourceMappingURL=../maps/iframe.module.map