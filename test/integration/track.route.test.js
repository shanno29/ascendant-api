const config = require('../../config');
const request = require("supertest");
const app = require('../../index');
require('chai').should();

describe('Track Route', () =>{

    it('Create Track One', done =>{
        request(app.listen())
            .post('/api/tracks')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.trackOne,
                title: 'test title',
                artist: 'test artist',
                album: 'test album',
                artwork: 'test artwork',
                spotify: 'test spotify',
                soundcloud: 'test soundcloud',
                youtube: 'test youtube',
                owner: config.userOne,
            })
            .expect(200)
            .then(response =>{
                response.body.title.should.equal('test title');
                response.body.artist.should.equal('test artist');
                response.body.album.should.equal('test album');
                response.body.artwork.should.equal('test artwork');
                response.body.spotify.should.equal('test spotify');
                response.body.soundcloud.should.equal('test soundcloud');
                response.body.youtube.should.equal('test youtube');
                done();
            });
    });
    it('Create Track Two', done =>{
        request(app.listen())
            .post('/api/tracks')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.trackTwo,
                title: 'test title',
                artist: 'test artist',
                album: 'test album',
                artwork: 'test artwork',
                spotify: 'test spotify',
                soundcloud: 'test soundcloud',
                youtube: 'test youtube',
                owner: config.userTwo,
            })
            .expect(200)
            .then(response =>{
                response.body.title.should.equal('test title');
                response.body.artist.should.equal('test artist');
                response.body.album.should.equal('test album');
                response.body.artwork.should.equal('test artwork');
                response.body.spotify.should.equal('test spotify');
                response.body.soundcloud.should.equal('test soundcloud');
                response.body.youtube.should.equal('test youtube');
                done();
            });
    });
    it('Create Track Three', done =>{
        request(app.listen())
            .post('/api/tracks')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.trackThree,
                title: 'test title',
                artist: 'test artist',
                album: 'test album',
                artwork: 'test artwork',
                spotify: 'test spotify',
                soundcloud: 'test soundcloud',
                youtube: 'test youtube',
                owner: config.userThree,
            })
            .expect(200)
            .then(response =>{
                response.body.title.should.equal('test title');
                response.body.artist.should.equal('test artist');
                response.body.album.should.equal('test album');
                response.body.artwork.should.equal('test artwork');
                response.body.spotify.should.equal('test spotify');
                response.body.soundcloud.should.equal('test soundcloud');
                response.body.youtube.should.equal('test youtube');
                done();
            });
    });

    it('Find Track One', done =>{
        request(app.listen())
            .get('/api/tracks/' + config.trackOne)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.relative.should.equal('a few seconds ago');
                response.body.title.should.equal('test title');
                response.body.artist.should.equal('test artist');
                response.body.album.should.equal('test album');
                response.body.artwork.should.equal('test artwork');
                response.body.spotify.should.equal('test spotify');
                response.body.soundcloud.should.equal('test soundcloud');
                response.body.youtube.should.equal('test youtube');
                done();
            });
    });
    it('Find Track Two', done =>{
        request(app.listen())
            .get('/api/tracks/' + config.trackTwo)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.relative.should.equal('a few seconds ago');
                response.body.title.should.equal('test title');
                response.body.artist.should.equal('test artist');
                response.body.album.should.equal('test album');
                response.body.artwork.should.equal('test artwork');
                response.body.spotify.should.equal('test spotify');
                response.body.soundcloud.should.equal('test soundcloud');
                response.body.youtube.should.equal('test youtube');
                done();
            });
    });
    it('Find Track Three', done =>{
        request(app.listen())
            .get('/api/tracks/' + config.trackThree)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.relative.should.equal('a few seconds ago');
                response.body.title.should.equal('test title');
                response.body.artist.should.equal('test artist');
                response.body.album.should.equal('test album');
                response.body.artwork.should.equal('test artwork');
                response.body.spotify.should.equal('test spotify');
                response.body.soundcloud.should.equal('test soundcloud');
                response.body.youtube.should.equal('test youtube');
                done();
            });
    });

    it('List User One Tracks', done =>{
        request(app.listen())
            .get('/api/tracks/' + config.userOne + '/user')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(1);
                done();
            });
    });
    it('List User Two Tracks', done =>{
        request(app.listen())
            .get('/api/tracks/' + config.userTwo + '/user')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(1);
                done();
            });
    });
    it('List User Three Tracks', done =>{
        request(app.listen())
            .get('/api/tracks/' + config.userThree + '/user')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(1);
                done();
            });
    });

    it('List All Tracks', done =>{
        request(app.listen())
            .get('/api/tracks')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });

    it('List User Ones Friends Tracks', done =>{
        request(app.listen())
            .get('/api/tracks/' + config.userOne + '/friends')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Ones Matches Tracks', done =>{
        request(app.listen())
            .get('/api/tracks/' + config.userOne + '/matches')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Ones Nearby Tracks', done =>{
        request(app.listen())
            .get('/api/tracks/' + config.userOne + '/nearby')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });

    it('Search Music Networks', done =>{
        request(app.listen())
            .get('/api/tracks/search/' + 'finally moving pretty lights/10')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });


});


