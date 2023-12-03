let express = require('express');
let { checkOtp } = require('../controler/checkOtpController');

const router = new express.Router();


router.post('/v1/customer/checkotp', (req, res) => checkOtp(req, res));

module.exports = router;