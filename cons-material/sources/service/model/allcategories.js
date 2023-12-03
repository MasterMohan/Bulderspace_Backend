const mongoose = require('mongoose')


let allCategories = new mongoose.Schema({
    category: {
        type: String,
        unique: true
    },
    categoryImage: {
        type: String
    },
    discription: {
        type: String
    }
})


let AllCategories = mongoose.model('AllCategory', allCategories);
module.exports = AllCategories