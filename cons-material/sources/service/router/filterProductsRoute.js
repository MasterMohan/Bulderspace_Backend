let express = require('express');
const router = new express.Router();

const filterProducts = require('../controler/filterProductsController');

router.get('/v1/customer/filterproducts', (req, res) => filterProducts(req, res));



module.exports = router;