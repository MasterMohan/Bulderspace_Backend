let express = require('express');
const router = new express.Router();
let { fetchAllCategory } = require('../controler/allCategoriesSellerController')
router.get('/v1/seller/allcategory', (req, res) => fetchAllCategory(req, res))


module.exports = router