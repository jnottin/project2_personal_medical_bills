const express = require('express')
const router = express.Router()
const app = require('./app.js')
const movie = require('./movie.js')
const user = require('./user.js')


router.use('/', app)
router.use('/movie', movie)
router.use('/user', user)


module.exports = router