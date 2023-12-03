const mongoose = require('mongoose');

const videoFeedback = new mongoose.Schema({
    personid: {
        type: String,
    },
    ratings: {
        type: Number,
    },
    persontype: {
        type: String
    },
}, { timestamps: true });

const VideoFeedBack = mongoose.model('videofeedback', videoFeedback);

module.exports = VideoFeedBack;