const mongoose = require('mongoose')

const createdRoomSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    sendTo: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    sellername: {
        type: String,
        required: true
    },
    customername: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
});

const CreatedRoom = mongoose.model('createdroom', createdRoomSchema);
module.exports = CreatedRoom