const model = require('./user.model').User;

module.exports = {

    make: (data) => {
        // return model
        //     .find({email: data.email})
        //     .then(users => {
        //         if (users.length > 0) throw new Error('That Email Is Already In Use');
        //         return model.create(data);
        //     });
        return null;
    },

    lookup: (id) => {
        return model.findById(id);
    },

    listAll: () => {
        return model.find({});
    },

    remove: (id) => {
        return model.findByIdAndRemove(id);
    },

};

