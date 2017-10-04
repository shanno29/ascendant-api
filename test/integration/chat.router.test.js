const config = require('../../config');
const request = require("supertest");
const app = require('../../index');
require('chai').should();

describe('Chat Route', () =>{

    it('Create Chat One', done =>{
        request(app.listen())
            .post('/api/chats')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
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
        request(app.listen())
            .post('/api/chats')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
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
        request(app.listen())
            .post('/api/chats')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
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
        request(app.listen())
            .post('/api/chats')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                owners: [config.userOne, config.userTwo],
                messages: [{author: config.userOne, text: 'Hello World'}],
            })
            .expect(500)
            .then(response => {
                response.body.should.equal('That Chat Already Exists');
                done();
            });
    });
    it('Create Chat Two Fail ', done =>{
        request(app.listen())
            .post('/api/chats')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                owners: [config.userTwo, config.userThree],
                messages: [{author: config.userTwo, text: 'Hello World'}],
            })
            .expect(500)
            .then(response => {
                response.body.should.equal('That Chat Already Exists');
                done();
            });
    });
    it('Create Chat Three Fail ', done =>{
        request(app.listen())
            .post('/api/chats')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                owners: [config.userOne, config.userTwo],
                messages: [{author: config.userOne, text: 'Hello World'}],
            })
            .expect(500)
            .then(response => {
                response.body.should.equal('That Chat Already Exists');
                done();
            });
    });

    it('Find Chat One', done =>{
        request(app.listen())
            .get('/api/chats/' + config.chatOne)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
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
        request(app.listen())
            .get('/api/chats/' + config.chatTwo)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
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
        request(app.listen())
            .get('/api/chats/' + config.chatThree)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.messages[0].author.should.equal(config.userThree);
                response.body.relative.should.equal('a few seconds ago');
                for(let i = response.body.messages.length; i--;) response.body.messages[i].relative.should.equal('a few seconds ago');
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });

    it('Update Chat One', done =>{
        request(app.listen())
            .put('/api/chats/' + config.chatOne)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .send({
                owners: [config.userOne, config.userTwo],
                messages: [{author: config.userOne, text: 'Chat Update Test'}],
            })
            .then(response =>{
                response.body.owners.length.should.equal(2);
                response.body.messages.length.should.equal(2);
                response.body.messages[1].text.should.equal('Chat Update Test');
                done();
            });
    });

    it('List All Chats', done =>{
        request(app.listen())
            .get('/api/chats')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });

    it('List User One Chats', done =>{
        request(app.listen())
            .get('/api/chats/' + config.userOne + '/course' )
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response => {
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Two Chats', done =>{
        request(app.listen())
            .get('/api/chats/' + config.userTwo + '/course' )
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Three Chats', done =>{
        request(app.listen())
            .get('/api/chats/' + config.userThree + '/course' )
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });

});


