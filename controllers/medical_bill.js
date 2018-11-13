const Medical_bill = require('../models/Medical_bill.js')

module.exports = {
    show: (req, res) => {
        Medical_bill.findOne({ _id: req.params.id }).then(medical_bill => {
            res.render("medical_bill/show", medical_bill)
        })
    },
    edit: (req, res) => {
        Medical_bill.findOne({ _id: req.params.id }).then(medical_bill => {
            res.render("medical_bill/edit", medical_bill)
        })
    },
    update: (req, res) => {
        Medical_bill.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
            medical_bill => {
                res.redirect(`/medical_bill/${medical_bill.id}`);
            })
    },
    new: (req, res) => {
        res.render("medical_bill/new")
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
    delete: (req, res) => {
        Medical_bill.findOneAndRemove({ _id: req.params.id }).then(() => {
            res.redirect("/");
        });
    }
}
