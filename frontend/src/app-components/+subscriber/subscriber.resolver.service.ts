import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs/Observable';
import { hostName } from '../services/data.service';


@Injectable()
export class SubscriberLookupDataResolver implements Resolve<any> {
   api2: string = `${hostName}/api/users/detail/`; // nodejs api at "backend-nodejs/app/routes/api/b.router.js"

   constructor(public dataService: DataService, private router: Router) {}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
      let associationGuid = route.paramMap.get('associationGuid');
      // console.debug(licenseNumber);
      let response = this.dataService.get(this.api2 + associationGuid);
      return response;
   }
}


@Injectable()
export class SubscriberRegisterDataResolver implements Resolve<any> {
   api1: string = `${hostName}/api/users/summary/`; // nodejs api at "backend-nodejs/app/routes/api/a.router.js"

   constructor(public dataService: DataService, private router: Router) {}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
      let licenseNumber = route.paramMap.get('licenseNumber');
      // console.debug(licenseNumber);
      let response = this.dataService.get(this.api1 + licenseNumber);
      return response;
   }
}
