webpackJsonp([2],{

/***/ "./node_modules/@angularclass/hmr-loader/index.js!./node_modules/awesome-typescript-loader/dist/entry.js!./node_modules/angular2-template-loader/index.js!./node_modules/angular-router-loader/src/index.js?loader=system!./node_modules/angular2-load-children-loader/index.js!./src/app-components/+iframe-module/iframe.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Angular 2 decorators and services
 */
// import { BrowserModule } from '@angular/platform-browser'
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(6);
var router_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
//
var iframe_routes_1 = __webpack_require__("./src/app-components/+iframe-module/iframe.routes.ts");
/*
 * Shared Utilities & Other Services
 */
var utility_service_1 = __webpack_require__("./src/app-components/services/utility.service.ts");
/**
 * Imported Components
 */
var webpage_1_component_1 = __webpack_require__("./src/app-components/+iframe-module/webpage-1/webpage-1.component.ts");
var webpage_2_component_1 = __webpack_require__("./src/app-components/+iframe-module/webpage-2/webpage-2.component.ts");
var IframeModule = (function () {
    function IframeModule() {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Iframe\" Module!', utility_service_1.Logging.normal.orange);
        }
    }
    return IframeModule;
}());
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
    __metadata("design:paramtypes", [])
], IframeModule);
exports.IframeModule = IframeModule;


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?{\"postcss\":[null],\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"./src/assets/styles/variables.scss\",\"./src/assets/styles/mixins.scss\"]}!./node_modules/@epegzz/sass-vars-loader/src/index.js?files=C%3A%5CSource%5CGitHub%5Cangular2-webpack2-dotnet-starter%5Ccomplete%5Cfrontend%5Csrc%5Cassets%5Cstyles%5Csass-js-variables.js!./src/app-components/+iframe-module/webpage-1/webpage-1.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/********************/\n/* NotFound404.style.scss */\n/********************/\nwebpage1 iframe {\n  display: block;\n  /* iframes are inline by default */\n  background: #666;\n  border: none;\n  /* Reset default border */\n  height: 150vh;\n  /* Viewport-relative units */\n  width: 100%; }\n", "", {"version":3,"sources":["C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/src/app-components/+iframe-module/webpage-1/C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/src/app-components/+iframe-module/webpage-1/webpage-1.style.scss"],"names":[],"mappings":"AA8KA,sBAAsB;AACtB,4BAA4B;AAC5B,sBAAsB;AAGtB;EAEM,eAAc;EAAS,mCAAmC;EAC1D,iBAAgB;EAChB,aAAY;EAAW,0BAA0B;EACjD,cAAa;EAAU,6BAA6B;EACpD,YAAW,EACb","file":"webpage-1.style.scss","sourcesContent":["//---------------------------------------------//\r\n// Variables.scss\r\n// all variables...\r\n// Docs - http://outlinecss.co.uk/get-started.html#variables\r\n//---------------------------------------------//\r\n\r\n//  * NOTE: Do not include anything that will be actually rendered in CSS, because it will be added to every imported SASS file.\r\n//  * Do not use SASS @import inside resources files. Add imported files directly in resources array in webpack config instead.\r\n//  * See: https://github.com/shakacode/sass-resources-loader\r\n\r\n\r\n// html\r\n$html-font-base: 22px; //  used for calculating media query breakpoints\r\n//$font-base: 1rem; //  used for for scaling font-size rhythm - in outline.css framework\r\n$bootstrap-font-base: 22px; // used for scaling bootstrap components - in bootstrap/variables.scss\r\n\r\n$spacing: 1.5rem; // 24px\r\n//$body-background-color: #F0F0F0;\r\n\r\n// Colours\r\n$colors-primary-green: #009688;\r\n$colors-app-background: #2a4f91;\r\n\r\n// Fonts\r\n//$font-primary: 'Segoe UI', san-serif; // body font\r\n//$font-secondary: 'Lato', sans-serif; // title font\r\n//$font-monospace: Monaco, Consolas, 'Lucida Console', monospace;\r\n//$font-base-color: $color-grey-medium;\r\n\r\n\r\n// Placeholder text colour\r\n//$placeholder-text: $color-grey;\r\n\r\n// Button text color\r\n//$btn-text-color: #fff;\r\n//$btn-text-color-alt: $color-grey-dark;\r\n\r\n// Breakpoints\r\n$mobile-landscape: 30rem; // 480px\r\n$tablet: 40rem; // 640px\r\n$tablet-wide: 48rem; // 768px\r\n$desktop: 64rem; // 1024px\r\n$widescreen: 71.25rem; // 1140px\r\n$hd-widescreen: 100rem; // 1140px\r\n$ultra-hd-widescreen: 134.375rem; // 2150px for Microsoft Surface Pro 3\r\n\r\n// Line height\r\n$line-height-base: 1.5;\r\n\r\n// Transitions\r\n$transition-default-property: all;\r\n$transition-default-easing: ease-in-out;\r\n$transition-default-speed: 0.2s;\r\n$transition-default-speed-easing: $transition-default-speed $transition-default-easing;\r\n\r\n\r\n//// Layout Conditions\r\n$sidebarEnabled: true;\r\n$contentContainerWidth: if($sidebarEnabled, 21, 24); // if($condition, true, false)\r\n$contentContainerPosition: if($sidebarEnabled, 4, 1);\r\n\r\n$sidebarWidth: if($sidebarEnabled, 3, 1); // 3 cols if true, 1 col if false. if false, sidebar will be display:none\r\n$sidebarPosition: if($sidebarEnabled, 1, 1);\r\n\r\n//$showSidebar: if($sidebarEnabled, visible, hidden);\r\n$showSidebar: if($sidebarEnabled, block, none);\r\n\n// /* Mixins.scss */\r\n// e.g. @include respond-min($tablet) {\r\n//        background-color: $color-primary;\r\n//      }\r\n// Docs - http://outlinecss.co.uk/get-started.html#mixins\r\n//---------------------------------------------//\r\n//  * NOTE: Do not include anything that will be actually rendered in CSS, because it will be added to every imported SASS file.\r\n//  * Do not use SASS @import inside resources files. Add imported files directly in resources array in webpack config instead.\r\n//  * See: https://github.com/shakacode/sass-resources-loader\r\n\r\n// ====================================================\r\n// ============== VENDOR LIBRARIES  ===================\r\n// ====================================================\r\n//  * We are using \"modular\" components, there is not a single master .scss file, but rather one for each component.\r\n//  * Therefore, each component's .scss file must have all vendor libraries imported into them or they cannot use the mixins\r\n//  * and variables\r\n\r\n\r\n// Susy - SASS Math Library\r\n@import \"~susy/sass/_susy\";\r\n//  Bourbon - SASS Mixins Library\r\n@import \"~bourbon/core/_bourbon.scss\";\r\n\r\n// ====================================================\r\n// ============== OUTLINE.CSS MIXINS ==================\r\n// ====================================================\r\n\r\n// media queries / breakpoints\r\n@mixin respond-min($width) {\r\n  @media screen and (min-width: $width) {\r\n    @content;\r\n  }\r\n}\r\n\r\n// ghost buttons\r\n@mixin ghost-btn($color) {\r\n  color: $color;\r\n  border: .125rem solid $color;\r\n  background-color: transparent;\r\n\r\n  &:hover,\r\n  &:focus,\r\n  &:active {\r\n    background-color: $color;\r\n  }\r\n}\r\n\r\n// gradients\r\n@mixin gradient($angle, $colour1, $colour2) {\r\n  background: $colour1;\r\n  background: linear-gradient(#{$angle}deg, $colour1 0%, $colour2 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$colour1', endColorstr='$colour2', GradientType=1);\r\n}\r\n\r\n// icons\r\n@mixin icon($icon) {\r\n  @extend %icon;\r\n  @extend %icon-#{$icon};\r\n}\r\n\r\n@mixin icon-before($icon, $padding: .5rem) {\r\n  &:before {\r\n    @extend %icon;\r\n    @extend %icon-#{$icon};\r\n    padding-right: $padding;\r\n  }\r\n}\r\n\r\n// ====================================================\r\n// ============== CUSTOM MIXINS =======================\r\n// ====================================================\r\n\r\n@mixin content-padding {\r\n  padding: 10px 20px;\r\n}\r\n\r\n// Transition Mixin\r\n@mixin transition-default($property-speed-ease) {\r\n  // If no args are passed, animate all with $transition-default-speed-easing\r\n  @if $property-speed-ease == 'default' {\r\n    @include transition($transition-default-property $transition-default-speed-easing);\r\n  }\r\n  // If 1 args are passed, animate given property with $transition-default-speed-easing\r\n  @if length($property-speed-ease) == 1 and $property-speed-ease != 'default' {\r\n    @include transition($property-speed-ease $transition-default-speed-easing);\r\n  }\r\n  // If 2 args are passed, animate given property and given transition and default easing\r\n  @if length($property-speed-ease) == 2 {\r\n    @include transition($property-speed-ease $transition-default-easing);\r\n  }\r\n  // If 3 args are passed, animate given property and given transition and given easing\r\n  @if length($property-speed-ease) == 3 {\r\n    @include transition($property-speed-ease);\r\n  }\r\n}\r\n\r\n// border radius\r\n@mixin border-radius($radius) {\r\n  -webkit-border-radius: $radius;\r\n  -moz-border-radius: $radius;\r\n  -ms-border-radius: $radius;\r\n  border-radius: $radius;\r\n}\r\n\n$susyDebug:show;\n$lime:#C0FF33;\n$magenta:#cc33dd;\n/********************/\r\n/* NotFound404.style.scss */\r\n/********************/\r\n@import '../../../assets/styles/appwide-metastyles';\r\n\r\nwebpage1 {\r\n   iframe {\r\n      display: block;       /* iframes are inline by default */\r\n      background: #666;\r\n      border: none;         /* Reset default border */\r\n      height: 150vh;        /* Viewport-relative units */\r\n      width: 100%;\r\n   }\r\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?{\"postcss\":[null],\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"./src/assets/styles/variables.scss\",\"./src/assets/styles/mixins.scss\"]}!./node_modules/@epegzz/sass-vars-loader/src/index.js?files=C%3A%5CSource%5CGitHub%5Cangular2-webpack2-dotnet-starter%5Ccomplete%5Cfrontend%5Csrc%5Cassets%5Cstyles%5Csass-js-variables.js!./src/app-components/+iframe-module/webpage-2/webpage-2.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/********************/\n/* NotFound404.style.scss */\n/********************/\nwebpage2 iframe {\n  display: block;\n  /* iframes are inline by default */\n  background: #666;\n  border: none;\n  /* Reset default border */\n  height: 150vh;\n  /* Viewport-relative units */\n  width: 100%; }\n", "", {"version":3,"sources":["C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/src/app-components/+iframe-module/webpage-2/C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/src/app-components/+iframe-module/webpage-2/webpage-2.style.scss"],"names":[],"mappings":"AA8KA,sBAAsB;AACtB,4BAA4B;AAC5B,sBAAsB;AAGtB;EAEM,eAAc;EAAS,mCAAmC;EAC1D,iBAAgB;EAChB,aAAY;EAAW,0BAA0B;EACjD,cAAa;EAAU,6BAA6B;EACpD,YAAW,EACb","file":"webpage-2.style.scss","sourcesContent":["//---------------------------------------------//\r\n// Variables.scss\r\n// all variables...\r\n// Docs - http://outlinecss.co.uk/get-started.html#variables\r\n//---------------------------------------------//\r\n\r\n//  * NOTE: Do not include anything that will be actually rendered in CSS, because it will be added to every imported SASS file.\r\n//  * Do not use SASS @import inside resources files. Add imported files directly in resources array in webpack config instead.\r\n//  * See: https://github.com/shakacode/sass-resources-loader\r\n\r\n\r\n// html\r\n$html-font-base: 22px; //  used for calculating media query breakpoints\r\n//$font-base: 1rem; //  used for for scaling font-size rhythm - in outline.css framework\r\n$bootstrap-font-base: 22px; // used for scaling bootstrap components - in bootstrap/variables.scss\r\n\r\n$spacing: 1.5rem; // 24px\r\n//$body-background-color: #F0F0F0;\r\n\r\n// Colours\r\n$colors-primary-green: #009688;\r\n$colors-app-background: #2a4f91;\r\n\r\n// Fonts\r\n//$font-primary: 'Segoe UI', san-serif; // body font\r\n//$font-secondary: 'Lato', sans-serif; // title font\r\n//$font-monospace: Monaco, Consolas, 'Lucida Console', monospace;\r\n//$font-base-color: $color-grey-medium;\r\n\r\n\r\n// Placeholder text colour\r\n//$placeholder-text: $color-grey;\r\n\r\n// Button text color\r\n//$btn-text-color: #fff;\r\n//$btn-text-color-alt: $color-grey-dark;\r\n\r\n// Breakpoints\r\n$mobile-landscape: 30rem; // 480px\r\n$tablet: 40rem; // 640px\r\n$tablet-wide: 48rem; // 768px\r\n$desktop: 64rem; // 1024px\r\n$widescreen: 71.25rem; // 1140px\r\n$hd-widescreen: 100rem; // 1140px\r\n$ultra-hd-widescreen: 134.375rem; // 2150px for Microsoft Surface Pro 3\r\n\r\n// Line height\r\n$line-height-base: 1.5;\r\n\r\n// Transitions\r\n$transition-default-property: all;\r\n$transition-default-easing: ease-in-out;\r\n$transition-default-speed: 0.2s;\r\n$transition-default-speed-easing: $transition-default-speed $transition-default-easing;\r\n\r\n\r\n//// Layout Conditions\r\n$sidebarEnabled: true;\r\n$contentContainerWidth: if($sidebarEnabled, 21, 24); // if($condition, true, false)\r\n$contentContainerPosition: if($sidebarEnabled, 4, 1);\r\n\r\n$sidebarWidth: if($sidebarEnabled, 3, 1); // 3 cols if true, 1 col if false. if false, sidebar will be display:none\r\n$sidebarPosition: if($sidebarEnabled, 1, 1);\r\n\r\n//$showSidebar: if($sidebarEnabled, visible, hidden);\r\n$showSidebar: if($sidebarEnabled, block, none);\r\n\n// /* Mixins.scss */\r\n// e.g. @include respond-min($tablet) {\r\n//        background-color: $color-primary;\r\n//      }\r\n// Docs - http://outlinecss.co.uk/get-started.html#mixins\r\n//---------------------------------------------//\r\n//  * NOTE: Do not include anything that will be actually rendered in CSS, because it will be added to every imported SASS file.\r\n//  * Do not use SASS @import inside resources files. Add imported files directly in resources array in webpack config instead.\r\n//  * See: https://github.com/shakacode/sass-resources-loader\r\n\r\n// ====================================================\r\n// ============== VENDOR LIBRARIES  ===================\r\n// ====================================================\r\n//  * We are using \"modular\" components, there is not a single master .scss file, but rather one for each component.\r\n//  * Therefore, each component's .scss file must have all vendor libraries imported into them or they cannot use the mixins\r\n//  * and variables\r\n\r\n\r\n// Susy - SASS Math Library\r\n@import \"~susy/sass/_susy\";\r\n//  Bourbon - SASS Mixins Library\r\n@import \"~bourbon/core/_bourbon.scss\";\r\n\r\n// ====================================================\r\n// ============== OUTLINE.CSS MIXINS ==================\r\n// ====================================================\r\n\r\n// media queries / breakpoints\r\n@mixin respond-min($width) {\r\n  @media screen and (min-width: $width) {\r\n    @content;\r\n  }\r\n}\r\n\r\n// ghost buttons\r\n@mixin ghost-btn($color) {\r\n  color: $color;\r\n  border: .125rem solid $color;\r\n  background-color: transparent;\r\n\r\n  &:hover,\r\n  &:focus,\r\n  &:active {\r\n    background-color: $color;\r\n  }\r\n}\r\n\r\n// gradients\r\n@mixin gradient($angle, $colour1, $colour2) {\r\n  background: $colour1;\r\n  background: linear-gradient(#{$angle}deg, $colour1 0%, $colour2 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$colour1', endColorstr='$colour2', GradientType=1);\r\n}\r\n\r\n// icons\r\n@mixin icon($icon) {\r\n  @extend %icon;\r\n  @extend %icon-#{$icon};\r\n}\r\n\r\n@mixin icon-before($icon, $padding: .5rem) {\r\n  &:before {\r\n    @extend %icon;\r\n    @extend %icon-#{$icon};\r\n    padding-right: $padding;\r\n  }\r\n}\r\n\r\n// ====================================================\r\n// ============== CUSTOM MIXINS =======================\r\n// ====================================================\r\n\r\n@mixin content-padding {\r\n  padding: 10px 20px;\r\n}\r\n\r\n// Transition Mixin\r\n@mixin transition-default($property-speed-ease) {\r\n  // If no args are passed, animate all with $transition-default-speed-easing\r\n  @if $property-speed-ease == 'default' {\r\n    @include transition($transition-default-property $transition-default-speed-easing);\r\n  }\r\n  // If 1 args are passed, animate given property with $transition-default-speed-easing\r\n  @if length($property-speed-ease) == 1 and $property-speed-ease != 'default' {\r\n    @include transition($property-speed-ease $transition-default-speed-easing);\r\n  }\r\n  // If 2 args are passed, animate given property and given transition and default easing\r\n  @if length($property-speed-ease) == 2 {\r\n    @include transition($property-speed-ease $transition-default-easing);\r\n  }\r\n  // If 3 args are passed, animate given property and given transition and given easing\r\n  @if length($property-speed-ease) == 3 {\r\n    @include transition($property-speed-ease);\r\n  }\r\n}\r\n\r\n// border radius\r\n@mixin border-radius($radius) {\r\n  -webkit-border-radius: $radius;\r\n  -moz-border-radius: $radius;\r\n  -ms-border-radius: $radius;\r\n  border-radius: $radius;\r\n}\r\n\n$susyDebug:show;\n$lime:#C0FF33;\n$magenta:#cc33dd;\n/********************/\r\n/* NotFound404.style.scss */\r\n/********************/\r\n@import '../../../assets/styles/appwide-metastyles';\r\n\r\nwebpage2 {\r\n   iframe {\r\n      display: block;       /* iframes are inline by default */\r\n      background: #666;\r\n      border: none;         /* Reset default border */\r\n      height: 150vh;        /* Viewport-relative units */\r\n      width: 100%;\r\n   }\r\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/app-components/+iframe-module/iframe.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Imported Components
 */
var webpage_1_component_1 = __webpack_require__("./src/app-components/+iframe-module/webpage-1/webpage-1.component.ts");
var webpage_2_component_1 = __webpack_require__("./src/app-components/+iframe-module/webpage-2/webpage-2.component.ts");
/*
 * Shared Utilities & Other Services
 */
var route_protection_service_1 = __webpack_require__("./src/app-components/services/route-protection.service.ts");
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


/***/ }),

/***/ "./src/app-components/+iframe-module/webpage-1/webpage-1.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
// tax-detail.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(7);
/*
 * Shared Utilities
 */
var utility_service_1 = __webpack_require__("./src/app-components/services/utility.service.ts");
var authentication_service_1 = __webpack_require__("./src/app-components/services/authentication.service.ts");
var appstate_service_1 = __webpack_require__("./src/app-components/services/appstate.service.ts");
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
__webpack_require__("./src/app-components/+iframe-module/webpage-1/webpage-1.style.scss");
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
    return Webpage1;
}());
Webpage1 = __decorate([
    core_1.Component({
        selector: 'webpage1',
        template: __webpack_require__("./src/app-components/+iframe-module/webpage-1/webpage-1.template.html")
    }),
    __metadata("design:paramtypes", [appstate_service_1.AppState,
        authentication_service_1.Authentication,
        platform_browser_1.DomSanitizer])
], Webpage1);
exports.Webpage1 = Webpage1;


/***/ }),

