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

/**
 * POLYFILLS
 */

// import 'ie-shim'; // Internet Explorer 9 support

// import 'core-js/es6';
// Added parts of es6 which are necessary for your project or your browser support requirements.
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/weak-map';
import 'core-js/es6/weak-set';
import 'core-js/es6/typed';
import 'core-js/es6/reflect';
// see issue https://github.com/AngularClass/angular2-webpack-starter/issues/709
// import 'core-js/es6/promise';

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// Typescript emit helpers polyfill
import 'ts-helpers';

if ('production' === ENV) {
   // Production

}
else {
   // Development

   Error.stackTraceLimit = Infinity;

   require('zone.js/dist/long-stack-trace-zone');

}
