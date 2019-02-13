/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//selecteert alle buttons
var buttonAdd = document.querySelectorAll("button");

//loop door alle buttons en voegt events toe
for (i= 0; i < buttonAdd.length; i++) {
	
	buttonAdd[i].addEventListener("click", ButtonAddMovie);
}

//Functie die een eleemnt (movie) cloned naar de nieuwe lijst
function ButtonAddMovie() {  

var lijst = this.parentElement;
var cln = lijst.cloneNode(true);
var nieuwelijst = document.getElementById("savedlist").appendChild(cln);
this.innerHTML = "Movie saved";

}