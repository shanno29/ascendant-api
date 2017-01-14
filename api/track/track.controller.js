const model = require('./track.model').Track;

module.exports = {

    make: (data) => {
        return model.create(data);
    },

    lookup: (id) => {
        return model.findById(id).populate('owner');
    },

    listUser: (id) => {
        return model.find({owner: id}).sort({updated: -1}).populate('owner');
    },

    listAll: () => {
        return model.find({}).sort({updated: -1}).populate('owner');
    },

    remove: (id) => {
        return model.findByIdAndRemove(id);
    },

};
