const express = require('express')

const emailVerification = require('../controler/customerEmailVerificationController')

const router = express.Router()

router.post('/v1/customer/emailverification', (req, res) => emailVerification(req, res))

module.exports = router;