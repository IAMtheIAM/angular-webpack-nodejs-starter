/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../../src/app-components/nav/header/nav-header.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '../../../../../src/app-components/services/appstate.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/core/src/security';
export class Wrapper_NavHeaderComponent {
  context:import0.NavHeaderComponent;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.NavHeaderComponent(p0);
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
const nodeDebugInfos_NavHeaderComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.NavHeaderComponent],import0.NavHeaderComponent,{})];
var renderType_NavHeaderComponent_Host:import3.RenderComponentType = (null as any);
class _View_NavHeaderComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _NavHeaderComponent_0_4:Wrapper_NavHeaderComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_NavHeaderComponent_Host0,renderType_NavHeaderComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NavHeaderComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer,'nav-header',import5.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_NavHeaderComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NavHeaderComponent_0_4 = new Wrapper_NavHeaderComponent(this.parentInjector.get(import9.AppState));
    this._appEl_0.initComponent(this._NavHeaderComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._NavHeaderComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.NavHeaderComponent) && (0 === requestNodeIndex))) { return this._NavHeaderComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._NavHeaderComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._NavHeaderComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_NavHeaderComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<any> {
  if ((renderType_NavHeaderComponent_Host === (null as any))) { (renderType_NavHeaderComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_NavHeaderComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const NavHeaderComponentNgFactory:import11.ComponentFactory<import0.NavHeaderComponent> = new import11.ComponentFactory<import0.NavHeaderComponent>('nav-header',viewFactory_NavHeaderComponent_Host0,import0.NavHeaderComponent);
const styles_NavHeaderComponent:any[] = ([] as any[]);
const nodeDebugInfos_NavHeaderComponent0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_NavHeaderComponent:import3.RenderComponentType = (null as any);
class _View_NavHeaderComponent0 extends import1.DebugAppView<import0.NavHeaderComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _el_27:any;
  _text_28:any;
  _text_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _el_35:any;
  _el_36:any;
  _text_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _text_41:any;
  _text_42:any;
  _text_43:any;
  _el_44:any;
  _text_45:any;
  _el_46:any;
  _el_47:any;
  _el_48:any;
  _text_49:any;
  _el_50:any;
  _el_51:any;
  _el_52:any;
  _text_53:any;
  _el_54:any;
  _text_55:any;
  _text_56:any;
  _text_57:any;
  _text_58:any;
  _el_59:any;
  _text_60:any;
  _text_61:any;
  _el_62:any;
  _text_63:any;
  _el_64:any;
  _el_65:any;
  _text_66:any;
  _text_67:any;
  _text_68:any;
  _text_69:any;
  _text_70:any;
  _text_71:any;
  /*private*/ _expr_72:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_NavHeaderComponent0,renderType_NavHeaderComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NavHeaderComponent0);
    this._expr_72 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import5.createRenderElement(this.renderer,parentRenderNode,'div',new import5.InlineArray2(2,'class','navbar-fixed'),this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'\n   ',this.debug(1,0,26));
    this._text_2 = this.renderer.createText(this._el_0,'\n   ',this.debug(2,1,30));
    this._el_3 = import5.createRenderElement(this.renderer,this._el_0,'ul',new import5.InlineArray4(4,'class','dropdown-content','id','dropdown1'),this.debug(3,2,3));
    this._text_4 = this.renderer.createText(this._el_3,'\n      ',this.debug(4,2,47));
    this._el_5 = import5.createRenderElement(this.renderer,this._el_3,'li',import5.EMPTY_INLINE_ARRAY,this.debug(5,3,6));
    this._el_6 = import5.createRenderElement(this.renderer,this._el_5,'a',import5.EMPTY_INLINE_ARRAY,this.debug(6,3,10));
    this._text_7 = this.renderer.createText(this._el_6,'one',this.debug(7,3,13));
    this._text_8 = this.renderer.createText(this._el_3,'\n      ',this.debug(8,3,25));
    this._el_9 = import5.createRenderElement(this.renderer,this._el_3,'li',import5.EMPTY_INLINE_ARRAY,this.debug(9,4,6));
    this._el_10 = import5.createRenderElement(this.renderer,this._el_9,'a',import5.EMPTY_INLINE_ARRAY,this.debug(10,4,10));
    this._text_11 = this.renderer.createText(this._el_10,'two',this.debug(11,4,13));
    this._text_12 = this.renderer.createText(this._el_3,'\n      ',this.debug(12,4,25));
    this._el_13 = import5.createRenderElement(this.renderer,this._el_3,'li',new import5.InlineArray2(2,'class','divider'),this.debug(13,5,6));
    this._text_14 = this.renderer.createText(this._el_3,'\n      ',this.debug(14,5,31));
    this._el_15 = import5.createRenderElement(this.renderer,this._el_3,'li',import5.EMPTY_INLINE_ARRAY,this.debug(15,6,6));
    this._el_16 = import5.createRenderElement(this.renderer,this._el_15,'a',import5.EMPTY_INLINE_ARRAY,this.debug(16,6,10));
    this._text_17 = this.renderer.createText(this._el_16,'three',this.debug(17,6,13));
    this._text_18 = this.renderer.createText(this._el_3,'\n   ',this.debug(18,6,27));
    this._text_19 = this.renderer.createText(this._el_0,'\n   ',this.debug(19,7,8));
    this._el_20 = import5.createRenderElement(this.renderer,this._el_0,'nav',import5.EMPTY_INLINE_ARRAY,this.debug(20,8,3));
    this._text_21 = this.renderer.createText(this._el_20,'\n      ',this.debug(21,8,8));
    this._el_22 = import5.createRenderElement(this.renderer,this._el_20,'div',new import5.InlineArray2(2,'class','nav-wrapper'),this.debug(22,9,6));
    this._text_23 = this.renderer.createText(this._el_22,'\n         ',this.debug(23,9,31));
    this._el_24 = import5.createRenderElement(this.renderer,this._el_22,'ul',new import5.InlineArray2(2,'class','hide-on-med-and-down'),this.debug(24,10,9));
    this._text_25 = this.renderer.createText(this._el_24,'\n            ',this.debug(25,10,42));
    this._el_26 = import5.createRenderElement(this.renderer,this._el_24,'li',new import5.InlineArray2(2,'class','brand-logo'),this.debug(26,11,12));
    this._el_27 = import5.createRenderElement(this.renderer,this._el_26,'a',import5.EMPTY_INLINE_ARRAY,this.debug(27,11,35));
    this._text_28 = this.renderer.createText(this._el_27,'IAMtheIAM',this.debug(28,11,38));
    this._text_29 = this.renderer.createText(this._el_26,'\n            ',this.debug(29,11,51));
    this._text_30 = this.renderer.createText(this._el_24,'\n            ',this.debug(30,12,17));
    this._el_31 = import5.createRenderElement(this.renderer,this._el_24,'li',new import5.InlineArray2(2,'class','search'),this.debug(31,13,12));
    this._text_32 = this.renderer.createText(this._el_31,'\n               ',this.debug(32,13,31));
    this._el_33 = import5.createRenderElement(this.renderer,this._el_31,'div',new import5.InlineArray2(2,'class','search-wrapper'),this.debug(33,14,15));
    this._text_34 = this.renderer.createText(this._el_33,'\n                  ',this.debug(34,14,43));
    this._el_35 = import5.createRenderElement(this.renderer,this._el_33,'input',new import5.InlineArray8(8,'class','search-sidenav','id','search-sidenav','placeholder','Search','type','text'),this.debug(35,15,18));
    this._el_36 = import5.createRenderElement(this.renderer,this._el_33,'i',new import5.InlineArray2(2,'class','material-icons align-right'),this.debug(36,15,101));
    this._text_37 = this.renderer.createText(this._el_36,'search',this.debug(37,16,53));
    this._text_38 = this.renderer.createText(this._el_33,'\n                  ',this.debug(38,16,63));
    this._el_39 = import5.createRenderElement(this.renderer,this._el_33,'div',new import5.InlineArray2(2,'class','search-results'),this.debug(39,17,18));
    this._text_40 = this.renderer.createText(this._el_33,'\n               ',this.debug(40,17,52));
    this._text_41 = this.renderer.createText(this._el_31,'\n            ',this.debug(41,18,21));
    this._text_42 = this.renderer.createText(this._el_24,'\n         ',this.debug(42,19,17));
    this._text_43 = this.renderer.createText(this._el_22,'\n         ',this.debug(43,20,14));
    this._el_44 = import5.createRenderElement(this.renderer,this._el_22,'ul',new import5.InlineArray2(2,'class','right hide-on-med-and-down'),this.debug(44,21,9));
    this._text_45 = this.renderer.createText(this._el_44,'\n\n            ',this.debug(45,21,48));
    this._el_46 = import5.createRenderElement(this.renderer,this._el_44,'li',new import5.InlineArray2(2,'class','notifications-alert'),this.debug(46,23,12));
    this._el_47 = import5.createRenderElement(this.renderer,this._el_46,'a',import5.EMPTY_INLINE_ARRAY,this.debug(47,23,44));
    this._el_48 = import5.createRenderElement(this.renderer,this._el_47,'img',new import5.InlineArray4(4,'alt','','src','/assets/icons/alert-notifications.png'),this.debug(48,23,47));
    this._text_49 = this.renderer.createText(this._el_44,'\n            ',this.debug(49,23,112));
    this._el_50 = import5.createRenderElement(this.renderer,this._el_44,'li',new import5.InlineArray2(2,'class','profile-picture'),this.debug(50,24,12));
    this._el_51 = import5.createRenderElement(this.renderer,this._el_50,'a',new import5.InlineArray8(6,'class','dropdown-button','data-activates','dropdown1','href',''),this.debug(51,24,40));
    this._el_52 = import5.createRenderElement(this.renderer,this._el_51,'img',new import5.InlineArray4(4,'alt','','src','/assets/icons/profile-picture.png'),this.debug(52,24,102));
    this._text_53 = this.renderer.createText(this._el_51,'Rose Mendez',this.debug(53,25,62));
    this._el_54 = import5.createRenderElement(this.renderer,this._el_51,'i',new import5.InlineArray2(2,'class','material-icons right'),this.debug(54,25,73));
    this._text_55 = this.renderer.createText(this._el_54,'arrow_drop_down',this.debug(55,26,44));
    this._text_56 = this.renderer.createText(this._el_50,'\n            ',this.debug(56,26,67));
    this._text_57 = this.renderer.createText(this._el_44,'\n            ',this.debug(57,27,17));
    this._text_58 = this.renderer.createText(this._el_44,'\n            ',this.debug(58,28,37));
    this._el_59 = import5.createRenderElement(this.renderer,this._el_44,'li',import5.EMPTY_INLINE_ARRAY,this.debug(59,29,12));
    this._text_60 = this.renderer.createText(this._el_59,'\n            ',this.debug(60,29,16));
    this._text_61 = this.renderer.createText(this._el_44,'\n            ',this.debug(61,30,17));
    this._el_62 = import5.createRenderElement(this.renderer,this._el_44,'li',import5.EMPTY_INLINE_ARRAY,this.debug(62,31,12));
    this._text_63 = this.renderer.createText(this._el_62,'\n               ',this.debug(63,31,16));
    this._el_64 = import5.createRenderElement(this.renderer,this._el_62,'a',import5.EMPTY_INLINE_ARRAY,this.debug(64,32,15));
    this._el_65 = import5.createRenderElement(this.renderer,this._el_64,'img',new import5.InlineArray8(8,'class','not-fullscreen','height','30','id','fullScreenTrigger','width','30'),this.debug(65,32,47));
    this._text_66 = this.renderer.createText(this._el_62,'\n            ',this.debug(66,33,70));
    this._text_67 = this.renderer.createText(this._el_44,'\n         ',this.debug(67,34,17));
    this._text_68 = this.renderer.createText(this._el_22,'\n      ',this.debug(68,35,14));
    this._text_69 = this.renderer.createText(this._el_20,'\n   ',this.debug(69,36,12));
    this._text_70 = this.renderer.createText(this._el_0,'\n',this.debug(70,37,9));
    this._text_71 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(71,38,6));
    var disposable_0:Function = this.renderer.listen(this._el_64,'click',this.eventHandler(this._handle_click_64_0.bind(this)));
    this.init(([] as any[]),[
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
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    this.debug(65,32,52);
    const currVal_72:any = this.context.fullscreen.activeIcon;
    if (import5.checkBinding(throwOnChange,this._expr_72,currVal_72)) {
      this.renderer.setElementProperty(this._el_65,'src',this.viewUtils.sanitizer.sanitize(import12.SecurityContext.URL,currVal_72));
      this._expr_72 = currVal_72;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_64_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(64,32,18);
    const pd_64_0:any = ((<any>this.context.toggleFullScreen()) !== false);
    return (true && pd_64_0);
  }
}
export function viewFactory_NavHeaderComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<import0.NavHeaderComponent> {
  if ((renderType_NavHeaderComponent === (null as any))) { (renderType_NavHeaderComponent = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/src/app-components/nav/header/nav-header.template.html',0,import10.ViewEncapsulation.None,styles_NavHeaderComponent,{})); }
  return new _View_NavHeaderComponent0(viewUtils,parentInjector,declarationEl);
}