const express = require('express');
const router = express.Router();

const selectedCategory = require('../controler/selectedCategoriesSellerController')

router.get('/v1/seller/selectedcategory/:sellerid', (req, res) => selectedCategory(req, res))

module.exports = router;