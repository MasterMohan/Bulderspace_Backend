let express = require('express');
const router = new express.Router();

const getCategory = require('../controler/getCategorySellerController');

router.get('/v1/seller/getcategory', (req, res) => getCategory(req, res));



module.exports = router;