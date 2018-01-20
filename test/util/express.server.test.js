const request = require('supertest');
const app = require('../../index');
const mocha = require('mocha');
require('chai').should();

mocha.describe('Express Server Test', () => {
  mocha.it('Check Server Status', (done) => {
    request(app)
      .get('/api')
      .expect(200)
      .then((response) => {
        response.text.should.equal('Hello From Ascendant');
        done();
      });

    // request(app)
    //   .get('/')
    //   .expect(500)
    //   .then((response) => {
    //     response.text.should.not.equal('Hello From Ascendant');
    //     done();
    //   });
  });
});

