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
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { SubscriberComponent } from '../subscriber/subscriber.component.ts';
import { TicketComponent } from '../ticket/ticket.component.ts';
import { NotFound404Component } from '../404/notfound404.component';

export const ROUTES: Routes = [{
   path: '',
   component: LoginComponent
}, {
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
   path: 'grid1',
   component: HomeComponent,
   canActivate: [RouteProtection]
}, {
   path: 'grid2',
   component: SubscriberComponent,
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

