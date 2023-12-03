let express = require('express');
const router = new express.Router();
let { getAllProducts, paginatedResults } = require('../controler/productsByCategoryCustomerController');
const AllProductData = require('../model/allProductsData');
// const NewProductData = require('../model/allProductsData')


// cement data fetch from db to send client
router.get('/v1/customer/product/:category', paginatedResults(AllProductData), async(req, res) => await getAllProducts(req, res));
// router.get('/v1/customer/product/:category', paginatedResults(NewProductData), async(req, res) => await getAllProducts(req, res));

module.exports = router;