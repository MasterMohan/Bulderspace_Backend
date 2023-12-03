let express = require('express');
let { resetPassword } = require('../controler/resetPasswordSellerController');

const router = new express.Router();


router.post('/v1/seller/resetpassword', (req, res) => resetPassword(req, res));

module.exports = router;