/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var import0 = require('@angular/core/src/linker/debug_context');
var import1 = require('../../../../src/app-components/login/login.component');
var import3 = require('@angular/core/src/linker/view');
var import4 = require('@angular/core/src/linker/element');
var import5 = require('@angular/core/src/linker/view_utils');
var import7 = require('@angular/core/src/linker/view_type');
var import8 = require('@angular/core/src/change_detection/change_detection');
var import9 = require('../../../../src/app-components/services/appstate.service');
var import10 = require('../../../../src/app-components/services/authentication.service');
var import11 = require('../../../../src/app-components/services/utility.service');
var import12 = require('@angular/router/src/router');
var import13 = require('@angular/core/src/metadata/view');
var import14 = require('@angular/core/src/linker/component_factory');
var import15 = require('@angular/forms/src/directives/ng_form');
var import16 = require('@angular/forms/src/directives/control_container');
var import17 = require('@angular/forms/src/directives/ng_control_status');
var nodeDebugInfos_LoginComponent_Host0 = [new import0.StaticNodeDebugInfo([import1.LoginComponent], import1.LoginComponent, {})];
var renderType_LoginComponent_Host = null;
var _View_LoginComponent_Host0 = (function (_super) {
    __extends(_View_LoginComponent_Host0, _super);
    function _View_LoginComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LoginComponent_Host0, renderType_LoginComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_LoginComponent_Host0);
    }
    _View_LoginComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('login', rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import4.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_LoginComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._LoginComponent_0_4 = new import1.LoginComponent(this.parentInjector.get(import9.AppState), this.parentInjector.get(import10.Authentication), this.parentInjector.get(import11.UtilityService), this.parentInjector.get(import12.Router));
        this._appEl_0.initComponent(this._LoginComponent_0_4, [], compView_0);
        compView_0.create(this._LoginComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_LoginComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import1.LoginComponent) && (0 === requestNodeIndex))) {
            return this._LoginComponent_0_4;
        }
        return notFoundResult;
    };
    _View_LoginComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._LoginComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_LoginComponent_Host0;
}(import3.DebugAppView));
function viewFactory_LoginComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LoginComponent_Host === null)) {
        (renderType_LoginComponent_Host = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, [], {}));
    }
    return new _View_LoginComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.LoginComponentNgFactory = new import14.ComponentFactory('login', viewFactory_LoginComponent_Host0, import1.LoginComponent);
