const express = require('express')
const router = express.Router()
const app = require('./app.js')
const medical_bill = require('./medical_bill.js')


router.use('/', app)
router.use('/medical_bill', medical_bill)


module.exports = router