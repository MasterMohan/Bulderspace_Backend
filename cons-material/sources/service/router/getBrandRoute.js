let express = require('express');
const router = new express.Router();

const getBrand = require('../controler/getBrandController');

router.get('/v1/customer/getbrand', (req, res) => getBrand(req, res));



module.exports = router;