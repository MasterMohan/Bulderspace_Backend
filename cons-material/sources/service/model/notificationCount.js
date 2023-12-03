const mongoose = require('mongoose')

const notificationCountSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    room: {
        type: String
    },
    messagecount: {
        type: Number,
        default: 0
    },
    videocount: {
        type: Number,
        default: 0
    },
});


const NotificationCount = mongoose.model('notificationcount', notificationCountSchema);
module.exports = NotificationCount