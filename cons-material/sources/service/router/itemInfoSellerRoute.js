let express = require('express');
const router = new express.Router();
const fetchItemInfo = require('../controler/itemInfoSellerController');

router.get('/v1/seller/iteminfo/:id', (req, res) => fetchItemInfo(req, res));



module.exports = router;