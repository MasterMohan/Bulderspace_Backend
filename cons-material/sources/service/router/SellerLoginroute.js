const express = require('express');
const { loginSeller } = require('../controler/sellerLoginController');

const router = new express.Router();


router.post('/v1/seller/login', (req, res) => loginSeller(req, res));

module.exports = router;