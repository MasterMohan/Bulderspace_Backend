const express = require('express');
const saveCategorySeller = require('../controler/sellerSavedCategoryController');

const router = express.Router();

router.get('/v1/seller/addcategory', (req, res) => saveCategorySeller(req, res));


module.exports = router;