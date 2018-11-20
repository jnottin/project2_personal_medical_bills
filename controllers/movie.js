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
            url: req.body.url
        }).then(movie => {
            let content = req.body.ratings
            movie.ratings.push({
                content
            });
            res.redirect('/');
        });
    },
    delete: (req, res) => {
        Movie.findOneAndRemove({ _id: req.params.id }).then(() => {
            res.redirect("/");
        });
    },
    rate: (req, res) => {
        let content = req.body.rateIt;
        Movie.findOne({
            _id: req.params.id
        }).then(movie => {
            movie.ratings.push({
                content
            });
            // let finalRatingsArray = movie.ratings
            if(movie.ratings.length > 1){
                movie.avgRating = movie.avgRatingMethod(movie.ratings);
            } else {
                movie.avgRating = movie.ratings[0].content
            }
            movie.save(err => {
                res.redirect("/")
            })
        })
    }
}

