const model = require('./post.model').Post;

module.exports = {

    make: (data) => {
        return model.create(data);
    },

    lookup: (id) => {
        return model.findById(id).populate('owners');
    },

    listUser: (id) => {
        return model.find({owners: id}).sort({updated: -1}).populate('owners');
    },

    listAll: () => {
        return model.find({}).sort({updated: -1}).populate('owners');
    },

    remove: (id) => {
        return model.findByIdAndRemove(id);
    },

};
