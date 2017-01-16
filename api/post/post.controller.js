const model = require('./post.model').Post;

module.exports = {

    make: (data) => {
        return model.create(data);
    },

    edit: (id, data) => {
        return model
            .findById(id)
            .then(post => {
                post.comments.push(data.comments[data.comments.length -1]);
                return post.save();
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
