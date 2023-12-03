let express = require('express');
const router = new express.Router();
let { getAllProducts, paginatedResults } = require('../controler/productsByCategorySellerController');
const AllProductData = require('../model/allProductsData');


// cement data fetch from db to send client
router.get('/v1/seller/product/:category', paginatedResults(AllProductData), async(req, res) => await getAllProducts(req, res));

module.exports = router;