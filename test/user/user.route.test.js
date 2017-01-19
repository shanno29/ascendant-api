const config = require('../../config');
const request = require("supertest");
const app = require('../../index');

describe('User Route', () =>{

    it('Create User One', done =>{
        request(app)
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
        request(app)
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
        request(app)
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
        request(app)
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
        request(app)
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
        request(app)
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

    it('Login User One', done =>{
        request(app)
            .put('/api/users/' + config.userOne + '/login')
            .send({
                email: 'red@email.com',
                password: 'test',
                username: 'red',
                fullname: 'red color',
                city: 'milwaukee',
                state: 'wi',
                age: '23',
                type: 'android',
                version: '1.5.0',
                gender: 'male',
                aboutme: 'test aboutme'
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
                global.userOneJwt = response.body.token;
                done();
            });
    });
    it('Login User Two', done =>{
        request(app)
            .put('/api/users/' + config.userTwo + '/login')
            .send({
                email: 'yellow@email.com',
                password: 'test',
                username: 'yellow',
                fullname: 'yellow color',
                city: 'milwaukee',
                state: 'wi',
                age: '23',
                type: 'android',
                version: '1.5.0',
                gender: 'male',
                aboutme: 'test aboutme'
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
                global.userThreeJwt = response.body.token;
                done();
            });

    });
    it('Login User Three', done =>{
        request(app)
            .put('/api/users/' + config.userThree + '/login')
            .send({
                email: 'blue@email.com',
                password: 'test',
                username: 'blue',
                fullname: 'blue color',
                city: 'milwaukee',
                state: 'wi',
                age: '23',
                type: 'android',
                version: '1.5.0',
                gender: 'male',
                aboutme: 'test aboutme'
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
                global.userTwoJwt = response.body.token;
                done();
            });
    });


    it('Find User One', done =>{
        request(app)
            .get('/api/users/' + config.userOne)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
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
        request(app)
            .get('/api/users/' + config.userTwo)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
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
        request(app)
            .get('/api/users/' + config.userThree)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
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
        request(app)
            .get('/api/users')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });

    it('Update User One Empty', done =>{
        request(app)
            .put('/api/users/' + config.userOne)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({})
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
    it('Update User One', done =>{
        request(app)
            .put('/api/users/' + config.userOne)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                email: 'red@email.com',
                username: 'test red',
                fullname: 'test red color',
                city: 'test milwaukee',
                state: 'test wi',
                age: '30',
                gender: 'test male',
                type: 'test android',
                version: 'test 1.5.0',
                aboutme: 'test test about',
            })
            .expect(200)
            .then(response =>{
                response.body.email.should.equal('red@email.com');
                response.body.username.should.equal('test red');
                response.body.fullname.should.equal('test red color');
                response.body.city.should.equal('test milwaukee');
                response.body.state.should.equal('test wi');
                response.body.age.should.equal(30);
                response.body.gender.should.equal('test male');
                response.body.type.should.equal('test android');
                response.body.version.should.equal('test 1.5.0');
                response.body.aboutme.should.equal('test test about');
                done();
            });
    });

    it('Update User One Avatar', done =>{
        request(app)
            .put('/api/users/' + config.userOne +'/avatars')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .field('name', 'test avatar')
            .attach('avatar', 'public/images/default/default_avatar.jpg')
            .expect(200)
            .then(response =>{
                response.body.avatar.length.should.equal(2);
                done();
            });
    });
    it('Update User One Banner', done =>{
        request(app)
            .put('/api/users/' + config.userOne +'/banners')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .field('name', 'test banner')
            .attach('banner', 'public/images/default/default_banner.jpg')
            .expect(200)
            .then(response =>{
                response.body.banner.length.should.equal(2);
                done();
            });
    });


});


