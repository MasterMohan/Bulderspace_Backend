let express = require('express');
const router = new express.Router();
const fetchItemInfo = require('../controler/itemInfoController');

router.get('/v1/customer/iteminfo/:id', (req, res) => fetchItemInfo(req, res));



module.exports = router;