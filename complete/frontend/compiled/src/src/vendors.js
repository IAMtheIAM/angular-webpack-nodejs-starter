/**
 * VENDOR IMPORTS
 *  vendors.ts
 */
"use strict";
/** For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
 * chunking vendors files for async loading. You would need to import the async loaded vendors
 * at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
 * run `typings install x` where `x` is your module
 */
/** Angular 2 */
require('@angular/platform-browser');
require('@angular/platform-browser-dynamic');
require('@angular/core');
require('@angular/common');
require('@angular/forms');
require('@angular/http');
require('@angular/router');
/** AngularClass */
require('@angularclass/hmr');
/** RxJS */
require('rxjs/add/operator/catch');
require('rxjs/add/observable/combineLatest');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/filter');
require('rxjs/add/observable/from');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/observable/interval');
require('rxjs/add/operator/let');
require('rxjs/add/operator/map');
require('rxjs/add/operator/mapTo');
require('rxjs/add/operator/mergeMap');
require('rxjs/add/observable/of');
require('rxjs/add/operator/pluck');
require('rxjs/add/operator/sample');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/take');
require('rxjs/add/operator/toArray');
require('rxjs/ReplaySubject');
require('rxjs/Observable');
require('rxjs/Subject');
require('rxjs/Subscription');
/** JWT Decode */
require('jwt-decode');
/** jQuery 3.1.0 */
/** During development, use full jquery library, then scale back before production launch */
// require.ensure([], function(require) {
// window.$ = window.jQuery = require('jquery');
// }, "jquery") // 3rd parameter is the name of the chunk during compilation output - chunk.name.js
// require('script!materialize-css/dist/js/materialize.js'); // must pass through "script-loader"
// require('materialize-css/sass/materialize.scss');
// /** KendoUI Professional */
// /** These are for the Angular 2 version of Kendo UI */
// require('@progress/kendo-angular-grid/dist/npm/css/main.css');
// // require('@progress/kendo-angular-buttons/dist/npm/css/main.css');
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
}
else {
}
//# sourceMappingURL=vendors.js.map