const request = require('supertest');
const app = require('../index');
const mocha = require('mocha');
require('chai').should();

const gets = [
  { path: 'about' },
  { path: 'forms' },
  { path: 'home' },
  { path: 'root' },
  { path: 'contact' },
  { path: 'consulting' },
];

gets.forEach((it) => {
  mocha.describe(`${it.path} Route`, () => {
    mocha.it(`Get ${it.path}`, (done) => {
      request(app.listen())
        .get(`/api/${it.path}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .expect(200)
        .then((response) => {
          const res = response.body;
          if (Array.isArray(res)) res.length.should.not.equal(0);
          else res.should.not.equal(0);
          done();
        });
    });
  });
});


const getByIds = [
  { path: 'consulting', id: 'licensing' },
];

getByIds.forEach((it) => {
  mocha.it(`Get ${it.path} By ID`, (done) => {
    request(app.listen())
      .get(`/api/${it.path}/${it.id}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .expect(200)
      .then((res) => {
        res.body.should.not.equal(0);
        done();
      });
  });
});

