/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

function functionButton() {  
	
var lijst = this.parentElement;
var cln = lijst.cloneNode(true);
var nieuwelijst = document.getElementById("savedlist").appendChild(cln);

}

var buttonclick = document.querySelectorAll("button");
// var buttonclick = document.getElementsByTagName("button");

for (i= 0; i < buttonclick.length; i++) {
	
	buttonclick[i].addEventListener("click", functionButton);
}
