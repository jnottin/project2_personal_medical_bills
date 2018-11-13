const express = require('express')
const router = express.Router()
const appCtrl = require('../controllers/app.js')

router.get('/old', appCtrl.index)
router.get('/', appCtrl.boot)
router.post('/', appCtrl.boot)


module.exports = router