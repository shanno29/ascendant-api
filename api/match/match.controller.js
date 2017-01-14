const model = require('./match.model').Match;

module.exports = {

    make: (data) => {
        return model
            .find({owners: data.owners})
            .then(chats => {
                if (chats.length > 0) throw new Error('That Match Already Exists');
                return model.create(data);
            });
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
