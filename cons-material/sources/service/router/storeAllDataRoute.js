let express = require('express');
const router = new express.Router();
let pushAllDataMongod = require('../controler/storeAllDataController');

router.get('/store', async(req, res) => await pushAllDataMongod(req, res));

module.exports = router;