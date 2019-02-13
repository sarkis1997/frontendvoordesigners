/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

function ButtonAddMovie() {  

var lijst = this.parentElement;
var cln = lijst.cloneNode(true);
var nieuwelijst = document.getElementById("savedlist").appendChild(cln);

}

var buttonAdd = document.querySelectorAll("button");
// var buttonclick = document.getElementsByTagName("button");

for (i= 0; i < buttonAdd.length; i++) {
	
	buttonAdd[i].addEventListener("click", ButtonAddMovie);
}