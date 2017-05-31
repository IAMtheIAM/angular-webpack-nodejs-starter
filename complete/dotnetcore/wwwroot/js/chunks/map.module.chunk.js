webpackJsonp([3],{

/***/ "./node_modules/@angularclass/hmr-loader/index.js!./node_modules/awesome-typescript-loader/dist/entry.js!./node_modules/angular2-template-loader/index.js!./node_modules/angular-router-loader/src/index.js?loader=system!./node_modules/angular2-load-children-loader/index.js!./src/app-components/+map/map.module.ts":
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
/**
 * Angular 2 decorators and services
 */
var map_1 = __webpack_require__("./node_modules/@ngui/map/dist/index.js"); // https://github.com/ng2-ui/map
var common_1 = __webpack_require__(6);
var router_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
//
var map_routes_1 = __webpack_require__("./src/app-components/+map/map.routes.ts");
/*
 * Shared Utilities & Other Services
 */
var utility_service_1 = __webpack_require__("./src/app-components/services/utility.service.ts");
/**
 * Imported Components
 */
var map_component_1 = __webpack_require__("./src/app-components/+map/maps/map.component.ts");
var MapModule = (function () {
    function MapModule() {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Map\" Module!', utility_service_1.Logging.normal.orange);
        }
    }
    return MapModule;
}());
MapModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            router_1.RouterModule.forChild(map_routes_1.mapRoutes), map_1.NguiMapModule
        ],
        declarations: [
            map_component_1.MapComponent
        ],
        exports: []
    }),
    __metadata("design:paramtypes", [])
], MapModule);
exports.MapModule = MapModule;


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?{\"postcss\":[null],\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"./src/assets/styles/variables.scss\",\"./src/assets/styles/mixins.scss\"]}!./node_modules/@epegzz/sass-vars-loader/src/index.js?files=C%3A%5CSource%5CGitHub%5Cangular2-webpack2-dotnet-starter%5Ccomplete%5Cfrontend%5Csrc%5Cassets%5Cstyles%5Csass-js-variables.js!./src/app-components/+map/maps/map.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/********************/\n/* NotFound404.style.scss */\n/********************/\nmap ngui-map {\n  height: 700px; }\n\nmap .panel .coordinates-data {\n  font-size: 1.3rem;\n  margin: 10px 10px 10px 0; }\n\nmap .panel label {\n  font-weight: bold;\n  font-size: 1.3rem;\n  color: initial; }\n\nmap .panel .color-palette::after {\n  clear: both;\n  content: \"\";\n  display: block; }\n\nmap .panel .color-button {\n  width: 18%;\n  height: 60px;\n  font-size: 0;\n  margin-right: 4px;\n  float: left;\n  cursor: pointer;\n  border: 4px solid #fff; }\n  map .panel .color-button.selected {\n    border: 4px solid #789; }\n\nmap .panel .places-results {\n  max-height: 230px;\n  overflow-y: scroll; }\n\nmap .panel .delete-button {\n  margin-top: 5px; }\n\nmap .pac-input {\n  width: 20%;\n  background: #fff;\n  border: 1px solid #555;\n  color: #333;\n  margin: 10px; }\n", "", {"version":3,"sources":["C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/src/app-components/+map/maps/C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/src/app-components/+map/maps/map.style.scss","C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/src/app-components/+map/maps/C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/node_modules/bourbon/core/bourbon/library/_clearfix.scss"],"names":[],"mappings":"AA8KA,sBAAsB;AACtB,4BAA4B;AAC5B,sBAAsB;AAGtB;EAMS,cAAa,EACf;;AAPP;EAaY,kBAAiB;EACjB,yBAAwB,EAC1B;;AAfV;EAkBY,kBAAiB;EACjB,kBAAiB;EACjB,eAAc,EAChB;;AArBV;EC/JI,YAAW;EACX,YAAW;EACX,eAAc,EACf;;AD4JH;EA4BY,WAAU;EACV,aAAY;EACZ,aAAY;EACZ,kBAAiB;EACjB,YAAW;EACX,gBAAe;EACf,uBAAsB,EAKxB;EAvCV;IAoCe,uBAAsB,EAExB;;AAtCb;EA0CY,kBAAiB;EACjB,mBAAkB,EACpB;;AA5CV;EA+CY,gBAAe,EACjB;;AAhDV;EAqDM,WAAU;EACV,iBAAgB;EAChB,uBAAsB;EACtB,YAAW;EACX,aAAY,EACd","file":"map.style.scss","sourcesContent":["//---------------------------------------------//\r\n// Variables.scss\r\n// all variables...\r\n// Docs - http://outlinecss.co.uk/get-started.html#variables\r\n//---------------------------------------------//\r\n\r\n//  * NOTE: Do not include anything that will be actually rendered in CSS, because it will be added to every imported SASS file.\r\n//  * Do not use SASS @import inside resources files. Add imported files directly in resources array in webpack config instead.\r\n//  * See: https://github.com/shakacode/sass-resources-loader\r\n\r\n\r\n// html\r\n$html-font-base: 22px; //  used for calculating media query breakpoints\r\n//$font-base: 1rem; //  used for for scaling font-size rhythm - in outline.css framework\r\n$bootstrap-font-base: 22px; // used for scaling bootstrap components - in bootstrap/variables.scss\r\n\r\n$spacing: 1.5rem; // 24px\r\n//$body-background-color: #F0F0F0;\r\n\r\n// Colours\r\n$colors-primary-green: #009688;\r\n$colors-app-background: #2a4f91;\r\n\r\n// Fonts\r\n//$font-primary: 'Segoe UI', san-serif; // body font\r\n//$font-secondary: 'Lato', sans-serif; // title font\r\n//$font-monospace: Monaco, Consolas, 'Lucida Console', monospace;\r\n//$font-base-color: $color-grey-medium;\r\n\r\n\r\n// Placeholder text colour\r\n//$placeholder-text: $color-grey;\r\n\r\n// Button text color\r\n//$btn-text-color: #fff;\r\n//$btn-text-color-alt: $color-grey-dark;\r\n\r\n// Breakpoints\r\n$mobile-landscape: 30rem; // 480px\r\n$tablet: 40rem; // 640px\r\n$tablet-wide: 48rem; // 768px\r\n$desktop: 64rem; // 1024px\r\n$widescreen: 71.25rem; // 1140px\r\n$hd-widescreen: 100rem; // 1140px\r\n$ultra-hd-widescreen: 134.375rem; // 2150px for Microsoft Surface Pro 3\r\n\r\n// Line height\r\n$line-height-base: 1.5;\r\n\r\n// Transitions\r\n$transition-default-property: all;\r\n$transition-default-easing: ease-in-out;\r\n$transition-default-speed: 0.2s;\r\n$transition-default-speed-easing: $transition-default-speed $transition-default-easing;\r\n\r\n\r\n//// Layout Conditions\r\n$sidebarEnabled: true;\r\n$contentContainerWidth: if($sidebarEnabled, 21, 24); // if($condition, true, false)\r\n$contentContainerPosition: if($sidebarEnabled, 4, 1);\r\n\r\n$sidebarWidth: if($sidebarEnabled, 3, 1); // 3 cols if true, 1 col if false. if false, sidebar will be display:none\r\n$sidebarPosition: if($sidebarEnabled, 1, 1);\r\n\r\n//$showSidebar: if($sidebarEnabled, visible, hidden);\r\n$showSidebar: if($sidebarEnabled, block, none);\r\n\n// /* Mixins.scss */\r\n// e.g. @include respond-min($tablet) {\r\n//        background-color: $color-primary;\r\n//      }\r\n// Docs - http://outlinecss.co.uk/get-started.html#mixins\r\n//---------------------------------------------//\r\n//  * NOTE: Do not include anything that will be actually rendered in CSS, because it will be added to every imported SASS file.\r\n//  * Do not use SASS @import inside resources files. Add imported files directly in resources array in webpack config instead.\r\n//  * See: https://github.com/shakacode/sass-resources-loader\r\n\r\n// ====================================================\r\n// ============== VENDOR LIBRARIES  ===================\r\n// ====================================================\r\n//  * We are using \"modular\" components, there is not a single master .scss file, but rather one for each component.\r\n//  * Therefore, each component's .scss file must have all vendor libraries imported into them or they cannot use the mixins\r\n//  * and variables\r\n\r\n\r\n// Susy - SASS Math Library\r\n@import \"~susy/sass/_susy\";\r\n//  Bourbon - SASS Mixins Library\r\n@import \"~bourbon/core/_bourbon.scss\";\r\n\r\n// ====================================================\r\n// ============== OUTLINE.CSS MIXINS ==================\r\n// ====================================================\r\n\r\n// media queries / breakpoints\r\n@mixin respond-min($width) {\r\n  @media screen and (min-width: $width) {\r\n    @content;\r\n  }\r\n}\r\n\r\n// ghost buttons\r\n@mixin ghost-btn($color) {\r\n  color: $color;\r\n  border: .125rem solid $color;\r\n  background-color: transparent;\r\n\r\n  &:hover,\r\n  &:focus,\r\n  &:active {\r\n    background-color: $color;\r\n  }\r\n}\r\n\r\n// gradients\r\n@mixin gradient($angle, $colour1, $colour2) {\r\n  background: $colour1;\r\n  background: linear-gradient(#{$angle}deg, $colour1 0%, $colour2 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$colour1', endColorstr='$colour2', GradientType=1);\r\n}\r\n\r\n// icons\r\n@mixin icon($icon) {\r\n  @extend %icon;\r\n  @extend %icon-#{$icon};\r\n}\r\n\r\n@mixin icon-before($icon, $padding: .5rem) {\r\n  &:before {\r\n    @extend %icon;\r\n    @extend %icon-#{$icon};\r\n    padding-right: $padding;\r\n  }\r\n}\r\n\r\n// ====================================================\r\n// ============== CUSTOM MIXINS =======================\r\n// ====================================================\r\n\r\n@mixin content-padding {\r\n  padding: 10px 20px;\r\n}\r\n\r\n// Transition Mixin\r\n@mixin transition-default($property-speed-ease) {\r\n  // If no args are passed, animate all with $transition-default-speed-easing\r\n  @if $property-speed-ease == 'default' {\r\n    @include transition($transition-default-property $transition-default-speed-easing);\r\n  }\r\n  // If 1 args are passed, animate given property with $transition-default-speed-easing\r\n  @if length($property-speed-ease) == 1 and $property-speed-ease != 'default' {\r\n    @include transition($property-speed-ease $transition-default-speed-easing);\r\n  }\r\n  // If 2 args are passed, animate given property and given transition and default easing\r\n  @if length($property-speed-ease) == 2 {\r\n    @include transition($property-speed-ease $transition-default-easing);\r\n  }\r\n  // If 3 args are passed, animate given property and given transition and given easing\r\n  @if length($property-speed-ease) == 3 {\r\n    @include transition($property-speed-ease);\r\n  }\r\n}\r\n\r\n// border radius\r\n@mixin border-radius($radius) {\r\n  -webkit-border-radius: $radius;\r\n  -moz-border-radius: $radius;\r\n  -ms-border-radius: $radius;\r\n  border-radius: $radius;\r\n}\r\n\n$susyDebug:show;\n$lime:#C0FF33;\n$magenta:#cc33dd;\n/********************/\r\n/* NotFound404.style.scss */\r\n/********************/\r\n@import '../../../assets/styles/appwide-metastyles.scss';\r\n\r\nmap {\r\n\r\n   @include nested(24) {\r\n\r\n      ngui-map {\r\n         //@include span(18);\r\n         height: 700px;\r\n      }\r\n\r\n      .panel {\r\n         //@include span(6 last);\r\n\r\n         .coordinates-data {\r\n            font-size: 1.3rem;\r\n            margin: 10px 10px 10px 0;\r\n         }\r\n\r\n         label {\r\n            font-weight: bold;\r\n            font-size: 1.3rem;\r\n            color: initial;\r\n         }\r\n\r\n         .color-palette {\r\n            @include clearfix;\r\n         }\r\n\r\n         .color-button {\r\n            width: 18%;\r\n            height: 60px;\r\n            font-size: 0;\r\n            margin-right: 4px;\r\n            float: left;\r\n            cursor: pointer;\r\n            border: 4px solid #fff;\r\n            &.selected {\r\n               border: 4px solid #789;\r\n\r\n            }\r\n         }\r\n\r\n         .places-results {\r\n            max-height: 230px;\r\n            overflow-y: scroll;\r\n         }\r\n\r\n         .delete-button {\r\n            margin-top: 5px;\r\n         }\r\n      }\r\n   }\r\n\r\n   .pac-input {\r\n      width: 20%;\r\n      background: #fff;\r\n      border: 1px solid #555;\r\n      color: #333;\r\n      margin: 10px;\r\n   }\r\n}\r\n","@charset \"UTF-8\";\n\n/// Provides an easy way to include a clearfix for containing floats.\n///\n/// @link https://goo.gl/yP5hiZ\n///\n/// @example scss\n///   .element {\n///     @include clearfix;\n///   }\n///\n///   // CSS Output\n///   .element::after {\n///     clear: both;\n///     content: \"\";\n///     display: block;\n///   }\n\n@mixin clearfix {\n  &::after {\n    clear: both;\n    content: \"\";\n    display: block;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/app-components/+map/map.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Imported Components
 */
var map_component_1 = __webpack_require__("./src/app-components/+map/maps/map.component.ts");
// async components must be named mapRoutes for WebpackAsyncRoute
exports.mapRoutes = [{
        path: '',
        component: map_component_1.MapComponent,
    }];
;


/***/ }),

/***/ "./src/app-components/+map/maps/map.component.ts":
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
var core_1 = __webpack_require__(0);
var map_1 = __webpack_require__("./node_modules/@ngui/map/dist/index.js");
/*
 * Shared Utilities
 */
var utility_service_1 = __webpack_require__("./src/app-components/services/utility.service.ts");
// import { Authentication } from '../../services/authentication.service';
// import { AppState } from '../../services/appstate.service';
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 * external stylesheets. Do NOT add styles the "Angular2 Way" in the
 * @Component decorator ("styles" and "styleUrls" properties)
 */
__webpack_require__("./src/app-components/+map/maps/map.style.scss");
var MapComponent = (function () {
    function MapComponent(utilityService) {
        this.utilityService = utilityService;
        this.colors = ['#1E90FF', '#FF1493', '#32CD32', '#FF8C00', '#4B0082'];
        this.colorButtons = {};
        this.placeMarkers = [];
        // // Async load google maps API, with webpack require.ensure
        // require.ensure([], function(require) {
        //
        //    // This is the google maps api JS file generated using monsoon's key
        //    // From URL: https://maps.googleapis.com/maps/api/js?v=3.27&key=AIzaSyDFJ9CWZ6ko8W-43lG1gIjv0IDm4QUvCrQ
        //    // require('../../lib/google/maps/js/google.maps.api.monsoon-key.js');
        //
        //    // MapComponent.prototype.initMap();
        //
        // });
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Map\" component!', utility_service_1.Logging.normal.lime);
        }
        this.drawingManager['initialized$'].subscribe(function (dm) {
            _this.map = dm.map;
            google.maps.event.addListener(dm, 'overlaycomplete', function (event) {
                // Switch back to non-drawing mode after drawing a shape.
                dm.setDrawingMode(null);
                // Add an event listeners to the newly-drawn shape
                var newShape = event.overlay;
                newShape.type = event.type;
                // if its not a marker, add custom event enableCoordinatesChangedEvent to the overlay/shape
                var isNotMarker = (newShape.type !== google.maps.drawing.OverlayType.MARKER);
                if (isNotMarker) {
                    /**
                     * () => enableCoordinatesChangedEvent
                     *
                     * description: Extends google maps with a custom event listener called 'coordinates_changed' for
                     * all shapes ' instead of listening for
                     * 'center_changed' (circle), 'bounds_changed'(rectangle), and 'set_at' (polygon/polyline)
                     * individually
                     */
                    event.overlay.enableCoordinatesChangedEvent(newShape);
                }
                google.maps.event.addListener(newShape, 'click', function () {
                    _this.setSelection(newShape, isNotMarker);
                });
                google.maps.event.addListener(newShape, 'coordinates_changed', function (index, obj) {
                    // This is the main event to listen for, all shapes will trigger this event when dragged, resized, or reshaped
                    console.log('coordinates_changed');
                    _this.updateCurSelText(newShape);
                });
                google.maps.event.addListener(newShape, 'drag', function () {
                    // console.log('"drag" fired - ignoring, using custom "coordinates_changed" event');
                    // this.updateCurSelText(newShape); // uncomment this for realtime coordinate updates while dragging
                });
                google.maps.event.addListener(newShape, 'dragend', function () {
                    // console.log('"dragend" fired - ignoring, using custom "coordinates_changed" event');
                });
                _this.setSelection(newShape, isNotMarker);
            });
            // enable 'coordinates_changed' custom event for all shapes
            google.maps.Rectangle.prototype.enableCoordinatesChangedEvent = _this.enableCoordinatesChangedEvent;
            google.maps.Circle.prototype.enableCoordinatesChangedEvent = _this.enableCoordinatesChangedEvent;
            google.maps.Polygon.prototype.enableCoordinatesChangedEvent = _this.enableCoordinatesChangedEvent;
            google.maps.Polyline.prototype.enableCoordinatesChangedEvent = _this.enableCoordinatesChangedEvent;
            // Clear the current selection when the drawing mode is changed, or when the map is clicked.
            google.maps.event.addListener(dm, 'drawingmode_changed', _this.clearSelection);
            google.maps.event.addListener(_this.map, 'click', _this.clearSelection);
            _this.buildColorPalette();
            // Create the search box and link it to the UI element.
            _this.input = document.getElementById('pac-input');
            _this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(_this.input);
            var searchBox = new google.maps.places.SearchBox((_this.input));
            // Listen for the event fired when the user selects an item from the pick list. Retrieve the matching places for that item.
            google.maps.event.addListener(searchBox, 'places_changed', function () {
                var places = searchBox.getPlaces();
                if (places.length === 0) {
                    return;
                }
                // Clear out the old places markers from map.
                for (var i = 0, marker; marker = _this.placeMarkers[i]; i++) {
                    marker.setMap(null);
                }
                // Clear the old places data object.
                _this.placeMarkers = [];
                // For each place, get the icon, place name, and location.
                var bounds = new google.maps.LatLngBounds();
                for (var i = 0, place; place = places[i]; i++) {
                    var image = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };
                    // Create a marker for each place.
                    var placemarker = new google.maps.Marker({
                        map: _this.map,
                        icon: image,
                        title: place.name,
                        position: place.geometry.location
                    });
                    _this.placeMarkers.push(placemarker);
                    bounds.extend(place.geometry.location);
                }
                _this.map.fitBounds(bounds);
            });
            // Bias the SearchBox results towards places that are within the bounds of the current map's viewport.
            google.maps.event.addListener(_this.map, 'bounds_changed', function (event) {
                var bounds = _this.map.getBounds();
                searchBox.setBounds(bounds);
                // this.curposdiv = "curpos Z: " + this.map.getZoom() + " C: " + this.map.getCenter().toUrlValue();
                _this.mapzoom = _this.map.getZoom();
                _this.mapcenter = _this.map.getCenter().toUrlValue();
            });
        });
    };
    MapComponent.prototype.enableCoordinatesChangedEvent = function (selectedShape) {
        var type = selectedShape.type, isBeingDragged = false, triggerCoordinatesChanged = function () {
            // Broadcast normalized event
            google.maps.event.trigger(selectedShape, 'coordinates_changed');
        };
        // If the overlay is being dragged, set_at gets called repeatedly, so either we can debounce that or ignore while dragging, ignoring is more efficient
        google.maps.event.addListener(selectedShape, 'dragstart', function () {
            isBeingDragged = true;
        });
        //if the overlay is dragged
        google.maps.event.addListener(selectedShape, 'dragend', function () {
            triggerCoordinatesChanged();
            isBeingDragged = false;
        });
        if (type === 'circle') {
            google.maps.event.addListener(selectedShape, "radius_changed", function () {
                triggerCoordinatesChanged();
            });
            google.maps.event.addListener(selectedShape, "center_changed", function () {
                if (!isBeingDragged) {
                    triggerCoordinatesChanged();
                }
            });
        }
        else if (type === 'rectangle') {
            google.maps.event.addListener(selectedShape, "bounds_changed", function () {
                if (!isBeingDragged) {
                    triggerCoordinatesChanged();
                }
            });
        }
        else if (type === 'polygon' || type === 'polygon') {
            // If vertices are added or deleted to any of the possible paths
            selectedShape.getPaths().forEach(function (path, i) {
                google.maps.event.addListener(path, "insert_at", function () {
                    triggerCoordinatesChanged();
                });
                google.maps.event.addListener(path, "set_at", function () {
                    if (!isBeingDragged) {
                        triggerCoordinatesChanged();
                    }
                });
                google.maps.event.addListener(path, "remove_at", function () {
                    triggerCoordinatesChanged();
                });
            });
        }
    };
    MapComponent.prototype.updateCurSelText = function (selectedShape) {
        var coordinates, xy, contentString = '';
        // Reset values every time a shape is selected
        this.bounds = selectedShape.getBounds;
        this.centerBounds = selectedShape.getBounds;
        this.path = selectedShape.getPath;
        this.radius = selectedShape.getRadius;
        this.position = selectedShape.position;
        if (selectedShape.type === 'marker') {
            this.position = selectedShape.position.toUrlValue();
        }
        else if (selectedShape.type === 'circle' || selectedShape.type === 'rectangle') {
            if (selectedShape.type === 'circle') {
                this.radius = selectedShape.getRadius();
            }
            coordinates = selectedShape.getBounds();
            this.centerBounds = coordinates.getCenter().toUrlValue();
            this.bounds = "[NE: " + coordinates.getNorthEast().toUrlValue() + " SW: " + coordinates.getSouthWest().toUrlValue() + "]";
            var coordinatesJson = coordinates.toJSON();
            console.log(coordinatesJson);
            // Enumerate over the object properties. i.e. for (prop in obj) { alert(prop + ' = ' + obj[prop]) }
            for (xy in coordinatesJson) {
                if (coordinatesJson.hasOwnProperty(xy)) {
                    contentString = xy + ': ' + coordinatesJson[xy];
                    // console.log(`${selectedShape.type} Coordinate: ${contentString}`);
                }
            }
        }
        else if (selectedShape.type === 'polygon' || selectedShape.type === 'polyline') {
            this.path = "";
            // For a polygon or polyline, getPath() returns the MVCArray of LatLngs.
            for (var i = 0; i < selectedShape.getPath().getLength(); i++) {
                this.path += selectedShape.getPath().getAt(i).toUrlValue() + " , ";
            }
            var polyCoordinateArr = [];
            // Iterate over the vertices.
            selectedShape.getPath().getArray().forEach(function (el, i) {
                polyCoordinateArr.push(el.toJSON());
                // console.log(`${selectedShape.type} Coordinate ${i + 1}: `, el.toJSON());
            });
            console.log(polyCoordinateArr);
        }
        // Inspired by example on github gist:
        // See: https://gist.github.com/anonymous/68b8f6a586c512cfc768#file-gmaps-drawing-tools-places-htm-L224
    };
    MapComponent.prototype.onMapReady = function (map) {
        // console.log('map', map);
        // console.log('markers', map.markers);  // to get all markers as an array
    };
    MapComponent.prototype.onMapClick = function (event) {
        this.clearSelection();
        // this.positions.push(event.latLng);
        event.target.panTo(event.latLng);
    };
    MapComponent.prototype.setSelection = function (shape, isNotMarker) {
        this.clearSelection();
        this.selectedShape = shape;
        this.selectedShapeType = shape.type;
        if (isNotMarker) {
            shape.setEditable(true);
        }
        this.selectColor(shape.get('fillColor') || shape.get('strokeColor'), null);
        this.updateCurSelText(shape);
    };
    MapComponent.prototype.clearSelection = function () {
        if (this.selectedShape) {
            if (typeof this.selectedShape.setEditable == 'function') {
                this.selectedShape.setEditable(false);
            }
            this.selectedShape = null;
        }
    };
    MapComponent.prototype.deleteSelectedShape = function () {
        if (this.selectedShape) {
            this.selectedShape.setMap(null);
        }
    };
    MapComponent.prototype.selectColor = function (color, element) {
        this.selectedColor = color;
        if (element) {
            // Get the node list
            var colorButtons = document.getElementsByClassName('color-button');
            // Turn the node list into an array
            var colorButtonsArr = this.utilityService.slice(colorButtons);
            // Remove .selected class from all buttons
            for (var i2 = 0; i2 < colorButtonsArr.length; i2++) {
                // console.log(colorButtonsArr[i]); //second console output
                colorButtonsArr[i2].classList.remove('selected');
            }
            // Now find the selected color and add the .selected class
            for (var i = 0; i < this.colors.length; ++i) {
                var currColor = this.colors[i];
                if (currColor === color) {
                    element.classList.add('selected');
                }
            }
        }
        // Retrieves the current options from the drawing manager and replaces the
        // stroke or fill color as appropriate.
        var polylineOptions = this.drawingManager.polylineOptions;
        polylineOptions.strokeColor = color;
        this.drawingManager.polylineOptions = polylineOptions;
        var rectangleOptions = this.drawingManager.rectangleOptions;
        rectangleOptions.fillColor = color;
        this.drawingManager.rectangleOptions = rectangleOptions;
        var circleOptions = this.drawingManager.circleOptions;
        circleOptions.fillColor = color;
        this.drawingManager.circleOptions = circleOptions;
        var polygonOptions = this.drawingManager.polygonOptions;
        polygonOptions.fillColor = color;
        this.drawingManager.polygonOptions = polygonOptions;
    };
    MapComponent.prototype.setSelectedShapeColor = function (color) {
        if (this.selectedShape) {
            if (this.selectedShape.type == 'polyline') {
                this.selectedShape.set('strokeColor', color);
            }
            else {
                this.selectedShape.set('fillColor', color);
            }
        }
    };
    MapComponent.prototype.makeColorButton = function (color) {
        var _this = this;
        var button = document.createElement('span');
        button.className = 'color-button';
        button.style.backgroundColor = color;
        google.maps.event.addDomListener(button, 'click', function () {
            _this.selectColor(color, button);
            _this.setSelectedShapeColor(color);
        });
        return button;
    };
    MapComponent.prototype.buildColorPalette = function () {
        var colorPalette = document.getElementById('color-palette');
        for (var i = 0; i < this.colors.length; ++i) {
            var currColor = this.colors[i];
            var colorButton = this.makeColorButton(currColor);
            colorPalette.appendChild(colorButton);
            this.colorButtons[currColor] = colorButton;
        }
        this.selectColor(this.colors[0], null);
    };
    MapComponent.prototype.deletePlacesSearchResults = function () {
        var _this = this;
        for (var i = 0, marker; marker = _this.placeMarkers[i]; i++) {
            marker.setMap(null);
        }
        _this.placeMarkers = [];
        this.input.value = ''; // clear the box too
    };
    return MapComponent;
}());
__decorate([
    core_1.ViewChild(map_1.DrawingManager),
    __metadata("design:type", map_1.DrawingManager)
], MapComponent.prototype, "drawingManager", void 0);
MapComponent = __decorate([
    core_1.Component({
        selector: 'map',
        template: __webpack_require__("./src/app-components/+map/maps/map.template.html"),
    }),
    __metadata("design:paramtypes", [utility_service_1.UtilityService])
], MapComponent);
exports.MapComponent = MapComponent;


