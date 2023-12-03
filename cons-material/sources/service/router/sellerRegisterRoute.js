let express = require('express');

const router = new express.Router();
let { registerSeller } = require('../controler/sellerRegisterController');

router.post('/v1/seller/register-user', (req, res) => registerSeller(req, res));

module.exports = router;