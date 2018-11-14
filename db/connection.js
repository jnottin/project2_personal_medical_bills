const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/movieTrailers");
mongoose.Promise = Promise;
module.exports = mongoose;