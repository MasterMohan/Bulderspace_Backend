let express = require('express');

const router = new express.Router();
let { updateproductprice } = require('../controler/editPriceOfProductController');

router.post('/v1/seller/editpriceofproduct/:sellerId/:productId/:date/:time', (req, res) => updateproductprice(req, res));

module.exports = router;