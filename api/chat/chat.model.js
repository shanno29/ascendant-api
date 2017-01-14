const relative = require('./../util/relative');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, unique: true},
    owners: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    messages: [{
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


chatSchema.pre('save', function(next) {
    if (this._id == null) this._id = mongoose.Types.ObjectId();
    this.updated = Date.now();
    for(let i = this.messages.length; i--;) this.messages[i].updated = Date.now();
    next();
});

chatSchema.post('init', chat =>{
    chat.relative =  relative(chat.updated);
    for(let i = chat.messages.length; i--;) chat.messages[i].relative = relative(chat.updated);
});

module.exports.Chat = mongoose.model('Chat', chatSchema);
