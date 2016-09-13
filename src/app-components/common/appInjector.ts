/**
 * Created by NParson on 6/29/2016.
 */
import {Injector} from '@angular/core';

let appInjectorRef: Injector;

export const appInjector = (injector?: Injector): Injector => {
  if (injector) {
    appInjectorRef = injector;
  }

  return appInjectorRef;
};
