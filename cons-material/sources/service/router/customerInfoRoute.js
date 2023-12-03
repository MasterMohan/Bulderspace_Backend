const express = require('express');
const customerInfo = require('../controler/customerInfoController');

const router = new express.Router();


router.get('/v1/customerinfo/:Id', (req, res) => customerInfo(req, res));

module.exports = router;