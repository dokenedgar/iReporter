import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index.js';

chai.use(chaiHttp);

    describe('Intervention Tests', () => {

        describe('create intervention record', () => {
            it('with good parameters', () => {
                return chai.request(app)
                .post('/api/v1/interventions')
                .send({
                    "userid": 64892106,
                    "type": "intervention",
                    "latitude": -40.434534653473453453234234234,
                    "longitude": -179.12345678765432190876,
                    "comment": "Some stories...Some stories...Some stories...Some stories...Some stories..."
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                   // expect(res.body).to.be.an('object');
                   // expect(res.body.data).to.be.an('array');
                });
            });
            it('invalid userid', () => {
                return chai.request(app)
                .post('/api/v1/interventions')
                .send({
                    "userid": '64892106',
                    "type": "intervention",
                    "latitude": -40.434534653473453453234234234,
                    "longitude": -179.12345678765432190876,
                    "comment": "Some stories...Some stories...Some stories...Some stories...Some stories..."
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                   // expect(res.body).to.be.an('object');
                   // expect(res.body.data).to.be.an('array');
                });
            });
            it('invalid latitude', () => {
                return chai.request(app)
                .post('/api/v1/interventions')
                .send({
                    "userid": 64892106,
                    "type": "intervention",
                    "latitude": '-40.434534653473453453234234234',
                    "longitude": -179.12345678765432190876,
                    "comment": "Some stories...Some stories...Some stories...Some stories...Some stories..."
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                   // expect(res.body).to.be.an('object');
                   // expect(res.body.data).to.be.an('array');
                });
            });
            it('invalid longitude', () => {
                return chai.request(app)
                .post('/api/v1/interventions')
                .send({
                    "userid": 64892106,
                    "type": "intervention",
                    "latitude": -40.434534653473453453234234234,
                    "longitude": '-179.12345678765432190876',
                    "comment": "Some stories...Some stories...Some stories...Some stories...Some stories..."
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                   // expect(res.body).to.be.an('object');
                   // expect(res.body.data).to.be.an('array');
                });
            });
            it('invalid comment', () => {
                return chai.request(app)
                .post('/api/v1/interventions')
                .send({
                    "userid": 64892106,
                    "type": "intervention",
                    "latitude": -40.434534653473453453234234234,
                    "longitude": -179.12345678765432190876,
                    "comment": 12334
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                   // expect(res.body).to.be.an('object');
                   // expect(res.body.data).to.be.an('array');
                });
            });
                
        });


        it('Get All Intervention Records', () => {
            return chai.request(app)
            .get('/api/v1/interventions')
            .then((res) => {
                expect(res).to.have.status(200);
            });
        });

        it('Get A Specific Intervention Record', () => {
            return chai.request(app)
            .get('/api/v1/interventions/12345678')
            .then((res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
            });
        });

        describe('Edit An Intervention Record', () => {
            describe('Edit location', () => {
                it('Edit An Intervention location', () => {
                    return chai.request(app)
                    .patch('/api/v1/interventions/12345678/location')
                    .send({
                        "userid": 1234567,
                        "latitude": 23.73453453234234234,
                        "longitude": 80.678765432190876
                    })
                    .then((res) => {
                        expect(res).to.have.status(400);
                        expect(res.body).to.be.an('object');
                    });
                });
                it('invalid latitude', () => {
                    return chai.request(app)
                    .patch('/api/v1/interventions/12345678/location')
                    .send({
                        "userid": 1234567,
                        "latitude": '23.73453453234234234',
                        "longitude": 80.678765432190876
                    })
                    .then((res) => {
                        expect(res).to.have.status(400);
                        expect(res.body).to.be.an('object');
                    });
                });
                it('invalid longitude', () => {
                    return chai.request(app)
                    .patch('/api/v1/interventions/12345678/location')
                    .send({
                        "userid": 1234567,
                        "latitude": 23.73453453234234234,
                        "longitude": '80.678765432190876'
                    })
                    .then((res) => {
                        expect(res).to.have.status(400);
                        expect(res.body).to.be.an('object');
                    });
                });
                it('invalid userid', () => {
                    return chai.request(app)
                    .patch('/api/v1/interventions/12345678/location')
                    .send({
                        "userid": '1234567',
                        "latitude": 23.73453453234234234,
                        "longitude": '80.678765432190876'
                    })
                    .then((res) => {
                        expect(res).to.have.status(400);
                        expect(res.body).to.be.an('object');
                    });
                });
            });
            describe('Edit Comment', () => {
                it('Edit An Intervention Comment', () => {
                    return chai.request(app)
                    .patch('/api/v1/interventions/12345678/comment')
                    .send({
                        "userid": 1234456,
                        "comment": "Wetin we gain"
                    })
                    .then((res) => {
                        expect(res).to.have.status(400);
                        expect(res.body).to.be.an('object');
                    });
                });
                it('invalid id', () => {
                    return chai.request(app)
                    .patch('/api/v1/interventions/12345678/comment')
                    .send({
                        "userid": '1234456',
                        "comment": "Wetin we gain"
                    })
                    .then((res) => {
                        expect(res).to.have.status(400);
                        expect(res.body).to.be.an('object');
                    });
                });
                it('invalid comment', () => {
                    return chai.request(app)
                    .patch('/api/v1/interventions/12345678/comment')
                    .send({
                        "userid": 1234456,
                        "comment": 12431431343
                    })
                    .then((res) => {
                        expect(res).to.have.status(400);
                        expect(res.body).to.be.an('object');
                    });
                });
            });
        });

        it('Delete An Intervention', () => {
            return chai.request(app)
            .del('/api/v1/interventions/12345678')
            .then((res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
            });
        });

    });


