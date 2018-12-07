'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require('../../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);

describe('Intervention Tests', function () {

    describe('create intervention record', function () {
        it('with good parameters', function () {
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
        it('invalid userid', function () {
            return _chai2.default.request(_index2.default).post('/api/v1/interventions').send({
                "userid": '64892106',
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
        it('invalid latitude', function () {
            return _chai2.default.request(_index2.default).post('/api/v1/interventions').send({
                "userid": 64892106,
                "type": "intervention",
                "latitude": '-40.434534653473453453234234234',
                "longitude": -179.12345678765432190876,
                "comment": "Some stories...Some stories...Some stories...Some stories...Some stories..."
            }).then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                // expect(res.body).to.be.an('object');
                // expect(res.body.data).to.be.an('array');
            });
        });
        it('invalid longitude', function () {
            return _chai2.default.request(_index2.default).post('/api/v1/interventions').send({
                "userid": 64892106,
                "type": "intervention",
                "latitude": -40.434534653473453453234234234,
                "longitude": '-179.12345678765432190876',
                "comment": "Some stories...Some stories...Some stories...Some stories...Some stories..."
            }).then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                // expect(res.body).to.be.an('object');
                // expect(res.body.data).to.be.an('array');
            });
        });
        it('invalid comment', function () {
            return _chai2.default.request(_index2.default).post('/api/v1/interventions').send({
                "userid": 64892106,
                "type": "intervention",
                "latitude": -40.434534653473453453234234234,
                "longitude": -179.12345678765432190876,
                "comment": 12334
            }).then(function (res) {
                (0, _chai.expect)(res).to.have.status(400);
                // expect(res.body).to.be.an('object');
                // expect(res.body.data).to.be.an('array');
            });
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

    describe('Edit An Intervention Record', function () {
        describe('Edit location', function () {
            it('Edit An Intervention location', function () {
                return _chai2.default.request(_index2.default).patch('/api/v1/interventions/12345678/location').send({
                    "userid": 1234567,
                    "latitude": 23.73453453234234234,
                    "longitude": 80.678765432190876
                }).then(function (res) {
                    (0, _chai.expect)(res).to.have.status(400);
                    (0, _chai.expect)(res.body).to.be.an('object');
                });
            });
            it('invalid latitude', function () {
                return _chai2.default.request(_index2.default).patch('/api/v1/interventions/12345678/location').send({
                    "userid": 1234567,
                    "latitude": '23.73453453234234234',
                    "longitude": 80.678765432190876
                }).then(function (res) {
                    (0, _chai.expect)(res).to.have.status(400);
                    (0, _chai.expect)(res.body).to.be.an('object');
                });
            });
            it('invalid longitude', function () {
                return _chai2.default.request(_index2.default).patch('/api/v1/interventions/12345678/location').send({
                    "userid": 1234567,
                    "latitude": 23.73453453234234234,
                    "longitude": '80.678765432190876'
                }).then(function (res) {
                    (0, _chai.expect)(res).to.have.status(400);
                    (0, _chai.expect)(res.body).to.be.an('object');
                });
            });
            it('invalid userid', function () {
                return _chai2.default.request(_index2.default).patch('/api/v1/interventions/12345678/location').send({
                    "userid": '1234567',
                    "latitude": 23.73453453234234234,
                    "longitude": '80.678765432190876'
                }).then(function (res) {
                    (0, _chai.expect)(res).to.have.status(400);
                    (0, _chai.expect)(res.body).to.be.an('object');
                });
            });
        });
        describe('Edit Comment', function () {
            it('Edit An Intervention Comment', function () {
                return _chai2.default.request(_index2.default).patch('/api/v1/interventions/12345678/comment').send({
                    "userid": 1234456,
                    "comment": "Wetin we gain"
                }).then(function (res) {
                    (0, _chai.expect)(res).to.have.status(400);
                    (0, _chai.expect)(res.body).to.be.an('object');
                });
            });
            it('invalid id', function () {
                return _chai2.default.request(_index2.default).patch('/api/v1/interventions/12345678/comment').send({
                    "userid": '1234456',
                    "comment": "Wetin we gain"
                }).then(function (res) {
                    (0, _chai.expect)(res).to.have.status(400);
                    (0, _chai.expect)(res.body).to.be.an('object');
                });
            });
            it('invalid comment', function () {
                return _chai2.default.request(_index2.default).patch('/api/v1/interventions/12345678/comment').send({
                    "userid": 1234456,
                    "comment": 12431431343
                }).then(function (res) {
                    (0, _chai.expect)(res).to.have.status(400);
                    (0, _chai.expect)(res.body).to.be.an('object');
                });
            });
        });
    });

    it('Delete An Intervention', function () {
        return _chai2.default.request(_index2.default).del('/api/v1/interventions/12345678').then(function (res) {
            (0, _chai.expect)(res).to.have.status(400);
            (0, _chai.expect)(res.body).to.be.an('object');
        });
    });
});