const { Movie, Rating } = require('../models/Movie.js')

module.exports = {
    index: (req, res) => {
        Movie.find({})
            .then(movies => {
                res.render("user/index", { movies })
            })
    },
}
