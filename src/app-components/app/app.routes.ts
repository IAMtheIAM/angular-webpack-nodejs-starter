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
import { DetailComponent } from '../+detail/detail.component';
import { LoginComponent } from '../login/login.component';
import { SubscriberComponent } from '../subscriber/subscriber.component.ts';
import { TicketComponent } from '../ticket/ticket.component.ts';
import { NotFound404Component } from '../404/notfound404.component';

export function loadLazy(pathToFile, componentClassName) {
   // return System.import(pathToFile).then((res: any) => res[componentClassName])
   // .error();

   // return System.import('../+detail/detail.detailRoutes').then((r: any) => r.DetailComponent)

   // return require('es6-promise!../+detail/detail.detailRoutes')('DetailComponent');
   // return require('es6-promise!' + pathToFile)(componentClassName);

}

export const ROUTES: Routes = [{
   path: '',
   component: LoginComponent
   // ,canActivate: [RouteProtection]
}, {
   path: 'ticket',
   component: TicketComponent,
   canActivate: [RouteProtection]
}, {
   path: 'home', // loadChildren: '../home/home.component',
   // loadChildren: loadLazy('../home/home.component', HomeComponent)
   component: HomeComponent,
   canActivate: [RouteProtection]
}, {
   path: 'subscriber', // loadChildren: '../subscriber/subscriber.component', // loadChildren: loadLazy('../subscriber/subscriber.component',
                       // SubscriberComponent),
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
},
//    {
//    path: 'detail',
//    // loadChildren: () => System.import('../+detail/detail.module'),
//    // loadChildren: '../+detail/detail.module#DetailModule',
//    loadChildren: 'es6-promise?,[name]!../+detail/detail.module#DetailModule',
//    // loadChildren: loadLazy('../+detail/detail.detailRoutes', DetailComponent)
//    // loadChildren: () => System.import('../+detail/detail.module.ts')
// },
   {
   path: '**',
   component: NotFound404Component
}, {
   path: '404',
   component: NotFound404Component
}];

// export const routing = RouterModule.forRoot(ROUTES, { useHash: true});