/***/ "./src/app-components/+iframe-module/webpage-1/webpage-1.style.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?{\"postcss\":[null],\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"./src/assets/styles/variables.scss\",\"./src/assets/styles/mixins.scss\"]}!./node_modules/@epegzz/sass-vars-loader/src/index.js?files=C%3A%5CSource%5CGitHub%5Cangular2-webpack2-dotnet-starter%5Ccomplete%5Cfrontend%5Csrc%5Cassets%5Cstyles%5Csass-js-variables.js!./src/app-components/+iframe-module/webpage-1/webpage-1.style.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?{\"postcss\":[null],\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"./src/assets/styles/variables.scss\",\"./src/assets/styles/mixins.scss\"]}!./node_modules/@epegzz/sass-vars-loader/src/index.js?files=C%3A%5CSource%5CGitHub%5Cangular2-webpack2-dotnet-starter%5Ccomplete%5Cfrontend%5Csrc%5Cassets%5Cstyles%5Csass-js-variables.js!./src/app-components/+iframe-module/webpage-1/webpage-1.style.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?{\"postcss\":[null],\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"./src/assets/styles/variables.scss\",\"./src/assets/styles/mixins.scss\"]}!./node_modules/@epegzz/sass-vars-loader/src/index.js?files=C%3A%5CSource%5CGitHub%5Cangular2-webpack2-dotnet-starter%5Ccomplete%5Cfrontend%5Csrc%5Cassets%5Cstyles%5Csass-js-variables.js!./src/app-components/+iframe-module/webpage-1/webpage-1.style.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/app-components/+iframe-module/webpage-1/webpage-1.template.html":
/***/ (function(module, exports) {

module.exports = "<h1>Webpage1 (sub module)</h1>\r\n<!--<div class=\"row\">-->\r\n   <!--<div class=\"col s3\">-->\r\n      <!--<div class=\"card-panel\">-->\r\n         <!--<span>I am a very simple card. I am good at containing small bits of information.-->\r\n          <!--I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.-->\r\n          <!--</span>-->\r\n      <!--</div>-->\r\n   <!--</div>-->\r\n<!--</div>-->\r\n<iframe width=\"100%\" height=\"100%\" [src]=\"someUrl\"></iframe>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app-components/+iframe-module/webpage-2/webpage-2.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
// tax-summary.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(7);
/*
 * Shared Utilities
 */
var utility_service_1 = __webpack_require__("./src/app-components/services/utility.service.ts");
var authentication_service_1 = __webpack_require__("./src/app-components/services/authentication.service.ts");
var appstate_service_1 = __webpack_require__("./src/app-components/services/appstate.service.ts");
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
__webpack_require__("./src/app-components/+iframe-module/webpage-2/webpage-2.style.scss");
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
    return Webpage2;
}());
Webpage2 = __decorate([
    core_1.Component({
        selector: 'webpage2',
        template: __webpack_require__("./src/app-components/+iframe-module/webpage-2/webpage-2.template.html")
    }),
    __metadata("design:paramtypes", [appstate_service_1.AppState,
        authentication_service_1.Authentication,
        platform_browser_1.DomSanitizer])
], Webpage2);
exports.Webpage2 = Webpage2;


