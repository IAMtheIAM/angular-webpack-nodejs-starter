/**
 * VENDOR IMPORTS
 *  vendors.ts
 */

/** For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
 * chunking vendors files for async loading. You would need to import the async loaded vendors
 * at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
 * run `typings install x` where `x` is your module
 */


/** Angular 2 */
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

/** AngularClass */
import '@angularclass/hmr';

// /** RxJS */

// RxJS
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/sample';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toArray';
import 'rxjs/ReplaySubject';
import 'rxjs/Observable';
import 'rxjs/Subject';
import 'rxjs/Subscription';


/** jQuery 3.1.0 */
/** During development, use full jquery library, then scale back before production launch */
const $ = require('jquery');
const jQuery = $;

/** Materialize CSS - JS require()  */
require('materialize-css/dist/js/materialize.js'); // main js file
/** Materialize CSS - SCSS require() must come before KendoUI for css specificity to be   */
require('materialize-css/sass/materialize.scss'); // main scss file

/** KendoUI Professional */
require('./lib/kendoui/styles/kendo.common.min.css');
// require('lib/kendoui/styles/kendo.material.min.css');
require('./lib/kendoui/styles/kendo.default.min.css');
require('./lib/kendoui/js/kendo.web.min.js');
require('./lib/kendoui/js/kendo.core.min.js');
require('script-loader!./lib/kendoui/js/kendo.grid.min.js'); // must be passed through webpack "script-loader"

/** Bootstrap 4.0.0.2 Alpha */
// require('bootstrap/scss/bootstrap.scss');

/** Angular 2 Material 2 */
// require('@angular2-material/button');
// require('@angular2-material/card');
// require('@angular2-material/checkbox');
// require('@angular2-material/sidenav');
// require('@angular2-material/input');
// require('@angular2-material/list');
// require('@angular2-material/radio');
// require('@angular2-material/progress-bar');
// require('@angular2-material/progress-circle');
// require('@angular2-material/toolbar');*/

if ('production' === ENV) {
   // Production

}
else {
   // Development

}
