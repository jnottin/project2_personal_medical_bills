const Medical_bill = require('../models/Medical_bill.js')

module.exports = {
    index: (req, res) => {
        Medical_bill.find({})
            .then(medical_bills => {
                res.render("user/index", { medical_bills })
            })
    },
}
