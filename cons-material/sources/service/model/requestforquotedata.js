const mongoose = require('mongoose');
const validator = require('validator');
let regex = /^([0-9]){10}$/;

let rfquoteData = new mongoose.Schema({
  

    email: {
        type: String,
        trim: true,
        lowercase: true,
      
    },

    phone: {
        type: String,
        required: true
    },

    requirement: {
        type: String,
        required: true
    },

 
    sellerId: {
        type: String,
        required: true
    },
}, { timestamps: true })

let RequestQuote = mongoose.model('rfquotedata', rfquoteData);

module.exports = RequestQuote;