const express = require('express');
const router = express.Router();
const deleteCategorySelection = require('../controler/deleteSelectedCategorySellerController');

router.delete('/v1/seller/deletecategoryselection', (req, res) => deleteCategorySelection(req, res));

module.exports = router;