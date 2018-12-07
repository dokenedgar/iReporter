'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require('../../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);

describe('iReporter Test Suites', function () {

    describe('Red-Flag Tests - ', function () {
        // this.timeout(5000);

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

        it('create a red-flag record', function () {
            return _chai2.default.request(_index2.default).post('/api/v1/red-flags').send({
                "userid": 64892106,
                "type": "red-flag",
                "latitude": -40.434534653473453453234234234,
                "longitude": -179.12345678765432190876,
                "comment": "Some stories...Some stories...Some stories...Some stories...Some stories..."
            }).then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                // expect(res.body).to.be.an('object');
                // expect(res.body.data).to.be.an('array');
            });
        });

        it('Get All Red-Flags', function () {
            return _chai2.default.request(_index2.default).get('/api/v1/red-flags').then(function (res) {
                (0, _chai.expect)(res).to.have.status(200);
            });
        });

        it('Get A Specific Red-Flag', function () {
            return _chai2.default.request(_index2.default).get('/api/v1/red-flags/12345678').then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                (0, _chai.expect)(res.body).to.be.an('object');
            });
        });

        it('Edit A Red-Flag location', function () {
            return _chai2.default.request(_index2.default).patch('/api/v1/red-flags/12345678/location').send({
                "latitude": 23.434534653473453453234234234,
                "longitude": 80.12345678765432190876
            }).then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                (0, _chai.expect)(res.body).to.be.an('object');
            });
        });

        it('Edit A Red-Flag Comment', function () {
            return _chai2.default.request(_index2.default).patch('/api/v1/red-flags/12345678/comment').send({
                "comment": "Something new.."
            }).then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                (0, _chai.expect)(res.body).to.be.an('object');
            });
        });

        it('Delete A Red-Flag', function () {
            return _chai2.default.request(_index2.default).del('/api/v1/red-flags/12345678').then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                (0, _chai.expect)(res.body).to.be.an('object');
            });
        });
    });

    describe('Intervention Tests', function () {

        it('create An intervention record', function () {
            return _chai2.default.request(_index2.default).post('/api/v1/interventions').send({
                "userid": 64892106,
                "type": "intervention",
                "latitude": -40.434534653473453453234234234,
                "longitude": -179.12345678765432190876,
                "comment": "Some stories...Some stories...Some stories...Some stories...Some stories..."
            }).then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                // expect(res.body).to.be.an('object');
                // expect(res.body.data).to.be.an('array');
            });
        });

        it('Get All Intervention Records', function () {
            return _chai2.default.request(_index2.default).get('/api/v1/interventions').then(function (res) {
                (0, _chai.expect)(res).to.have.status(200);
            });
        });

        it('Get A Specific Intervention Record', function () {
            return _chai2.default.request(_index2.default).get('/api/v1/interventions/12345678').then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                (0, _chai.expect)(res.body).to.be.an('object');
            });
        });

        it('Edit An Intervention location', function () {
            return _chai2.default.request(_index2.default).patch('/api/v1/interventions/12345678/location').send({
                "latitude": 23.73453453234234234,
                "longitude": 80.678765432190876
            }).then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                (0, _chai.expect)(res.body).to.be.an('object');
            });
        });

        it('Edit An Intervention Comment', function () {
            return _chai2.default.request(_index2.default).patch('/api/v1/interventions/12345678/comment').send({
                "comment": "Wetin we gain"
            }).then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                (0, _chai.expect)(res.body).to.be.an('object');
            });
        });

        it('Delete An Intervention', function () {
            return _chai2.default.request(_index2.default).del('/api/v1/interventions/12345678').then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                (0, _chai.expect)(res.body).to.be.an('object');
            });
        });
    });

    describe('Admin Tests', function () {
        it('Edit Status - Intervention', function () {
            return _chai2.default.request(_index2.default).patch('/api/v1/admin/12345678').send({
                "type": "intervention",
                "status": "rejected"
            }).then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                (0, _chai.expect)(res.body).to.be.an('object');
            });
        });

        it('Edit Status - Intervention', function () {
            return _chai2.default.request(_index2.default).patch('/api/v1/admin/12345678').send({
                "type": "red-flag",
                "status": "rejected"
            }).then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                (0, _chai.expect)(res.body).to.be.an('object');
            });
        });
    });
});