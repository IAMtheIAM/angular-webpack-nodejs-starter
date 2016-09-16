"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Logging = (function () {
    function Logging() {
    }
    Logging.isEnabled = {
        light: true,
        verbose: false // Detailed logging
    };
    Logging.normal = {
        'gray': 'color: #1B2B34; background-color: #222222',
        'red': 'color: #DB4C4C; background-color: #222222',
        'orange': 'color: #F99157; background-color: #222222',
        'yellow': 'color: #FFFF00; background-color: #222222',
        'green': 'color: #99C794; background-color: #222222',
        'teal': 'color: #5FB3B3; background-color: #222222',
        'blue': 'color: #6699CC; background-color: #222222',
        'purple': 'color: #C594C5; background-color: #222222',
        'black': 'color: #000000; background-color: #cccccc',
        'white': 'color: #FFFFFF; background-color: #222222',
        'brown': 'color: #AB7967; background-color: #222222',
        'lime': 'color: #BADA55; background-color: #222222'
    };
    Logging.bold = {
        'gray': 'font-weight: bold;' + Logging.normal.gray,
        'red': 'font-weight: bold;' + Logging.normal.red,
        'orange': 'font-weight: bold;' + Logging.normal.orange,
        'yellow': 'font-weight: bold;' + Logging.normal.yellow,
        'green': 'font-weight: bold;' + Logging.normal.green,
        'teal': 'font-weight: bold;' + Logging.normal.teal,
        'blue': 'font-weight: bold;' + Logging.normal.blue,
        'purple': 'font-weight: bold;' + Logging.normal.purple,
        'black': 'font-weight: bold;' + Logging.normal.black,
        'white': 'font-weight: bold;' + Logging.normal.white,
        'brown': 'font-weight: bold;' + Logging.normal.brown,
        'lime': 'font-weight: bold;' + Logging.normal.lime
    };
    Logging.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Logging.ctorParameters = [];
    return Logging;
}());
exports.Logging = Logging;
var UtilityService = (function () {
    function UtilityService(router) {
        this._router = router;
    }
    UtilityService.prototype.convertDateTime = function (date) {
        var _formattedDate = new Date(date.toString());
        return _formattedDate.toDateString();
    };
    UtilityService.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    UtilityService.prototype.navigateToLogin = function () {
        this.navigate('/login');
    };
    UtilityService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    UtilityService.ctorParameters = [
        { type: router_1.Router, },
    ];
    return UtilityService;
}());
exports.UtilityService = UtilityService;
/*
* For some reason '$' and 'jQuery' are not getting loaded into this component, even though the
* webpack expose loader is configured to make it available globally, so redeclare it here
*/
exports.$ = require('jquery');
exports.jQuery = exports.$;
//# sourceMappingURL=utility.service.js.map