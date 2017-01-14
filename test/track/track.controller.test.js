const controller = require('../../api/track/track.controller');
const config = require('../../config');
const mongoose = require('mongoose');
const should = require('chai').should();

describe('Track Controller', () =>{
    before(done =>{
        if (mongoose.connection.db) return done();
        mongoose.Promise = global.Promise;
        mongoose.connect(config.db, done);
    });
    it('Create Track No ID', done =>{
        controller
            .make({
                title: 'test title',
                artist: 'test artist',
                album: 'test album',
                artwork: 'test artwork',
                spotify: 'test spotify',
                soundcloud: 'test soundcloud',
                youtube: 'test youtube',
                owner: config.userOne,
            })
            .then(response =>{
                response.title.should.equal('test title');
                response.artist.should.equal('test artist');
                response.album.should.equal('test album');
                response.artwork.should.equal('test artwork');
                response.spotify.should.equal('test spotify');
                response.soundcloud.should.equal('test soundcloud');
                response.youtube.should.equal('test youtube');
                return controller.remove(response._id);
            })
            .then(response => {
                response.title.should.equal('test title');
                response.artist.should.equal('test artist');
                response.album.should.equal('test album');
                response.artwork.should.equal('test artwork');
                response.spotify.should.equal('test spotify');
                response.soundcloud.should.equal('test soundcloud');
                response.youtube.should.equal('test youtube');
                done();
            })
    });
    it('Create Track', done =>{
        controller.make({
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
            .then(response => {
                response.title.should.equal('test title');
                response.artist.should.equal('test artist');
                response.album.should.equal('test album');
                response.artwork.should.equal('test artwork');
                response.spotify.should.equal('test spotify');
                response.soundcloud.should.equal('test soundcloud');
                response.youtube.should.equal('test youtube');
                done();
            });
    });

    it('Find Track', done =>{
        controller.lookup(config.trackOne)
            .then(response => {
                response.relative.should.equal('a few seconds ago');
                response.title.should.equal('test title');
                response.artist.should.equal('test artist');
                response.album.should.equal('test album');
                response.artwork.should.equal('test artwork');
                response.spotify.should.equal('test spotify');
                response.soundcloud.should.equal('test soundcloud');
                response.youtube.should.equal('test youtube');
                done();
            });
    });
    it('List Tracks', done =>{
        controller.listAll()
            .then(response => {
                response.length.should.equal(1);
                done();
            });
    });
    it('List User Tracks', done =>{
        controller.listUser(config.userOne)
            .then(response => {
                response.length.should.equal(1);
                done();
            })
    });
    it('Delete Track', done =>{
        controller.remove(config.trackOne)
            .then((response) => {
                response.title.should.equal('test title');
                response.artist.should.equal('test artist');
                response.album.should.equal('test album');
                response.artwork.should.equal('test artwork');
                response.spotify.should.equal('test spotify');
                response.soundcloud.should.equal('test soundcloud');
                response.youtube.should.equal('test youtube');
                done();
            });
    });

});