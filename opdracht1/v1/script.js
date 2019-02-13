/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

function functionButton() {  

var lijst = buttonclick.parentElement;
var cln = lijst.cloneNode(true);
var nieuwelijst = document.getElementById("savedlist").appendChild(cln);

}

var buttonclick = document.querySelector("button");

buttonclick.addEventListener("click", functionButton);