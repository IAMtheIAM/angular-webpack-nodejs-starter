// import {Directive, Attribute, ViewContainerRef, DynamicComponentLoader} from '@angular/core';
// import {Router, ComponentInstruction} from '@angular/router';
// import {Router} from '@angular/router';
// import {RouterOutletMap} from '@angular/router/src/router_outlet_map';
// import {RouterOutlet} from '@angular/router/src/directives/router_outlet';
//
// import {Authentication} from '../common/authentication.service';
//
// @Directive({
//   selector: 'router-outlet'
// })
// export class LoggedInRouterOutlet extends RouterOutlet {
//   publicRoutes:any;
//   isAuthenticated:boolean;
//   //private router: any;
//
//   constructor(public _elementRef: ElementRef, public _loader: DynamicComponentLoader,
//               public _parentRouter: Router, @Attribute('name') nameAttr: string, public authService:Authentication) {
//     super(_elementRef, _loader, _parentRouter, nameAttr);
//     this.isAuthenticated = authService.isLoggedIn();
//
//
//     //this.router = _parentRouter;
//     /**
//      * DEFINE PUBLIC ROUTES
//      *
//      * The Boolean following each route below denotes whether the route requires authentication to view.
//      *
//      * Format: key/value pair
//      * - key is the /route url "/login", "/signup", etc
//      * - value is a boolean true/false
//      *    `true` means it's a publicly available route. No authentication required
//      *    `false` means it's a protected route which is hidden until user is authenticated
//      *
//      */
//     this.publicRoutes = {
//       'login': true,
//       'signup': true,
//       '404': true
//     };
//   } // end constructor
//
//   routeIsActive(routePath:string) {
//     return this.router.url == routePath;
//   }
//
//   activate(instruction: ComponentInstruction) {
//     // let url = instruction.urlPath;
//     let url = this.router.url;
//     // If the url doesn't match publicRoutes and they are not authenticated...
//     if (!this.publicRoutes[url] && !this.isAuthenticated) {
//       // todo: redirect to Login, may be there a better way?
//       this.router.navigateByUrl('/login');
//     }
//     return super.activate(instruction);
//   }
// }
//# sourceMappingURL=LoggedInOutlet.js.map