/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var import0 = require('@angular/core/src/linker/debug_context');
var import1 = require('../../../../src/app-components/ticket/ticket.component');
var import3 = require('@angular/core/src/linker/view');
var import4 = require('@angular/core/src/linker/element');
var import5 = require('@angular/core/src/linker/view_utils');
var import7 = require('@angular/core/src/linker/view_type');
var import8 = require('@angular/core/src/change_detection/change_detection');
var import9 = require('../../../../src/app-components/services/appstate.service');
var import10 = require('../../../../src/app-components/services/data.service');
var import11 = require('../../../../src/app-components/services/authentication.service');
var import12 = require('@angular/core/src/metadata/view');
var import13 = require('@angular/core/src/linker/component_factory');
var import14 = require('@angular/forms/src/directives/ng_form');
var import15 = require('@angular/forms/src/directives/control_container');
var import16 = require('@angular/forms/src/directives/ng_control_status');
var import17 = require('@angular/core/src/linker/template_ref');
var import18 = require('@angular/common/src/directives/ng_if');
var import19 = require('@angular/common/src/pipes/json_pipe');
var nodeDebugInfos_TicketComponent_Host0 = [new import0.StaticNodeDebugInfo([import1.TicketComponent], import1.TicketComponent, {})];
var renderType_TicketComponent_Host = null;
var _View_TicketComponent_Host0 = (function (_super) {
    __extends(_View_TicketComponent_Host0, _super);
    function _View_TicketComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TicketComponent_Host0, renderType_TicketComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_TicketComponent_Host0);
    }
    _View_TicketComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ticket', rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import4.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TicketComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TicketComponent_0_4 = new import1.TicketComponent(this.parentInjector.get(import9.AppState), this.parentInjector.get(import10.DataService), this.parentInjector.get(import11.Authentication));
        this._appEl_0.initComponent(this._TicketComponent_0_4, [], compView_0);
        compView_0.create(this._TicketComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_TicketComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import1.TicketComponent) && (0 === requestNodeIndex))) {
            return this._TicketComponent_0_4;
        }
        return notFoundResult;
    };
    _View_TicketComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TicketComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            this.debug(0, 0, 0);
            if ((this.numberOfChecks === 0)) {
                this._TicketComponent_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_TicketComponent_Host0;
}(import3.DebugAppView));
function viewFactory_TicketComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TicketComponent_Host === null)) {
        (renderType_TicketComponent_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_TicketComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.TicketComponentNgFactory = new import13.ComponentFactory('ticket', viewFactory_TicketComponent_Host0, import1.TicketComponent);
var styles_TicketComponent = [];
var nodeDebugInfos_TicketComponent0 = [
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([
        import14.NgForm,
        import15.ControlContainer,
        import16.NgControlStatusGroup
    ], null, {}),
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
    new import0.StaticNodeDebugInfo([
        import17.TemplateRef,
        import18.NgIf
    ], null, {}),
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
var renderType_TicketComponent = null;
var _View_TicketComponent0 = (function (_super) {
    __extends(_View_TicketComponent0, _super);
    function _View_TicketComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TicketComponent0, renderType_TicketComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_TicketComponent0);
    }
    _View_TicketComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', this.debug(0, 0, 0));
        this.renderer.setElementAttribute(this._el_0, 'class', 'row');
        this._text_1 = this.renderer.createText(this._el_0, '\n   ', this.debug(1, 0, 17));
        this._el_2 = this.renderer.createElement(this._el_0, 'div', this.debug(2, 1, 3));
        this.renderer.setElementAttribute(this._el_2, 'class', 'col s12');
        this._text_3 = this.renderer.createText(this._el_2, '\n\n\n      ', this.debug(3, 1, 24));
        this._el_4 = this.renderer.createElement(this._el_2, 'div', this.debug(4, 4, 6));
        this.renderer.setElementAttribute(this._el_4, 'class', 'card-panel');
        this._text_5 = this.renderer.createText(this._el_4, '\n\n         ', this.debug(5, 4, 30));
        this._el_6 = this.renderer.createElement(this._el_4, 'form', this.debug(6, 6, 9));
        this.renderer.setElementAttribute(this._el_6, 'autocomplete', 'off');
        this._NgForm_6_3 = new import14.NgForm(null, null);
        this._ControlContainer_6_4 = this._NgForm_6_3;
        this._NgControlStatusGroup_6_5 = new import16.NgControlStatusGroup(this._ControlContainer_6_4);
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', this.debug(7, 6, 93));
        this._el_8 = this.renderer.createElement(this._el_6, 'div', this.debug(8, 7, 12));
        this.renderer.setElementAttribute(this._el_8, 'class', 'row');
        this._text_9 = this.renderer.createText(this._el_8, '\n               ', this.debug(9, 7, 29));
        this._el_10 = this.renderer.createElement(this._el_8, 'div', this.debug(10, 8, 15));
        this.renderer.setElementAttribute(this._el_10, 'class', 'input-field col s3');
        this._text_11 = this.renderer.createText(this._el_10, '\n                  ', this.debug(11, 8, 47));
        this._el_12 = this.renderer.createElement(this._el_10, 'input', this.debug(12, 9, 18));
        this.renderer.setElementAttribute(this._el_12, 'autofocus', '');
        this.renderer.setElementAttribute(this._el_12, 'name', 'subscriberID');
        this.renderer.setElementAttribute(this._el_12, 'placeholder', 'Submit Local State to App State');
        this._text_13 = this.renderer.createText(this._el_10, '\n               ', this.debug(13, 13, 31));
        this._text_14 = this.renderer.createText(this._el_8, '\n            ', this.debug(14, 14, 21));
        this._text_15 = this.renderer.createText(this._el_6, '\n            ', this.debug(15, 15, 18));
        this._el_16 = this.renderer.createElement(this._el_6, 'button', this.debug(16, 16, 12));
        this.renderer.setElementAttribute(this._el_16, 'class', 'btn waves-effect waves-light');
        this.renderer.setElementAttribute(this._el_16, 'name', 'action');
        this.renderer.setElementAttribute(this._el_16, 'type', 'submit');
        this._text_17 = this.renderer.createText(this._el_16, 'Submit\n               ', this.debug(17, 16, 85));
        this._el_18 = this.renderer.createElement(this._el_16, 'i', this.debug(18, 17, 15));
        this.renderer.setElementAttribute(this._el_18, 'class', 'material-icons right');
        this._text_19 = this.renderer.createText(this._el_18, 'search', this.debug(19, 17, 47));
        this._text_20 = this.renderer.createText(this._el_16, '\n            ', this.debug(20, 17, 57));
        this._text_21 = this.renderer.createText(this._el_6, '\n         ', this.debug(21, 18, 21));
        this._text_22 = this.renderer.createText(this._el_4, '\n\n\n         ', this.debug(22, 19, 16));
        this._text_23 = this.renderer.createText(this._el_4, '\n         ', this.debug(23, 22, 37));
        this._text_24 = this.renderer.createText(this._el_4, '\n         ', this.debug(24, 23, 33));
        this._text_25 = this.renderer.createText(this._el_4, '\n         ', this.debug(25, 24, 48));
        this._text_26 = this.renderer.createText(this._el_4, '\n         ', this.debug(26, 25, 68));
        this._text_27 = this.renderer.createText(this._el_4, '\n         ', this.debug(27, 26, 58));
        this._text_28 = this.renderer.createText(this._el_4, '\n         ', this.debug(28, 27, 22));
        this._text_29 = this.renderer.createText(this._el_4, '\n         ', this.debug(29, 28, 22));
        this._text_30 = this.renderer.createText(this._el_4, '\n         ', this.debug(30, 29, 108));
        this._text_31 = this.renderer.createText(this._el_4, '\n         ', this.debug(31, 30, 23));
        this._text_32 = this.renderer.createText(this._el_4, '\n\n\n      ', this.debug(32, 31, 22));
        this._text_33 = this.renderer.createText(this._el_2, '\n   ', this.debug(33, 34, 12));
        this._text_34 = this.renderer.createText(this._el_0, '\n\n   ', this.debug(34, 35, 9));
        this._el_35 = this.renderer.createElement(this._el_0, 'div', this.debug(35, 37, 3));
        this.renderer.setElementAttribute(this._el_35, 'class', 'row');
        this._text_36 = this.renderer.createText(this._el_35, '\n      ', this.debug(36, 37, 20));
        this._el_37 = this.renderer.createElement(this._el_35, 'div', this.debug(37, 38, 6));
        this.renderer.setElementAttribute(this._el_37, 'class', 'col s4');
        this._text_38 = this.renderer.createText(this._el_37, '\n         ', this.debug(38, 38, 26));
        this._el_39 = this.renderer.createElement(this._el_37, 'div', this.debug(39, 39, 9));
        this.renderer.setElementAttribute(this._el_39, 'class', 'card-panel');
        this._text_40 = this.renderer.createText(this._el_39, '\n            ', this.debug(40, 39, 33));
        this._anchor_41 = this.renderer.createTemplateAnchor(this._el_39, this.debug(41, 40, 12));
        this._appEl_41 = new import4.AppElement(41, 39, this, this._anchor_41);
        this._TemplateRef_41_5 = new import17.TemplateRef_(this._appEl_41, viewFactory_TicketComponent1);
        this._NgIf_41_6 = new import18.NgIf(this._appEl_41.vcRef, this._TemplateRef_41_5);
        this._text_42 = this.renderer.createText(this._el_39, '\n         ', this.debug(42, 40, 108));
        this._text_43 = this.renderer.createText(this._el_37, '\n      ', this.debug(43, 41, 15));
        this._text_44 = this.renderer.createText(this._el_35, '\n      ', this.debug(44, 42, 12));
        this._el_45 = this.renderer.createElement(this._el_35, 'div', this.debug(45, 43, 6));
        this.renderer.setElementAttribute(this._el_45, 'class', 'col s4');
        this._text_46 = this.renderer.createText(this._el_45, '\n         ', this.debug(46, 43, 26));
        this._el_47 = this.renderer.createElement(this._el_45, 'div', this.debug(47, 44, 9));
        this.renderer.setElementAttribute(this._el_47, 'class', 'card-panel');
        this._text_48 = this.renderer.createText(this._el_47, '\n          ', this.debug(48, 44, 33));
        this._el_49 = this.renderer.createElement(this._el_47, 'span', this.debug(49, 45, 10));
        this._text_50 = this.renderer.createText(this._el_49, 'I am a very simple card. I am good at containing small bits of information.\n          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\n          ', this.debug(50, 45, 16));
        this._text_51 = this.renderer.createText(this._el_47, '\n         ', this.debug(51, 47, 17));
        this._text_52 = this.renderer.createText(this._el_45, '\n      ', this.debug(52, 48, 15));
        this._text_53 = this.renderer.createText(this._el_35, '\n      ', this.debug(53, 49, 12));
        this._el_54 = this.renderer.createElement(this._el_35, 'div', this.debug(54, 50, 6));
        this.renderer.setElementAttribute(this._el_54, 'class', 'col s4');
        this._text_55 = this.renderer.createText(this._el_54, '\n         ', this.debug(55, 50, 26));
        this._el_56 = this.renderer.createElement(this._el_54, 'div', this.debug(56, 51, 9));
        this.renderer.setElementAttribute(this._el_56, 'class', 'card-panel');
        this._text_57 = this.renderer.createText(this._el_56, '\n          ', this.debug(57, 51, 33));
        this._el_58 = this.renderer.createElement(this._el_56, 'span', this.debug(58, 52, 10));
        this._text_59 = this.renderer.createText(this._el_58, 'I am a very simple card. I am good at containing small bits of information.\n          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\n          ', this.debug(59, 52, 16));
        this._text_60 = this.renderer.createText(this._el_56, '\n         ', this.debug(60, 54, 17));
        this._text_61 = this.renderer.createText(this._el_54, '\n      ', this.debug(61, 55, 15));
        this._text_62 = this.renderer.createText(this._el_35, '\n   ', this.debug(62, 56, 12));
        this._text_63 = this.renderer.createText(this._el_0, '\n', this.debug(63, 57, 9));
        var disposable_0 = this.renderer.listen(this._el_6, 'ngSubmit', this.eventHandler(this._handle_ngSubmit_6_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_6, 'submit', this.eventHandler(this._handle_submit_6_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_6, 'reset', this.eventHandler(this._handle_reset_6_2.bind(this)));
        var subscription_0 = this._NgForm_6_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_6_0.bind(this)));
        this._expr_3 = import8.UNINITIALIZED;
        this._expr_4 = import8.UNINITIALIZED;
        this._expr_5 = import8.UNINITIALIZED;
        this._expr_6 = import8.UNINITIALIZED;
        this._expr_7 = import8.UNINITIALIZED;
        this._expr_8 = import8.UNINITIALIZED;
        this._expr_10 = import8.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_12, 'input', this.eventHandler(this._handle_input_12_0.bind(this)));
        this._expr_11 = import8.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._anchor_41,
            this._text_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._text_51,
            this._text_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._text_60,
            this._text_61,
            this._text_62,
            this._text_63
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], [subscription_0]);
        return null;
    };
    _View_TicketComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.NgForm) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._NgForm_6_3;
        }
        if (((token === import15.ControlContainer) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._ControlContainer_6_4;
        }
        if (((token === import16.NgControlStatusGroup) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._NgControlStatusGroup_6_5;
        }
        if (((token === import17.TemplateRef) && (41 === requestNodeIndex))) {
            return this._TemplateRef_41_5;
        }
        if (((token === import18.NgIf) && (41 === requestNodeIndex))) {
            return this._NgIf_41_6;
        }
        return notFoundResult;
    };
    _View_TicketComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this.debug(41, 40, 17);
        var currVal_11 = this.context.subscriberFoundByID;
        if (import5.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._NgIf_41_6.ngIf = currVal_11;
            this._expr_11 = currVal_11;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.debug(6, 6, 9);
        var currVal_3 = this._NgControlStatusGroup_6_5.ngClassUntouched;
        if (import5.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_6, 'ng-untouched', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.debug(6, 6, 9);
        var currVal_4 = this._NgControlStatusGroup_6_5.ngClassTouched;
        if (import5.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_6, 'ng-touched', currVal_4);
            this._expr_4 = currVal_4;
        }
        this.debug(6, 6, 9);
        var currVal_5 = this._NgControlStatusGroup_6_5.ngClassPristine;
        if (import5.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_6, 'ng-pristine', currVal_5);
            this._expr_5 = currVal_5;
        }
        this.debug(6, 6, 9);
        var currVal_6 = this._NgControlStatusGroup_6_5.ngClassDirty;
        if (import5.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_6, 'ng-dirty', currVal_6);
            this._expr_6 = currVal_6;
        }
        this.debug(6, 6, 9);
        var currVal_7 = this._NgControlStatusGroup_6_5.ngClassValid;
        if (import5.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_6, 'ng-valid', currVal_7);
            this._expr_7 = currVal_7;
        }
        this.debug(6, 6, 9);
        var currVal_8 = this._NgControlStatusGroup_6_5.ngClassInvalid;
        if (import5.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_6, 'ng-invalid', currVal_8);
            this._expr_8 = currVal_8;
        }
        this.debug(12, 10, 21);
        var currVal_10 = this.context.localState.subscriberID;
        if (import5.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementProperty(this._el_12, 'value', currVal_10);
            this._expr_10 = currVal_10;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TicketComponent0.prototype._handle_ngSubmit_6_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.debug(6, 6, 15);
        var pd_0 = (this.context.searchSubscriberByID(this.context.localState.subscriberID) !== false);
        return (true && pd_0);
    };
    _View_TicketComponent0.prototype._handle_submit_6_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.debug(6, 6, 9);
        var pd_0 = (this._NgForm_6_3.onSubmit() !== false);
        return (true && pd_0);
    };
    _View_TicketComponent0.prototype._handle_reset_6_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.debug(6, 6, 9);
        var pd_0 = (this._NgForm_6_3.onReset() !== false);
        return (true && pd_0);
    };
    _View_TicketComponent0.prototype._handle_input_12_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.debug(12, 11, 21);
        var pd_0 = ((this.context.localState.subscriberID = $event.target.value) !== false);
        return (true && pd_0);
    };
    return _View_TicketComponent0;
}(import3.DebugAppView));
function viewFactory_TicketComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TicketComponent === null)) {
        (renderType_TicketComponent = viewUtils.createRenderComponentType('C:/Source/Atlas/src/app-components/ticket/ticket.template.html', 0, import12.ViewEncapsulation.None, styles_TicketComponent, {}));
    }
    return new _View_TicketComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_TicketComponent0 = viewFactory_TicketComponent0;
