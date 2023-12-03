let express = require('express');
const AllProductData = require('../model/allProductsData')
const Product = require('../model/sellingProducts');

const router = new express.Router();
// let { onesellerProducts, paginatedResults } = require('../controler/getSellerAddedProductsController');
let onesellerProducts = require('../controler/getSellerAddedProductsController');

// router.get('/v1/seller/selleraddedproducts/:sellerId', paginatedResults(AllProductData, Product), async(req, res) => onesellerProducts(req, res));
router.get('/v1/seller/selleraddedproducts/:sellerId', async(req, res) => onesellerProducts(req, res));

module.exports = router;