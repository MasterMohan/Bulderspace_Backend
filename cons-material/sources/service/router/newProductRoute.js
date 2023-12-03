let express = require('express');

const router = new express.Router();
let { productUploader, upload } = require('../controler/newProductController');

router.post('/v1/seller/newproductdata', upload.single('productimage'), (req, res) => productUploader(req, res));

module.exports = router;