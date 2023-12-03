const mongoose = require('mongoose');

let productSpecification = new mongoose.Schema({
    sku: {
        type: String
    },
    size: {
        type: String
    },
    manufacture: {
        type: String
    },
    productpricelabel: {
        type: String
    },
    manufacturesinformation: {
        type: String
    }
});

let productDetails = new mongoose.Schema({

    category: {
        type: String
    },
    subcategory: {
        type: String
    },
    productname: {
        type: String
    },
    productbrand: {
        type: String
    },
    productdiscription: {
        type: String
    },
    cost: {
        type: Number
    },
    unit: {
        type: String
    },
    productimage: {
        type: String
    },
    productSpecification: [productSpecification]
}, { timestamps: true });


// const AllProductData = new mongoose.module('AllProductData', productDetails)
const AllProductData = new mongoose.model('AllProductData', productDetails)


module.exports = AllProductData;