// ** working

let express = require('express');

const router = new express.Router();
let { productUploader, upload } = require('../controler/allProductController');

router.post('/v1/seller/allproductdata', upload.single('productimage'), (req, res) => productUploader(req, res));

module.exports = router;