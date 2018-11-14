const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Rating = new Schema({
    content: Number,
    // author: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    // }
});

const Movie = new Schema({
    title: String,
    director: String,
    releaseDate: String,
    rating: [Number],
    url: String,
});


module.exports = {
    Movie: mongoose.model("Movie", Movie),
    Rating: mongoose.model("Rating", Rating)
};