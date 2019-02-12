/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

function functionButton() {  

var lijst = document.querySelector("li.godfathermovie");

var cln = lijst.cloneNode(true);

var nieuwelijst = document.getElementById("savedlist").appendChild(cln);
	}

var el = document.querySelector("button");
el.addEventListener("click", functionButton);