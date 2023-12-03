let express = require('express');
const router = new express.Router();
let { fetchAllCategory } = require('../controler/allCategoriesController')
router.get('/v1/allcategory', (req, res) => fetchAllCategory(req, res))


module.exports = router