const express = require('express')
const router = express.Router()
const medical_billsCtrl = require('../controllers/medical_bill.js')

router.post('/', medical_billsCtrl.create);
router.get('/edit/:id', medical_billsCtrl.edit);
router.put('/update/:id', medical_billsCtrl.update);
router.get('/delete/:id', medical_billsCtrl.delete);
//.new needs to be above .show
router.get('/new', medical_billsCtrl.new);
router.get('/:id', medical_billsCtrl.show);

module.exports = router