const mongoose = require("mongoose");

// This is the schema of our post request
const schema = mongoose.Schema(
    { author: 'String', title: 'String', content: 'String' },
    // it will autogenerate a timestamp for us
    { timestamp: true }
)

// Export our post model.
const post = mongoose.model('Post', schema);

module.exports = post;