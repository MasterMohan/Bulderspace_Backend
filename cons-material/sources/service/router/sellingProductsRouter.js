let express = require('express');

const router = new express.Router();
let sellingProducts = require('../controler/sellingProductsController');

router.post('/v1/seller/sellingproducts/:sellerId/:productId/:date/:time', (req, res) => sellingProducts(req, res));

module.exports = router;