const mocha = require('mocha');
const status = require('./../../src/_core/status');
require('chai').should();

mocha.describe('Network Status', () => {
  mocha.it('List All About Sections', (done) => {
    status.check({ data: '', error: undefined });
    status.check({ data: undefined, error: { message: '' } });

    done();
  });
});
