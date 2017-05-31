// app.routes.ts
/**
 * Angular 2 decorators and services
 */

import { Routes } from '@angular/router';

/**
 * Other services
 */
import { RouteProtection } from '../services/route-protection.service';
import { DataResolver } from './app.resolver';

/**
 * Imported Components
 */
import { HomeComponent } from '../home/home.component';
import { GridEditingComponent } from '../grid/grid-editing/grid-editing.component';
import { GridNestedComponent } from '../grid/grid-nested/grid-nested.component';
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { TicketComponent } from '../ticket/ticket.component.ts';
import { NotFound404Component } from '../404/notfound404.component';

export const ROUTES: Routes = [{
   path: '',
   component: LoginComponent
}, {
   path: 'map',
   loadChildren: 'es6-promise?,[name]!../+map/map.module#MapModule',
   canActivate: [RouteProtection]
},{
   path: 'detail',
   loadChildren: 'es6-promise?,[name]!../+detail/detail.module#DetailModule',
   canActivate: [RouteProtection]
}, {
   path: 'iframe',
   loadChildren: 'es6-promise?,[name]!../+iframe-module/iframe.module#IframeModule',
   canActivate: [RouteProtection]
}, {
   path: 'ticket',
   component: TicketComponent,
   canActivate: [RouteProtection]
}, {
   path: 'ticket/:ticketID',
   component: TicketComponent,
   canActivate: [RouteProtection]
}, {
   path: 'home',
   component: HomeComponent,
   canActivate: [RouteProtection]
}, {
   path: 'gridEditing',
   component: GridEditingComponent,
   canActivate: [RouteProtection]
},
{
   path: 'gridNested',
   component: GridNestedComponent,
   canActivate: [RouteProtection]
}, {
   path: 'login',
   component: LoginComponent
}, {
   path: 'about',
   component: AboutComponent,
   canActivate: [RouteProtection],
   resolve: {
      'dataBroughtToComponent': DataResolver
   }
}, {
   path: '**',
   component: NotFound404Component
}, {
   path: '404',
   component: NotFound404Component
}];

// export const routing = RouterModule.forRoot(ROUTES, { useHash: true});

