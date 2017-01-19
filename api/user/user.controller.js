const model = require('./user.model').User;
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {

    make: (data) => {
        return model
            .find({email: data.email})
            .then(users => {
                if (users.length > 0) throw new Error('That Email Is Already In Use');
                data.password = model.generateHash(data.password);
                return model.create(data);
            });
    },

    login: (id, data) => {
        return model
            .findById(id)
            .then(user => {
                if(!model.validPassword(data.password, user.password)) throw new Error('Incorrect Password');
                if(!model.checkClient(data.type, data.version)) throw new Error('Outdated Client');
                user.token = jwt.sign(user, config.jwtSecret, {expiresIn: 10080});
                return user;
            });
    },

    edit: (id, data) => {
        return model
            .findById(id)
            .then(user => {
                user.username = data.username ? data.username : user.username;
                user.fullname = data.fullname ? data.fullname : user.fullname;
                user.version = data.version ? data.version : user.version;
                user.aboutme = data.aboutme ? data.aboutme : user.aboutme;
                user.gender = data.gender ? data.gender : user.gender;
                user.type = data.type ? data.type : user.type;
                user.state = data.state ? data.state : user.state;
                user.city = data.city ? data.city : user.city;
                user.age = data.age ? data.age : user.age;
                return user.save();
            });
    },

    editAvatar: (id, data) => {
        return model
            .findById(id)
            .then(user => {
                user.avatar.push(config.images + '/users/avatars/' + data.filename);
                return user.save();
            });
    },

    editBanner: (id, data) => {
        return model
            .findById(id)
            .then(user => {
                user.banner.push(config.images + '/users/banners/' + data.filename);
                return user.save();
            });
    },

    lookup: (id) => {
        return model
            .findById(id);
    },

    listAll: () => {
        return model
            .find({});
    },

    remove: (id) => {
        return model
            .findByIdAndRemove(id);
    },

};