var styles_LoginComponent = [];
var nodeDebugInfos_LoginComponent0 = [
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
    new import0.StaticNodeDebugInfo([
        import15.NgForm,
        import16.ControlContainer,
        import17.NgControlStatusGroup
    ], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, { username: null }),
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
    new import0.StaticNodeDebugInfo([], null, { password: null }),
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
var renderType_LoginComponent = null;
var _View_LoginComponent0 = (function (_super) {
    __extends(_View_LoginComponent0, _super);
    function _View_LoginComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LoginComponent0, renderType_LoginComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_LoginComponent0);
    }
    _View_LoginComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', this.debug(0, 0, 0));
        this.renderer.setElementAttribute(this._el_0, 'class', 'card-container login-form');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', this.debug(1, 0, 39));
        this._el_2 = this.renderer.createElement(this._el_0, 'div', this.debug(2, 1, 4));
        this.renderer.setElementAttribute(this._el_2, 'class', 'welcome-message text-align-center');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', this.debug(3, 1, 51));
        this._el_4 = this.renderer.createElement(this._el_2, 'h5', this.debug(4, 2, 8));
        this._text_5 = this.renderer.createText(this._el_4, 'Angular2 Webpack2 DotNET Starter', this.debug(5, 2, 12));
        this._text_6 = this.renderer.createText(this._el_2, '\n        ', this.debug(6, 2, 49));
        this._el_7 = this.renderer.createElement(this._el_2, 'h3', this.debug(7, 3, 8));
        this._text_8 = this.renderer.createText(this._el_7, 'By IAMtheIAM', this.debug(8, 3, 12));
        this._text_9 = this.renderer.createText(this._el_2, '\n    ', this.debug(9, 3, 29));
        this._text_10 = this.renderer.createText(this._el_0, '\n\n    ', this.debug(10, 4, 10));
        this._text_11 = this.renderer.createText(this._el_0, '\n    ', this.debug(11, 6, 50));
        this._text_12 = this.renderer.createText(this._el_0, '\n    ', this.debug(12, 25, 17));
        this._text_13 = this.renderer.createText(this._el_0, '\n    ', this.debug(13, 26, 30));
        this._el_14 = this.renderer.createElement(this._el_0, 'div', this.debug(14, 27, 4));
        this.renderer.setElementAttribute(this._el_14, 'class', 'card');
        this._text_15 = this.renderer.createText(this._el_14, '\n        ', this.debug(15, 27, 22));
        this._el_16 = this.renderer.createElement(this._el_14, 'div', this.debug(16, 28, 8));
        this.renderer.setElementAttribute(this._el_16, 'class', 'card-content');
        this._text_17 = this.renderer.createText(this._el_16, '\n            ', this.debug(17, 28, 34));
        this._el_18 = this.renderer.createElement(this._el_16, 'form', this.debug(18, 29, 12));
        this.renderer.setElementAttribute(this._el_18, 'role', 'form');
        this._NgForm_18_3 = new import15.NgForm(null, null);
        this._ControlContainer_18_4 = this._NgForm_18_3;
        this._NgControlStatusGroup_18_5 = new import17.NgControlStatusGroup(this._ControlContainer_18_4);
        this._text_19 = this.renderer.createText(this._el_18, '\n                ', this.debug(19, 29, 87));
        this._el_20 = this.renderer.createElement(this._el_18, 'div', this.debug(20, 30, 16));
        this.renderer.setElementAttribute(this._el_20, 'class', 'row');
        this._text_21 = this.renderer.createText(this._el_20, '\n                    ', this.debug(21, 30, 33));
        this._el_22 = this.renderer.createElement(this._el_20, 'div', this.debug(22, 31, 20));
        this.renderer.setElementAttribute(this._el_22, 'class', 'input-field');
        this._text_23 = this.renderer.createText(this._el_22, '\n                        ', this.debug(23, 31, 45));
        this._el_24 = this.renderer.createElement(this._el_22, 'i', this.debug(24, 32, 24));
        this.renderer.setElementAttribute(this._el_24, 'class', 'material-icons suffix');
        this._text_25 = this.renderer.createText(this._el_24, 'account_circle', this.debug(25, 32, 57));
        this._text_26 = this.renderer.createText(this._el_22, '\n                        ', this.debug(26, 32, 75));
        this._el_27 = this.renderer.createElement(this._el_22, 'input', this.debug(27, 33, 24));
        this.renderer.setElementAttribute(this._el_27, 'class', '');
        this.renderer.setElementAttribute(this._el_27, 'id', 'username1');
        this.renderer.setElementAttribute(this._el_27, 'type', 'text');
        this.renderer.setElementAttribute(this._el_27, 'value', 'admin');
        this._text_28 = this.renderer.createText(this._el_22, '\n                        ', this.debug(28, 33, 91));
        this._el_29 = this.renderer.createElement(this._el_22, 'label', this.debug(29, 34, 24));
        this.renderer.setElementAttribute(this._el_29, 'for', 'username1');
        this._text_30 = this.renderer.createText(this._el_29, 'Username', this.debug(30, 34, 47));
        this._text_31 = this.renderer.createText(this._el_22, '\n\n                    ', this.debug(31, 34, 63));
        this._text_32 = this.renderer.createText(this._el_20, '\n                ', this.debug(32, 36, 26));
        this._text_33 = this.renderer.createText(this._el_18, '\n                ', this.debug(33, 37, 22));
        this._el_34 = this.renderer.createElement(this._el_18, 'div', this.debug(34, 38, 16));
        this.renderer.setElementAttribute(this._el_34, 'class', 'row');
        this._text_35 = this.renderer.createText(this._el_34, '\n                    ', this.debug(35, 38, 33));
        this._el_36 = this.renderer.createElement(this._el_34, 'div', this.debug(36, 39, 20));
        this.renderer.setElementAttribute(this._el_36, 'class', 'input-field');
        this._text_37 = this.renderer.createText(this._el_36, '\n                        ', this.debug(37, 39, 45));
        this._el_38 = this.renderer.createElement(this._el_36, 'i', this.debug(38, 40, 24));
        this.renderer.setElementAttribute(this._el_38, 'class', 'material-icons suffix');
        this._text_39 = this.renderer.createText(this._el_38, 'lock_outline', this.debug(39, 40, 57));
        this._text_40 = this.renderer.createText(this._el_36, '\n                        ', this.debug(40, 40, 73));
        this._el_41 = this.renderer.createElement(this._el_36, 'input', this.debug(41, 41, 24));
        this.renderer.setElementAttribute(this._el_41, 'class', '');
        this.renderer.setElementAttribute(this._el_41, 'id', 'password1');
        this.renderer.setElementAttribute(this._el_41, 'type', 'password');
        this._text_42 = this.renderer.createText(this._el_36, '\n                        ', this.debug(42, 41, 81));
        this._el_43 = this.renderer.createElement(this._el_36, 'label', this.debug(43, 42, 24));
        this.renderer.setElementAttribute(this._el_43, 'for', 'password1');
        this._text_44 = this.renderer.createText(this._el_43, 'Password', this.debug(44, 42, 47));
        this._text_45 = this.renderer.createText(this._el_36, '\n                    ', this.debug(45, 42, 63));
        this._text_46 = this.renderer.createText(this._el_34, '\n                ', this.debug(46, 43, 26));
        this._text_47 = this.renderer.createText(this._el_18, '\n\n                ', this.debug(47, 44, 22));
        this._el_48 = this.renderer.createElement(this._el_18, 'div', this.debug(48, 46, 16));
        this.renderer.setElementAttribute(this._el_48, 'class', 'row');
        this._text_49 = this.renderer.createText(this._el_48, '\n                    ', this.debug(49, 46, 33));
        this._el_50 = this.renderer.createElement(this._el_48, 'div', this.debug(50, 47, 20));
        this.renderer.setElementAttribute(this._el_50, 'class', 'input-field');
        this._text_51 = this.renderer.createText(this._el_50, '\n                        ', this.debug(51, 47, 45));
        this._el_52 = this.renderer.createElement(this._el_50, 'input', this.debug(52, 48, 24));
        this.renderer.setElementAttribute(this._el_52, 'class', 'rememberMe');
        this.renderer.setElementAttribute(this._el_52, 'id', 'rememberMe1');
        this.renderer.setElementAttribute(this._el_52, 'type', 'checkbox');
        this.renderer.setElementAttribute(this._el_52, 'value', '');
        this._text_53 = this.renderer.createText(this._el_50, '\n\n                        ', this.debug(53, 48, 145));
        this._el_54 = this.renderer.createElement(this._el_50, 'input', this.debug(54, 50, 24));
        this.renderer.setElementAttribute(this._el_54, 'class', 'filled-in rememberMe');
        this.renderer.setElementAttribute(this._el_54, 'id', 'filled-in-box1');
        this.renderer.setElementAttribute(this._el_54, 'type', 'checkbox');
        this._text_55 = this.renderer.createText(this._el_50, '\n                        ', this.debug(55, 50, 98));
        this._el_56 = this.renderer.createElement(this._el_50, 'label', this.debug(56, 51, 24));
        this.renderer.setElementAttribute(this._el_56, 'for', 'filled-in-box1');
        this._text_57 = this.renderer.createText(this._el_56, 'Remember me', this.debug(57, 51, 52));
        this._text_58 = this.renderer.createText(this._el_50, '\n\n                        ', this.debug(58, 51, 71));
        this._el_59 = this.renderer.createElement(this._el_50, 'span', this.debug(59, 53, 24));
        this.renderer.setElementAttribute(this._el_59, 'class', 'float-right');
        this._el_60 = this.renderer.createElement(this._el_59, 'a', this.debug(60, 53, 50));
        this.renderer.setElementAttribute(this._el_60, 'href', '/forgotpassword');
        this._text_61 = this.renderer.createText(this._el_60, 'Forgot password?', this.debug(61, 53, 76));
        this._el_62 = this.renderer.createElement(this._el_50, 'br', this.debug(62, 53, 103));
        this._text_63 = this.renderer.createText(this._el_50, '\n                        ', this.debug(63, 53, 107));
        this._text_64 = this.renderer.createText(this._el_50, '\n\n                    ', this.debug(64, 54, 96));
        this._text_65 = this.renderer.createText(this._el_48, '\n                ', this.debug(65, 56, 26));
        this._text_66 = this.renderer.createText(this._el_18, '\n\n                ', this.debug(66, 57, 22));
        this._el_67 = this.renderer.createElement(this._el_18, 'button', this.debug(67, 59, 16));
        this.renderer.setElementAttribute(this._el_67, 'class', 'btn btn-block btn-large waves-effect waves-light login-submit');
        this.renderer.setElementAttribute(this._el_67, 'name', 'action');
        this.renderer.setElementAttribute(this._el_67, 'type', 'submit');
        this._text_68 = this.renderer.createText(this._el_67, '\n                    Login', this.debug(68, 59, 122));
        this._el_69 = this.renderer.createElement(this._el_67, 'i', this.debug(69, 60, 25));
        this.renderer.setElementAttribute(this._el_69, 'class', 'material-icons right');
        this._text_70 = this.renderer.createText(this._el_69, 'send', this.debug(70, 60, 57));
        this._text_71 = this.renderer.createText(this._el_67, '\n                ', this.debug(71, 60, 65));
        this._text_72 = this.renderer.createText(this._el_18, '\n            ', this.debug(72, 61, 25));
        this._text_73 = this.renderer.createText(this._el_16, '\n        ', this.debug(73, 62, 19));
        this._text_74 = this.renderer.createText(this._el_14, '\n    ', this.debug(74, 63, 14));
        this._text_75 = this.renderer.createText(this._el_0, '\n', this.debug(75, 64, 10));
        this._text_76 = this.renderer.createText(parentRenderNode, '\n', this.debug(76, 65, 6));
        var disposable_0 = this.renderer.listen(this._el_18, 'submit', this.eventHandler(this._handle_submit_18_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_18, 'reset', this.eventHandler(this._handle_reset_18_1.bind(this)));
        this._expr_3 = import8.UNINITIALIZED;
        this._expr_4 = import8.UNINITIALIZED;
        this._expr_5 = import8.UNINITIALIZED;
        this._expr_6 = import8.UNINITIALIZED;
        this._expr_7 = import8.UNINITIALIZED;
        this._expr_8 = import8.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._text_58,
            this._el_59,
            this._el_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._text_64,
            this._text_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._el_69,
            this._text_70,
            this._text_71,
            this._text_72,
            this._text_73,
            this._text_74,
            this._text_75,
            this._text_76
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_LoginComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.NgForm) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 72)))) {
            return this._NgForm_18_3;
        }
        if (((token === import16.ControlContainer) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 72)))) {
            return this._ControlContainer_18_4;
        }
        if (((token === import17.NgControlStatusGroup) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 72)))) {
            return this._NgControlStatusGroup_18_5;
        }
        return notFoundResult;
    };
    _View_LoginComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        this.debug(18, 29, 12);
        var currVal_3 = this._NgControlStatusGroup_18_5.ngClassUntouched;
        if (import5.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_18, 'ng-untouched', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.debug(18, 29, 12);
        var currVal_4 = this._NgControlStatusGroup_18_5.ngClassTouched;
        if (import5.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_18, 'ng-touched', currVal_4);
            this._expr_4 = currVal_4;
        }
        this.debug(18, 29, 12);
        var currVal_5 = this._NgControlStatusGroup_18_5.ngClassPristine;
        if (import5.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_18, 'ng-pristine', currVal_5);
            this._expr_5 = currVal_5;
        }
        this.debug(18, 29, 12);
        var currVal_6 = this._NgControlStatusGroup_18_5.ngClassDirty;
        if (import5.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_18, 'ng-dirty', currVal_6);
            this._expr_6 = currVal_6;
        }
        this.debug(18, 29, 12);
        var currVal_7 = this._NgControlStatusGroup_18_5.ngClassValid;
        if (import5.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_18, 'ng-valid', currVal_7);
            this._expr_7 = currVal_7;
        }
        this.debug(18, 29, 12);
        var currVal_8 = this._NgControlStatusGroup_18_5.ngClassInvalid;
        if (import5.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_18, 'ng-invalid', currVal_8);
            this._expr_8 = currVal_8;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_LoginComponent0.prototype._handle_submit_18_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.debug(18, 29, 30);
        var pd_0 = (this.context.login($event, this._el_27.value, this._el_41.value) !== false);
        this.debug(18, 29, 12);
        var pd_1 = (this._NgForm_18_3.onSubmit($event) !== false);
        return ((true && pd_0) && pd_1);
    };
    _View_LoginComponent0.prototype._handle_reset_18_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.debug(18, 29, 12);
        var pd_0 = (this._NgForm_18_3.onReset() !== false);
        return (true && pd_0);
    };
    return _View_LoginComponent0;
}(import3.DebugAppView));
function viewFactory_LoginComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LoginComponent === null)) {
        (renderType_LoginComponent = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-aot-webpack2-typescript-dotnet/master/src/app-components/login/login.template.html', 0, import13.ViewEncapsulation.None, styles_LoginComponent, {}));
    }
    return new _View_LoginComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_LoginComponent0 = viewFactory_LoginComponent0;
//# sourceMappingURL=login.component.ngfactory.js.map