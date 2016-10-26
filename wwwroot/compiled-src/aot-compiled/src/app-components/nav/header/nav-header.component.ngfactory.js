/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var import0 = require('@angular/core/src/linker/debug_context');
var import1 = require('../../../../../src/app-components/nav/header/nav-header.component');
var import3 = require('@angular/core/src/linker/view');
var import4 = require('@angular/core/src/linker/element');
var import5 = require('@angular/core/src/linker/view_utils');
var import7 = require('@angular/core/src/linker/view_type');
var import8 = require('@angular/core/src/change_detection/change_detection');
var import9 = require('../../../../../src/app-components/services/appstate.service');
var import10 = require('@angular/core/src/metadata/view');
var import11 = require('@angular/core/src/linker/component_factory');
var import12 = require('@angular/core/src/security');
var nodeDebugInfos_NavHeaderComponent_Host0 = [new import0.StaticNodeDebugInfo([import1.NavHeaderComponent], import1.NavHeaderComponent, {})];
var renderType_NavHeaderComponent_Host = null;
var _View_NavHeaderComponent_Host0 = (function (_super) {
    __extends(_View_NavHeaderComponent_Host0, _super);
    function _View_NavHeaderComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NavHeaderComponent_Host0, renderType_NavHeaderComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_NavHeaderComponent_Host0);
    }
    _View_NavHeaderComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('nav-header', rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import4.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_NavHeaderComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._NavHeaderComponent_0_4 = new import1.NavHeaderComponent(this.parentInjector.get(import9.AppState));
        this._appEl_0.initComponent(this._NavHeaderComponent_0_4, [], compView_0);
        compView_0.create(this._NavHeaderComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_NavHeaderComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import1.NavHeaderComponent) && (0 === requestNodeIndex))) {
            return this._NavHeaderComponent_0_4;
        }
        return notFoundResult;
    };
    _View_NavHeaderComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._NavHeaderComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NavHeaderComponent_Host0;
}(import3.DebugAppView));
function viewFactory_NavHeaderComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NavHeaderComponent_Host === null)) {
        (renderType_NavHeaderComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_NavHeaderComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.NavHeaderComponentNgFactory = new import11.ComponentFactory('nav-header', viewFactory_NavHeaderComponent_Host0, import1.NavHeaderComponent);
var styles_NavHeaderComponent = [];
var nodeDebugInfos_NavHeaderComponent0 = [
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
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
var renderType_NavHeaderComponent = null;
var _View_NavHeaderComponent0 = (function (_super) {
    __extends(_View_NavHeaderComponent0, _super);
    function _View_NavHeaderComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NavHeaderComponent0, renderType_NavHeaderComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_NavHeaderComponent0);
    }
    _View_NavHeaderComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', this.debug(0, 0, 0));
        this.renderer.setElementAttribute(this._el_0, 'class', 'navbar-fixed');
        this._text_1 = this.renderer.createText(this._el_0, '\n   ', this.debug(1, 0, 26));
        this._text_2 = this.renderer.createText(this._el_0, '\n   ', this.debug(2, 1, 30));
        this._el_3 = this.renderer.createElement(this._el_0, 'ul', this.debug(3, 2, 3));
        this.renderer.setElementAttribute(this._el_3, 'class', 'dropdown-content');
        this.renderer.setElementAttribute(this._el_3, 'id', 'dropdown1');
        this._text_4 = this.renderer.createText(this._el_3, '\n      ', this.debug(4, 2, 47));
        this._el_5 = this.renderer.createElement(this._el_3, 'li', this.debug(5, 3, 6));
        this._el_6 = this.renderer.createElement(this._el_5, 'a', this.debug(6, 3, 10));
        this._text_7 = this.renderer.createText(this._el_6, 'one', this.debug(7, 3, 13));
        this._text_8 = this.renderer.createText(this._el_3, '\n      ', this.debug(8, 3, 25));
        this._el_9 = this.renderer.createElement(this._el_3, 'li', this.debug(9, 4, 6));
        this._el_10 = this.renderer.createElement(this._el_9, 'a', this.debug(10, 4, 10));
        this._text_11 = this.renderer.createText(this._el_10, 'two', this.debug(11, 4, 13));
        this._text_12 = this.renderer.createText(this._el_3, '\n      ', this.debug(12, 4, 25));
        this._el_13 = this.renderer.createElement(this._el_3, 'li', this.debug(13, 5, 6));
        this.renderer.setElementAttribute(this._el_13, 'class', 'divider');
        this._text_14 = this.renderer.createText(this._el_3, '\n      ', this.debug(14, 5, 31));
        this._el_15 = this.renderer.createElement(this._el_3, 'li', this.debug(15, 6, 6));
        this._el_16 = this.renderer.createElement(this._el_15, 'a', this.debug(16, 6, 10));
        this._text_17 = this.renderer.createText(this._el_16, 'three', this.debug(17, 6, 13));
        this._text_18 = this.renderer.createText(this._el_3, '\n   ', this.debug(18, 6, 27));
        this._text_19 = this.renderer.createText(this._el_0, '\n   ', this.debug(19, 7, 8));
        this._el_20 = this.renderer.createElement(this._el_0, 'nav', this.debug(20, 8, 3));
        this._text_21 = this.renderer.createText(this._el_20, '\n      ', this.debug(21, 8, 8));
        this._el_22 = this.renderer.createElement(this._el_20, 'div', this.debug(22, 9, 6));
        this.renderer.setElementAttribute(this._el_22, 'class', 'nav-wrapper');
        this._text_23 = this.renderer.createText(this._el_22, '\n         ', this.debug(23, 9, 31));
        this._el_24 = this.renderer.createElement(this._el_22, 'ul', this.debug(24, 10, 9));
        this.renderer.setElementAttribute(this._el_24, 'class', 'hide-on-med-and-down');
        this._text_25 = this.renderer.createText(this._el_24, '\n            ', this.debug(25, 10, 42));
        this._el_26 = this.renderer.createElement(this._el_24, 'li', this.debug(26, 11, 12));
        this.renderer.setElementAttribute(this._el_26, 'class', 'brand-logo');
        this._el_27 = this.renderer.createElement(this._el_26, 'a', this.debug(27, 11, 35));
        this._text_28 = this.renderer.createText(this._el_27, 'IAMtheIAM', this.debug(28, 11, 38));
        this._text_29 = this.renderer.createText(this._el_26, '\n            ', this.debug(29, 11, 51));
        this._text_30 = this.renderer.createText(this._el_24, '\n            ', this.debug(30, 12, 17));
        this._el_31 = this.renderer.createElement(this._el_24, 'li', this.debug(31, 13, 12));
        this.renderer.setElementAttribute(this._el_31, 'class', 'search');
        this._text_32 = this.renderer.createText(this._el_31, '\n               ', this.debug(32, 13, 31));
        this._el_33 = this.renderer.createElement(this._el_31, 'div', this.debug(33, 14, 15));
        this.renderer.setElementAttribute(this._el_33, 'class', 'search-wrapper');
        this._text_34 = this.renderer.createText(this._el_33, '\n                  ', this.debug(34, 14, 43));
        this._el_35 = this.renderer.createElement(this._el_33, 'input', this.debug(35, 15, 18));
        this.renderer.setElementAttribute(this._el_35, 'class', 'search-sidenav');
        this.renderer.setElementAttribute(this._el_35, 'id', 'search-sidenav');
        this.renderer.setElementAttribute(this._el_35, 'placeholder', 'Search');
        this.renderer.setElementAttribute(this._el_35, 'type', 'text');
        this._el_36 = this.renderer.createElement(this._el_33, 'i', this.debug(36, 15, 101));
        this.renderer.setElementAttribute(this._el_36, 'class', 'material-icons align-right');
        this._text_37 = this.renderer.createText(this._el_36, 'search', this.debug(37, 16, 53));
        this._text_38 = this.renderer.createText(this._el_33, '\n                  ', this.debug(38, 16, 63));
        this._el_39 = this.renderer.createElement(this._el_33, 'div', this.debug(39, 17, 18));
        this.renderer.setElementAttribute(this._el_39, 'class', 'search-results');
        this._text_40 = this.renderer.createText(this._el_33, '\n               ', this.debug(40, 17, 52));
        this._text_41 = this.renderer.createText(this._el_31, '\n            ', this.debug(41, 18, 21));
        this._text_42 = this.renderer.createText(this._el_24, '\n         ', this.debug(42, 19, 17));
        this._text_43 = this.renderer.createText(this._el_22, '\n         ', this.debug(43, 20, 14));
        this._el_44 = this.renderer.createElement(this._el_22, 'ul', this.debug(44, 21, 9));
        this.renderer.setElementAttribute(this._el_44, 'class', 'right hide-on-med-and-down');
        this._text_45 = this.renderer.createText(this._el_44, '\n\n            ', this.debug(45, 21, 48));
        this._el_46 = this.renderer.createElement(this._el_44, 'li', this.debug(46, 23, 12));
        this.renderer.setElementAttribute(this._el_46, 'class', 'notifications-alert');
        this._el_47 = this.renderer.createElement(this._el_46, 'a', this.debug(47, 23, 44));
        this._el_48 = this.renderer.createElement(this._el_47, 'img', this.debug(48, 23, 47));
        this.renderer.setElementAttribute(this._el_48, 'alt', '');
        this.renderer.setElementAttribute(this._el_48, 'src', '/assets/icons/alert-notifications.png');
        this._text_49 = this.renderer.createText(this._el_44, '\n            ', this.debug(49, 23, 112));
        this._el_50 = this.renderer.createElement(this._el_44, 'li', this.debug(50, 24, 12));
        this.renderer.setElementAttribute(this._el_50, 'class', 'profile-picture');
        this._el_51 = this.renderer.createElement(this._el_50, 'a', this.debug(51, 24, 40));
        this.renderer.setElementAttribute(this._el_51, 'class', 'dropdown-button');
        this.renderer.setElementAttribute(this._el_51, 'data-activates', 'dropdown1');
        this.renderer.setElementAttribute(this._el_51, 'href', '');
        this._el_52 = this.renderer.createElement(this._el_51, 'img', this.debug(52, 24, 102));
        this.renderer.setElementAttribute(this._el_52, 'alt', '');
        this.renderer.setElementAttribute(this._el_52, 'src', '/assets/icons/profile-picture.png');
        this._text_53 = this.renderer.createText(this._el_51, 'Rose Mendez', this.debug(53, 25, 62));
        this._el_54 = this.renderer.createElement(this._el_51, 'i', this.debug(54, 25, 73));
        this.renderer.setElementAttribute(this._el_54, 'class', 'material-icons right');
        this._text_55 = this.renderer.createText(this._el_54, 'arrow_drop_down', this.debug(55, 26, 44));
        this._text_56 = this.renderer.createText(this._el_50, '\n            ', this.debug(56, 26, 67));
        this._text_57 = this.renderer.createText(this._el_44, '\n            ', this.debug(57, 27, 17));
        this._text_58 = this.renderer.createText(this._el_44, '\n            ', this.debug(58, 28, 37));
        this._el_59 = this.renderer.createElement(this._el_44, 'li', this.debug(59, 29, 12));
        this._text_60 = this.renderer.createText(this._el_59, '\n            ', this.debug(60, 29, 16));
        this._text_61 = this.renderer.createText(this._el_44, '\n            ', this.debug(61, 30, 17));
        this._el_62 = this.renderer.createElement(this._el_44, 'li', this.debug(62, 31, 12));
        this._text_63 = this.renderer.createText(this._el_62, '\n               ', this.debug(63, 31, 16));
        this._el_64 = this.renderer.createElement(this._el_62, 'a', this.debug(64, 32, 15));
        this._el_65 = this.renderer.createElement(this._el_64, 'img', this.debug(65, 32, 47));
        this.renderer.setElementAttribute(this._el_65, 'class', 'not-fullscreen');
        this.renderer.setElementAttribute(this._el_65, 'height', '30');
        this.renderer.setElementAttribute(this._el_65, 'id', 'fullScreenTrigger');
        this.renderer.setElementAttribute(this._el_65, 'width', '30');
        this._text_66 = this.renderer.createText(this._el_62, '\n            ', this.debug(66, 33, 70));
        this._text_67 = this.renderer.createText(this._el_44, '\n         ', this.debug(67, 34, 17));
        this._text_68 = this.renderer.createText(this._el_22, '\n      ', this.debug(68, 35, 14));
        this._text_69 = this.renderer.createText(this._el_20, '\n   ', this.debug(69, 36, 12));
        this._text_70 = this.renderer.createText(this._el_0, '\n', this.debug(70, 37, 9));
        this._text_71 = this.renderer.createText(parentRenderNode, '\n\n', this.debug(71, 38, 6));
        var disposable_0 = this.renderer.listen(this._el_64, 'click', this.eventHandler(this._handle_click_64_0.bind(this)));
        this._expr_1 = import8.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._el_46,
            this._el_47,
            this._el_48,
            this._text_49,
            this._el_50,
            this._el_51,
            this._el_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._el_64,
            this._el_65,
            this._text_66,
            this._text_67,
            this._text_68,
            this._text_69,
            this._text_70,
            this._text_71
        ], [disposable_0], []);
        return null;
    };
    _View_NavHeaderComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        this.debug(65, 32, 52);
        var currVal_1 = this.context.fullscreen.activeIcon;
        if (import5.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_65, 'src', this.viewUtils.sanitizer.sanitize(import12.SecurityContext.URL, currVal_1));
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_NavHeaderComponent0.prototype._handle_click_64_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.debug(64, 32, 18);
        var pd_0 = (this.context.toggleFullScreen() !== false);
        return (true && pd_0);
    };
    return _View_NavHeaderComponent0;
}(import3.DebugAppView));
function viewFactory_NavHeaderComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NavHeaderComponent === null)) {
        (renderType_NavHeaderComponent = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-aot-webpack2-typescript-dotnet/master/src/app-components/nav/header/nav-header.template.html', 0, import10.ViewEncapsulation.None, styles_NavHeaderComponent, {}));
    }
    return new _View_NavHeaderComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_NavHeaderComponent0 = viewFactory_NavHeaderComponent0;
//# sourceMappingURL=nav-header.component.ngfactory.js.map