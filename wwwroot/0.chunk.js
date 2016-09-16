webpackJsonp([0],{

/***/ 1014:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/**
 * Imported Components
 */
var detail_component_1 = __webpack_require__(1015);
// async components must be named routes for WebpackAsyncRoute
exports.routes = [{
        path: '',
        component: detail_component_1.DetailComponent,
    }];


/***/ },

/***/ 1015:
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
var core_1 = __webpack_require__(2);
/*
 * Shared Utilities
 */
var utility_service_1 = __webpack_require__(21);
var forceChangeDetection_1 = __webpack_require__(107);
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
__webpack_require__(1016);
var DetailComponent = (function () {
    function DetailComponent() {
        // TODO: This is a hack. Find a better solution for getting change detection to work when the final Angular2 RTM
        // gets released
        forceChangeDetection_1.constructorForceChangeDetection();
    }
    DetailComponent.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Detail\" component!', utility_service_1.Logging.normal.lime);
        }
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'detail',
            template: __webpack_require__(1017),
        }), 
        __metadata('design:paramtypes', [])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;


/***/ },

/***/ 1016:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1017:
/***/ function(module, exports) {

module.exports = "<h1>Hello from Detail</h1>\n<router-outlet></router-outlet>\n"

/***/ }

});