const request = require('supertest');
const app = require('../../index');
const config = require('../../config');

describe('Track Route', () =>{

    it('Create Track One', done =>{
        request(app)
            .post('/api/tracks')
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
        request(app)
            .post('/api/tracks')
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
        request(app)
            .post('/api/tracks')
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
        request(app)
            .get('/api/tracks/' + config.trackOne)
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
        request(app)
            .get('/api/tracks/' + config.trackTwo)
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
        request(app)
            .get('/api/tracks/' + config.trackThree)
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

    it('List All Tracks', done =>{
        request(app)
            .get('/api/tracks')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });
    it('List User One Tracks', done =>{
        request(app)
            .get('/api/tracks/' + config.userOne + '/user')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(1);
                done();
            });
    });
    it('List User Two Tracks', done =>{
        request(app)
            .get('/api/tracks/' + config.userTwo + '/user')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(1);
                done();
            });
    });
    it('List User Three Tracks', done =>{
        request(app)
            .get('/api/tracks/' + config.userThree + '/user')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(1);
                done();
            });
    });

});


