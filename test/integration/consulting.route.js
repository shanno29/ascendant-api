const request = require('supertest');
const app = require('../../index');
const mocha = require('mocha');
require('chai').should();

mocha.describe('Consulting Route', () => {
  mocha.it('List All Consulting Sections', (done) => {
    request(app.listen())
      .get('/api/consulting')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .expect(200)
      .then((response) => {
        response.body.length.should.not.equal(0);
        done();
      });
  });

  mocha.it('Get Consulting Section By id', (done) => {
    request(app.listen())
      .get('/api/consulting/licensing')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .expect(200)
      .then((response) => {
        response.body.should.not.equal(0);
        done();
      });
  });
});

