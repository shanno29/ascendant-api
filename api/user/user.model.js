const fs = require('fs-writefile-promise/lib/node7');
const config = require('./../../config');
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, unique: true},
    email: String,
    username: String,
    password: String,
    type: String,
    version: String,
    fullname: String,
    token: String,
    city: String,
    state: String,
    age: Number,
    gender: String,
    aboutme: {type: String, default: 'Tap to edit your about info'},
    avatar: {type: Array, default: [config.default_avatar]},
    banner: {type: Array, default: [config.default_banner]},
});

userSchema.pre('save', function(next) {
    if (this._id == null) this._id = mongoose.Types.ObjectId();
    next();
});

userSchema.statics.checkClient = (type, version) =>{
    const android = type === 'android' && version === config.android;
    const windows = type === 'windesktop' && version === config.windows;
    return android || windows;
};

userSchema.statics.generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(4), null);

userSchema.statics.validPassword = (one, two) => bcrypt.compareSync(one, two);

module.exports.User = mongoose.model('User', userSchema);


