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
            username: 'youare',
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
            username: 'youarenot',
            password: 'perfect'
          })
        .then((res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.be.an('object');
        });
    });

    it('create a red-flag record', () => {
        return chai.request(app)
        .post('/api/v1/red-flags')
        .send({
            "userid": 64892106,
            "type": "red-flag",
            "latitude": -40.434534653473453453234234234,
            "longitude": -179.12345678765432190876,
            "comment": "Some stories...Some stories...Some stories...Some stories...Some stories..."
        })
        .then((res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
            expect(res.body.data).to.be.an('array');
        });
    });

    it('Get All Red-Flags', () => {
        return chai.request(app)
        .get('/api/v1/red-flags')
        .then((res) => {
            expect(res).to.have.status(200);
        });
    });

    it('Get A Specific Red-Flag', () => {
        return chai.request(app)
        .get('/api/v1/red-flags/12345678')
        .then((res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.be.an('object');
        });
    });

    it('Edit A Red-Flag location', () => {
        return chai.request(app)
        .patch('/api/v1/red-flags/12345678/location')
        .send({
            "latitude": 23.434534653473453453234234234,
            "longitude": 80.12345678765432190876
        })
        .then((res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.be.an('object');
        });
    });

    it('Edit A Red-Flag Comment', () => {
        return chai.request(app)
        .patch('/api/v1/red-flags/12345678/comment')
        .send({
            "comment": "Something new.."
        })
        .then((res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.be.an('object');
        });
    });

});