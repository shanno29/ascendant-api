const request = require('supertest');
const app = require('../../index');
const mocha = require('mocha');
require('chai').should();

mocha.describe('Express Server Test', () => {
  mocha.it('Not Module Parent', (done) => {
    done();
  });

  mocha.it('Check Server Status', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        response.text.should.equal('Hello From Ascendant');
        done();
      });
  });
});

