const mongoose = require('mongoose')


let productSchema = new mongoose.Schema({
    cost: {
        type: Number
    },
    sellerId: {
        type: String
    },
    productId: {
        type: String
    },
    time: {
        type: String
    },
    date: {
        type: String
    }
}, { timestamps: true });
// });


const ProductSchema = new mongoose.model('ProductSchema', productSchema);


module.exports = ProductSchema;