const config = require('../../config');
const request = require('supertest');
const app = require('../../index');
require('chai').should();

describe('Express Server Test', () =>{

    // it('Not Module Parent', done =>{
    //     done();
    // });


    it('Check Server Status', done =>{
        request(app)
            .get('/')
            .expect(200)
            .then(response =>{
                response.text.should.equal('Hello From VibeTribe');
                done();
            });
    });

});


