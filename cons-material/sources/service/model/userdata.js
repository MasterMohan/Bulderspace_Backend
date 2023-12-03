const mongoose = require('mongoose');
const validator = require('validator');
let regex = /^([0-9]){10}$/;

let userData = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 20,
        required: true
    },

    lastname: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 20,
        required: true
    },

    email: {
        type: String,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        },
        required: 'Email address is required'
    },

    phone: {
        type: String,
        validate(value) {
            if (!value.match(regex)) {
                throw new Error("Phone number is not validate.")
            }
        },
        unique: true,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    placeofbirth: {
        type: String,
        // required: true
    },

    password: {
        type: String,
        required: true
    },

    logintype: {
        type: String
    },
}, { timestamps: true })

let User = mongoose.model('userdata', userData);

module.exports = User;