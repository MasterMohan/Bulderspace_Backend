const express = require('express');
const sellerInfo = require('../controler/sellerInfoController');

const router = new express.Router();


router.get('/v1/sellerinfo/:Id', (req, res) => sellerInfo(req, res));

module.exports = router;