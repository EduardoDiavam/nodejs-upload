const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { promosify } = require('util');

const PostSchema = new mongoose.Schema( {
    name: String,
    size: Number,
    key: String,
    url: String,
    createAt: {
        type: Date,
        default: Date.now,
    },
});

PostSchema.pre('save', function() {
    if (!this.url) {
        this.url = `http://localhost:3000/files/${this.key}`
    }
})

PostSchema.pre('remove', function() {
    return promosify(fs.unlink)(path.resolve(__dirname, '..', '..', 'temp', 'uploads', this.key));
})

module.exports = mongoose.model("Post", PostSchema);