const app = require('../../index');
const request = require("supertest").agent(app.listen());
const config = require('../../config');

describe('User Route', () =>{

    it('Create User One', done =>{
        request
            .post('/api/users')
            .send({
                _id: config.userOne,
                email: 'red@email.com',
                password: 'test',
                username: 'red',
                fullname: 'red color',
                city: 'milwaukee',
                state: 'wi',
                age: '23',
                gender: 'male',
            })
            .expect(200)
            .then(response =>{
                response.body.email.should.equal('red@email.com');
                response.body.username.should.equal('red');
                response.body.fullname.should.equal('red color');
                response.body.city.should.equal('milwaukee');
                response.body.state.should.equal('wi');
                response.body.age.should.equal(23);
                response.body.gender.should.equal('male');
                done();
            });
    });
    it('Create User Two', done =>{
        request
            .post('/api/users')
            .send({
                _id: config.userTwo,
                email: 'yellow@email.com',
                password: 'test',
                username: 'yellow',
                fullname: 'yellow color',
                city: 'milwaukee',
                state: 'wi',
                age: '23',
                gender: 'male',
            })
            .expect(200)
            .then(response =>{
                response.body.email.should.equal('yellow@email.com');
                response.body.username.should.equal('yellow');
                response.body.fullname.should.equal('yellow color');
                response.body.city.should.equal('milwaukee');
                response.body.state.should.equal('wi');
                response.body.age.should.equal(23);
                response.body.gender.should.equal('male');
                done();
            });
    });
    it('Create User Three', done =>{
        request
            .post('/api/users')
            .send({
                _id: config.userThree,
                email: 'blue@email.com',
                password: 'test',
                username: 'blue',
                fullname: 'blue color',
                city: 'milwaukee',
                state: 'wi',
                age: '23',
                gender: 'male',
            })
            .expect(200)
            .then(response =>{
                response.body.email.should.equal('blue@email.com');
                response.body.username.should.equal('blue');
                response.body.fullname.should.equal('blue color');
                response.body.city.should.equal('milwaukee');
                response.body.state.should.equal('wi');
                response.body.age.should.equal(23);
                response.body.gender.should.equal('male');
                done();
            });
    });
    it('Create User One Fail ', done =>{
        request
            .post('/api/users')
            .send({
                _id: config.userOne,
                email: 'red@email.com',
                password: 'test',
                username: 'red',
                fullname: 'red color',
                city: 'milwaukee',
                state: 'wi',
                age: '23',
                gender: 'male',
            })
            .expect(500)
            .then(response => {
                response.body.should.equal('That Email Is Already In Use');
                done();
            });
    });
    it('Create User Two Fail ', done =>{
        request
            .post('/api/users')
            .send({
                _id: config.userTwo,
                email: 'yellow@email.com',
                password: 'test',
                username: 'yellow',
                fullname: 'yellow color',
                city: 'milwaukee',
                state: 'wi',
                age: '23',
                gender: 'male',
            })
            .expect(500)
            .then(response => {
                response.body.should.equal('That Email Is Already In Use');
                done();
            });
    });
    it('Create User Three Fail ', done =>{
        request
            .post('/api/users')
            .send({
                _id: config.userThree,
                email: 'blue@email.com',
                password: 'test',
                username: 'blue',
                fullname: 'blue color',
                city: 'milwaukee',
                state: 'wi',
                age: '23',
                gender: 'male',
            })
            .expect(500)
            .then(response => {
                response.body.should.equal('That Email Is Already In Use');
                done();
            });
    });

    it('Find User One', done =>{
        request
            .get('/api/users/' + config.userOne)
            .expect(200)
            .then(response =>{
                response.body.email.should.equal('red@email.com');
                response.body.username.should.equal('red');
                response.body.fullname.should.equal('red color');
                response.body.city.should.equal('milwaukee');
                response.body.state.should.equal('wi');
                response.body.age.should.equal(23);
                response.body.gender.should.equal('male');
                done();
            });
    });
    it('Find User Two', done =>{
        request
            .get('/api/users/' + config.userTwo)
            .expect(200)
            .then(response =>{
                response.body.email.should.equal('yellow@email.com');
                response.body.username.should.equal('yellow');
                response.body.fullname.should.equal('yellow color');
                response.body.city.should.equal('milwaukee');
                response.body.state.should.equal('wi');
                response.body.age.should.equal(23);
                response.body.gender.should.equal('male');
                done();
            });
    });
    it('Find User Three', done =>{
        request
            .get('/api/users/' + config.userThree)
            .expect(200)
            .then(response =>{
                response.body.email.should.equal('blue@email.com');
                response.body.username.should.equal('blue');
                response.body.fullname.should.equal('blue color');
                response.body.city.should.equal('milwaukee');
                response.body.state.should.equal('wi');
                response.body.age.should.equal(23);
                response.body.gender.should.equal('male');
                done();
            });
    });

    it('List All Users', done =>{
        request
            .get('/api/users')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });

});


