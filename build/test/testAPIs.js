'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);

describe('Users test with chai-http', function () {
    // this.timeout(5000);

    it('sign up new user', function () {
        return _chai2.default.request(_index2.default).post('/api/v1/auth/signup').send({
            "firstname": "David",
            "lastname": "McCain",
            "othernames": "",
            "email": "abc@xyz.com",
            "phoneNumber": "93463563563",
            "username": "uname",
            "password": "pword"
        }).then(function (res) {
            (0, _chai.expect)(res).to.have.status(201);
            (0, _chai.expect)(res.body).to.be.an('object');
            (0, _chai.expect)(res.body.data).to.be.an('array');
        });
    });
});