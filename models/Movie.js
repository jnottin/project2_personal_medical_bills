const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Rating = new Schema({
    content: Number,
    test: String
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
    ratings: [Rating],
    // finalRating: function () {
    //     var total = 0;
    //     for (var i = 0; i < ratings.length; i++) {
    //         total += ratings[i];
    //     }
    //     var avgRating = total / ratings.length;
    //     return avgRating
    // }
});


module.exports = {
    Movie: mongoose.model("Movie", Movie),
    Rating: mongoose.model("Rating", Rating)
};