// var router = require('express').Router();

module.exports = function (router) {

    router.get('/', function (req, res) {
        res.render('index/index');
    });

    return router;
}
