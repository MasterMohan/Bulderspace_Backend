const express = require('express')

const requestforQuote = require('../controler/requestForQuoteController')

const router = express.Router()

router.post('/v1/customer/requestforQuote', (req, res) => requestforQuote(req, res))

module.exports = router;