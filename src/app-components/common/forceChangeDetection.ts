// forceChangeDetection.ts

import {Logging} from '../services/utility.service';

/* TODO: Find out why angular2 is not detecting changes on component load when navigating via "this.router.navigate(['/route'])"
 *  This file is the hack to force angular2 to detect changes on component load. Otherwise template syntax bindings don't load.
 * */

export function constructorForceChangeDetection() {
  setTimeout(function () {
    document.getElementById('autoForceChangeDetection').click();
    // if (Logging.isEnabled.light) {
    //   console.log('%c Constructor called autoForceChangeDetection()', Logging.normal.purple);
    // }
  }, 10);
}

export function manualForceChangeDetection() {
  if (Logging.isEnabled.verbose) {
    console.log('%c Manual force change detection occurred', Logging.normal.purple);
  }
}

export function autoForceChangeDetection() {
  setTimeout(function () {
    if (Logging.isEnabled.verbose) {
      console.log('%c Auto force change detection occurred', Logging.normal.purple);
    }
  }, 10);
}
