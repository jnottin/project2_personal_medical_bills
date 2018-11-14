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
