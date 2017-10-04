const config = require('../../config');
const request = require("supertest");
const app = require('../../index');
require('chai').should();

describe('Friend Route', () =>{

    it('Create Friend One', done =>{
        request(app.listen())
            .post('/api/friends')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
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
        request(app.listen())
            .post('/api/friends')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
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
        request(app.listen())
            .post('/api/friends')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
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
        request(app.listen())
            .post('/api/friends')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.friendOne,
                owners: [config.userOne, config.userTwo],
            })
            .expect(500)
            .then(response => {
                response.body.should.equal('That Friend Already Exists');
                done();
            });
    });
    it('Create Friend Two Fail ', done =>{
        request(app.listen())
            .post('/api/friends')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.friendTwo,
                owners: [config.userTwo, config.userThree],
            })
            .expect(500)
            .then(response => {
                response.body.should.equal('That Friend Already Exists');
                done();
            });
    });
    it('Create Friend Three Fail ', done =>{
        request(app.listen())
            .post('/api/friends')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.friendThree,
                owners: [config.userThree, config.userOne],
            })
            .expect(500)
            .then(response => {
                response.body.should.equal('That Friend Already Exists');
                done();
            });
    });

    it('Find Friend One', done =>{
        request(app.listen())
            .get('/api/friends/' + config.friendOne)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Friend Two', done =>{
        request(app.listen())
            .get('/api/friends/' + config.friendTwo)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Friend Three', done =>{
        request(app.listen())
            .get('/api/friends/' + config.friendThree)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });

    it('List All Friends', done =>{
        request(app.listen())
            .get('/api/friends')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });
    it('List User One Friends', done =>{
        request(app.listen())
            .get('/api/friends/' + config.userOne + '/course' )
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Two Friends', done =>{
        request(app.listen())
            .get('/api/friends/' + config.userTwo + '/course' )
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Three Friends', done =>{
        request(app.listen())
            .get('/api/friends/' + config.userThree + '/course' )
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


