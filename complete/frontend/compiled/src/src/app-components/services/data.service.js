"use strict";
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.set = function (baseUri, pageSize) {
        this._baseUri = baseUri;
        this._pageSize = pageSize;
    };
    DataService.prototype.get = function (url) {
        return this.http.get(url);
    };
    // get(page: number) {
    //    var uri = this._baseUri + page.toString() + '/' + this._pageSize.toString();
    //
    //    return this.http.get(uri)
    //               .map(response => (<Response>response));
    // }
    DataService.prototype.post = function (data, mapJson) {
        if (mapJson === void 0) { mapJson = true; }
        if (mapJson)
            return this.http.post(this._baseUri, data)
                .map(function (response) { return response.json(); });
        else
            return this.http.post(this._baseUri, data);
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this._baseUri + '/' + id.toString())
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.deleteResource = function (resource) {
        return this.http.delete(resource)
            .map(function (response) { return response.json(); });
    };
    DataService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    DataService.ctorParameters = [
        { type: http_1.Http, },
    ];
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map