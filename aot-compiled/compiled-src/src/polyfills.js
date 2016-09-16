/**
 * This line modifies output.publicPath option at browser runtime, adding current protocol and host. If you have a custom publicPath, just add it to the end of
 * prefix.
 *
 This solution requires you to have no output.publicPath specified in config or command line.
 If you need to pass publicPath from command line or webpack configuration file you can use environment variables together with DefinePlugin:
 */
/**
 // Example Code
 // webpack.config.js

 module.exports = {
  pluginns: [
    new webpack.DefinePlugin({
      'process.env.WEBPACK_PUBLIC_PATH': JSON.stringify(process.env.WEBPACK_PUBLIC_PATH)
    })
  ]
}

 // topmostEntryPoint.js
 __webpack_public_path__ = window.location.protocol + "//" + window.location.host + "/" + process.env.WEBPACK_PUBLIC_PATH;

 */
// __webpack_public_path__ = window.location.protocol + "//" + window.location.host + "/";
"use strict";
/**
 * POLYFILLS
 */
// import 'ie-shim'; // Internet Explorer 9 support
// import 'core-js/es6';
// Added parts of es6 which are necessary for your project or your browser support requirements.
require('core-js/es6/symbol');
require('core-js/es6/object');
require('core-js/es6/function');
require('core-js/es6/parse-int');
require('core-js/es6/parse-float');
require('core-js/es6/number');
require('core-js/es6/math');
require('core-js/es6/string');
require('core-js/es6/date');
require('core-js/es6/array');
require('core-js/es6/regexp');
require('core-js/es6/map');
require('core-js/es6/set');
require('core-js/es6/weak-map');
require('core-js/es6/weak-set');
require('core-js/es6/typed');
require('core-js/es6/reflect');
// see issue https://github.com/AngularClass/angular2-webpack-starter/issues/709
// import 'core-js/es6/promise';
require('core-js/es7/reflect');
require('zone.js/dist/zone');
// Typescript emit helpers polyfill
require('ts-helpers');
if ('production' === ENV) {
}
else {
    // Development
    Error.stackTraceLimit = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map