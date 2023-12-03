let express = require('express');
let { checkOtp } = require('../controler/checkOtpSellerController');

const router = new express.Router();


router.post('/v1/seller/checkotp', (req, res) => checkOtp(req, res));

module.exports = router;