const express = require('express');
const router = express.Router();
const updateCategorySelection = require('../controler/updateCategorySelectionSellerController');

router.get('/v1/seller/updatecategoryselection', (req, res) => updateCategorySelection(req, res))

module.exports = router;