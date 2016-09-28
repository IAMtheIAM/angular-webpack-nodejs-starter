/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var import0 = require('@angular/core/src/linker/debug_context');
var import1 = require('../../../../src/app-components/app/app.component');
var import3 = require('@angular/core/src/linker/view');
var import4 = require('@angular/core/src/linker/element');
var import5 = require('@angular/core/src/linker/view_utils');
var import7 = require('@angular/core/src/linker/view_type');
var import8 = require('@angular/core/src/change_detection/change_detection');
var import9 = require('../../../../src/app-components/services/appstate.service');
var import10 = require('../../../../src/app-components/services/authentication.service');
var import11 = require('@angular/core/src/metadata/view');
var import12 = require('@angular/core/src/linker/component_factory');
var import13 = require('@angular/core/src/linker/template_ref');
var import14 = require('@angular/common/src/directives/ng_if');
var import15 = require('@angular/router/src/directives/router_outlet');
var import16 = require('../../../../src/app-components/nav/footer/nav-footer.component');
var import17 = require('@angular/common/src/pipes/json_pipe');
var import18 = require('@angular/router/src/router_outlet_map');
var import19 = require('@angular/core/src/linker/component_factory_resolver');
var import20 = require('../nav/footer/nav-footer.component.ngfactory');
var import21 = require('../../../../src/app-components/nav/header/nav-header.component');
var import22 = require('../nav/header/nav-header.component.ngfactory');
var import23 = require('../../../../src/app-components/nav/sidebar/nav-sidebar.component');
var import24 = require('../nav/sidebar/nav-sidebar.component.ngfactory');
var nodeDebugInfos_AppComponent_Host0 = [new import0.StaticNodeDebugInfo([import1.AppComponent], import1.AppComponent, {})];
var renderType_AppComponent_Host = null;
var _View_AppComponent_Host0 = (function (_super) {
    __extends(_View_AppComponent_Host0, _super);
    function _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent_Host0, renderType_AppComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_AppComponent_Host0);
    }
    _View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('body', rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import4.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppComponent_0_4 = new import1.AppComponent(this.parentInjector.get(import9.AppState), this.parentInjector.get(import10.Authentication));
        this._appEl_0.initComponent(this._AppComponent_0_4, [], compView_0);
        compView_0.create(this._AppComponent_0_4, this.projectableNodes, null);
        this._expr_0 = import8.UNINITIALIZED;
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import1.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_4;
        }
        return notFoundResult;
    };
    _View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._AppComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.debug(0, 0, 0);
        var currVal_0 = this._AppComponent_0_4.appState.state.isAuthenticated;
        if (import5.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementClass(this._el_0, 'authenticated', currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            this.debug(0, 0, 0);
            if ((this.numberOfChecks === 0)) {
                this._AppComponent_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_AppComponent_Host0;
}(import3.DebugAppView));
function viewFactory_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent_Host === null)) {
        (renderType_AppComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.AppComponentNgFactory = new import12.ComponentFactory('body', viewFactory_AppComponent_Host0, import1.AppComponent);
var styles_AppComponent = [];
var nodeDebugInfos_AppComponent0 = [
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([
        import13.TemplateRef,
        import14.NgIf
    ], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([
        import13.TemplateRef,
        import14.NgIf
    ], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([import15.RouterOutlet], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([import16.NavFooterComponent], import16.NavFooterComponent, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {})
];
var renderType_AppComponent = null;
var _View_AppComponent0 = (function (_super) {
    __extends(_View_AppComponent0, _super);
    function _View_AppComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent0, renderType_AppComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_AppComponent0);
    }
    _View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', this.debug(0, 0, 22));
        this._el_1 = this.renderer.createElement(parentRenderNode, 'div', this.debug(1, 1, 0));
        this.renderer.setElementAttribute(this._el_1, 'class', 'app-container');
        this._text_2 = this.renderer.createText(this._el_1, '\n  ', this.debug(2, 1, 27));
        this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1, this.debug(3, 2, 2));
        this._appEl_3 = new import4.AppElement(3, 1, this, this._anchor_3);
        this._TemplateRef_3_5 = new import13.TemplateRef_(this._appEl_3, viewFactory_AppComponent1);
        this._NgIf_3_6 = new import14.NgIf(this._appEl_3.vcRef, this._TemplateRef_3_5);
        this._text_4 = this.renderer.createText(this._el_1, '\n  ', this.debug(4, 2, 83));
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1, this.debug(5, 3, 2));
        this._appEl_5 = new import4.AppElement(5, 1, this, this._anchor_5);
        this._TemplateRef_5_5 = new import13.TemplateRef_(this._appEl_5, viewFactory_AppComponent2);
        this._NgIf_5_6 = new import14.NgIf(this._appEl_5.vcRef, this._TemplateRef_5_5);
        this._text_6 = this.renderer.createText(this._el_1, '\n\n  ', this.debug(6, 3, 68));
        this._el_7 = this.renderer.createElement(this._el_1, 'div', this.debug(7, 5, 2));
        this.renderer.setElementAttribute(this._el_7, 'class', 'content-container');
        this._text_8 = this.renderer.createText(this._el_7, '\n    ', this.debug(8, 5, 33));
        this._el_9 = this.renderer.createElement(this._el_7, 'div', this.debug(9, 6, 4));
        this.renderer.setElementAttribute(this._el_9, 'class', 'content');
        this._text_10 = this.renderer.createText(this._el_9, '\n      ', this.debug(10, 6, 25));
        this._el_11 = this.renderer.createElement(this._el_9, 'router-outlet', this.debug(11, 7, 6));
        this._appEl_11 = new import4.AppElement(11, 9, this, this._el_11);
        this._RouterOutlet_11_5 = new import15.RouterOutlet(this.parentInjector.get(import18.RouterOutletMap), this._appEl_11.vcRef, this.parentInjector.get(import19.ComponentFactoryResolver), null);
        this._text_12 = this.renderer.createText(this._el_9, '\n      ', this.debug(12, 7, 37));
        this._el_13 = this.renderer.createElement(this._el_9, 'pre', this.debug(13, 8, 6));
        this.renderer.setElementAttribute(this._el_13, 'class', 'app-state center-block');
        this._text_14 = this.renderer.createText(this._el_13, '', this.debug(14, 8, 42));
        this._text_15 = this.renderer.createText(this._el_9, '\n    ', this.debug(15, 8, 97));
        this._text_16 = this.renderer.createText(this._el_7, '\n    ', this.debug(16, 9, 10));
        this._el_17 = this.renderer.createElement(this._el_7, 'nav-footer', this.debug(17, 10, 4));
        this._appEl_17 = new import4.AppElement(17, 7, this, this._el_17);
        var compView_17 = import20.viewFactory_NavFooterComponent0(this.viewUtils, this.injector(17), this._appEl_17);
        this._NavFooterComponent_17_4 = new import16.NavFooterComponent(this.parentInjector.get(import9.AppState), this.parentInjector.get(import10.Authentication));
        this._appEl_17.initComponent(this._NavFooterComponent_17_4, [], compView_17);
        compView_17.create(this._NavFooterComponent_17_4, [], null);
        this._text_18 = this.renderer.createText(this._el_7, '\n  ', this.debug(18, 10, 29));
        this._text_19 = this.renderer.createText(this._el_1, '\n', this.debug(19, 11, 8));
        this._text_20 = this.renderer.createText(parentRenderNode, '\n', this.debug(20, 12, 6));
        this._el_21 = this.renderer.createElement(parentRenderNode, 'a', this.debug(21, 13, 0));
        this.renderer.setElementAttribute(this._el_21, 'class', 'hidden');
        this.renderer.setElementAttribute(this._el_21, 'id', 'manualForceChangeDetection');
        this._text_22 = this.renderer.createText(this._el_21, 'Manual Detect Changes', this.debug(22, 13, 82));
        this._text_23 = this.renderer.createText(parentRenderNode, '\n', this.debug(23, 13, 107));
        this._el_24 = this.renderer.createElement(parentRenderNode, 'a', this.debug(24, 14, 0));
        this.renderer.setElementAttribute(this._el_24, 'class', 'hidden');
        this.renderer.setElementAttribute(this._el_24, 'id', 'autoForceChangeDetection');
        this._text_25 = this.renderer.createText(this._el_24, 'Auto Detect Changes', this.debug(25, 14, 78));
        this._text_26 = this.renderer.createText(parentRenderNode, '\n\n', this.debug(26, 14, 101));
        this._expr_0 = import8.UNINITIALIZED;
        this._expr_1 = import8.UNINITIALIZED;
        this.debug(null, null, null);
        this._pipe_json_0 = new import17.JsonPipe();
        this._expr_2 = import8.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_24, 'click', this.eventHandler(this._handle_click_24_0.bind(this)));
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._anchor_3,
            this._text_4,
            this._anchor_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import14.NgIf) && (3 === requestNodeIndex))) {
            return this._NgIf_3_6;
        }
        if (((token === import13.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import14.NgIf) && (5 === requestNodeIndex))) {
            return this._NgIf_5_6;
        }
        if (((token === import15.RouterOutlet) && (11 === requestNodeIndex))) {
            return this._RouterOutlet_11_5;
        }
        if (((token === import16.NavFooterComponent) && (17 === requestNodeIndex))) {
            return this._NavFooterComponent_17_4;
        }
        return notFoundResult;
    };
    _View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import8.ValueUnwrapper();
        this.debug(3, 2, 14);
        var currVal_0 = this.context.appState.state.isAuthenticated;
        if (import5.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgIf_3_6.ngIf = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.debug(5, 3, 15);
        var currVal_1 = this.context.appState.state.isAuthenticated;
        if (import5.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_5_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._NavFooterComponent_17_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.debug(14, 8, 42);
        valUnwrapper.reset();
        var currVal_2 = import5.interpolate(1, 'this.appState.state = ', valUnwrapper.unwrap(this._pipe_json_0.transform(this.context.appState.state)), '');
        if ((valUnwrapper.hasWrappedValue || import5.checkBinding(throwOnChange, this._expr_2, currVal_2))) {
            this.renderer.setText(this._text_14, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AppComponent0.prototype.destroyInternal = function () {
        this.debug(11, 7, 6);
        this._RouterOutlet_11_5.ngOnDestroy();
    };
    _View_AppComponent0.prototype._handle_click_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.debug(21, 13, 50);
        var pd_0 = (this.context.manualDetectChanges() !== false);
        return (true && pd_0);
    };
    _View_AppComponent0.prototype._handle_click_24_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.debug(24, 14, 48);
        var pd_0 = (this.context.autoDetectChanges() !== false);
        return (true && pd_0);
    };
    return _View_AppComponent0;
}(import3.DebugAppView));
function viewFactory_AppComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent === null)) {
        (renderType_AppComponent = viewUtils.createRenderComponentType('C:/Source/Atlas/src/app-components/app/app.template.html', 0, import11.ViewEncapsulation.None, styles_AppComponent, {}));
    }
    return new _View_AppComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_AppComponent0 = viewFactory_AppComponent0;
