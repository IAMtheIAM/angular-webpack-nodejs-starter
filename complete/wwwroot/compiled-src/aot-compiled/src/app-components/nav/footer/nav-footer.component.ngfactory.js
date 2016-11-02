/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var import0 = require('../../../../../src/app-components/nav/footer/nav-footer.component');
var import1 = require('@angular/core/src/linker/view');
var import2 = require('@angular/core/src/linker/debug_context');
var import4 = require('@angular/core/src/linker/element');
var import5 = require('@angular/core/src/linker/view_utils');
var import7 = require('@angular/core/src/linker/view_type');
var import8 = require('@angular/core/src/change_detection/change_detection');
var import9 = require('../../../../../src/app-components/services/appstate.service');
var import10 = require('../../../../../src/app-components/services/authentication.service');
var import11 = require('@angular/core/src/metadata/view');
var import12 = require('@angular/core/src/linker/component_factory');
var import13 = require('@angular/core/src/linker/template_ref');
var import14 = require('@angular/common/src/directives/ng_if');
var import15 = require('../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory');
var Wrapper_NavFooterComponent = (function () {
    function Wrapper_NavFooterComponent(p0, p1) {
        this.changed = false;
        this.context = new import0.NavFooterComponent(p0, p1);
    }
    Wrapper_NavFooterComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_NavFooterComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_NavFooterComponent;
}());
exports.Wrapper_NavFooterComponent = Wrapper_NavFooterComponent;
var nodeDebugInfos_NavFooterComponent_Host0 = [new import2.StaticNodeDebugInfo([import0.NavFooterComponent], import0.NavFooterComponent, {})];
var renderType_NavFooterComponent_Host = null;
var _View_NavFooterComponent_Host0 = (function (_super) {
    __extends(_View_NavFooterComponent_Host0, _super);
    function _View_NavFooterComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NavFooterComponent_Host0, renderType_NavFooterComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_NavFooterComponent_Host0);
    }
    _View_NavFooterComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer, 'nav-footer', import5.EMPTY_INLINE_ARRAY, rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import4.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_NavFooterComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._NavFooterComponent_0_4 = new Wrapper_NavFooterComponent(this.parentInjector.get(import9.AppState), this.parentInjector.get(import10.Authentication));
        this._appEl_0.initComponent(this._NavFooterComponent_0_4.context, [], compView_0);
        compView_0.create(this._NavFooterComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_NavFooterComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.NavFooterComponent) && (0 === requestNodeIndex))) {
            return this._NavFooterComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_NavFooterComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this.debug(0, 0, 0);
        this._NavFooterComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NavFooterComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NavFooterComponent_Host0;
}(import1.DebugAppView));
function viewFactory_NavFooterComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NavFooterComponent_Host === null)) {
        (renderType_NavFooterComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_NavFooterComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.NavFooterComponentNgFactory = new import12.ComponentFactory('nav-footer', viewFactory_NavFooterComponent_Host0, import0.NavFooterComponent);
var styles_NavFooterComponent = [];
var nodeDebugInfos_NavFooterComponent0 = [
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([
        import13.TemplateRef,
        import14.NgIf
    ], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {})
];
var renderType_NavFooterComponent = null;
var _View_NavFooterComponent0 = (function (_super) {
    __extends(_View_NavFooterComponent0, _super);
    function _View_NavFooterComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NavFooterComponent0, renderType_NavFooterComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_NavFooterComponent0);
    }
    _View_NavFooterComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', this.debug(0, 0, 48));
        this._el_1 = import5.createRenderElement(this.renderer, parentRenderNode, 'div', new import5.InlineArray2(2, 'class', 'text-align-center'), this.debug(1, 1, 0));
        this._text_2 = this.renderer.createText(this._el_1, '\n   ', this.debug(2, 1, 31));
        this._el_3 = import5.createRenderElement(this.renderer, this._el_1, 'p', new import5.InlineArray2(2, 'class', 'copyright'), this.debug(3, 2, 3));
        this._text_4 = this.renderer.createText(this._el_3, 'Copyright © 2016 IAMtheIAM. All rights reserved.', this.debug(4, 2, 24));
        this._text_5 = this.renderer.createText(this._el_1, '\n   ', this.debug(5, 2, 81));
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_1, this.debug(6, 3, 3));
        this._appEl_6 = new import4.AppElement(6, 1, this, this._anchor_6);
        this._TemplateRef_6_5 = new import13.TemplateRef_(this._appEl_6, viewFactory_NavFooterComponent1);
        this._NgIf_6_6 = new import15.Wrapper_NgIf(this._appEl_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_1, '\n', this.debug(7, 4, 11));
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', this.debug(8, 5, 6));
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8
        ], [], []);
        return null;
    };
    _View_NavFooterComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import14.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    };
    _View_NavFooterComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this.debug(6, 3, 6);
        var currVal_6_0_0 = this.context.appState.state.isAuthenticated;
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.detectChangesInInputProps(this, this._anchor_6, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NavFooterComponent0;
}(import1.DebugAppView));
function viewFactory_NavFooterComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NavFooterComponent === null)) {
        (renderType_NavFooterComponent = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/src/app-components/nav/footer/nav-footer.template.html', 0, import11.ViewEncapsulation.None, styles_NavFooterComponent, {}));
    }
    return new _View_NavFooterComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_NavFooterComponent0 = viewFactory_NavFooterComponent0;
var nodeDebugInfos_NavFooterComponent1 = [
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {})
];
var _View_NavFooterComponent1 = (function (_super) {
    __extends(_View_NavFooterComponent1, _super);
    function _View_NavFooterComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NavFooterComponent1, renderType_NavFooterComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_NavFooterComponent1);
    }
    _View_NavFooterComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import5.createRenderElement(this.renderer, null, 'p', import5.EMPTY_INLINE_ARRAY, this.debug(0, 3, 3));
        this._el_1 = import5.createRenderElement(this.renderer, this._el_0, 'a', new import5.InlineArray4(4, 'class', 'btn btn-primary btn-lg', 'role', 'button'), this.debug(1, 3, 45));
        this._text_2 = this.renderer.createText(this._el_1, 'Logout\n   ', this.debug(2, 3, 112));
        var disposable_0 = this.renderer.listen(this._el_1, 'click', this.eventHandler(this._handle_click_1_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._el_1,
            this._text_2
        ], [disposable_0], []);
        return null;
    };
    _View_NavFooterComponent1.prototype._handle_click_1_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.debug(1, 3, 93);
        var pd_1_0 = (this.parent.context.logout() !== false);
        return (true && pd_1_0);
    };
    return _View_NavFooterComponent1;
}(import1.DebugAppView));
function viewFactory_NavFooterComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_NavFooterComponent1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=nav-footer.component.ngfactory.js.map