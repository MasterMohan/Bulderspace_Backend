const mongoose = require('mongoose')


let categories = new mongoose.Schema({
    category: {
        type: String
    },
    active: {
        type: Boolean
    },
}, );


let sellerCategories = new mongoose.Schema({
    sellerid: {
        type: String
    },
    categories: [categories]
});

const sellerCategory = mongoose.model('sellercategory', sellerCategories);
module.exports = sellerCategory