var nodeDebugInfos_AppComponent1 = [new import0.StaticNodeDebugInfo([import21.NavHeaderComponent], import21.NavHeaderComponent, {})];
var _View_AppComponent1 = (function (_super) {
    __extends(_View_AppComponent1, _super);
    function _View_AppComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent1, renderType_AppComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_AppComponent1);
    }
    _View_AppComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'nav-header', this.debug(0, 2, 2));
        this.renderer.setElementAttribute(this._el_0, 'class', 'clearfix');
        this._appEl_0 = new import4.AppElement(0, null, this, this._el_0);
        var compView_0 = import22.viewFactory_NavHeaderComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._NavHeaderComponent_0_4 = new import21.NavHeaderComponent(this.parent.parentInjector.get(import9.AppState));
        this._appEl_0.initComponent(this._NavHeaderComponent_0_4, [], compView_0);
        compView_0.create(this._NavHeaderComponent_0_4, [], null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    _View_AppComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.NavHeaderComponent) && (0 === requestNodeIndex))) {
            return this._NavHeaderComponent_0_4;
        }
        return notFoundResult;
    };
    _View_AppComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._NavHeaderComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AppComponent1;
}(import3.DebugAppView));
function viewFactory_AppComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_AppComponent1(viewUtils, parentInjector, declarationEl);
}
var nodeDebugInfos_AppComponent2 = [new import0.StaticNodeDebugInfo([import23.NavSidebarComponent], import23.NavSidebarComponent, {})];
var _View_AppComponent2 = (function (_super) {
    __extends(_View_AppComponent2, _super);
    function _View_AppComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent2, renderType_AppComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_AppComponent2);
    }
    _View_AppComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'nav-sidebar', this.debug(0, 3, 2));
        this._appEl_0 = new import4.AppElement(0, null, this, this._el_0);
        var compView_0 = import24.viewFactory_NavSidebarComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._NavSidebarComponent_0_4 = new import23.NavSidebarComponent(this.parent.parentInjector.get(import9.AppState));
        this._appEl_0.initComponent(this._NavSidebarComponent_0_4, [], compView_0);
        compView_0.create(this._NavSidebarComponent_0_4, [], null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    _View_AppComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.NavSidebarComponent) && (0 === requestNodeIndex))) {
            return this._NavSidebarComponent_0_4;
        }
        return notFoundResult;
    };
    _View_AppComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._NavSidebarComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AppComponent2;
}(import3.DebugAppView));
function viewFactory_AppComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_AppComponent2(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=app.component.ngfactory.js.map