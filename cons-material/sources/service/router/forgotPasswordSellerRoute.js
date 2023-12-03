let express = require('express');
let { forgotPassword } = require('../controler/forgotPasswordSellerController');

const router = new express.Router();


router.post('/v1/seller/forgotpassword', (req, res) => forgotPassword(req, res));

module.exports = router;