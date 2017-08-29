/*
This class manages URL building for the dotnetcore solution.
The current mapping of URL -> Project is described in the README file.
*/
import { Injectable } from '@angular/core';

@Injectable()
export class UrlManagingService {

   constructor() { }

   private constructUrl(url: string) {
      return `http://${url}`;
   }

   private getBaseDomain() {
      return `myurl.com`;
   }

   public getCurrentDomain() {
      return this.constructUrl(this.getBaseDomain());
   }

   public getAuthenticationDomain() {
      return this.constructUrl(`identity.${this.getBaseDomain()}`);
   }
}
