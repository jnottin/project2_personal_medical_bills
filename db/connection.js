const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/movieTrailers", { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;