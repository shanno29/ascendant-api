const request = require('supertest');
const app = require('../../index');
const mocha = require('mocha');
require('chai').should();

const label = 'Consulting';
const path = 'consulting';
const id = 'licensing';

mocha.describe(`${label} Route`, () => {
  mocha.it('List All Sections', (done) => {
    request(app.listen())
      .get(`/api/${path}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .expect(200)
      .then((response) => {
        response.body.length.should.not.equal(0);
        done();
      });
  });

  mocha.it('Get Section By ID', (done) => {
    request(app.listen())
      .get(`/api/${path}/${id}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .expect(200)
      .then((res) => {
        res.body.should.not.equal(0);
        done();
      });
  });
});

