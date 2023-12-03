const mongoose = require('mongoose')


let otp = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    }
})


let OTP = mongoose.model('otp', otp);
module.exports = OTP;