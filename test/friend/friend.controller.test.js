const controller = require('../../api/friend/friend.controller');
const config = require('../../config');
require('chai').should();

describe('Friend Controller', () =>{
    it('Create Friend No ID', done =>{
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
    it('Create Friend', done =>{
        controller
            .make({
            _id: config.friendOne,
            owners: [config.userOne, config.userTwo],
        })
            .then(response => {
                response.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Friend Fail', done =>{
        controller
            .make({
            _id: config.friendOne,
            owners: [config.userOne, config.userTwo],
        })
            .then(null, error =>{
                error.message.should.equal('That Friend Already Exists');
                done();
            });
    });
    it('Find Friend', done =>{
        controller
            .lookup(config.friendOne)
            .then(response => {
                response.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('List Friends', done =>{
        controller
            .listAll()
            .then(response => {
                response.length.should.equal(1);
                done();
            });
    });
    it('List User Friends', done =>{
        controller
            .listUser(config.userOne)
            .then(response => {
                response.length.should.equal(1);
                done();
            })
    });
    it('Delete Friend', done =>{
        controller
            .remove(config.friendOne)
            .then((response) => {
                response.owners.length.should.equal(2);
                done();
            });
    });

});