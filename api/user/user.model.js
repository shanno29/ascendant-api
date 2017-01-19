const fs = require('fs-writefile-promise/lib/node7');
const config = require('./../../config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, unique: true},
    email: String,
    username: String,
    password: String,
    client: String,
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

module.exports.User = mongoose.model('User', userSchema);

// userSchema.static.checkClient = (user) =>{
//   const android = user.client == 'android' && user.version == config.android_version;
//   const windows = user.client == 'windesktop' && user.version == config.windows_version;
//   if (!android && !windows) return next(new Error('Outdated Client'));
// };
//
