const { response } = require('express');
let express = require('express');
let data = require('../model/newProductData')

const router = new express.Router();

router.get('/v1/checkdata', async(req, res) => {
    const products = await data.find();
    res.status(200).send(products)
});

module.exports = router;