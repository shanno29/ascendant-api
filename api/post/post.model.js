const relative = require('./../util/relative');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, unique: true},
    owners: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    comments: [{
        author: {type: Schema.Types.ObjectId, ref: 'User'},
        text: String,
        created: Date,
        updated: Date,
        relative: String,
    }],
    created: Date,
    updated: Date,
    relative: String,
});

postSchema.pre('save', function(next) {
    if (this._id == null) this._id = mongoose.Types.ObjectId();
    this.updated = Date.now();
    for(let i = 0; i < this.comments.length; i++) this.comments[i].updated = Date.now();
    next();
});

postSchema.post('init', post =>{
    post.relative =  relative(post.updated);
    for(let i = 0; i < post.comments.length; i++) post.comments[i].relative = relative(post.updated);
});


module.exports.Post = mongoose.model('Post', postSchema);
