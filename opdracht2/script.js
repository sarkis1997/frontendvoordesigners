/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
// KeyboardEvent()

var sliderList = document.getElementById("image-slider");
var allImages = document.getElementById("image-slider").querySelectorAll("img");

//buttons
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");

// //button listeners
// nextButton.addEventListener("click", ());

//keyup is als de toets wordt losgeslaten, keydown, is als de toest wordt ingedrukt

document.addEventListener("keydown", function(event) {
    if(event.keyCode == 37) {
        console.log("Left was pressed");
    }
    else if(edf.keyCode == 39) {
       console.log("Right was pressed");
    }
});