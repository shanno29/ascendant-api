const mocha = require('mocha');
const status = require('./../../src/_core/status');
require('chai').should();

mocha.describe('Network Status', () => {
  mocha.it('List All About Sections', (done) => {
    const failCase = new Promise(resolve => resolve(new Error('Fail')));
    const okCase = new Promise(resolve => resolve('LoL'));

    status.check(failCase);
    status.check(okCase);

    done();
  });
});
