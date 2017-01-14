const relative = require('./../util/relative');
const config = require('./../../config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, unique: true},
    title: String,
	artist: String,
	album: String,
	latitude: Number,
	longitude: Number,
	spotify: String,
	soundcloud: String,
	youtube: String,
    artwork: {type: String, default: config.default_artwork},
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    created: Date,
    updated: Date,
    relative: String,
});


trackSchema.pre('save', function(next) {
    if (this._id == null) this._id = mongoose.Types.ObjectId();
    this.updated = Date.now();
    next();
});

trackSchema.post('init', track =>{
    track.relative =  relative(track.updated);
});

module.exports.Track = mongoose.model('Track', trackSchema);
