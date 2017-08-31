/* Configuration by Nathan Parson on 06/02/2017 **/
var appInsights = require('applicationinsights'); // azure application insights
appInsights.setup('your_key').start(); // key also set in azure APPINSIGHTS_INSTRUMENTATIONKEY environment variable

var glob = require('glob');
var path = require('path');
var router = require('express').Router();
var app = require('../config/server-config');
var config = require('../config/env-config');

/**
 *  Register the application routes (Controllers)
 *  WARNING: ORDER OF THE ROUTE MIDDLEWARE MATTERS.
 *
 *  Note: Currently Azure won't run the Webpack server.bundle.js, something fails. So I am running the app from source (unbundled), but left in the code necessary for webpack to compile this module, with conditional code to make it work in both cases
 */

// 1) Main index route. This must be first!
app.use('/', require('./routes/index/index.router.js')(router));

// 2) These routes are dynamically registered from the API directory

// Include routes the non-webpack way i.e. for running the app from unbundled source code

// Azure will run this, Webpack will ignore it
if (!typeof __webpack_require__ === 'function') {

    var apiControllers = glob.sync(path.join(config.root + '/app/routes/api/**/*.js'));
    apiControllers.forEach(function (controller) {
        // All of our these routes will be prefixed with /api
        app.use('/api', require(controller)(router));
    });
}

// Webpack will run this, Azure will run ignore it
if (typeof __webpack_require__ === 'function') {
    // // PREFERRED WAY TO DO THE DYNAMIC WEBPACK REQUIRE
    // See: https://webpack.github.io/docs/context.html#require-context
    // Returns an array containing all the matching modules
    var req = require.context('./routes/api', true, /\.(js)$/);
    req.keys().forEach(function (module) {
        var thisRoute = req(module); // Returns require statement i.e. require("./a.router.js");
        app.use('/api', thisRoute(router)); // All of our these routes will be prefixed with /api
    });
}
// // ALTERNATE WAY TO DO THE DYNAMIC WEBPACK REQUIRE
// // this tells webpack to search and require all matches found. Format: (directory, recursiveFlag, RegEx)
// var req = require.context('./routes/api', true, /\.(js)$/);
// var modules = function(requireContext){
//     // requires and returns all modules that match
//     return requireContext.keys().map(requireContext);
// }(req); // returns an array containing all the required matching modules
// // console.log(modules);
// modules.forEach(function (module) {
//     // All of our these routes will be prefixed with /api
//     app.use('/api', module(router));
// });

// 3) Routes to be excluded, typically for remote debugging in browser
require('./routes/index/exclude.router.js')(app, router);

// 4) Error handlers must be the last route!
require('./routes/error/error.router.js')(app);

// 5) Start the app, listening on given port
app.listen(config.port, function () {
    console.log(`Express server listening on: ${config.port}`);
    console.log(`Remote access URL: ${config.localIP}:${config.port}`);
    console.log('ENV: ' + app.locals.ENV);
});

// 6) Export the app instance for unit testing via supertest
module.exports = app;
