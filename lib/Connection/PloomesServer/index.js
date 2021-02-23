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
        this.baseUrl = options.baseUrl;
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
                if (response.data) {
                    var value = response.data.value;
                    if (Array.isArray(value) && value.length) {
                        _this.userKey = value[0].UserKey;
                    }
                    res(value);
                }
            });
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
            res(_this.request(url, 'GET'));
        });
    };
    /**
     * delete
     * Deletes the Id specified at the url.
     * returns Promise<any[]>
     */
    PloomesServer.prototype.delete = function (url) {
        var _this = this;
        return new Promise(function (res, rej) {
            res(_this.request(url, 'DELETE'));
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
            res(_this.request(url, 'POST', body));
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
            res(_this.request(url, 'PATCH', body));
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
                    res(data.value);
                }
            })
                .catch(function (error) {
                throw new Error(error);
            });
        });
    };
    return PloomesServer;
}());
exports.PloomesServer = PloomesServer;
