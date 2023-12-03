let express = require('express');

const router = new express.Router();
// let User = require('../model/userdata');


router.get('/', (req, res) => res.send('hello from the other side!'))

module.exports = router;