let express = require('express');

const router = new express.Router();
let { editUser } = require('../controler/editSellerProfileController');

router.post('/v1/seller/editinfo/:Id', (req, res) => editUser(req, res));

module.exports = router;