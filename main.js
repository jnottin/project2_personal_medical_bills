// const { Movie, Rating } = require('./models/Movie.js')



// SELECTING INPUT BOX
var inputBoxesNewMovie1 = document.querySelectorAll(".inputBoxesNewMovie1").value;

//SELECTING THE BUTTON
const doneMakingNewMovieBtn = document.querySelector(".doneMakingNewMovieBtn");

//ADDING EVENT LISTENER TO BUTTON
doneMakingNewMovieBtn.addEventListener("click", checkAllBoxesHaveValue);

function checkAllBoxesHaveValue() {
    console.log(inputBoxesNewMovie1)
    console.log("hello")
}

//CALCULATE AVERAGE
var ratingsObjectPractice = {
    hello: "yes",
    ratings: [{
        _id: "5bec9f8e29bc029d082fbf6e--ONE",
        content: 5
    },
    {
        _id: "5bec9f8e29bc029d082fbf6e--TWO",
        content: 4
    },
    {
        _id: "5bec9f8e29bc029d082fbf6e--THREE",
        content: 5
    },
    {
        _id: "5bec9f8e29bc029d082fbf6e--FOUR",
        content: null
    }, {
        _id: "5bec9f8e29bc029d082fbf6e--FIVE",
        content: 7
    }]
}



function findAverageRatings() {
    var total = 0;
    for (var i = 0; i < ratingsObjectPractice.ratings.length; i++) {
        total += ratingsObjectPractice.ratings[i].content;
    }
    var avg = total / ratingsObjectPractice.ratings.length;
    return avg
}


