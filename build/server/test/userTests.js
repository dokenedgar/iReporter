'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require('../../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);

describe('iReporter User Test Suites', function () {

    it('sign up new user', function () {
        return _chai2.default.request(_index2.default).post('/api/v1/auth/signup').send({
            "firstname": "David",
            "lastname": "McCain",
            "othernames": "",
            "email": "abc@xyz.com",
            "phoneNumber": "93463563563",
            "username": "youare",
            "password": "perfect"
        }).then(function (res) {
            (0, _chai.expect)(res).to.have.status(201);
            (0, _chai.expect)(res.body).to.be.an('object');
            (0, _chai.expect)(res.body.data).to.be.an('array');
        });
    });

    it('user authentication - user found', function () {
        return _chai2.default.request(_index2.default).post('/api/v1/auth/login').send({
            username: 'youare',
            password: 'perfect'
        }).then(function (res) {
            (0, _chai.expect)(res).to.have.status(200);
            (0, _chai.expect)(res.body).to.be.an('object');
        });
    });

    it('user authentication - user NOT found', function () {
        return _chai2.default.request(_index2.default).post('/api/v1/auth/login').send({
            username: 'youarenot',
            password: 'perfect'
        }).then(function (res) {
            (0, _chai.expect)(res).to.have.status(400);
            (0, _chai.expect)(res.body).to.be.an('object');
        });
    });
});