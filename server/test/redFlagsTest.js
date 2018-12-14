import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index.js';

let jwtToken;
let redFlagId;
chai.use(chaiHttp);

describe('iReporter Test Suites', () => {

    describe('Red-Flag Tests - ', () => {
        // this.timeout(5000);
    
        it('sign up new user', () => {
            return chai.request(app)
            .post('/api/v1/auth/signup')
            .send({
                "firstname": "David",
                "lastname": "McCain",
                "othernames": "",
                "email": "pabc@xyz.com",
                "phoneNumber": "93463563563",
                "username": "tokyo",
                "password": "atoms"
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
                email: 'pabc@gmail.com',
                password: 'atoms'
              })
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                //console.log(res.body);
                jwtToken = res.body.data[0].token;
            });
        });

    
        it('create a red-flag record', () => {
            return chai.request(app)
            .post('/api/v1/red-flags')
            .set('authorization', `${jwtToken}`)
            .send({
                "title": 'the title of the red flag record to be inserted, its kinda long',
                "latitude": -40.434534653473453453234234234,
                "longitude": -179.12345678765432190876,
                "comment": "Some stories...Some stories...Some stories...Some stories...Some stories..."
            })
            .then((res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body.data).to.be.an('array');
                redFlagId = res.body.data[0].id;
            });
        });
    
        it('create red flag - invalid latitude', () => {
            return chai.request(app)
                .post('/api/v1/red-flags')
                .set('authorization', `${jwtToken}`)
                .send({
                    "title": 'the title of the red flag record to be inserted, its kinda long',
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
        it('create red flag - invalid longitude', () => {
            return chai.request(app)
                .post('/api/v1/red-flags')
                .set('authorization', `${jwtToken}`)
                .send({

                    "title": 'the title of the red flag record to be inserted, its kinda long',
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
        it('create red flag - invalid comment', () => {
            return chai.request(app)
                .post('/api/v1/red-flags')
                .set('authorization', `${jwtToken}`)
                .send({
                    "title": 'the title of the red flag record to be inserted, its kinda long',

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

        it('Get All Red-Flags', () => {
            return chai.request(app)
            .get('/api/v1/red-flags')
            .set('authorization', `${jwtToken}`)
            .then((res) => {
                expect(res).to.have.status(200);
            });
        });
    
        it('Get A Specific Red-Flag', () => {
            return chai.request(app)
            .get(`/api/v1/red-flags/${redFlagId}`)
            .set('authorization', `${jwtToken}`)
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
            });
        });
    
        it('Edit A Red-Flag location', () => {
            return chai.request(app)
            .patch(`/api/v1/red-flags/${redFlagId}/location`)
            .set('authorization', `${jwtToken}`)
            .send({
                "latitude": 23.434534653473453453234234234,
                "longitude": 80.12345678765432190876
            })
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
            });
        });
        it('invalid latitude', () => {
            return chai.request(app)
            .patch(`/api/v1/red-flags/${redFlagId}/location`)
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
            .patch(`/api/v1/red-flags/${redFlagId}/location`)
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

    
        it('Edit A Red-Flag Comment', () => {
            return chai.request(app)
            .patch(`/api/v1/red-flags/${redFlagId}/comment`)
            .set('authorization', `${jwtToken}`)
            .send({
                "comment": "Something new.."
            })
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
            });
        });
        it('invalid comment', () => {
            return chai.request(app)
            .patch(`/api/v1/red-flags/${redFlagId}/comment`)
            .set('authorization', `${jwtToken}`)
                .send({

                    "comment": 12431431343
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                    expect(res.body).to.be.an('object');
                });
        });
        
        it('Delete A Red-Flag', () => {
            return chai.request(app)
            .del('/api/v1/red-flags/12345678')
            .set('authorization', `${jwtToken}`)
            .then((res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
            });
        });
    
    }); 

});
