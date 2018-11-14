const { Movie, Rating } = require('../models/Movie.js')

module.exports = {
    index: (req, res) => {
        Movie.find({})
            .then(movies => {
                res.render("indexOld", { movies })
            })
    },
    boot: (req, res) => {
        Movie.find({})
            .sort({ rating: -1 })
            .then(movies => {
                res.render("index", { movies })
            })
    },
    create: (req, res) => {
        //CAN I JUST COLLECT ALL REQ.BODY?
        Movie.create({
            title: req.body.title,
            director: req.body.director,
            releaseDate: req.body.releaseDate,
            rating: req.body.rating
        }).then(movie => {
            res.redirect('/');
        });
    },
}
