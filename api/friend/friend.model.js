const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, unique: true},
    owners: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
});

friendSchema.pre('save', function(next) {
    if (this._id == null) this._id = mongoose.Types.ObjectId();
    next();
});

module.exports.Friend = mongoose.model('Friend', friendSchema);
