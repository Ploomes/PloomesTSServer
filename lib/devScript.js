"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var PloomesServer_1 = require("./Connection/PloomesServer");
function test() {
    console.log('No test aqui');
    var userKey = '4862F77A37BA32F3C0A85ACF2989AD3396569139BB0684A0974B93A6D87695A3023A3C3460889B62A48C56C534DD4652EC4FF879304ADCB058E0D1EFD529DFB0';
    var server = new PloomesServer_1.PloomesServer({
        authMethod: 'validUserKey',
        userKey: userKey,
        baseUrl: 'https://app9-api2.ploomes.com/',
    });
    server
        .get('Self')
        .then(function (dados) { return console.log(dados); })
        .catch(function (error) {
        console.log(error);
    });
}
exports.test = test;
