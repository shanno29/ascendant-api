const controller = require('../../api/track/track.controller');
const config = require('../../config');
require('chai').should();

describe('Track Controller', () =>{
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
        controller
            .make({
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
        controller
            .lookup(config.trackOne)
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
        controller
            .listAll()
            .then(response => {
                response.length.should.equal(1);
                done();
            });
    });
    it('List User Tracks', done =>{
        controller
            .listUser(config.userOne)
            .then(response => {
                response.length.should.equal(1);
                done();
            })
    });
    it('List User Friends Tracks', done =>{
        controller
            .listFriends(config.userOne)
            .then(response => {
                response.length.should.equal(0);
                done();
            })
    });
    it('List User Matches Tracks', done =>{
        controller
            .listMatches(config.userOne)
            .then(response => {
                response.length.should.equal(0);
                done();
            })
    });
    it('List User Nearby Tracks', done =>{
        controller
            .listNearby(config.userOne)
            .then(response => {
                response.length.should.equal(1);
                done();
            })
    });
    it('Search Music Networks', done =>{
        controller
            .search('finally moving pretty lights', 10)
            .then(response => {
                response.length.should.equal(3);
                done();
            })
    });

    it('Delete Track', done =>{
        controller
            .remove(config.trackOne)
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