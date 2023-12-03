const express = require('express');
const router = express.Router();
const feedback = require('../controler/videoFeedbackCustomerController');

router.post('/v1/customer/videofeedback', (req, res) => feedback(req, res));

module.exports = router;