import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index.js';
let jwtToken;
let interventionId;
chai.use(chaiHttp);

describe('Intervention Tests', () => {

    describe('create intervention record', () => {
        it('sign up new user', () => {
            return chai.request(app)
                .post('/api/v1/auth/signup')
                .send({
                    "firstname": "David",
                    "lastname": "McCain",
                    "othernames": "",
                    "email": "abc@xyz.com",
                    "phoneNumber": "93463563563",
                    "username": "mission",
                    "password": "impossible"
                })
                .then((res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object')
                    expect(res.body.data).to.be.an('array');
                   
                    
                });
        });

        it('user authentication - user found', () => {
            return chai.request(app)
            .post('/api/v1/auth/login')
            .send({
                username: 'mission',
                password: 'impossible'
              })
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                jwtToken = res.body.data[0].token;
                console.log(res.body);
            });
        });

        it('create intervention - with good parameters', () => {
            return chai.request(app)
                .post('/api/v1/interventions')
                .set('authorization', `${jwtToken}`)
                .send({

                    "latitude": -40.434534653473453453234234234,
                    "longitude": -179.12345678765432190876,
                    "comment": "Some stories...Some stories...Some stories...Some stories...Some stories..."
                })
                .then((res) => {
                    expect(res).to.have.status(201);
                    interventionId = res.body.data[0].id;
                    expect(res.body).to.be.an('object');
                     expect(res.body.data).to.be.an('array');
                });
        });

        it('create intervention - invalid latitude', () => {
            return chai.request(app)
                .post('/api/v1/interventions')
                .set('authorization', `${jwtToken}`)
                .send({
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
        it('creat intervention - invalid longitude', () => {
            return chai.request(app)
                .post('/api/v1/interventions')
                .set('authorization', `${jwtToken}`)
                .send({


                    "latitude": -40.434534653473453453234234234,
                    "longitude": '-179.12345678765432190876',
                    "comment": "Some stories...Some stories...Some stories...Some stories...Some stories..."
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                    expect(res.body).to.be.an('object');
                    //expect(res.body).to.contain('error');
                });
        });
        it('create intervention - invalid comment', () => {
            return chai.request(app)
                .post('/api/v1/interventions')
                .set('authorization', `${jwtToken}`)
                .send({


                    "latitude": -40.434534653473453453234234234,
                    "longitude": -179.12345678765432190876,
                    "comment": 12334
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                    expect(res.body).to.be.an('object');
                    // expect(res.body.data).to.be.an('array');
                });
        });

        it('Get All Intervention Records', () => {
            return chai.request(app)
                .get('/api/v1/interventions')
                .set('authorization', `${jwtToken}`)
                .then((res) => {
                    expect(res).to.have.status(200);
                });
        });

        it('Get A Specific Intervention Record', () => {
            return chai.request(app)
                .get(`/api/v1/interventions/${interventionId}`)
                .set('authorization', `${jwtToken}`)
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                });
        });
    });

    describe('Edit An Intervention Record', () => {

        it('Edit An Intervention location', () => {
            return chai.request(app)
                .patch(`/api/v1/interventions/${interventionId}/location`)
                .set('authorization', `${jwtToken}`)
                .send({

                    "latitude": 23.73453453234234234,
                    "longitude": 80.678765432190876
                })
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                });
        });
        it('invalid latitude', () => {
            return chai.request(app)
                .patch(`/api/v1/interventions/${interventionId}/location`)
                .set('authorization', `${jwtToken}`)
                .send({

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
                .patch(`/api/v1/interventions/${interventionId}/location`)
                .set('authorization', `${jwtToken}`)
                .send({

                    "latitude": 23.73453453234234234,
                    "longitude": '80.678765432190876'
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                    expect(res.body).to.be.an('object');
                });
        });

        it('Edit An Intervention Comment', () => {
            return chai.request(app)
                .patch(`/api/v1/interventions/${interventionId}/comment`)
                .set('authorization', `${jwtToken}`)
                .send({

                    "comment": "Wetin we gain"
                })
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                });
        });

        it('invalid comment', () => {
            return chai.request(app)
                .patch(`/api/v1/interventions/${interventionId}/comment`)
                .set('authorization', `${jwtToken}`)
                .send({

                    "comment": 12431431343
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                    expect(res.body).to.be.an('object');
                });
        });
        it('Delete An Intervention', () => {
            return chai.request(app)
                .del(`/api/v1/interventions/${interventionId}`)
                .set('authorization', `${jwtToken}`)
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                });
        });

    });



});