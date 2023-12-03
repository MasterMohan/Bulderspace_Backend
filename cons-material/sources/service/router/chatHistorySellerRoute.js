const express = require('express');
const router = express.Router();
const chatHistory = require('../controler/chatHistorySellerController')

router.get('/v1/seller/chathistory/:id', async(req, res) => await chatHistory(req, res))

module.exports = router;