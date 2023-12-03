let express = require('express');

const router = new express.Router();
let sellerbyproduct = require('../controler/getSellerByProductsController');

router.get('/v1/customer/sellerinfo/:productId', (req, res) => sellerbyproduct(req, res));

module.exports = router;