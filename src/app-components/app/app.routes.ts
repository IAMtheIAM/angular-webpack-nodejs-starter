// app.routes.ts
/**
 * Angular 2 decorators and services
 */

import { Routes, RouterModule } from '@angular/router';

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
import { NotFound404Component } from '../404/notfound404.component';


export function loadLazy() {
   // return require('es6-promise!../+detail/detail.routes')('DetailComponent');
   return System.import('../+detail/detail.routes').then((r: any) => r.DetailComponent)

}

export const ROUTES: Routes = [{
   path: '',
   component: LoginComponent
   // ,canActivate: [RouteProtection]
}, {
   path: 'home',
   component: HomeComponent,
   canActivate: [RouteProtection]
}, {
   path: 'subscriber',
   component: SubscriberComponent,
   canActivate: [RouteProtection]
}, {
   path: 'login',
   component: LoginComponent
}, {
   path: 'about',
   component: AboutComponent,
   canActivate: [RouteProtection], // resolve: {
   //    'dataBroughtToComponent': DataResolver
   // }
}, {
   path: 'detail',
   loadChildren: loadLazy
   // loadChildren: "es6-promise!../+detail/detail.routes"
}, {
   path: '**',
   component: NotFound404Component
}, {
   path: '404',
   component: NotFound404Component
}];
