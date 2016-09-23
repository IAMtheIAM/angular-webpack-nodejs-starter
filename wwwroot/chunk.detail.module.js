webpackJsonp([0,5],{

/***/ 1097:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/**
 * Imported Components
 */
var detail_component_1 = __webpack_require__(515);
// async components must be named detailRoutes for WebpackAsyncRoute
exports.detailRoutes = [{
        path: '',
        component: detail_component_1.DetailComponent,
    }];
;


/***/ },

/***/ 516:
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
var common_1 = __webpack_require__(58);
var platform_browser_1 = __webpack_require__(103);
var router_1 = __webpack_require__(63);
var core_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(239);
//
var detail_routes_1 = __webpack_require__(1097);
/*
 * Shared Utilities & Other Services
 */
var utility_service_1 = __webpack_require__(18);
/**
 * Imported Components
 */
var detail_component_1 = __webpack_require__(515);
var DetailModule = (function () {
    function DetailModule() {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Detail\" component!', utility_service_1.Logging.normal.lime);
        }
    }
    DetailModule = __decorate([
        core_1.NgModule({
            declarations: [
                detail_component_1.DetailComponent],
            imports: [common_1.CommonModule, platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forChild(detail_routes_1.detailRoutes)]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailModule);
    return DetailModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DetailModule;


/***/ }

});