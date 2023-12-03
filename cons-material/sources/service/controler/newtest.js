var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    postedBy: {
        type: String
    },
    comments: [{
        text: String,
        postedBy: {
            type: String
        }
    }],
    imagename: String
});

module.exports = mongoose.model("Post", PostSchema);