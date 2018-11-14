const { Movie, Rating } = require('../models/Movie.js')

module.exports = {
    show: (req, res) => {
        Movie.findOne({ _id: req.params.id }).then(movie => {
            res.render("movie/show", movie)
        })
    },
    edit: (req, res) => {
        Movie.findOne({ _id: req.params.id }).then(movie => {
            res.render("movie/edit", movie)
        })
    },
    update: (req, res) => {
        Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
            movie => {
                res.redirect(`/movie/${movie.id}`);
            })
    },
    new: (req, res) => {
        res.render("movie/new")
    },
    create: (req, res) => {
        Movie.create({
            title: req.body.title,
            director: req.body.director,
            releaseDate: req.body.releaseDate,
            rating: req.body.rating,
            url: req.body.url
        }).then(movie => {
            res.redirect('/');
        });
    },
    delete: (req, res) => {
        Movie.findOneAndRemove({ _id: req.params.id }).then(() => {
            res.redirect("/");
        });
    },
    rate: (req, res) => {
        Movie.findOne({ _id: req.params.id }).then(movie => {
            movie.rating.push(req.body.rating);
            console.log(movie.rating)
            res.redirect(`/movie/${movie._id}`);
        })
    }
}

