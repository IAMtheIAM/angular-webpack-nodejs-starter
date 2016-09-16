// app.resolver.ts
"use strict";
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.of({ data: 'I am data' });
    };
    DataResolver.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    DataResolver.ctorParameters = [];
    return DataResolver;
}());
exports.DataResolver = DataResolver;
// an array of services to resolve routes with data
exports.APP_RESOLVER_PROVIDERS = [
    DataResolver
];
//# sourceMappingURL=app.resolver.js.map