import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';
chai.use(chaiHttp);

describe('Users test with chai-http', () => {
    // this.timeout(5000);

    it('sign up new user', () => {
        return chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
            "firstname": "David",
            "lastname": "McCain",
            "othernames": "",
            "email": "abc@xyz.com",
            "phoneNumber": "93463563563",
            "username": "uname",
            "password": "pword"
        })
        .then((res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object')
            expect(res.body.data).to.be.an('array');
        });
    });
});