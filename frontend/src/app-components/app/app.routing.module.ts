// app.routes.ts
/**
 * Angular 2 decorators and services
 */

import { Routes, RouterModule } from '@angular/router';
import { NgModule }              from '@angular/core';

/**
 * Other services
 */
import { RouteProtection } from '../services/route-protection.service';
// import { DataResolver } from './app.resolver';

/**
 * Imported Components
 */
import { LoginComponent } from '../login/login.component';
import { NotFound404Component } from '../404/notfound404.component';

export const ROUTES: Routes = [{
   path: '',
   redirectTo: 'login',
   pathMatch: 'full',
},
// uncomment this route to enable lazy loading, then change the root path in the lazy loaded module to '' (empty)
//    {
//    path: 'subscriber',
//    loadChildren: '../+subscriber/subscriber.module#SubscriberModule', // lazy load
//    // canActivate: [RouteProtection]
// },
   {
   path: 'detail',
   loadChildren: '../+detail/detail.module#DetailModule',
   canActivate: [RouteProtection]
}, {
   path: 'login',
   component: LoginComponent
}, {
   path: '**',
   component: NotFound404Component
}, {
   path: '404',
   component: NotFound404Component
}];

@NgModule({
   imports: [
      RouterModule.forRoot(
         ROUTES,
         {
            useHash: true,
            // enableTracing: true // <-- debugging purposes only
         }
      )
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule {}
