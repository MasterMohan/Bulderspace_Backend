let express = require('express');
const router = new express.Router();

const getBrand = require('../controler/getBrandSellerController');

router.get('/v1/seller/getbrand', (req, res) => getBrand(req, res));



module.exports = router;