/***/ }),

/***/ "./src/app-components/+map/maps/map.style.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?{\"postcss\":[null],\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"./src/assets/styles/variables.scss\",\"./src/assets/styles/mixins.scss\"]}!./node_modules/@epegzz/sass-vars-loader/src/index.js?files=C%3A%5CSource%5CGitHub%5Cangular2-webpack2-dotnet-starter%5Ccomplete%5Cfrontend%5Csrc%5Cassets%5Cstyles%5Csass-js-variables.js!./src/app-components/+map/maps/map.style.scss");
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
		module.hot.accept("./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?{\"postcss\":[null],\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"./src/assets/styles/variables.scss\",\"./src/assets/styles/mixins.scss\"]}!./node_modules/@epegzz/sass-vars-loader/src/index.js?files=C%3A%5CSource%5CGitHub%5Cangular2-webpack2-dotnet-starter%5Ccomplete%5Cfrontend%5Csrc%5Cassets%5Cstyles%5Csass-js-variables.js!./src/app-components/+map/maps/map.style.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?{\"postcss\":[null],\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":[\"./src/assets/styles/variables.scss\",\"./src/assets/styles/mixins.scss\"]}!./node_modules/@epegzz/sass-vars-loader/src/index.js?files=C%3A%5CSource%5CGitHub%5Cangular2-webpack2-dotnet-starter%5Ccomplete%5Cfrontend%5Csrc%5Cassets%5Cstyles%5Csass-js-variables.js!./src/app-components/+map/maps/map.style.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/app-components/+map/maps/map.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n   <div class=\"col s12\">\r\n      <div class=\"card-panel\">\r\n         <h4>Drawing Manager</h4>\r\n         <div class=\"row\">\r\n\r\n            <div class=\"col s9\">\r\n               <ngui-map zoom=\"11\"\r\n                  center=\"37.340498,-122.032097\"\r\n                  (mapReady$)=\"onMapReady($event)\"\r\n                  (mapClick)=\"onMapClick($event)\"\r\n                  [fullscreenControl]=\"true\"\r\n                  [fullscreenControlOptions]=\"{position: 'TOP_RIGHT'}\"\r\n               >\r\n                  <polygon [editable]=\"true\"\r\n                     [paths]=\"paths\"\r\n                     [strokeColor]=\"'#FFC107'\"\r\n                     [strokeOpacity]=\"0.8\"\r\n                     [strokeWeight]=\"2\"\r\n                     [fillColor]=\"'#FFC107'\"\r\n                     [fillOpacity]=\"0.35\"></polygon>\r\n\r\n                  <drawing-manager\r\n                     [drawingMode]=\"'marker'\"\r\n                     [drawingControl]=\"true\"\r\n                     [drawingControlOptions]=\"{\r\n                    position: 'TOP_CENTER',\r\n                    drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']\r\n                   }\"\r\n                     [polylineOptions]=\"{draggable: true}\"\r\n                     [rectangleOptions]=\"{draggable: true}\"\r\n                     [polygonOptions]=\"{draggable: true}\"\r\n                     [circleOptions]=\"{draggable: true}\">\r\n                  </drawing-manager>\r\n               </ngui-map>\r\n            </div>\r\n            <div class=\"col s3\">\r\n               <input id=\"pac-input\" class=\"pac-input\" type=\"text\" placeholder=\"Search Box\">\r\n               <div class=\"panel\">\r\n                  <div id=\"color-palette\" class=\"color-palette\"></div>\r\n                  <button id=\"delete-shape\" class=\"delete-button\" (click)=\"deleteSelectedShape()\">Delete Selected Shape</button>\r\n                  <button id=\"delete-places\" class=\"delete-button\" (click)=\"deletePlacesSearchResults()\">Delete Places</button>\r\n                  <div class=\"coordinates-data\">\r\n                     <div class=\"map-data\">\r\n                        <b>Map Zoom:</b> {{mapzoom}}<br />\r\n                        <b>Map Center:</b> {{mapcenter}}\r\n                     </div>\r\n                     <div class=\"shape-data\">\r\n                        <label>Shape Type</label>: {{selectedShapeType}}<br />\r\n                        <label>Position</label>: {{position}}<br />\r\n                        <label>Path</label>: {{path}}<br />\r\n                        <label>Bounds</label>: {{bounds}}<br />\r\n                        <label>Center Bounds</label>: {{centerBounds}}<br />\r\n                        <label>Radius</label>: {{radius}}<br />\r\n                     </div>\r\n                     <label>Places</label>:\r\n                     <div class=\"places-results\">\r\n                        <span *ngFor=\"let placeMarker of placeMarkers\">{{placeMarker.title}}<br /></span>\r\n                     </div>\r\n                     <div class=\"note\">\r\n                        <small>Note: markers can be selected, but are not graphically indicated; can be deleted, but cannot have their color changed.</small>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ })

});
//# sourceMappingURL=../maps/map.module.map