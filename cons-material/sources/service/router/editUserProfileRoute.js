let express = require('express');

const router = new express.Router();
let { editUser } = require('../controler/editUserProfileController');

router.post('/v1/customer/editinfo/:Id', (req, res) => editUser(req, res));

module.exports = router;