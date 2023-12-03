const express = require('express');
const { loginUser } = require('../controler/userLoginController');

const router = new express.Router();


router.post('/v1/customer/login', (req, res) => loginUser(req, res));

module.exports = router;