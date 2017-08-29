/*
 * README
 * any changes to this file and you have to run `npm run dll` to generate the bundle
 *
 * Polyfills
 * Vendors
 * RxJS
 */

// Polyfills
export function polyfills(env) {
   return [
      // 'core-js',

      'core-js/es6/symbol',
      'core-js/es6/object',
      'core-js/es6/function',
      'core-js/es6/parse-int',
      'core-js/es6/parse-float',
      'core-js/es6/number',
      'core-js/es6/math',
      'core-js/es6/string',
      'core-js/es6/date',
      'core-js/es6/array',
      'core-js/es6/regexp',
      'core-js/es6/map',
      'core-js/es6/set',
      'core-js/es6/weak-map',
      'core-js/es6/weak-set',
      'core-js/es6/typed',
      'core-js/es6/reflect',
      // 'core-js/es6/promise', // problem with firefox
      'core-js/es7/reflect',

      // zone.js
      'zone.js/dist/zone',
      'zone.js/dist/long-stack-trace-zone',

      // typescript helpers
      'ts-helpers',
   ];
}

// Angular 2 and other Vendor imports
export function vendors(env) {
   return [

      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/core',
      '@angular/common',
      '@angular/forms',
      '@angular/http',
      '@angular/router',

      '@angularclass/hmr',
      'jwt-decode',

      // 'rxjs',
      // '@angular/compiler',
      // '@angularclass/form-validators',
   ];
}

// RxJS
export function rxjs(env) {
   return [
      'rxjs/add/observable/of',
      'rxjs/add/operator/catch',
      'rxjs/add/operator/debounceTime',
      'rxjs/add/operator/distinctUntilChanged',
      'rxjs/add/operator/do',
      'rxjs/add/operator/map',
      'rxjs/add/operator/switchMap',
      'rxjs/add/operator/merge',
      'rxjs/Observable',
      'rxjs/Subscription',

      // 'rxjs/add/operator/mergeMap',
      // 'rxjs/Subject',
      // 'rxjs/BehaviorSubject',
   ];
}
