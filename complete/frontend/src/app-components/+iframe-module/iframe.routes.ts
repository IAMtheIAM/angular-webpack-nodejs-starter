/**
 * Imported Components
 */
import { Webpage1 } from './webpage-1/webpage-1.component';
import { Webpage2 } from './webpage-2/webpage-2.component';
/*
 * Shared Utilities & Other Services
 */
import { RouteProtection } from '../services/route-protection.service';

// async components must be named detailRoutes for WebpackAsyncRoute
export const iframeRoutes = [{
   path: '',
   component: Webpage1, // canActivate: [RouteProtection],
   // pathMatch: 'full'
}, {
   path: 'webpage1',
   component: Webpage1,
   canActivate: [RouteProtection]
}, {
   path: 'webpage2',
   component: Webpage2,
   canActivate: [RouteProtection]
}];
