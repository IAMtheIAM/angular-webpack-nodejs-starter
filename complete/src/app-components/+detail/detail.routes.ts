/**
 * Imported Components
 */
import { DetailComponent } from './detail.component';

/*
 * Shared Utilities & Other Services
 */
import { RouteProtection } from '../services/route-protection.service';

// async components must be named detailRoutes for WebpackAsyncRoute
export const detailRoutes = [{
   path: '',
   component: DetailComponent, // canActivate: [RouteProtection],
   // pathMatch: 'full'
}];
;
