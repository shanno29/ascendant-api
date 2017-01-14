const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, unique: true},
    owners: [{
	    type: Schema.Types.ObjectId, ref: 'User'
	}],
});

matchSchema.pre('save', function(next) {
    if (this._id == null) this._id = mongoose.Types.ObjectId();
    next();
});

module.exports.Match = mongoose.model('Match', matchSchema);
