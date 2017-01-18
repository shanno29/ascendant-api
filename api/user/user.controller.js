const model = require('./user.model').User;

module.exports = {

    make: (data) => {
        return model
            .find({email: data.email})
            .then(users => {
                if (users.length > 0) throw new Error('That Email Is Already In Use');
                return model.create(data);
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
                user.client = data.client ? data.client : user.client;
                user.state = data.state ? data.state : user.state;
                user.city = data.city ? data.city : user.city;
                user.age = data.age ? data.age : user.age;
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

