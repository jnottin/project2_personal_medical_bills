const mongoose = require("../db/connection");

const Medical_billSchema = new mongoose.Schema({
    procedure: String,
    billNumber: String,
    insurance: String,
    cost: Number,
});

const Medical_bill = mongoose.model("Medical_bill", Medical_billSchema);

module.exports = Medical_bill;