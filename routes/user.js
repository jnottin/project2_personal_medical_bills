const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user.js')

router.get('/', userCtrl.index)

module.exports = router