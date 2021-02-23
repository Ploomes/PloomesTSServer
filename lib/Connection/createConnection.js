"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = void 0;
var axios_1 = __importDefault(require("axios"));
exports.createConnection = function (baseUrl) {
    var connection = {
        userKey: "",
        baseUrl: baseUrl,
        login: function (email, password) {
            return new Promise(function (res, rej) {
                axios_1.default
                    .post(connection.baseUrl + "Self/Login?", { Email: email, Password: password }, { headers: { "Content-Type": "application/json" } })
                    .then(function (value) {
                    var _a, _b, _c, _d;
                    if (value.data) {
                        console.log(value.data);
                        if ((_b = (_a = value.data) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b[0]) {
                            var userSelf = (_d = (_c = value.data) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d[0];
                            connection.userKey = userSelf.UserKey;
                        }
                        else {
                            rej(value.data.value);
                        }
                        res(connection.userKey);
                    }
                })
                    .catch(function (error) {
                    throw new Error(error);
                });
            });
        },
        get: function (url) {
            return new Promise(function (res, rej) {
                connection.request(url, "GET", {}).then(function (data) {
                    res(data);
                });
            });
        },
        post: function (url, body) {
            return new Promise(function (res, rej) {
                connection.request(url, "POST", body).then(function (data) {
                    console.log(data);
                    res(data);
                });
            });
        },
        patch: function (url, body) {
            return new Promise(function (res, rej) {
                connection.request(url, "PATCH", body).then(function (data) {
                    console.log(data);
                    res(data);
                });
            });
        },
        delete: function (url) {
            return new Promise(function (res, rej) {
                connection.request(url, "DELETE", {}).then(function (data) {
                    console.log(data);
                    res(data);
                });
            });
        },
        request: function (url, method, body) {
            return new Promise(function (res, rej) {
                axios_1.default
                    .request({
                    method: method,
                    url: connection.baseUrl + url,
                    headers: {
                        "Content-Type": "application/json",
                        "User-Key": connection.userKey,
                    },
                    data: body || {},
                })
                    .then(function (response) {
                    if (response.data) {
                        res(response.data.value);
                    }
                })
                    .catch(function (error) {
                    throw new Error(error);
                });
            });
        },
    };
    return connection;
};
