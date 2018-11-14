const express = require('express')
const router = express.Router()
const moviesCtrl = require('../controllers/movie.js')

router.post('/', moviesCtrl.create);
router.patch('/:id', moviesCtrl.rate);
router.get('/edit/:id', moviesCtrl.edit);
router.put('/update/:id', moviesCtrl.update);
router.get('/delete/:id', moviesCtrl.delete);
//.new needs to be above .show
router.get('/new', moviesCtrl.new);
router.get('/:id', moviesCtrl.show);

module.exports = router