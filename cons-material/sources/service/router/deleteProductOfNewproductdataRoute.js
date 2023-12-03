const express = require('express')
const router = new express.Router()

const deleteProduct = require('../controler/deleteProductOfNewproductdataController')

router.get('/v1/deleteproductofnewproductdata', async(req, res) => await deleteProduct(req, res))

module.exports = router;