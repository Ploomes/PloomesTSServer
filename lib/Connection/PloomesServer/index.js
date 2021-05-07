"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PloomesServer = void 0;
var axios_1 = __importDefault(require("axios"));
var PloomesServer = /** @class */ (function () {
    function PloomesServer(options) {
        this.baseUrl = '';
        this.userKey = '';
        this.email = '';
        this.psw = '';
        this.timeout = 0;
        this.baseUrl = options.baseUrl;
        if (options.timeout) {
            this.timeout = options.timeout;
        }
        switch (options.authMethod) {
            case 'validUserKey':
                this.userKey = options.userKey;
                break;
            case 'emailAndPassword':
                this.email = options.email;
                this.psw = options.psw;
                break;
            default:
                break;
        }
    }
    /**
     * login
     * Logs into Ploomes at the provided baseurl with email and psw.
     * returns void
     */
    PloomesServer.prototype.login = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            axios_1.default
                .post(_this.baseUrl + 'Self/Login', { Email: _this.email, Password: _this.psw }, { headers: { 'Content-Type': 'application/json' } })
                .then(function (response) {
                console.log('response', response);
                if (response.data) {
                    var value = response.data.value;
                    if (Array.isArray(value) && value.length) {
                        _this.userKey = value[0].UserKey;
                    }
                    res(value);
                }
            })
                .catch(function (e) { return rej(e.response.data); });
        });
    };
    /**
     * get
     * Sends a GET request to specified url.
     * returns Promise<any[]>
     */
    PloomesServer.prototype.get = function (url) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.request(url, 'GET').then(res).catch(rej);
        });
    };
    /**
     * delete
     * Deletes the Id specified at the url.
     * returns Promise<any[]>
     */
    PloomesServer.prototype.delete = function (url, body) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.request(url, 'DELETE', body || undefined)
                .then(res)
                .catch(rej);
        });
    };
    /**
     * post
     * Sends a POST request to any Ploomes endpoint with provided body.
     * returns Promise<any[]>
     */
    PloomesServer.prototype.post = function (url, body) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.request(url, 'POST', body).then(res).catch(rej);
        });
    };
    /**
     * patch
     * Sends a PATCH request to any ploomes endpoint with provided body, updating item with the Id provided at the url.
     * returns Promise<any[]>
     */
    PloomesServer.prototype.patch = function (url, body) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.request(url, 'PATCH', body).then(res).catch(rej);
        });
    };
    PloomesServer.prototype.request = function (url, method, body) {
        var _this = this;
        return new Promise(function (res, rej) {
            axios_1.default
                .request({
                url: _this.baseUrl + url,
                method: method,
                data: body || {},
                headers: {
                    'Content-Type': 'application/json',
                    'User-Key': _this.userKey,
                },
            })
                .then(function (_a) {
                var data = _a.data;
                if (data) {
                    if (_this.timeout) {
                        setTimeout(function () {
                            res(data.value || data.Image);
                        }, _this.timeout);
                    }
                    else {
                        res(data.value || data.Image);
                    }
                }
                else {
                    if (_this.timeout) {
                        setTimeout(function () {
                            res([]);
                        }, _this.timeout);
                    }
                    else {
                        res([]);
                    }
                }
            })
                .catch(function (error) {
                var _a, _b;
                if (_this.timeout) {
                    setTimeout(function () {
                        var _a, _b;
                        rej(((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.value) || 'Invalid Request.');
                    }, _this.timeout);
                }
                else {
                    rej(((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.value) || 'Invalid Request.');
                }
            });
        });
    };
    return PloomesServer;
}());
exports.PloomesServer = PloomesServer;
