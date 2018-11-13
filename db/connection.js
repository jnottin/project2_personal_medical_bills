const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/medicalBillApp");
mongoose.Promise = Promise;
module.exports = mongoose;