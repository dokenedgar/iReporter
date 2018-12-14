import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index.js';

chai.use(chaiHttp);

describe('iReporter User Test Suites', () => {
    this.timeout(10000);
    
        it('sign up new user', () => {
            return chai.request(app)
            .post('/api/v1/auth/signup')
            .send({
                "firstname": "David",
                "lastname": "McCain",
                "othernames": "",
                "email": "mabc@xyz.com",
                "phoneNumber": "93463563563",
                "username": "youare",
                "password": "perfect"
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
                "email": "mabc@xyz.com",
                password: 'perfect'
              })
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
            });
        });
    
        it('user authentication - user NOT found', () => {
            return chai.request(app)
            .post('/api/v1/auth/login')
            .send({
                "email": "mmabc@xyz.com",
                password: 'perfect'
              })
            .then((res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
            });
        });

});