var nodeDebugInfos_TicketComponent1 = [
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {})
];
var _View_TicketComponent1 = (function (_super) {
    __extends(_View_TicketComponent1, _super);
    function _View_TicketComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TicketComponent1, renderType_TicketComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_TicketComponent1);
    }
    _View_TicketComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'pre', this.debug(0, 40, 12));
        this.renderer.setElementAttribute(this._el_0, 'class', 'jwt');
        this._el_1 = this.renderer.createElement(this._el_0, 'code', this.debug(1, 40, 57));
        this._text_2 = this.renderer.createText(this._el_1, '', this.debug(2, 40, 63));
        this.debug(null, null, null);
        this._pipe_json_0 = new import19.JsonPipe();
        this._expr_0 = import8.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._el_1,
            this._text_2
        ], [], []);
        return null;
    };
    _View_TicketComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import8.ValueUnwrapper();
        this.detectContentChildrenChanges(throwOnChange);
        this.debug(2, 40, 63);
        valUnwrapper.reset();
        var currVal_0 = import5.interpolate(1, '', valUnwrapper.unwrap(this._pipe_json_0.transform(this.parent.context.subscriberFoundByID)), '');
        if ((valUnwrapper.hasWrappedValue || import5.checkBinding(throwOnChange, this._expr_0, currVal_0))) {
            this.renderer.setText(this._text_2, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TicketComponent1;
}(import3.DebugAppView));
function viewFactory_TicketComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_TicketComponent1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=ticket.component.ngfactory.js.map