webpackJsonp([1,2,6],{

/***/ 128:
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
var common_1 = __webpack_require__(72);
var router_1 = __webpack_require__(22);
var core_1 = __webpack_require__(3);
//
var iframe_routes_1 = __webpack_require__(509);
/*
 * Shared Utilities & Other Services
 */
var utility_service_1 = __webpack_require__(7);
/**
 * Imported Components
 */
var webpage_1_component_1 = __webpack_require__(506);
var webpage_2_component_1 = __webpack_require__(507);
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

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = __webpack_require__(133);
var import1 = __webpack_require__(128);
var import2 = __webpack_require__(136);
var import3 = __webpack_require__(135);
var import4 = __webpack_require__(131);
var import6 = __webpack_require__(517);
var import7 = __webpack_require__(518);
var import8 = __webpack_require__(132);
var import9 = __webpack_require__(506);
var import10 = __webpack_require__(33);
var import11 = __webpack_require__(507);
var import12 = __webpack_require__(130);
var IframeModuleInjector = (function (_super) {
    __extends(IframeModuleInjector, _super);
    function IframeModuleInjector(parent) {
        _super.call(this, parent, [
            import6.Webpage1NgFactory,
            import6.Webpage1NgFactory,
            import7.Webpage2NgFactory
        ], []);
    }
    Object.defineProperty(IframeModuleInjector.prototype, "_NgLocalization_3", {
        get: function () {
            if ((this.__NgLocalization_3 == null)) {
                (this.__NgLocalization_3 = new import4.NgLocaleLocalization(this.parent.get(import8.LOCALE_ID)));
            }
            return this.__NgLocalization_3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IframeModuleInjector.prototype, "_ROUTES_4", {
        get: function () {
            if ((this.__ROUTES_4 == null)) {
                (this.__ROUTES_4 = [[
                        {
                            path: '',
                            component: import9.Webpage1
                        },
                        {
                            path: 'webpage1',
                            component: import9.Webpage1,
                            canActivate: [import10.RouteProtection]
                        },
                        {
                            path: 'webpage2',
                            component: import11.Webpage2,
                            canActivate: [import10.RouteProtection]
                        }
                    ]
                ]);
            }
            return this.__ROUTES_4;
        },
        enumerable: true,
        configurable: true
    });
    IframeModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD, null));
        this._IframeModule_2 = new import1.IframeModule();
        return this._IframeModule_2;
    };
    IframeModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.RouterModule)) {
            return this._RouterModule_1;
        }
        if ((token === import1.IframeModule)) {
            return this._IframeModule_2;
        }
        if ((token === import4.NgLocalization)) {
            return this._NgLocalization_3;
        }
        if ((token === import12.ROUTES)) {
            return this._ROUTES_4;
        }
        return notFoundResult;
    };
    IframeModuleInjector.prototype.destroyInternal = function () {
    };
    return IframeModuleInjector;
}(import0.NgModuleInjector));
exports.IframeModuleNgFactory = new import0.NgModuleFactory(IframeModuleInjector, import1.IframeModule);


/***/ },

/***/ 506:
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
var platform_browser_1 = __webpack_require__(32);
/*
 * Shared Utilities
 */
var utility_service_1 = __webpack_require__(7);
var authentication_service_1 = __webpack_require__(8);
var appstate_service_1 = __webpack_require__(6);
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
__webpack_require__(511);
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
            template: __webpack_require__(514)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof appstate_service_1.AppState !== 'undefined' && appstate_service_1.AppState) === 'function' && _a) || Object, (typeof (_b = typeof authentication_service_1.Authentication !== 'undefined' && authentication_service_1.Authentication) === 'function' && _b) || Object, (typeof (_c = typeof platform_browser_1.DomSanitizer !== 'undefined' && platform_browser_1.DomSanitizer) === 'function' && _c) || Object])
    ], Webpage1);
    return Webpage1;
    var _a, _b, _c;
}());
exports.Webpage1 = Webpage1;


/***/ },

/***/ 507:
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
var platform_browser_1 = __webpack_require__(32);
/*
 * Shared Utilities
 */
