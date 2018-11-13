const Medical_bill = require("../models/Medical_bill.js");

Medical_bill.find({}).remove(() => {
    let earInfection = Medical_bill.create({
        procedure: "Ear infection",
        billNumber: "HS001",
        insurance: "Blue Cross",
        cost: 800,
    })
    let stitches = Medical_bill.create({
        procedure: "Stitches",
        billNumber: "HS001",
        insurance: "Kaiser",
        cost: 200,
    })
    let rootCanal = Medical_bill.create({
        procedure: "Root Canal",
        billNumber: "HS001",
        insurance: "Tricare",
        cost: 2000,
    })
})