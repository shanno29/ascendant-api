const app = require('../../index');
const request = require("supertest").agent(app.listen());
const config = require('../../config');

describe('Post Route', () =>{

    it('Create Post One', done =>{
        request
            .post('/api/posts')
            .send({
                _id: config.postOne,
                owners: [config.userOne, config.userTwo],
                comments: [{author: config.userOne, text: 'Hello World'}],
            })
            .expect(200)
            .then(response =>{
                response.body.comments[0].author.should.equal(config.userOne);
                response.body.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Post Two', done =>{
        request
            .post('/api/posts')
            .send({
                _id: config.postTwo,
                owners: [config.userTwo, config.userThree],
                comments: [{author: config.userTwo, text: 'Hello World'}],
            })
            .expect(200)
            .then(response =>{
                response.body.comments[0].author.should.equal(config.userTwo);
                response.body.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Post Three', done =>{
        request
            .post('/api/posts')
            .send({
                _id: config.postThree,
                owners: [config.userThree, config.userOne],
                comments: [{author: config.userThree, text: 'Hello World'}],
            })
            .expect(200)
            .then(response =>{
                response.body.comments[0].author.should.equal(config.userThree);
                response.body.owners.length.should.equal(2);
                done()
            });
    });

    it('Find Post One', done =>{
        request
            .get('/api/posts/' + config.postOne)
            .expect(200)
            .then(response =>{
                response.body.comments[0].author.should.equal(config.userOne);
                response.body.relative.should.equal('a few seconds ago');
                for(let i = response.body.comments.length; i--;) response.body.comments[i].relative.should.equal('a few seconds ago');
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Post Two', done =>{
        request
            .get('/api/posts/' + config.postTwo)
            .expect(200)
            .then(response =>{
                response.body.comments[0].author.should.equal(config.userTwo);
                response.body.relative.should.equal('a few seconds ago');
                for(let i = response.body.comments.length; i--;) response.body.comments[i].relative.should.equal('a few seconds ago');
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Post Three', done =>{
        request
            .get('/api/posts/' + config.postThree)
            .expect(200)
            .then(response =>{
                response.body.comments[0].author.should.equal(config.userThree);
                response.body.relative.should.equal('a few seconds ago');
                for(let i = response.body.comments.length; i--;) response.body.comments[i].relative.should.equal('a few seconds ago');
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });

    it('List All Posts', done =>{
        request
            .get('/api/posts')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });

    it('List User One Posts', done =>{
        request
            .get('/api/posts/' + config.userOne + '/user' )
            .expect(200)
            .then(response => {
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Two Posts', done =>{
        request
            .get('/api/posts/' + config.userTwo + '/user' )
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Three Posts', done =>{
        request
            .get('/api/posts/' + config.userThree + '/user' )
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });

});