var utility_service_1 = __webpack_require__(7);
var authentication_service_1 = __webpack_require__(8);
var appstate_service_1 = __webpack_require__(6);
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
__webpack_require__(512);
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
            template: __webpack_require__(515)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof appstate_service_1.AppState !== 'undefined' && appstate_service_1.AppState) === 'function' && _a) || Object, (typeof (_b = typeof authentication_service_1.Authentication !== 'undefined' && authentication_service_1.Authentication) === 'function' && _b) || Object, (typeof (_c = typeof platform_browser_1.DomSanitizer !== 'undefined' && platform_browser_1.DomSanitizer) === 'function' && _c) || Object])
    ], Webpage2);
    return Webpage2;
    var _a, _b, _c;
}());
exports.Webpage2 = Webpage2;


/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/**
 * Imported Components
 */
var webpage_1_component_1 = __webpack_require__(506);
var webpage_2_component_1 = __webpack_require__(507);
/*
 * Shared Utilities & Other Services
 */
var route_protection_service_1 = __webpack_require__(33);
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

/***/ 511:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 512:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 514:
/***/ function(module, exports) {

module.exports = "<h1>Webpage1 (sub module)</h1>\r\n<!--<div class=\"row\">-->\r\n   <!--<div class=\"col s3\">-->\r\n      <!--<div class=\"card-panel\">-->\r\n         <!--<span>I am a very simple card. I am good at containing small bits of information.-->\r\n          <!--I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.-->\r\n          <!--</span>-->\r\n      <!--</div>-->\r\n   <!--</div>-->\r\n<!--</div>-->\r\n<iframe width=\"100%\" height=\"100%\" [src]=\"someUrl\"></iframe>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ },

/***/ 515:
/***/ function(module, exports) {

module.exports = "<h1>Webpage2 (sub module)</h1>\r\n<!--<div class=\"row\">-->\r\n   <!--<div class=\"col s3\">-->\r\n      <!--<div class=\"card-panel\">-->\r\n         <!--<span>I am a very simple card. I am good at containing small bits of information.-->\r\n          <!--I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.-->\r\n          <!--</span>-->\r\n      <!--</div>-->\r\n   <!--</div>-->\r\n<!--</div>-->\r\n<iframe width=\"100%\" height=\"100%\" [src]=\"someUrl\"></iframe>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = __webpack_require__(506);
var import1 = __webpack_require__(21);
var import2 = __webpack_require__(19);
var import4 = __webpack_require__(17);
var import5 = __webpack_require__(9);
var import7 = __webpack_require__(16);
var import8 = __webpack_require__(10);
var import9 = __webpack_require__(6);
var import10 = __webpack_require__(8);
var import11 = __webpack_require__(134);
var import12 = __webpack_require__(20);
var import13 = __webpack_require__(18);
var import14 = __webpack_require__(74);
var import15 = __webpack_require__(126);
var import16 = __webpack_require__(73);
var import17 = __webpack_require__(129);
var import18 = __webpack_require__(50);
var Wrapper_Webpage1 = (function () {
    function Wrapper_Webpage1(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.Webpage1(p0, p1, p2);
    }
    Wrapper_Webpage1.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_Webpage1.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_Webpage1;
}());
exports.Wrapper_Webpage1 = Wrapper_Webpage1;
var nodeDebugInfos_Webpage1_Host0 = [new import2.StaticNodeDebugInfo([import0.Webpage1], import0.Webpage1, {})];
var renderType_Webpage1_Host = null;
var _View_Webpage1_Host0 = (function (_super) {
    __extends(_View_Webpage1_Host0, _super);
    function _View_Webpage1_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Webpage1_Host0, renderType_Webpage1_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_Webpage1_Host0);
    }
    _View_Webpage1_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer, 'webpage1', import5.EMPTY_INLINE_ARRAY, rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import4.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Webpage10(this.viewUtils, this.injector(0), this._appEl_0);
        this._Webpage1_0_4 = new Wrapper_Webpage1(this.parentInjector.get(import9.AppState), this.parentInjector.get(import10.Authentication), this.parentInjector.get(import11.DomSanitizer));
        this._appEl_0.initComponent(this._Webpage1_0_4.context, [], compView_0);
        compView_0.create(this._Webpage1_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Webpage1_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Webpage1) && (0 === requestNodeIndex))) {
            return this._Webpage1_0_4.context;
        }
        return notFoundResult;
    };
    _View_Webpage1_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this.debug(0, 0, 0);
        this._Webpage1_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Webpage1_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            this.debug(0, 0, 0);
            if ((this.numberOfChecks === 0)) {
                this._Webpage1_0_4.context.ngAfterViewInit();
            }
        }
    };
    return _View_Webpage1_Host0;
}(import1.DebugAppView));
function viewFactory_Webpage1_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Webpage1_Host === null)) {
        (renderType_Webpage1_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_Webpage1_Host0(viewUtils, parentInjector, declarationEl);
}
exports.Webpage1NgFactory = new import13.ComponentFactory('webpage1', viewFactory_Webpage1_Host0, import0.Webpage1);
var styles_Webpage1 = [];
var nodeDebugInfos_Webpage10 = [
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([import14.RouterOutlet], null, {}),
    new import2.StaticNodeDebugInfo([], null, {})
];
var renderType_Webpage1 = null;
var _View_Webpage10 = (function (_super) {
    __extends(_View_Webpage10, _super);
    function _View_Webpage10(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Webpage10, renderType_Webpage1, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_Webpage10);
        this._expr_18 = import8.UNINITIALIZED;
    }
    _View_Webpage10.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import5.createRenderElement(this.renderer, parentRenderNode, 'h1', import5.EMPTY_INLINE_ARRAY, this.debug(0, 0, 0));
        this._text_1 = this.renderer.createText(this._el_0, 'Webpage1 (sub module)', this.debug(1, 0, 4));
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', this.debug(2, 0, 30));
        this._text_3 = this.renderer.createText(parentRenderNode, '\n   ', this.debug(3, 1, 24));
        this._text_4 = this.renderer.createText(parentRenderNode, '\n      ', this.debug(4, 2, 30));
        this._text_5 = this.renderer.createText(parentRenderNode, '\n         ', this.debug(5, 3, 37));
        this._text_6 = this.renderer.createText(parentRenderNode, '\n          ', this.debug(6, 4, 97));
        this._text_7 = this.renderer.createText(parentRenderNode, '\n          ', this.debug(7, 5, 144));
        this._text_8 = this.renderer.createText(parentRenderNode, '\n      ', this.debug(8, 6, 24));
        this._text_9 = this.renderer.createText(parentRenderNode, '\n   ', this.debug(9, 7, 19));
        this._text_10 = this.renderer.createText(parentRenderNode, '\n', this.debug(10, 8, 16));
        this._text_11 = this.renderer.createText(parentRenderNode, '\n', this.debug(11, 9, 13));
        this._el_12 = import5.createRenderElement(this.renderer, parentRenderNode, 'iframe', new import5.InlineArray4(4, 'height', '100%', 'width', '100%'), this.debug(12, 10, 0));
        this._text_13 = this.renderer.createText(parentRenderNode, '\n\n', this.debug(13, 10, 60));
        this._el_14 = import5.createRenderElement(this.renderer, parentRenderNode, 'router-outlet', import5.EMPTY_INLINE_ARRAY, this.debug(14, 12, 0));
        this._appEl_14 = new import4.AppElement(14, null, this, this._el_14);
        this._RouterOutlet_14_5 = new import15.Wrapper_RouterOutlet(this.parentInjector.get(import16.RouterOutletMap), this._appEl_14.vcRef, this.parentInjector.get(import17.ComponentFactoryResolver), null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n', this.debug(15, 12, 31));
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._text_3,
            this._text_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15
        ], [], []);
        return null;
    };
    _View_Webpage10.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.RouterOutlet) && (14 === requestNodeIndex))) {
            return this._RouterOutlet_14_5.context;
        }
        return notFoundResult;
    };
    _View_Webpage10.prototype.detectChangesInternal = function (throwOnChange) {
        this.debug(14, 12, 0);
        this._RouterOutlet_14_5.detectChangesInInputProps(this, this._el_14, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.debug(12, 10, 35);
        var currVal_18 = this.context.someUrl;
        if (import5.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementProperty(this._el_12, 'src', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.RESOURCE_URL, currVal_18));
            this._expr_18 = currVal_18;
        }
        this._RouterOutlet_14_5.detectChangesInHostProps(this, this._el_14, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_Webpage10.prototype.destroyInternal = function () {
        this.debug(14, 12, 0);
        this._RouterOutlet_14_5.context.ngOnDestroy();
    };
    return _View_Webpage10;
}(import1.DebugAppView));
function viewFactory_Webpage10(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Webpage1 === null)) {
        (renderType_Webpage1 = viewUtils.createRenderComponentType('C:/Development/angular2-webpack2-dotnet-starter/src/app-components/+iframe-module/webpage-1/webpage-1.template.html', 0, import12.ViewEncapsulation.None, styles_Webpage1, {}));
    }
    return new _View_Webpage10(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_Webpage10 = viewFactory_Webpage10;


/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = __webpack_require__(507);
var import1 = __webpack_require__(21);
var import2 = __webpack_require__(19);
var import4 = __webpack_require__(17);
var import5 = __webpack_require__(9);
var import7 = __webpack_require__(16);
var import8 = __webpack_require__(10);
var import9 = __webpack_require__(6);
var import10 = __webpack_require__(8);
var import11 = __webpack_require__(134);
var import12 = __webpack_require__(20);
var import13 = __webpack_require__(18);
var import14 = __webpack_require__(74);
var import15 = __webpack_require__(126);
var import16 = __webpack_require__(73);
var import17 = __webpack_require__(129);
var import18 = __webpack_require__(50);
var Wrapper_Webpage2 = (function () {
    function Wrapper_Webpage2(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.Webpage2(p0, p1, p2);
    }
    Wrapper_Webpage2.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_Webpage2.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_Webpage2;
}());
exports.Wrapper_Webpage2 = Wrapper_Webpage2;
var nodeDebugInfos_Webpage2_Host0 = [new import2.StaticNodeDebugInfo([import0.Webpage2], import0.Webpage2, {})];
var renderType_Webpage2_Host = null;
var _View_Webpage2_Host0 = (function (_super) {
    __extends(_View_Webpage2_Host0, _super);
    function _View_Webpage2_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Webpage2_Host0, renderType_Webpage2_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_Webpage2_Host0);
    }
    _View_Webpage2_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer, 'webpage2', import5.EMPTY_INLINE_ARRAY, rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import4.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Webpage20(this.viewUtils, this.injector(0), this._appEl_0);
        this._Webpage2_0_4 = new Wrapper_Webpage2(this.parentInjector.get(import9.AppState), this.parentInjector.get(import10.Authentication), this.parentInjector.get(import11.DomSanitizer));
        this._appEl_0.initComponent(this._Webpage2_0_4.context, [], compView_0);
        compView_0.create(this._Webpage2_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Webpage2_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Webpage2) && (0 === requestNodeIndex))) {
            return this._Webpage2_0_4.context;
        }
        return notFoundResult;
    };
    _View_Webpage2_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this.debug(0, 0, 0);
        this._Webpage2_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Webpage2_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            this.debug(0, 0, 0);
            if ((this.numberOfChecks === 0)) {
                this._Webpage2_0_4.context.ngAfterViewInit();
            }
        }
    };
    return _View_Webpage2_Host0;
}(import1.DebugAppView));
function viewFactory_Webpage2_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Webpage2_Host === null)) {
        (renderType_Webpage2_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_Webpage2_Host0(viewUtils, parentInjector, declarationEl);
}
exports.Webpage2NgFactory = new import13.ComponentFactory('webpage2', viewFactory_Webpage2_Host0, import0.Webpage2);
var styles_Webpage2 = [];
var nodeDebugInfos_Webpage20 = [
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([import14.RouterOutlet], null, {}),
    new import2.StaticNodeDebugInfo([], null, {})
];
var renderType_Webpage2 = null;
var _View_Webpage20 = (function (_super) {
    __extends(_View_Webpage20, _super);
    function _View_Webpage20(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Webpage20, renderType_Webpage2, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_Webpage20);
        this._expr_18 = import8.UNINITIALIZED;
    }
    _View_Webpage20.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import5.createRenderElement(this.renderer, parentRenderNode, 'h1', import5.EMPTY_INLINE_ARRAY, this.debug(0, 0, 0));
        this._text_1 = this.renderer.createText(this._el_0, 'Webpage2 (sub module)', this.debug(1, 0, 4));
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', this.debug(2, 0, 30));
        this._text_3 = this.renderer.createText(parentRenderNode, '\n   ', this.debug(3, 1, 24));
        this._text_4 = this.renderer.createText(parentRenderNode, '\n      ', this.debug(4, 2, 30));
        this._text_5 = this.renderer.createText(parentRenderNode, '\n         ', this.debug(5, 3, 37));
        this._text_6 = this.renderer.createText(parentRenderNode, '\n          ', this.debug(6, 4, 97));
        this._text_7 = this.renderer.createText(parentRenderNode, '\n          ', this.debug(7, 5, 144));
        this._text_8 = this.renderer.createText(parentRenderNode, '\n      ', this.debug(8, 6, 24));
        this._text_9 = this.renderer.createText(parentRenderNode, '\n   ', this.debug(9, 7, 19));
        this._text_10 = this.renderer.createText(parentRenderNode, '\n', this.debug(10, 8, 16));
        this._text_11 = this.renderer.createText(parentRenderNode, '\n', this.debug(11, 9, 13));
        this._el_12 = import5.createRenderElement(this.renderer, parentRenderNode, 'iframe', new import5.InlineArray4(4, 'height', '100%', 'width', '100%'), this.debug(12, 10, 0));
        this._text_13 = this.renderer.createText(parentRenderNode, '\n\n', this.debug(13, 10, 60));
        this._el_14 = import5.createRenderElement(this.renderer, parentRenderNode, 'router-outlet', import5.EMPTY_INLINE_ARRAY, this.debug(14, 12, 0));
        this._appEl_14 = new import4.AppElement(14, null, this, this._el_14);
        this._RouterOutlet_14_5 = new import15.Wrapper_RouterOutlet(this.parentInjector.get(import16.RouterOutletMap), this._appEl_14.vcRef, this.parentInjector.get(import17.ComponentFactoryResolver), null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n', this.debug(15, 12, 31));
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._text_3,
            this._text_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15
        ], [], []);
        return null;
    };
    _View_Webpage20.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.RouterOutlet) && (14 === requestNodeIndex))) {
            return this._RouterOutlet_14_5.context;
        }
        return notFoundResult;
    };
    _View_Webpage20.prototype.detectChangesInternal = function (throwOnChange) {
        this.debug(14, 12, 0);
        this._RouterOutlet_14_5.detectChangesInInputProps(this, this._el_14, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.debug(12, 10, 35);
        var currVal_18 = this.context.someUrl;
        if (import5.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementProperty(this._el_12, 'src', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.RESOURCE_URL, currVal_18));
            this._expr_18 = currVal_18;
        }
        this._RouterOutlet_14_5.detectChangesInHostProps(this, this._el_14, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_Webpage20.prototype.destroyInternal = function () {
        this.debug(14, 12, 0);
        this._RouterOutlet_14_5.context.ngOnDestroy();
    };
    return _View_Webpage20;
}(import1.DebugAppView));
function viewFactory_Webpage20(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Webpage2 === null)) {
        (renderType_Webpage2 = viewUtils.createRenderComponentType('C:/Development/angular2-webpack2-dotnet-starter/src/app-components/+iframe-module/webpage-2/webpage-2.template.html', 0, import12.ViewEncapsulation.None, styles_Webpage2, {}));
    }
    return new _View_Webpage20(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_Webpage20 = viewFactory_Webpage20;


/***/ }

});
//# sourceMappingURL=../maps/iframe.module.ngfactory.map