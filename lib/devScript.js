"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var PloomesServer_1 = require("./Connection/PloomesServer");
function test() {
    console.log('No test aqui');
    var server = new PloomesServer_1.PloomesServer({
        authMethod: 'emailAndPassword',
        email: 'tiago.provenzano@ploomes.com',
        psw: '1234',
        baseUrl: 'https://api2.ploomes.com/',
    });
    server.login();
}
exports.test = test;
