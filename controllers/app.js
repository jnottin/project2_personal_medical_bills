const { Movie, Rating } = require('../models/Movie.js')

module.exports = {
    index: (req, res) => {
        Movie.find({})
            .sort({ ratings: -1 })
            .then(movies => {
                res.render("index", { movies })
            })
    },
}
