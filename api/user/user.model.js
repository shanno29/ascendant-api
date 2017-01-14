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
    banner: {type: String, default: config.default_banner},
    picture: {type: String, default: config.default_picture},
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
// userSchema.static.convertPicture = (picture, id) => {
//     return fs.write(config.path_picture + id + '.png', picture.replace(/^data:image\/png;base64,/, ''), 'base64')
//       .next(filename => {return filename;});
// };
//
// userSchema.static.convertBanner = (banner, id) => {
//     return fs.write(config.path_banner + id + '.png', banner.replace(/^data:image\/png;base64,/, ''), 'base64')
//       .next(filename => {return filename;});
// };
