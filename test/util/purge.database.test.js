const config = require('../../config');
const request = require('supertest');
const app = require('../../index');

describe('Purge Database Util', () =>{

    it('Delete Post One', done =>{
        request(app)
            .delete('/api/posts/' + config.postOne)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('comments');
                response.body.should.have.property('owners');
                done();
            });
    });
    it('Delete Post Two', done =>{
        request(app)
            .delete('/api/posts/' + config.postTwo)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('comments');
                response.body.should.have.property('owners');
                done();
            });
    });
    it('Delete Post Three', done =>{
        request(app)
            .delete('/api/posts/' + config.postThree)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('comments');
                response.body.should.have.property('owners');
                done();
            });
    });

    it('Delete Chat One', done =>{
        request(app)
            .delete('/api/chats/' + config.chatOne)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('messages');
                response.body.should.have.property('owners');
                done();
            });
    });
    it('Delete Chat Two', done =>{
        request(app)
            .delete('/api/chats/' + config.chatTwo)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('messages');
                response.body.should.have.property('owners');
                done();
            });
    });
    it('Delete Chat Three', done =>{
        request(app)
            .delete('/api/chats/' + config.chatThree)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('messages');
                response.body.should.have.property('owners');
                done();
            });
    });

    it('Delete Friend One', done =>{
        request(app)
            .delete('/api/friends/' + config.friendOne)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('owners');
                done();
            });
    });
    it('Delete Friend Two', done =>{
        request(app)
            .delete('/api/friends/' + config.friendTwo)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('owners');
                done();
            });
    });
    it('Delete Friend Three', done =>{
        request(app)
            .delete('/api/friends/' + config.friendThree)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('owners');
                done();
            });
    });

    it('Delete Match One', done =>{
        request(app)
            .delete('/api/matches/' + config.matchOne)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('owners');
                done();
            });
    });
    it('Delete Match Two', done =>{
        request(app)
            .delete('/api/matches/' + config.matchTwo)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('owners');
                done();
            });
    });
    it('Delete Match Three', done =>{
        request(app)
            .delete('/api/matches/' + config.matchThree)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('owners');
                done();
            });
    });

    it('Delete Track One', done =>{
        request(app)
            .delete('/api/tracks/' + config.trackOne)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('title');
                response.body.should.have.property('artist');
                response.body.should.have.property('album');
                response.body.should.have.property('artwork');
                response.body.should.have.property('spotify');
                response.body.should.have.property('soundcloud');
                response.body.should.have.property('youtube');
                done();
            });
    });
    it('Delete Track Two', done =>{
        request(app)
            .delete('/api/tracks/' + config.trackTwo)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('title');
                response.body.should.have.property('artist');
                response.body.should.have.property('album');
                response.body.should.have.property('artwork');
                response.body.should.have.property('spotify');
                response.body.should.have.property('soundcloud');
                response.body.should.have.property('youtube');
                done();
            });
    });
    it('Delete Track Three', done =>{
        request(app)
            .delete('/api/tracks/' + config.trackThree)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('title');
                response.body.should.have.property('artist');
                response.body.should.have.property('album');
                response.body.should.have.property('artwork');
                response.body.should.have.property('spotify');
                response.body.should.have.property('soundcloud');
                response.body.should.have.property('youtube');
                done();
            });
    });

    it('Delete User One', done =>{
        request(app)
            .delete('/api/users/' + config.userOne)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('email');
                response.body.should.have.property('username');
                response.body.should.have.property('fullname');
                response.body.should.have.property('city');
                response.body.should.have.property('state');
                response.body.should.have.property('gender');
                done();
            });
    });
    it('Delete User Two', done =>{
        request(app)
            .delete('/api/users/' + config.userTwo)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('email');
                response.body.should.have.property('username');
                response.body.should.have.property('fullname');
                response.body.should.have.property('city');
                response.body.should.have.property('state');
                response.body.should.have.property('gender');
                done();
            });
    });
    it('Delete User Three', done =>{
        request(app)
            .delete('/api/users/' + config.userThree)
            .expect(200)
            .then(response =>{
                response.body.should.have.property('email');
                response.body.should.have.property('username');
                response.body.should.have.property('fullname');
                response.body.should.have.property('city');
                response.body.should.have.property('state');
                response.body.should.have.property('gender');
                done();
            });
    });

});


