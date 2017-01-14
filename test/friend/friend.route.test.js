const request = require('supertest');
const app = require('../../index');
const config = require('../../config');

describe('Friend Route', () =>{

    it('Create Friend One', done =>{
        request(app)
            .post('/api/friends')
            .send({
                _id: config.friendOne,
                owners: [config.userOne, config.userTwo],
            })
            .expect(200)
            .then(response =>{
                response.body.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Friend Two', done =>{
        request(app)
            .post('/api/friends')
            .send({
                _id: config.friendTwo,
                owners: [config.userTwo, config.userThree],
            })
            .expect(200)
            .then(response =>{
                response.body.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Friend Three', done =>{
        request(app)
            .post('/api/friends')
            .send({
                _id: config.friendThree,
                owners: [config.userThree, config.userOne],
            })
            .expect(200)
            .then(response =>{
                response.body.owners.length.should.equal(2);
                done()
            });
    });
    it('Create Friend One Fail ', done =>{
        request(app)
            .post('/api/friends')
            .send({
                _id: config.friendOne,
                owners: [config.userOne, config.userTwo],
            })
            .expect(404)
            .then(response => {
                response.body.should.equal('That Friend Already Exists');
                done();
            });
    });
    it('Create Friend Two Fail ', done =>{
        request(app)
            .post('/api/friends')
            .send({
                _id: config.friendTwo,
                owners: [config.userTwo, config.userThree],
            })
            .expect(404)
            .then(response => {
                response.body.should.equal('That Friend Already Exists');
                done();
            });
    });
    it('Create Friend Three Fail ', done =>{
        request(app)
            .post('/api/friends')
            .send({
                _id: config.friendThree,
                owners: [config.userThree, config.userOne],
            })
            .expect(404)
            .then(response => {
                response.body.should.equal('That Friend Already Exists');
                done();
            });
    });

    it('Find Friend One', done =>{
        request(app)
            .get('/api/friends/' + config.friendOne)
            .expect(200)
            .then(response =>{
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Friend Two', done =>{
        request(app)
            .get('/api/friends/' + config.friendTwo)
            .expect(200)
            .then(response =>{
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Friend Three', done =>{
        request(app)
            .get('/api/friends/' + config.friendThree)
            .expect(200)
            .then(response =>{
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });

    it('List All Friends', done =>{
        request(app)
            .get('/api/friends')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });
    it('List User One Friends', done =>{
        request(app)
            .get('/api/friends/' + config.userOne + '/user' )
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Two Friends', done =>{
        request(app)
            .get('/api/friends/' + config.userTwo + '/user' )
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Three Friends', done =>{
        request(app)
            .get('/api/friends/' + config.userThree + '/user' )
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });

});


