const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Rating = new Schema({
    content: Number,
    avgRating: Number,
    // author: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    // }
});

const Movie = new Schema({
    title: String,
    director: String,
    releaseDate: String,
    url: String,
    ratings: [Rating],
    avgRating: Number
});


//create a model method that will take all of the current model/instances ratings and average them
//you create the method for this on the model itself inside of the model file
//have a ternary/if statement inside of the model method that will return a singular rating if there is only one
//and an average if there is more than one

// Movie.methods.getRatingTotal(total, num){
//     return total + num
// }

Movie.methods.avgRatingMethod = function (cb) {
    console.log(cb)
    // return this.model('Movie').find({ title: this.title}, cb)

    

    let sum = this.ratings.reduce( (a, b) => {
        return a.content + b.content
    })

    avg = sum / this.ratings.length
    return avg
    /* 
        //////////////////*
        var sum, avg = 0;

        // dividing by 0 will return Infinity
        // arr must contain at least 1 element to use reduce
        if (arr.length)
        {
            sum = arr.reduce(function(a, b) { return a + b; });
            avg = sum / arr.length;
        }

        document.write("The sum is: " + sum + ". The average is: " + avg + "<br/>");

    *************/


    // if (finalRatingsArray.length === 1) {
    //     return finalRatingsArray[0]
    // } else {
    //     var total = 0;
    //     for (var i = 0; i < finalRatingsArray.length; i++) {
    //         total += finalRatingsArray[i];
    //     }
    //     var avg = total / finalRatingsArray.length;
    //     return avg;
    // }
};

// Movie.methods.avgRatingMethod = function (finalRatingsArray) {
//     if (finalRatingsArray.length === 1) {
//         return finalRatingsArray[0]
//     } else {
//         var total = 0;
//         for (var i = 0; i < finalRatingsArray.length; i++) {
//             total += finalRatingsArray[i];
//         }
//         var avg = total / finalRatingsArray.length;
//         return avg;
//     }
// };


module.exports = {
    Movie: mongoose.model("Movie", Movie),
    Rating: mongoose.model("Rating", Rating)
};