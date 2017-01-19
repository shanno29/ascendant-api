const controller = require('../../api/user/user.controller');
const config = require('../../config');
const mongoose = require('mongoose');

describe('User Controller', () =>{
    before(done =>{
        if (mongoose.connection.db) return done();
        mongoose.Promise = global.Promise;
        mongoose.connect(config.db, done);
    });
    it('Create User No ID', done =>{
        controller
            .make({
                email: 'black@email.com',
                password: 'test',
                username: 'black',
                fullname: 'black color',
                city: 'milwaukee',
                state: 'wi',
                age: '23',
                gender: 'male',
            })
            .then(response =>{
                response.email.should.equal('black@email.com');
                response.username.should.equal('black');
                response.fullname.should.equal('black color');
                response.city.should.equal('milwaukee');
                response.state.should.equal('wi');
                response.age.should.equal(23);
                response.gender.should.equal('male');
                return controller.remove(response._id);
            })
            .then(response => {
                response.email.should.equal('black@email.com');
                response.username.should.equal('black');
                response.fullname.should.equal('black color');
                response.city.should.equal('milwaukee');
                response.state.should.equal('wi');
                response.age.should.equal(23);
                response.gender.should.equal('male');
                done();
            })
    });
    it('Create User', done =>{
        controller.make({
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
        .then(response =>{
            response.email.should.equal('red@email.com');
            response.username.should.equal('red');
            response.fullname.should.equal('red color');
            response.city.should.equal('milwaukee');
            response.state.should.equal('wi');
            response.age.should.equal(23);
            response.gender.should.equal('male');
            done();
        })
    });
    it('Create User Fail', done =>{
        controller.make({
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
        .then(null, error =>{
            error.message.should.equal('That Email Is Already In Use');
            done();
        });
    });
    it('Find User', done =>{
        controller.lookup(config.userOne)
            .then(response =>{
                response.email.should.equal('red@email.com');
                response.username.should.equal('red');
                response.fullname.should.equal('red color');
                response.city.should.equal('milwaukee');
                response.state.should.equal('wi');
                response.age.should.equal(23);
                response.gender.should.equal('male');
                done();
            })
    });

    it('Update User Empty', done =>{
        controller.edit(config.userOne, {})
            .then(response =>{
                response.email.should.equal('red@email.com');
                response.username.should.equal('red');
                response.fullname.should.equal('red color');
                response.city.should.equal('milwaukee');
                response.state.should.equal('wi');
                response.age.should.equal(23);
                response.gender.should.equal('male');
                done();
            })
    });
    it('Update User', done =>{
        controller.edit(config.userOne, {
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
            .then(response =>{
                response.email.should.equal('red@email.com');
                response.username.should.equal('test red');
                response.fullname.should.equal('test red color');
                response.city.should.equal('test milwaukee');
                response.state.should.equal('test wi');
                response.age.should.equal(30);
                response.gender.should.equal('test male');
                response.type.should.equal('test android');
                response.version.should.equal('test 1.5.0');
                response.aboutme.should.equal('test test about');
                done();
            })
    });
    it('Update User Avatar', done =>{
        controller.editAvatar(config.userOne, {filename: 'testavatar'})
            .then(response =>{
                response.avatar.length.should.equal(2);
                done();
            })
    });
    it('Update User Banner', done =>{
        controller.editBanner(config.userOne, {filename: 'testbanner'})
            .then(response =>{
                response.banner.length.should.equal(2);
                done();
            })
    });

    it('Login User Android Client', done =>{
        controller.login(config.userOne, {
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
        }).then(response =>{
            response.email.should.equal('red@email.com');
            response.username.should.equal('test red');
            response.fullname.should.equal('test red color');
            response.city.should.equal('test milwaukee');
            response.state.should.equal('test wi');
            response.age.should.equal(30);
            response.gender.should.equal('test male');
            response.type.should.equal('test android');
            response.version.should.equal('test 1.5.0');
            response.aboutme.should.equal('test test about');
            done();
        })
    });
    it('Login User Windows Client', done =>{
        controller.login(config.userOne, {
            email: 'red@email.com',
            password: 'test',
            username: 'red',
            fullname: 'red color',
            city: 'milwaukee',
            type: 'windesktop',
            version: '1.0.0.1',
            state: 'wi',
            age: '23',
            gender: 'male',
        }).then(response =>{
            response.email.should.equal('red@email.com');
            response.username.should.equal('test red');
            response.fullname.should.equal('test red color');
            response.city.should.equal('test milwaukee');
            response.state.should.equal('test wi');
            response.age.should.equal(30);
            response.gender.should.equal('test male');
            response.type.should.equal('test android');
            response.version.should.equal('test 1.5.0');
            response.aboutme.should.equal('test test about');
            done();
        })
    });
    it('Login User Fail Password', done =>{
        controller.login(config.userOne, {
            email: 'red@email.com',
            password: 'asdfasdf',
            username: 'red',
            fullname: 'red color',
            city: 'milwaukee',
            type: 'android',
            version: '1.5.0',
            state: 'wi',
            age: '23',
            gender: 'male',
        }).then(null, error =>{
            error.message.should.equal('Incorrect Password');
            done();
        });
    });
    it('Login User Fail Client Outdated', done =>{
        controller.login(config.userOne, {
            email: 'red@email.com',
            password: 'test',
            username: 'red',
            fullname: 'red color',
            city: 'milwaukee',
            type: 'asdf',
            version: 'asdf',
            state: 'wi',
            age: '23',
            gender: 'male',
        }).then(null, error =>{
            error.message.should.equal('Outdated Client');
            done();
        });
    });

    it('List Users', done =>{
        controller.listAll()
            .then(response =>{
                response.length.should.equal(1);
                done();
            })
    });
    it('Delete User', done =>{
        controller.remove(config.userOne)
            .then(response =>{
                response.email.should.equal('red@email.com');
                response.username.should.equal('test red');
                response.fullname.should.equal('test red color');
                response.city.should.equal('test milwaukee');
                response.state.should.equal('test wi');
                response.age.should.equal(30);
                response.gender.should.equal('test male');
                done();
            })
    });

});