const express = require('express');
const router = express.Router();
const unSelecetCategory = require('../controler/passUnselectedCategorySellerController');


router.get('/v1/seller/unselectedcategory/:sellerid', (req, res) => unSelecetCategory(req, res));


module.exports = router;