/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../src/app-components/404/notfound404.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '../../../../src/app-components/services/appstate.service';
import * as import10 from '../../../../src/app-components/services/authentication.service';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
export class Wrapper_NotFound404Component {
  context:import0.NotFound404Component;
  changed:boolean;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.NotFound404Component(p0,p1);
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
const nodeDebugInfos_NotFound404Component_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.NotFound404Component],import0.NotFound404Component,{})];
var renderType_NotFound404Component_Host:import3.RenderComponentType = (null as any);
class _View_NotFound404Component_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _NotFound404Component_0_4:Wrapper_NotFound404Component;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_NotFound404Component_Host0,renderType_NotFound404Component_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NotFound404Component_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer,'NotFound404',import5.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_NotFound404Component0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NotFound404Component_0_4 = new Wrapper_NotFound404Component(this.parentInjector.get(import9.AppState),this.parentInjector.get(import10.Authentication));
    this._appEl_0.initComponent(this._NotFound404Component_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._NotFound404Component_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.NotFound404Component) && (0 === requestNodeIndex))) { return this._NotFound404Component_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._NotFound404Component_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._NotFound404Component_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(0,0,0);
      if ((this.numberOfChecks === 0)) { this._NotFound404Component_0_4.context.ngAfterViewInit(); }
    }
  }
}
function viewFactory_NotFound404Component_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<any> {
  if ((renderType_NotFound404Component_Host === (null as any))) { (renderType_NotFound404Component_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_NotFound404Component_Host0(viewUtils,parentInjector,declarationEl);
}
export const NotFound404ComponentNgFactory:import12.ComponentFactory<import0.NotFound404Component> = new import12.ComponentFactory<import0.NotFound404Component>('NotFound404',viewFactory_NotFound404Component_Host0,import0.NotFound404Component);
const styles_NotFound404Component:any[] = ([] as any[]);
const nodeDebugInfos_NotFound404Component0:import2.StaticNodeDebugInfo[] = [
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
var renderType_NotFound404Component:import3.RenderComponentType = (null as any);
class _View_NotFound404Component0 extends import1.DebugAppView<import0.NotFound404Component> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_NotFound404Component0,renderType_NotFound404Component,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NotFound404Component0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import5.createRenderElement(this.renderer,parentRenderNode,'div',new import5.InlineArray2(2,'class','card-panel'),this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'\n   ',this.debug(1,0,24));
    this._el_2 = import5.createRenderElement(this.renderer,this._el_0,'h1',import5.EMPTY_INLINE_ARRAY,this.debug(2,1,3));
    this._text_3 = this.renderer.createText(this._el_2,'404 Page Not Found!',this.debug(3,1,7));
    this._text_4 = this.renderer.createText(this._el_0,'\n   ',this.debug(4,1,31));
    this._el_5 = import5.createRenderElement(this.renderer,this._el_0,'p',import5.EMPTY_INLINE_ARRAY,this.debug(5,2,3));
    this._text_6 = this.renderer.createText(this._el_5,'Check the website address and try again',this.debug(6,2,6));
    this._text_7 = this.renderer.createText(this._el_0,'\n',this.debug(7,2,49));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',this.debug(8,3,6));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
export function viewFactory_NotFound404Component0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<import0.NotFound404Component> {
  if ((renderType_NotFound404Component === (null as any))) { (renderType_NotFound404Component = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/src/app-components/404/NotFound404.template.html',0,import11.ViewEncapsulation.None,styles_NotFound404Component,{})); }
  return new _View_NotFound404Component0(viewUtils,parentInjector,declarationEl);
}