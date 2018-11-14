const Movie = require("../models/Movie.js");

Movie.find({}).remove(() => {
    let earInfection = Movie.create({
        title: "Creed",
        director: "Ryan Coogler",
        releaseDate: "12/03/18",
        rating: 3,
        url: "https://www.youtube.com/watch?v=M949G2XzYug"
    })
    let stitches = Movie.create({
        title: "Pokemon",
        director: "Ash Catchem",
        releaseDate: "12/04/18",
        rating: 4,
        url: "https://www.youtube.com/watch?v=nQk7DWW4mz8"
    })
    let rootCanal = Movie.create({
        title: "Widows",
        director: "Steve McQueen",
        releaseDate: "12/05/18",
        rating: 5,
        url: "https://www.youtube.com/watch?v=nN2yBBSRC78"
    })
})