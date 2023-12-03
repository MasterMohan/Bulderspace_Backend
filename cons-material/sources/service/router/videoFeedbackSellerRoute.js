const express = require('express');
const router = express.Router();
const feedback = require('../controler/videoFeedbackSellerController');

router.post('/v1/seller/videofeedback', (req, res) => feedback(req, res));

module.exports = router;