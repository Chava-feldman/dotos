const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: String,
        city: String,
        street: String,
        mail: String,
        tell: String
    }, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
