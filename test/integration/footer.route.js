const request = require('supertest');
const app = require('../../index');
const mocha = require('mocha');
require('chai').should();

mocha.describe('Footer Route', () => {
  mocha.it('List All Footer Sections', (done) => {
    request(app.listen())
      .get('/src/footer')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .expect(200)
      .then((response) => {
        response.body.should.not.equal(0);
        done();
      });
  });
});

