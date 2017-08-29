// var router = require('express').Router();

module.exports = function (router) {

    router.route('/users/summary')

        .all(function (req, res, next) {
            // runs for all HTTP verbs first
            // think of it as route specific middleware!
            next();
        })

        // (accessed at POST http://localhost:5000/api/users/summary)
        .post(function (req, res) {
            // console.log('POST /api/taxreports/summary');
            // console.log('Received Tax Summary UPIDs: ' + (req.body.Upids || req.body.upids));
            // makePDFmodule.makePDF(req.body, res, 'taxSummaryReport', 'POST');
        })

        // (accessed at GET http://localhost:8080/api/users/summary)
        .get(function (req, res) {
            var errMessage = '401 Not Allowed';
            console.log(errMessage);

            res.status(401);
            res.json({mock: 'data'});
            // res.render('index', {
            //     message: errMessage,
            //     error: errMessage,
            //     title: errMessage
            // });
        });

    return router;
};