/***/ }),

/***/ "./src/app-components/+iframe-module/webpage-2/webpage-2.style.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?{\"postcss\":[null],\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"./src/assets/styles/variables.scss\",\"./src/assets/styles/mixins.scss\"]}!./node_modules/@epegzz/sass-vars-loader/src/index.js?files=C%3A%5CSource%5CGitHub%5Cangular2-webpack2-dotnet-starter%5Ccomplete%5Cfrontend%5Csrc%5Cassets%5Cstyles%5Csass-js-variables.js!./src/app-components/+iframe-module/webpage-2/webpage-2.style.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?{\"postcss\":[null],\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"./src/assets/styles/variables.scss\",\"./src/assets/styles/mixins.scss\"]}!./node_modules/@epegzz/sass-vars-loader/src/index.js?files=C%3A%5CSource%5CGitHub%5Cangular2-webpack2-dotnet-starter%5Ccomplete%5Cfrontend%5Csrc%5Cassets%5Cstyles%5Csass-js-variables.js!./src/app-components/+iframe-module/webpage-2/webpage-2.style.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?{\"postcss\":[null],\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"./src/assets/styles/variables.scss\",\"./src/assets/styles/mixins.scss\"]}!./node_modules/@epegzz/sass-vars-loader/src/index.js?files=C%3A%5CSource%5CGitHub%5Cangular2-webpack2-dotnet-starter%5Ccomplete%5Cfrontend%5Csrc%5Cassets%5Cstyles%5Csass-js-variables.js!./src/app-components/+iframe-module/webpage-2/webpage-2.style.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/app-components/+iframe-module/webpage-2/webpage-2.template.html":
/***/ (function(module, exports) {

module.exports = "<h1>Webpage2 (sub module)</h1>\r\n<!--<div class=\"row\">-->\r\n   <!--<div class=\"col s3\">-->\r\n      <!--<div class=\"card-panel\">-->\r\n         <!--<span>I am a very simple card. I am good at containing small bits of information.-->\r\n          <!--I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.-->\r\n          <!--</span>-->\r\n      <!--</div>-->\r\n   <!--</div>-->\r\n<!--</div>-->\r\n<iframe width=\"100%\" height=\"100%\" [src]=\"someUrl\"></iframe>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ })

});
//# sourceMappingURL=../maps/iframe.module.map