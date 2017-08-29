// var express = require('express');
// var router = express.Router();


module.exports = function (app, router) {

    /** function to Exclude a given path from the Express Router
     */
    var exclude = function (path, middleware) {
        return function (req, res, next) {
            if (path === req.path) {
                return next();
            } else {
                return middleware(req, res, next);
            }
        };
    };

    /** REGISTER OUR ROUTES
     *  This is the prefix
     */
    app.use(exclude('/app.js/debug-82D43WfnR3&0s3A$0fhJ35E3Clo@D23042f', router));

    /** Tell express to ignore this route. Necessary for Node-Inspector to work in Azure
     *  Debugging this app live in Azure is available at: http://monsoonnodejs.azurewebsites.net/app.js/debug/8fn30s0fh33lo230/
     *  The hash is there to secure it from anyone guessing the URL since debugging can freeze the app in production.
     */
    router.get('/app.js/debug-82D43WfnR3&0s3A$0fhJ35E3Clo@D23042f', function (req, res, next) {
        res.render('index', {
            title: 'Excluded route',
        });
    });

    return router
};


