const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema(
    {
        userId: String,
        title: String,
        body: String,
        done: Boolean
        }, {
    timestamps: true
});

module.exports = mongoose.model('Todo', TodoSchema);
