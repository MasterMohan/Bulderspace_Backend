const express = require('express');
const router = express.Router();
const isSelected = require('../controler/isSellerSelectedCategoryController');

router.get('/v1/seller/isaddedcategorylist/:sellerid', (req, res) => isSelected(req, res));

module.exports = router;