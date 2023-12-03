let express = require('express');
const router = new express.Router();

const getSellerImg = require('../controler/getSellerImageController');

router.get('/v1/seller/getprofilepic/:sellerId', (req, res) => getSellerImg(req, res));



module.exports = router;