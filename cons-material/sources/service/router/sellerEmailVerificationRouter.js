const express = require('express')

const emailVerification = require('../controler/sellerEmailVerificationController')

const router = express.Router()

router.post('/v1/seller/emailverification', (req, res) => emailVerification(req, res))

module.exports = router;