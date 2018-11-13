const Medical_bill = require('../models/Medical_bill.js')

module.exports = {
    index: (req, res) => {
        Medical_bill.find({})
            .then(medical_bills => {
                res.render("indexOld", { medical_bills })
            })
    },
    boot: (req, res) => {
        Medical_bill.find({})
            .then(medical_bills => {
                res.render("index", { medical_bills })
            })
    },
    create: (req, res) => {
        //CAN I JUST COLLECT ALL REQ.BODY?
        Medical_bill.create({
            procedure: req.body.procedure,
            billNumber: req.body.billNumber,
            insurance: req.body.insurance,
            cost: req.body.cost
        }).then(medical_bill => {
            res.redirect('/');
        });
    },
}
