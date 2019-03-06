/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
// KeyboardEvent()

var sliderList = document.getElementById("image-slider");
var currentImage = document.getElementById("image-slider").querySelector("li:nth-of-type(4)");
var sliderContainer = document.getElementById("image-slider-wrapper");
var prevImage = currentImage.previousElementSibling;
var nextImage = currentImage.nextElementSibling;
currentImage.classList.add('active');

console.log(prevImage.classList);

// currentImage.classList.remove('active');
// console.log(currentImage.classList);




//voegt event keydown toe aan het hele document en maakt functie intern aan.
document.addEventListener("keyup", function(event) {
    if(event.keyCode == 37) {
        console.log("Left was pressed");
       	keyPressLeft();
       	document.querySelector('.active').classList.remove('active');
       	prevImage.classList.add('active');
    }
    else if(event.keyCode == 39) {
       console.log("Right was pressed");
       keyPressRight();
       document.querySelector('.active').classList.remove('active');
       nextImage.classList.add('active');
    }
});

//hier gebeurd iets als links wordt ingedrukt
function keyPressLeft() {
	console.log("leftpress function");
}

//hier gebeurd iets als rechts wordt ingedrukt
function keyPressRight() {
	console.log("rightpress function");
}