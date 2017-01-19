const controller = require('../../api/match/match.controller');
const config = require('../../config');
const mongoose = require('mongoose');

describe('Match Controller', () =>{
    before(done =>{
        if (mongoose.connection.db) return done();
        mongoose.Promise = global.Promise;
        mongoose.connect(config.db, done);
    });
    it('Create Match No ID', done =>{
        controller
            .make({
                owners: [config.userOne, config.userTwo],
            })
            .then(response =>{
                response.owners.length.should.equal(2);
                return controller.remove(response._id);
            })
            .then(response => {
                response.owners.length.should.equal(2);
                done();
            })
    });
    it('Create Match', done =>{
        controller.make({
            _id: config.matchOne,
            owners: [config.userOne, config.userTwo],
        })
            .then(response => {
                response.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Match Fail', done =>{
        controller.make({
            _id: config.matchOne,
            owners: [config.userOne, config.userTwo],
        })
            .then(null, error =>{
                error.message.should.equal('That Match Already Exists');
                done();
            });
    });
    it('Find Match', done =>{
        controller.lookup(config.matchOne)
            .then(response => {
                response.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('List Matches', done =>{
        controller.listAll()
            .then(response => {
                response.length.should.equal(1);
                done();
            });
    });
    it('List User Matches', done =>{
        controller.listUser(config.userOne)
            .then(response => {
                response.length.should.equal(1);
                done();
            })
    });
    it('Delete Match', done =>{
        controller.remove(config.matchOne)
            .then((response) => {
                response.owners.length.should.equal(2);
                done();
            });
    });

});