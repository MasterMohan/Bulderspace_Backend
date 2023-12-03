let express = require('express');
const router = new express.Router();

const filterProducts = require('../controler/filterProductsSellerController');

router.get('/v1/seller/filterproducts', (req, res) => filterProducts(req, res));



module.exports = router;