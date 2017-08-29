// var router = require('express').Router();

module.exports = function (router) {

    router.route('/users/detail')

        .all(function (req, res, next) {
            // runs for all HTTP verbs first
            // think of it as route specific middleware!
            next();
        })

        // (accessed at POST http://localhost:5000/api/users/detail)
        .post(function (req, res) {
            // console.log('POST /api/taxreports/detail');
            // console.log('Received Tax Detail UPIDs: ' + (req.body.Upids || req.body.upids));
            // makePDFmodule.makePDF(req.body, res, 'taxDetailReport', 'POST');
        })

        // (accessed at GET http://localhost:8080/api/users/detail)
        .get(function (req, res) {
            var errMessage = '401 Not Allowed';
            console.log(errMessage);

            res.status(401);
            res.json({mock: 'cool'});
            // res.render('index', {
            //     message: errMessage,
            //     error: errMessage,
            //     title: errMessage
            // });
        });

    return router;
};
