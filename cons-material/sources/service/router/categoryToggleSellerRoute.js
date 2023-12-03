const express = require('express');
const router = express.Router()

const categoryToggle = require('../controler/categoryToggleSellerController')

router.get('/v1/seller/categorytoggle/:id', (req, res) => categoryToggle(req, res));

module.exports = router;