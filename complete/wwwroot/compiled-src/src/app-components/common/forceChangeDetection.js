// forceChangeDetection.ts
"use strict";
var utility_service_1 = require('../services/utility.service');
/* TODO: Find out why angular2 is not detecting changes on component load when navigating via "this.router.navigate(['/route'])"
 *  This file is the hack to force angular2 to detect changes on component load. Otherwise template syntax bindings don't load.
 * */
function constructorForceChangeDetection() {
    setTimeout(function () {
        document.getElementById('autoForceChangeDetection').click();
        if (utility_service_1.Logging.isEnabled.verbose) {
            console.log('%c Constructor called autoForceChangeDetection()', utility_service_1.Logging.normal.purple);
        }
    }, 10);
}
exports.constructorForceChangeDetection = constructorForceChangeDetection;
function manualForceChangeDetection() {
    if (utility_service_1.Logging.isEnabled.verbose) {
        console.log('%c Manual force change detection occurred', utility_service_1.Logging.normal.purple);
    }
}
exports.manualForceChangeDetection = manualForceChangeDetection;
function autoForceChangeDetection() {
    setTimeout(function () {
        if (utility_service_1.Logging.isEnabled.verbose) {
            console.log('%c Auto force change detection occurred', utility_service_1.Logging.normal.purple);
        }
    }, 10);
}
exports.autoForceChangeDetection = autoForceChangeDetection;
//# sourceMappingURL=forceChangeDetection.js.map