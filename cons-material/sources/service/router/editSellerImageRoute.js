let express = require('express');

const router = new express.Router();
let { editSellerImage, upload } = require('../controler/editSellerImageController');

router.post('/v1/seller/edit-image/:Id', upload.single('image'), (req, res) => editSellerImage(req, res));

module.exports = router;