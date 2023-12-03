let express = require('express');

const router = new express.Router();
let { registerUser } = require('../controler/userRegisterController');

router.post('/v1/customer/register-user', (req, res) => registerUser(req, res));

module.exports = router;