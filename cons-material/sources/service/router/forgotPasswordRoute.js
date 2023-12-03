let express = require('express');
let { forgotPassword } = require('../controler/forgotPasswordController');

const router = new express.Router();


router.post('/v1/customer/forgotpassword', (req, res) => forgotPassword(req, res));

module.exports = router;