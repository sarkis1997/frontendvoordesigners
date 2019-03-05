/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
// KeyboardEvent()

var sliderList = document.getElementById("image-slider");
var allListImages = document.getElementById("image-slider").querySelectorAll("li");
var sliderContainer = document.getElementById("image-slider-wrapper");

//hoe currentimage selecteren?
var currentImage = document.getElementById("image-slider").getElementsByTagName("li");
console.log(currentImage);


/*onderstaande is nog in test*/
for ( var i = 0; allListImages < allListImages.length; i++) {

    allImages[i].addClass("testclass");
      
    };
/*test stopt hier*/


//voegt event keydown toe aan het hele document en maakt functie intern aan.
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 37) {
        console.log("Left was pressed");
       	keyPressLeft();
    }
    else if(event.keyCode == 39) {
       console.log("Right was pressed");
       keyPressRight();
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