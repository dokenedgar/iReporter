import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index.js';

let jwtToken;
let redFlagId;
chai.use(chaiHttp);
/*
describe('Admin Tests', () => {
        it('Edit Status - Intervention', () => {
            return chai.request(app)
            .patch('/api/v1/admin/12345678')
            .send({
                "type": "intervention",
                "status": "rejected",
            })
            .then((res) => {
                expect(res).to.have.status(403);
                expect(res.body).to.be.an('object');
            });
        });

        it('Edit Status - Intervention', () => {
            return chai.request(app)
            .patch('/api/v1/admin/12345678')
            .send({
                "type": "red-flag",
                "status": "rejected",
            })
            .then((res) => {
                expect(res).to.have.status(403);
                expect(res.body).to.be.an('object');
            });
        });

    });
*/