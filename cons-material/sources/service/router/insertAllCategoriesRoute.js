let express = require('express');
const router = new express.Router();
let insertAllcategories = require('../controler/insertAllCategoriesController')
router.get('/v1/insertcategory', (req, res) => insertAllcategories(req, res))

module.exports = router