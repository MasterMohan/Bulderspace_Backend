let mongoose = require('mongoose');


const builderSmartData = new mongoose.Schema({
    category: {
        type: String
    },
    subcategory: {
        type: String
    },
    itemname: {
        type: String
    },
    oldprice: {
        type: String
    },
    newprice: {
        type: String
    },
    unit: {
        type: String
    },
    brand: {
        type: String
    },
    discription: {
        type: String
    },
    sku: {
        type: String
    },
    size: {
        type: String
    },
    pricelable: {
        type: String
    },
    manufacture: {
        type: String
    },
    image: {
        type: String
    }
})


const BuilderSmartData = new mongoose.model('BuilderSmartData', builderSmartData)

module.exports = BuilderSmartData;