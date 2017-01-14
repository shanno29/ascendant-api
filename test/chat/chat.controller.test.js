const controller = require('../../api/chat/chat.controller');
const config = require('../../config');
const mongoose = require('mongoose');
const should = require('chai').should();

describe('Chat Controller', () =>{
    before(done =>{
        if (mongoose.connection.db) return done();
        mongoose.Promise = global.Promise;
        mongoose.connect(config.db, done);
    });
    it('Create Match No ID', done =>{
        controller
            .make({
                owners: [config.userOne, config.userTwo],
                messages: [{author: config.userOne, text: 'Hello World'}],
            })
            .then(response =>{
                response.messages[0].author.equals(config.userOne);
                response.owners.length.should.equal(2);
                return controller.remove(response._id);
            })
            .then(response => {
                response.messages[0].author.equals(config.userOne);
                response.owners.length.should.equal(2);
                done();
            })
    });
    it('Create Chat', done =>{
        controller.make({
            _id: config.chatOne,
            owners: [config.userOne, config.userTwo],
            messages: [{author: config.userOne, text: 'Hello World'}],
        })
            .then(response => {
                response.messages[0].author.equals(config.userOne);
                response.owners.length.should.equal(2);
                done();
            })
    });
    it('Create Chat Fail', done =>{
        controller.make({
            _id: config.chatOne,
            owners: [config.userOne, config.userTwo],
            messages: [{author: config.userOne, text: 'Hello World'}],
        })
            .then(null, error =>{
                error.message.should.equal('That Chat Already Exists');
                done();
            });
    });
    it('Find Chat', done =>{
        controller.lookup(config.chatOne)
            .then(response => {
                response.messages[0].author.equals(config.userOne);
                response.relative.should.equal('a few seconds ago');
                for(let i = response.messages.length; i--;) response.messages[i].relative.should.equal('a few seconds ago');
                response.owners.should.be.instanceof(Array);
                done();
            })
    });
    it('List Chats', done =>{
        controller.listAll()
            .then(response => {
                response.length.should.equal(1);
                done();
            })
    });
    it('List User Chats', done =>{
        controller.listUser(config.userOne)
            .then(response => {
                response.length.should.equal(1);
                done();
            })
    });
    it('Delete Chat', done =>{
        controller.remove(config.chatOne)
            .then(response => {
                response.messages[0].author.equals(config.userOne);
                response.owners.length.should.equal(2);
                done();
            })
    });

});