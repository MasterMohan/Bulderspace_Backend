let express = require('express');
const router = new express.Router();

const getSubcagegory = require('../controler/getSubcategoryController');

router.get('/v1/customer/getsubcategory', (req, res) => getSubcagegory(req, res));



module.exports = router;