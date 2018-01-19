const request = require('supertest');
const app = require('../../index');
const mocha = require('mocha');
require('chai').should();

mocha.describe('Forms Route', () => {
  mocha.it('List All Forms Sections', (done) => {
    request(app.listen())
      .get('/src/forms')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .expect(200)
      .then((response) => {
        response.body.length.should.not.equal(0);
        done();
      });
  });
});

