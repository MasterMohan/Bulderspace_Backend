let express = require('express');
const router = new express.Router();

const getSubcagegory = require('../controler/getSubcategorySellerController');

router.get('/v1/seller/getsubcategory', (req, res) => getSubcagegory(req, res));



module.exports = router;