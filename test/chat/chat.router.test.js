const app = require('../../index');
const request = require("supertest").agent(app.listen());
const config = require('../../config');

describe('Chat Route', () =>{

    it('Create Chat One', done =>{
        request
            .post('/api/chats')
            .send({
                _id: config.chatOne,
                owners: [config.userOne, config.userTwo],
                messages: [{author: config.userOne, text: 'Hello World'}],
            })
            .expect(200)
            .then(response =>{
                response.body.messages[0].author.should.equal(config.userOne);
                response.body.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Chat Two', done =>{
        request
            .post('/api/chats')
            .send({
                _id: config.chatTwo,
                owners: [config.userTwo, config.userThree],
                messages: [{author: config.userTwo, text: 'Hello World'}],
            })
            .expect(200)
            .then(response =>{
                response.body.messages[0].author.should.equal(config.userTwo);
                response.body.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Chat Three', done =>{
        request
            .post('/api/chats')
            .send({
                _id: config.chatThree,
                owners: [config.userThree, config.userOne],
                messages: [{author: config.userThree, text: 'Hello World'}],
            })
            .expect(200)
            .then(response =>{
                response.body.messages[0].author.should.equal(config.userThree);
                response.body.owners.length.should.equal(2);
                done()
            });
    });
    it('Create Chat One Fail ', done =>{
        request
            .post('/api/chats')
            .send({
                owners: [config.userOne, config.userTwo],
                messages: [{author: config.userOne, text: 'Hello World'}],
            })
            .expect(404)
            .then(response => {
                response.body.should.equal('That Chat Already Exists');
                done();
            });
    });
    it('Create Chat Two Fail ', done =>{
        request
            .post('/api/chats')
            .send({
                owners: [config.userTwo, config.userThree],
                messages: [{author: config.userTwo, text: 'Hello World'}],
            })
            .expect(404)
            .then(response => {
                response.body.should.equal('That Chat Already Exists');
                done();
            });
    });
    it('Create Chat Three Fail ', done =>{
        request
            .post('/api/chats')
            .send({
                owners: [config.userOne, config.userTwo],
                messages: [{author: config.userOne, text: 'Hello World'}],
            })
            .expect(404)
            .then(response => {
                response.body.should.equal('That Chat Already Exists');
                done();
            });
    });

    it('Find Chat One', done =>{
        request
            .get('/api/chats/' + config.chatOne)
            .expect(200)
            .then(response =>{
                response.body.messages[0].author.should.equal(config.userOne);
                response.body.relative.should.equal('a few seconds ago');
                for(let i = response.body.messages.length; i--;) response.body.messages[i].relative.should.equal('a few seconds ago');
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Chat Two', done =>{
        request
            .get('/api/chats/' + config.chatTwo)
            .expect(200)
            .then(response =>{
                response.body.messages[0].author.should.equal(config.userTwo);
                response.body.relative.should.equal('a few seconds ago');
                for(let i = response.body.messages.length; i--;) response.body.messages[i].relative.should.equal('a few seconds ago');
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Chat Three', done =>{
        request
            .get('/api/chats/' + config.chatThree)
            .expect(200)
            .then(response =>{
                response.body.messages[0].author.should.equal(config.userThree);
                response.body.relative.should.equal('a few seconds ago');
                for(let i = response.body.messages.length; i--;) response.body.messages[i].relative.should.equal('a few seconds ago');
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });

    it('List All Chats', done =>{
        request
            .get('/api/chats')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });

    it('List User One Chats', done =>{
        request
            .get('/api/chats/' + config.userOne + '/user' )
            .expect(200)
            .then(response => {
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Two Chats', done =>{
        request
            .get('/api/chats/' + config.userTwo + '/user' )
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Three Chats', done =>{
        request
            .get('/api/chats/' + config.userThree + '/user' )
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });

});


