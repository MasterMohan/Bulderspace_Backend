const express = require('express');
const router = new express.Router()

const renameCategoryNames = require('../controler/renameCategoryNamesController')


router.get('/v1/renamecategorynames', async(req, res) => renameCategoryNames(req, res))

module.exports = router