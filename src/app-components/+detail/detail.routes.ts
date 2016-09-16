/**
 * Imported Components
 */
import { DetailComponent } from './detail.component';

/*
 * Shared Utilities & Other Services
 */
import { RouteProtection } from '../services/route-protection.service';

// async components must be named routes for WebpackAsyncRoute
export const routes = [{
   path: '',
   component: DetailComponent, // canActivate: [RouteProtection],
   // pathMatch: 'full'
}];
