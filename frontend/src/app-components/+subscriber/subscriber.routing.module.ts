// subscriber.routes.ts

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/**
 * Imported Components
 */
import { SubscriberLookupComponent } from './lookup/subscriber-lookup.component';
import { SubscriberRegisterComponent } from './register/subscriber-register.component';

/*
 * Shared Utilities & Other Services
 */
// import { RouteProtection } from '../services/route-protection.service';
// import { DataResolver } from '../app/app.resolver';
import { SubscriberRegisterDataResolver, SubscriberLookupDataResolver } from './subscriber.resolver.service';

export const subscriberRoutes: Routes = [{
   path    : 'subscriber',
   children: [{
      path      : '',
      pathMatch : 'full',
      redirectTo: 'lookup'
   }, {
      path     : 'lookup',
      component: SubscriberLookupComponent, //canActivate: [RouteProtection],
   }, {
      path     : 'lookup/:associationGuid', // gets the route parameters
      component: SubscriberLookupComponent,
      resolve  : { associationGuid: SubscriberLookupDataResolver }
   }, {
      path      : 'register',
      pathMatch : 'full',
      redirectTo: 'lookup'
   }, {
      path     : 'register/:licenseNumber', // gets the route parameters
      component: SubscriberRegisterComponent,
      resolve  : { subscriberData: SubscriberRegisterDataResolver }
   }]

}];

@NgModule({
   imports  : [RouterModule.forChild(subscriberRoutes)],
   exports  : [RouterModule],
   providers: [SubscriberRegisterDataResolver, SubscriberLookupDataResolver]
})
export class SubscriberRoutingModule {}
