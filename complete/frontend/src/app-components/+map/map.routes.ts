/**
 * Imported Components
 */
import { MapComponent } from './maps/map.component';

/*
 * Shared Utilities & Other Services
 */
import { RouteProtection } from '../services/route-protection.service';

// async components must be named mapRoutes for WebpackAsyncRoute
export const mapRoutes = [{
   path: '',
   component: MapComponent, // canActivate: [RouteProtection],
   // pathMatch: 'full'
}];
;
