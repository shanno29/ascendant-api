const request = require('supertest');
const app = require('../../index');
const config = require('../../config');

describe('Match Route', () =>{

    it('Create Match One', done =>{
        request(app)
            .post('/api/matches')
            .send({
                _id: config.matchOne,
                owners: [config.userOne, config.userTwo],
            })
            .expect(200)
            .then(response =>{
                response.body.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Match Two', done =>{
        request(app)
            .post('/api/matches')
            .send({
                _id: config.matchTwo,
                owners: [config.userTwo, config.userThree],
            })
            .expect(200)
            .then(response =>{
                response.body.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Match Three', done =>{
        request(app)
            .post('/api/matches')
            .send({
                _id: config.matchThree,
                owners: [config.userThree, config.userOne],
            })
            .expect(200)
            .then(response =>{
                response.body.owners.length.should.equal(2);
                done()
            });
    });
    it('Create Match One Fail ', done =>{
        request(app)
            .post('/api/matches')
            .send({
                _id: config.matchOne,
                owners: [config.userOne, config.userTwo],
            })
            .expect(404)
            .then(response => {
                response.body.should.equal('That Match Already Exists');
                done();
            });
    });
    it('Create Match Two Fail ', done =>{
        request(app)
            .post('/api/matches')
            .send({
                _id: config.matchTwo,
                owners: [config.userTwo, config.userThree],
            })
            .expect(404)
            .then(response => {
                response.body.should.equal('That Match Already Exists');
                done();
            });
    });
    it('Create Match Three Fail ', done =>{
        request(app)
            .post('/api/matches')
            .send({
                _id: config.matchThree,
                owners: [config.userThree, config.userOne],
            })
            .expect(404)
            .then(response => {
                response.body.should.equal('That Match Already Exists');
                done();
            });
    });

    it('Find Match One', done =>{
        request(app)
            .get('/api/matches/' + config.matchOne)
            .expect(200)
            .then(response =>{
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Match Two', done =>{
        request(app)
            .get('/api/matches/' + config.matchTwo)
            .expect(200)
            .then(response =>{
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Match Three', done =>{
        request(app)
            .get('/api/matches/' + config.matchThree)
            .expect(200)
            .then(response =>{
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });

    it('List All Matches', done =>{
        request(app)
            .get('/api/matches')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });
    it('List User One Matches', done =>{
        request(app)
            .get('/api/matches/' + config.userOne + '/user' )
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Two Matches', done =>{
        request(app)
            .get('/api/matches/' + config.userTwo + '/user' )
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Three Matches', done =>{
        request(app)
            .get('/api/matches/' + config.userThree + '/user' )
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });

});


