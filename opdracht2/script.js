/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
// KeyboardEvent()

var addClassImage = document.querySelector("li:nth-of-type(3)").classList.add('active');

var currentImage = document.querySelector(".active");


var prevImage = currentImage.previousElementSibling;
var nextImage = currentImage.nextElementSibling;

console.log(prevImage.classList);

// currentImage.classList.remove('active');
// console.log(currentImage.classList);



//voegt event keydown toe aan het hele document en maakt functie intern aan.
document.addEventListener("keyup", function(event) {
	var currentImage = document.querySelector(".active");
	var prevImage = currentImage.previousElementSibling;
	var nextImage = currentImage.nextElementSibling;

    if (event.keyCode == 37) {
	        console.log("Left was pressed");
			document.querySelector('.active').classList.remove('active');
			 	
			 	// checkt eerst of of de vorige sibbling geen "anything" (kan van alles zijn) is, dan ...
		if (prevImage) {
			if (prevImage.tagName === "LI"){
	       		console.log('LI gevonden');
	       		prevImage.classList.add('active');

	     	} 
	     	 	// anders krijgt de laatste li active
	    } else {
				document.querySelector("li:last-of-type").classList.add('active');	  
	      	}
	   }

   else if (event.keyCode == 39) {
   console.log("Right was pressed");
   document.querySelector('.active').classList.remove('active');
	
	if (nextImage !== document.querySelector("anything")) {
		if (nextImage.tagName === "LI"){
       		console.log('LI gevonden');
       		nextImage.classList.add('active');
       		} 
		} else {
       		document.querySelector("li:last-of-type").classList.add('active');
       		}
	}
});
