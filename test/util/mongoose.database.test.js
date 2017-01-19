const config = require('../../config');
const mongoose = require('mongoose');

describe('Mongoose Database Test', () =>{

    it('Should Return Error', done =>{
        mongoose.connect('asdf').catch(err => err.state.should.equal(2));
        done();
    });

});


