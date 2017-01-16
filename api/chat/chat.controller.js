const model = require('./chat.model').Chat;

module.exports = {

    make: (data) => {
        return model
            .find({owners: data.owners})
            .then(chats => {
                if (chats.length > 0) throw new Error('That Chat Already Exists');
                else return model.create(data);
            });
    },

    edit: (id, data) => {
        return model
            .findById(id)
            .then(chat => {
                chat.messages.push(data.messages[data.messages.length -1]);
                return chat.save();
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

