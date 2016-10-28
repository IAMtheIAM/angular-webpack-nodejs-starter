/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../src/app-components/home/home.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '../../../../src/app-components/services/authentication.service';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/linker/element';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '../../../../src/app-components/services/appstate.service';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/http/src/http';
import * as import13 from '../../../../src/app-components/services/utility.service';
import * as import14 from '@angular/core/src/metadata/view';
import * as import15 from '@angular/core/src/linker/component_factory';
export class Wrapper_HomeComponent {
  context:import0.HomeComponent;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this.changed = false;
    this.context = new import0.HomeComponent(p0,p1,p2,p3);
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
  const nodeDebugInfos_HomeComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([
    import3.Authentication,
    import0.HomeComponent
  ]
,import0.HomeComponent,{})];
var renderType_HomeComponent_Host:import4.RenderComponentType = (null as any);
class _View_HomeComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import5.AppElement;
  _Authentication_0_4:import3.Authentication;
  _HomeComponent_0_5:Wrapper_HomeComponent;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_HomeComponent_Host0,renderType_HomeComponent_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HomeComponent_Host0);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import6.selectOrCreateRenderHostElement(this.renderer,'home',import6.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import5.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HomeComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Authentication_0_4 = new import3.Authentication(this.parentInjector.get(import10.AppState),this.parentInjector.get(import11.Router),this.parentInjector.get(import12.Http),this.parentInjector.get(import13.UtilityService));
    this._HomeComponent_0_5 = new Wrapper_HomeComponent(this.parentInjector.get(import10.AppState),this.parentInjector.get(import11.Router),this.parentInjector.get(import12.Http),this._Authentication_0_4);
    this._appEl_0.initComponent(this._HomeComponent_0_5.context,([] as any[]),compView_0);
    compView_0.create(this._HomeComponent_0_5.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Authentication) && (0 === requestNodeIndex))) { return this._Authentication_0_4; }
    if (((token === import0.HomeComponent) && (0 === requestNodeIndex))) { return this._HomeComponent_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._HomeComponent_0_5.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._HomeComponent_0_5.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(0,0,0);
      if ((this.numberOfChecks === 0)) { this._HomeComponent_0_5.context.ngAfterViewInit(); }
    }
  }
}
function viewFactory_HomeComponent_Host0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import1.AppView<any> {
  if ((renderType_HomeComponent_Host === (null as any))) { (renderType_HomeComponent_Host = viewUtils.createRenderComponentType('',0,import14.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HomeComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HomeComponentNgFactory:import15.ComponentFactory<import0.HomeComponent> = new import15.ComponentFactory<import0.HomeComponent>('home',viewFactory_HomeComponent_Host0,import0.HomeComponent);
const styles_HomeComponent:any[] = ([] as any[]);
const nodeDebugInfos_HomeComponent0:import2.StaticNodeDebugInfo[] = [
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
var renderType_HomeComponent:import4.RenderComponentType = (null as any);
class _View_HomeComponent0 extends import1.DebugAppView<import0.HomeComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_HomeComponent0,renderType_HomeComponent,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HomeComponent0);
  }
  createInternal(rootSelector:string):import5.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import6.createRenderElement(this.renderer,parentRenderNode,'h1',import6.EMPTY_INLINE_ARRAY,this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'Grid (Editing, Lazy loaded)',this.debug(1,0,4));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',this.debug(2,0,36));
    this._el_3 = import6.createRenderElement(this.renderer,parentRenderNode,'div',new import6.InlineArray2(2,'id','kendoUI'),this.debug(3,1,0));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n\n\n',this.debug(4,1,24));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n',this.debug(5,4,38));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n',this.debug(6,5,121));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n',this.debug(7,6,113));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',this.debug(8,7,16));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
export function viewFactory_HomeComponent0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import1.AppView<import0.HomeComponent> {
  if ((renderType_HomeComponent === (null as any))) { (renderType_HomeComponent = viewUtils.createRenderComponentType('C:/Development/angular2-webpack2-dotnet-starter/src/app-components/home/home.template.html',0,import14.ViewEncapsulation.None,styles_HomeComponent,{})); }
  return new _View_HomeComponent0(viewUtils,parentInjector,declarationEl);
}