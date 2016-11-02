webpackJsonp([5,7],{

/***/ 123:
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
var common_1 = __webpack_require__(70);
var router_1 = __webpack_require__(22);
var core_1 = __webpack_require__(3);
//
var detail_routes_1 = __webpack_require__(511);
/*
 * Shared Utilities & Other Services
 */
var utility_service_1 = __webpack_require__(6);
/**
 * Imported Components
 */
var detail_component_1 = __webpack_require__(508);
var DetailModule = (function () {
    function DetailModule() {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Detail\" Module!', utility_service_1.Logging.normal.orange);
        }
    }
    DetailModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                // SharedModule,
                router_1.RouterModule.forChild(detail_routes_1.detailRoutes)
            ],
            declarations: [
                detail_component_1.DetailComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailModule);
    return DetailModule;
}());
exports.DetailModule = DetailModule;


/***/ },

/***/ 508:
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
var core_1 = __webpack_require__(3);
/*
 * Shared Utilities
 */
var utility_service_1 = __webpack_require__(6);
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 * external stylesheets. Do NOT add styles the "Angular2 Way" in the
 * @Component decorator ("styles" and "styleUrls" properties)
 */
__webpack_require__(513);
var DetailComponent = (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Detail\" component!', utility_service_1.Logging.normal.lime);
        }
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'detail',
            template: __webpack_require__(516),
        }), 
        __metadata('design:paramtypes', [])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;


/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/**
 * Imported Components
 */
var detail_component_1 = __webpack_require__(508);
// async components must be named detailRoutes for WebpackAsyncRoute
exports.detailRoutes = [{
        path: '',
        component: detail_component_1.DetailComponent,
    }];
;


/***/ },

/***/ 513:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 516:
/***/ function(module, exports) {

module.exports = "<h1>Hello from Detail (sub module)</h1>\r\n<div class=\"row\">\r\n   <div class=\"col s4\">\r\n      <div class=\"card-panel\">\r\n          <span>I am a very simple card. I am good at containing small bits of information.\r\n          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\r\n          </span>\r\n      </div>\r\n   </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }

});
//# sourceMappingURL=../maps/detail.module.map