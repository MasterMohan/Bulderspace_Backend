let express = require('express');
let { resetPassword } = require('../controler/resetPasswordController');

const router = new express.Router();


router.post('/v1/customer/resetpassword', (req, res) => resetPassword(req, res));

module.exports = router;