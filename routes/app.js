const express = require('express')
const router = express.Router()
const appCtrl = require('../controllers/app.js')

router.get('/', appCtrl.index)

module.exports = router